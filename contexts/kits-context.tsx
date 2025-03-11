"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { DocumentsDB, KitsDB } from "../utils/db-service"
import { fileToBase64, generateId, getFileType, getMimeType } from "../utils/file-utils"
import type { Document } from "../utils/types" // Updated import

// Define types
export type KitItem = {
  gearId: string
  quantity: number
}

export type Kit = {
  id: string
  name: string
  description?: string
  gearIds: string[]
  category?: string
  firstImageUrl?: string
  images?: { url: string; alt: string }[]
  dateAdded: number
  dateModified: number
}

type KitsContextType = {
  kits: Kit[]
  isLoading: boolean
  error: string | null
  addKit: (kit: Omit<Kit, "id" | "dateAdded" | "dateModified" | "gearIds"> & { gearIds?: string[] }) => Promise<Kit>
  updateKit: (id: string, updates: Partial<Kit>) => Promise<Kit>
  deleteKit: (id: string) => Promise<void>
  copyKit: (id: string) => Promise<Kit>
  uploadFile: (kitId: string, file: File) => Promise<void>
  getFilesForKit: (kitId: string) => Promise<Document[]>
  refreshKits: () => Promise<void>
}

const KitsContext = createContext<KitsContextType | null>(null)

export const useKits = () => {
  const context = useContext(KitsContext)
  if (!context) {
    throw new Error("useKits must be used within a KitsProvider")
  }
  return context
}

export const KitsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [kits, setKits] = useState<Kit[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load initial data from IndexedDB. We map any existing kit so that:
  // • A missing gearIds property is preserved (or replaced by an empty array)
  // • The first image (if found) is set into both firstImageUrl and images (for UI use)
  const loadKits = useCallback(async () => {
    try {
      setIsLoading(true)
      const allKits = await KitsDB.getAll()

      const kitsWithImages = await Promise.all(
        allKits.map(async (item: Kit) => {
          const files = await DocumentsDB.getForItem(item.id, "kit")
          const firstImage = files.find((file) => file.type === "image")
          return {
            ...item,
            gearIds: item.gearIds ?? [],
            firstImageUrl: firstImage ? (typeof firstImage.data === "string" ? firstImage.data : "") : undefined,
            images: firstImage
              ? [
                  {
                    url: typeof firstImage.data === "string" ? firstImage.data : "",
                    alt: item.name,
                  },
                ]
              : [],
          }
        })
      )

      setKits(kitsWithImages)
      setError(null)
    } catch (err) {
      console.error("Error loading kits:", err)
      setError("Failed to load kits data")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadKits()
  }, [loadKits])

  // Add new kit
  const addKit = async (
    kitData: Omit<Kit, "id" | "dateAdded" | "dateModified" | "gearIds"> & { gearIds?: string[] }
  ): Promise<Kit> => {
    const timestamp = Date.now()
    const newKit: Kit = {
      ...kitData,
      gearIds: kitData.gearIds ?? [],
      id: generateId(),
      dateAdded: timestamp,
      dateModified: timestamp,
    }

    try {
      await KitsDB.save(newKit)
      await loadKits()
      return newKit
    } catch (err) {
      console.error("Error adding kit:", err)
      setError("Failed to add kit")
      throw err
    }
  }

  // Update existing kit
  const updateKit = async (id: string, updates: Partial<Kit>): Promise<Kit> => {
    try {
      const currentKit = (await KitsDB.getById(id)) as Kit
      if (!currentKit) {
        throw new Error(`Kit with ID ${id} not found`)
      }
      const updatedKit: Kit = {
        ...currentKit,
        ...updates,
        gearIds: currentKit.gearIds || [],
        dateModified: Date.now(),
      }
      await KitsDB.save(updatedKit)
      await loadKits()
      return updatedKit
    } catch (err) {
      console.error("Error updating kit:", err)
      setError("Failed to update kit")
      throw err
    }
  }

  // Delete kit
  const deleteKit = async (id: string): Promise<void> => {
    try {
      await DocumentsDB.deleteForItem(id, "kit")
      await KitsDB.delete(id)
      await loadKits()
    } catch (err) {
      console.error("Error deleting kit:", err)
      setError("Failed to delete kit")
      throw err
    }
  }

  // Copy kit
  const copyKit = async (id: string): Promise<Kit> => {
    try {
      const kitToCopy = (await KitsDB.getById(id)) as Kit
      if (!kitToCopy) {
        throw new Error(`Kit with ID ${id} not found`)
      }
      const timestamp = Date.now()
      const copiedKit: Kit = {
        ...kitToCopy,
        id: generateId(),
        name: `${kitToCopy.name} (Copy)`,
        dateAdded: timestamp,
        dateModified: timestamp,
        gearIds: kitToCopy.gearIds || [],
      }

      await KitsDB.save(copiedKit)

      // Copy associated files
      const files = await DocumentsDB.getForItem(id, "kit")
      for (const file of files) {
        await DocumentsDB.save({
          ...file,
          id: generateId(),
          parentId: copiedKit.id,
          dateAdded: timestamp,
          dateModified: timestamp,
        })
      }

      await loadKits()
      return copiedKit
    } catch (err) {
      console.error("Error copying kit:", err)
      setError("Failed to copy kit")
      throw err
    }
  }

  // Upload file for kit
  const uploadFile = async (kitId: string, file: File): Promise<void> => {
    try {
      const kit = (await KitsDB.getById(kitId)) as Kit
      if (!kit) {
        throw new Error(`Kit with ID ${kitId} not found`)
      }
      const base64Data = await fileToBase64(file)
      const fileType = getFileType(file.name)
      const contentType = getMimeType(file.name)

      const documentData: Document = {
        id: generateId(),
        parentId: kitId,
        // Use "KITS" so it matches the Document type union.
        parentType: "KITS",
        type: fileType,
        name: file.name,
        data: base64Data,
        contentType,
        dateAdded: Date.now(),
        dateModified: Date.now(),
      }

      await DocumentsDB.save(documentData)

      // Since our Kit type has a firstImageUrl property, we update it if needed.
      if (fileType === "image" && !kit.firstImageUrl) {
        await updateKit(kitId, { firstImageUrl: base64Data as string })
      } else {
        await loadKits()
      }
    } catch (err) {
      console.error("Error uploading file for kit:", err)
      setError("Failed to upload file")
      throw err
    }
  }

  // Get files for kit
  const getFilesForKit = async (kitId: string): Promise<Document[]> => {
    try {
      return await DocumentsDB.getForItem(kitId, "kit")
    } catch (err) {
      console.error("Error getting files for kit:", err)
      setError("Failed to get files")
      throw err
    }
  }

  const refreshKits = async (): Promise<void> => {
    await loadKits()
  }

  const value = {
    kits,
    isLoading,
    error,
    addKit,
    updateKit,
    deleteKit,
    copyKit,
    uploadFile,
    getFilesForKit,
    refreshKits,
  }

  return <KitsContext.Provider value={value}>{children}</KitsContext.Provider>
}
