"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { DocumentsDB, ListsDB } from "../utils/db-service"
import { fileToBase64, generateId, getFileType, getMimeType } from "../utils/file-utils"
import type { Document } from "../utils/types"
import { ListItem } from "../utils/types"

// Define types
export type ListGearItem = {
  gearId: string
  quantity: number
  packed?: boolean
}

export type List = {
  id: string
  name: string
  description?: string
  items: ListGearItem[]
  firstImageUrl?: string | undefined
  dateAdded: number
  dateModified: number
}

type ListsContextType = {
  lists: List[]
  isLoading: boolean
  error: string | null
  addList: (list: Omit<List, "id" | "dateAdded" | "dateModified">) => Promise<List>
  updateList: (id: string, updates: Partial<List>) => Promise<List>
  deleteList: (id: string) => Promise<void>
  copyList: (id: string) => Promise<List>
  uploadFile: (listId: string, file: File) => Promise<void>
  getFilesForList: (listId: string) => Promise<Document[]>
  refreshLists: () => Promise<void>
}

const ListsContext = createContext<ListsContextType | null>(null)

export const useLists = () => {
  const context = useContext(ListsContext)
  if (!context) {
    throw new Error("useLists must be used within a ListsProvider")
  }
  return context
}

export const ListsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lists, setLists] = useState<List[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load initial data from IndexedDB
  const loadLists = useCallback(async () => {
    try {
      setIsLoading(true)
      const allLists = await ListsDB.getAll()

      // Transform ListItem[] to List[] by adding the items property
      const listsWithImages = await Promise.all(
        allLists.map(async (listItem: ListItem) => {
          const files = await DocumentsDB.getForItem(listItem.id, "list")
          const firstImage = files.find((file) => file.type === "image")
          return {
            ...listItem,
            items: [], // Initialize items as empty array for copied lists
            firstImageUrl: firstImage ? (typeof firstImage.data === "string" ? firstImage.data : undefined) : undefined,
          } as List
        })
      )

      setLists(listsWithImages)
      setError(null)
    } catch (err) {
      console.error("Error loading lists:", err)
      setError("Failed to load lists data")
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Initialize data on component mount
  useEffect(() => {
    loadLists()
  }, [loadLists])

  // Add new list
  const addList = async (
    listData: Partial<ListItem> & Omit<List, "id" | "dateAdded" | "dateModified">
  ): Promise<List> => {
    const timestamp = Date.now()
    // Create newList as ListItem for database save
    const newList: ListItem = {
      id: generateId(),
      name: listData.name,
      dateAdded: timestamp,
      dateModified: timestamp,
      description: listData.description, // Optionally copy description
      kitIds: listData.kitIds || [], // Initialize kitIds if not provided
      gearIds: listData.gearIds || [], // Initialize gearIds if not provided
      notes: listData.notes, // Optionally copy notes
      isPublic: listData.isPublic, // Optionally copy isPublic
      season: listData.season, // Optionally copy season
      type: listData.type, // Optionally copy type
      firstImageUrl: listData.firstImageUrl, // Optionally copy firstImageUrl
    }

    try {
      await ListsDB.save(newList)
      await loadLists() // Refresh the list

      // Return the List type for context
      return {
        ...newList,
        items: [], // Initialize items as empty array
      } as List
    } catch (err) {
      console.error("Error adding list:", err)
      setError("Failed to add list")
      throw err
    }
  }

  // Update existing list
  const updateList = async (id: string, updates: Partial<List>): Promise<List> => {
    try {
      const currentList = await ListsDB.getById(id)
      if (!currentList) {
        throw new Error(`List with ID ${id} not found`)
      }

      // Fetch current list as ListItem from DB
      const currentListItem = await ListsDB.getById(id)
      if (!currentListItem) {
        throw new Error(`List with ID ${id} not found`)
      }

      // Create updatedListItem as ListItem for database save
      const updatedListItem: ListItem = {
        ...currentListItem,
        ...updates,
        dateModified: Date.now(),
      }

      await ListsDB.save(updatedListItem)
      await loadLists() // Refresh the list

      // Return the List type for context
      return {
        ...updatedListItem,
        items: [], // Initialize items as empty array for copied lists
      } as List
    } catch (err) {
      console.error("Error updating list:", err)
      setError("Failed to update list")
      throw err
    }
  }

  // Delete list
  const deleteList = async (id: string): Promise<void> => {
    try {
      // First delete associated files
      await DocumentsDB.deleteForItem(id, "list")
      // Then delete the list
      await ListsDB.delete(id)
      await loadLists() // Refresh the list
    } catch (err) {
      console.error("Error deleting list:", err)
      setError("Failed to delete list")
      throw err
    }
  }

  // Copy list
  const copyList = async (id: string): Promise<List> => {
    try {
      const listToCopy = await ListsDB.getById(id)
      if (!listToCopy) {
        throw new Error(`List with ID ${id} not found`)
      }

      const timestamp = Date.now()
      // Create copiedList as ListItem for database save
      const copiedList: ListItem = {
        id: generateId(),
        name: `${listToCopy.name} (Copy)`,
        dateAdded: timestamp,
        dateModified: timestamp,
        description: listToCopy.description, // Optionally copy description
        kitIds: listToCopy.kitIds, // Optionally copy kitIds if ListItem should have them
        gearIds: listToCopy.gearIds, // Optionally copy gearIds if ListItem should have them
        notes: listToCopy.notes, // Optionally copy notes
        isPublic: listToCopy.isPublic, // Optionally copy isPublic
        season: listToCopy.season, // Optionally copy season
        type: listToCopy.type, // Optionally copy type
        firstImageUrl: listToCopy.firstImageUrl, // Optionally copy firstImageUrl
      }

      await ListsDB.save(copiedList)

      // Copy associated files
      const files = await DocumentsDB.getForItem(id, "list")
      for (const file of files) {
        await DocumentsDB.save({
          ...file,
          id: generateId(),
          parentId: copiedList.id,
          dateAdded: timestamp,
          dateModified: Date.now(),
        })
      }

      await loadLists() // Refresh the list
      return {
        ...copiedList,
        items: [], // Initialize items as empty array for copied lists
      } as List
    } catch (err) {
      console.error("Error copying list:", err)
      setError("Failed to copy list")
      throw err
    }
  }

  // Upload file for list
  const uploadFile = async (listId: string, file: File): Promise<void> => {
    try {
      const list = await ListsDB.getById(listId)
      if (!list) {
        throw new Error(`List with ID ${listId} not found`)
      }

      const base64Data = await fileToBase64(file)
      const fileType = getFileType(file.name)
      const contentType = getMimeType(file.name)

      const documentData = {
        id: generateId(),
        parentId: listId,
        parentType: "LISTS" as const,
        type: fileType,
        name: file.name,
        data: base64Data,
        contentType,
        dateAdded: Date.now(),
        dateModified: Date.now(),
      }

      await DocumentsDB.save(documentData)

      // If this is an image and the list doesn't have a first image yet, update it
      if (fileType === "image" && !list.firstImageUrl) {
        await updateList(listId, { firstImageUrl: typeof base64Data === "string" ? base64Data : "" })
      } else {
        await loadLists() // Refresh the list
      }
    } catch (err) {
      console.error("Error uploading file for list:", err)
      setError("Failed to upload file")
      throw err
    }
  }

  // Get files for list
  const getFilesForList = async (listId: string): Promise<Document[]> => {
    try {
      return await DocumentsDB.getForItem(listId, "list")
    } catch (err) {
      console.error("Error getting files for list:", err)
      setError("Failed to get files")
      throw err
    }
  }

  // Refresh lists data
  const refreshLists = async (): Promise<void> => {
    await loadLists()
  }

  const value = {
    lists,
    isLoading,
    error,
    addList,
    updateList,
    deleteList,
    copyList,
    uploadFile,
    getFilesForList,
    refreshLists,
  }

  return <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
}
