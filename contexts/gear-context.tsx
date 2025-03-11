"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useAppMode } from "./app-mode-context"
import { DocumentsDB, GearDB } from "../utils/db-service"
import { fileToBase64, generateId, getFileType, getMimeType } from "../utils/file-utils"

// Define types
import { Document as CustomDocument, GearItem } from "../utils/types"
export type Gear = GearItem & {
  firstImageUrl?: string | ArrayBuffer | undefined // URL to the first image, if any
}
type GearContextType = {
  gear: Gear[]
  categories: string[]
  isLoading: boolean
  error: string | null
  addGear: (gear: Omit<Gear, "id" | "dateAdded" | "dateModified">) => Promise<Gear>
  updateGear: (id: string, updates: Partial<Gear>) => Promise<Gear>
  deleteGear: (id: string) => Promise<void>
  copyGear: (id: string) => Promise<Gear>
  uploadFile: (gearId: string, file: File) => Promise<void>
  getFilesForGear: (gearId: string) => Promise<CustomDocument[]>
  getGearByCategory: (category: string) => Promise<Gear[]>
  refreshGear: () => Promise<void>
}

const GearContext = createContext<GearContextType | null>(null)

export const useGear = () => {
  const context = useContext(GearContext)
  if (!context) {
    throw new Error("useGear must be used within a GearProvider")
  }
  return context
}

export const GearProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gear, setGear] = useState<Gear[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { isTestDrive } = useAppMode()

  // Load initial data from IndexedDB
  const loadGear = useCallback(async () => {
    try {
      setIsLoading(true)
      const allGear = await GearDB.getAll(isTestDrive)

      // Update first image URLs
      const gearWithImages: Gear[] = await Promise.all(
        allGear.map(async (item) => {
          const files = await DocumentsDB.getForItem(item.id, "gear", isTestDrive)
          const firstImage = files.find((file) => file.type === "image")
          const firstImageUrl = firstImage ? (firstImage.data as string) : undefined // Ensure firstImageUrl is a string
          return {
            ...item,
            firstImageUrl: firstImage ? firstImage.data : undefined,
          }
        })
      )

      setGear(gearWithImages)

      // Extract unique categories
      const uniqueCategories = Array.from(new Set(allGear.map((item) => item.category))).filter(Boolean)

      setCategories(uniqueCategories as string[])
      setError(null)
    } catch (err) {
      console.error("Error loading gear:", err)
      setError("Failed to load gear data")
    } finally {
      setIsLoading(false)
    }
  }, [isTestDrive])

  // Initialize data on component mount and when test drive mode changes
  useEffect(() => {
    loadGear()
  }, [loadGear])

  // Add new gear
  const addGear = async (gearData: Omit<Gear, "id" | "dateAdded" | "dateModified">): Promise<Gear> => {
    const timestamp = Date.now()
    const newGear: Gear = {
      ...gearData,
      id: generateId(),
      dateAdded: timestamp,
      dateModified: timestamp,
    }

    try {
      await GearDB.save(newGear, isTestDrive)
      await loadGear() // Refresh the list
      return newGear
    } catch (err) {
      console.error("Error adding gear:", err)
      setError("Failed to add gear")
      throw err
    }
  }

  // Update existing gear
  const updateGear = async (id: string, updates: Partial<Gear>): Promise<Gear> => {
    try {
      const currentGear = await GearDB.getById(id, isTestDrive)
      if (!currentGear) {
        throw new Error(`Gear with ID ${id} not found`)
      }

      const updatedGear: Gear = {
        ...currentGear,
        ...updates,
        dateModified: Date.now(),
      }

      await GearDB.save(updatedGear, isTestDrive)
      await loadGear() // Refresh the list
      return updatedGear
    } catch (err) {
      console.error("Error updating gear:", err)
      setError("Failed to update gear")
      throw err
    }
  }

  // Delete gear
  const deleteGear = async (id: string): Promise<void> => {
    try {
      // First delete associated files
      await DocumentsDB.deleteForItem(id, "gear", isTestDrive)
      // Then delete the gear item
      await GearDB.delete(id, isTestDrive)
      await loadGear() // Refresh the list
    } catch (err) {
      console.error("Error deleting gear:", err)
      setError("Failed to delete gear")
      throw err
    }
  }

  // Copy gear
  const copyGear = async (id: string): Promise<Gear> => {
    try {
      const gearToCopy = await GearDB.getById(id, isTestDrive)
      if (!gearToCopy) {
        throw new Error(`Gear with ID ${id} not found`)
      }

      const timestamp = Date.now()
      const copiedGear: Gear = {
        ...gearToCopy,
        id: generateId(),
        name: `${gearToCopy.name} (Copy)`,
        dateAdded: timestamp,
        dateModified: timestamp,
      }

      await GearDB.save(copiedGear, isTestDrive)

      // Copy associated files
      const files = await DocumentsDB.getForItem(id, "gear", isTestDrive)
      for (const file of files) {
        await DocumentsDB.save(
          {
            ...file,
            id: generateId(),
            parentId: copiedGear.id,
            dateAdded: timestamp,
          },
          isTestDrive
        )
      }

      await loadGear() // Refresh the list
      return copiedGear
    } catch (err) {
      console.error("Error copying gear:", err)
      setError("Failed to copy gear")
      throw err
    }
  }

  // Upload file for gear
  const uploadFile = async (gearId: string, file: File): Promise<void> => {
    try {
      const gear = await GearDB.getById(gearId, isTestDrive)
      if (!gear) {
        throw new Error(`Gear with ID ${gearId} not found`)
      }

      const base64Data = await fileToBase64(file)
      const fileType = getFileType(file.name)
      const contentType = getMimeType(file.name)

      const document: CustomDocument = {
        id: generateId(),
        parentId: gearId,
        parentType: "GEAR", // Use proper enum value from types
        type: fileType as "image" | "pdf" | "txt" | "unknown",
        name: file.name,
        data: base64Data,
        contentType,
        dateAdded: Date.now(),
        dateModified: Date.now(),
      }

      await DocumentsDB.save(document, isTestDrive)

      // If this is an image and the gear doesn't have a first image yet, update it
      if (fileType === "image" && !gear.firstImageUrl) {
        await updateGear(gearId, { firstImageUrl: base64Data })
      } else {
        await loadGear() // Refresh the list
      }
    } catch (err) {
      console.error("Error uploading file for gear:", err)
      setError("Failed to upload file")
      throw err
    }
  }

  // Get files for gear
  const getFilesForGear = async (gearId: string): Promise<CustomDocument[]> => {
    try {
      return await DocumentsDB.getForItem(gearId, "gear", isTestDrive)
    } catch (err) {
      console.error("Error getting files for gear:", err)
      setError("Failed to get files")
      throw err
    }
  }

  // Get gear by category
  const getGearByCategory = async (category: string): Promise<Gear[]> => {
    try {
      if (category === "all") {
        return await GearDB.getAll(isTestDrive)
      }
      return await GearDB.getByCategory(category, isTestDrive)
    } catch (err) {
      console.error("Error getting gear by category:", err)
      setError("Failed to filter gear by category")
      throw err
    }
  }

  // Refresh gear data
  const refreshGear = async (): Promise<void> => {
    await loadGear()
  }

  const value = {
    gear,
    categories,
    isLoading,
    error,
    addGear,
    updateGear,
    deleteGear,
    copyGear,
    uploadFile,
    getFilesForGear,
    getGearByCategory,
    refreshGear,
  }

  return <GearContext.Provider value={value}>{children}</GearContext.Provider>
}
