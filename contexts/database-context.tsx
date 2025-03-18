"use client"

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import {
  GearItem,
  gearOperations,
  initializeDatabase,
  PackList,
  PackListItem,
  packListOperations,
  tripOperations,
  TripPlan,
  UserProfile,
  userProfileOperations,
} from "../lib/db"

// Interface for the context value
interface DatabaseContextValue {
  isLoading: boolean
  isInitialized: boolean
  error: string | null
  resetDatabase: () => Promise<void>
  // Gear operations
  gearItems: GearItem[]
  addGearItem: (item: Omit<GearItem, "id">) => Promise<GearItem>
  updateGearItem: (item: GearItem) => Promise<GearItem>
  deleteGearItem: (id: string) => Promise<void>
  getGearItemsByCategory: (category: string) => Promise<GearItem[]>
  refreshGearItems: () => Promise<void>
  // Pack list operations
  packLists: PackList[]
  addPackList: (packList: Omit<PackList, "id">) => Promise<PackList>
  updatePackList: (packList: PackList) => Promise<PackList>
  deletePackList: (id: string) => Promise<void>
  getPackListItems: (packListId: string) => Promise<(PackListItem & { gear: GearItem | null })[]>
  calculatePackWeight: (packListId: string) => Promise<number>
  addItemToPackList: (item: Omit<PackListItem, "id">) => Promise<PackListItem>
  updatePackListItem: (item: PackListItem) => Promise<PackListItem>
  removeItemFromPackList: (id: string) => Promise<void>
  refreshPackLists: () => Promise<void>
  // Trip operations
  tripPlans: TripPlan[]
  addTripPlan: (trip: Omit<TripPlan, "id">) => Promise<TripPlan>
  updateTripPlan: (trip: TripPlan) => Promise<TripPlan>
  deleteTripPlan: (id: string) => Promise<void>
  getTripWithPackList: (id: string) => Promise<{ trip: TripPlan | null; packList: PackList | null }>
  refreshTripPlans: () => Promise<void>
  // User profile operations
  userProfile: UserProfile | null
  updateUserProfile: (profile: UserProfile) => Promise<UserProfile>
  refreshUserProfile: () => Promise<void>
}

// Create the context with a default value
export const DatabaseContext = createContext<DatabaseContextValue | undefined>(undefined)

// Provider component
export function DatabaseProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [gearItems, setGearItems] = useState<GearItem[]>([])
  const [packLists, setPackLists] = useState<PackList[]>([])
  const [tripPlans, setTripPlans] = useState<TripPlan[]>([])
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  // Helper function to refresh all data
  const refreshData = async () => {
    await Promise.all([refreshGearItems(), refreshPackLists(), refreshTripPlans(), refreshUserProfile()])
  }

  // Initialize the database
  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true)
        // Only initialize the database if we're in the browser
        if (typeof window !== "undefined") {
          await initializeDatabase(true) // true to force reset on hard refresh
          await refreshData()
        }
        setIsInitialized(true)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to initialize database")
        console.error("Database initialization error:", err)
      } finally {
        setIsLoading(false)
      }
    }

    if (!isInitialized) {
      init()
    }
  }, [isInitialized])

  // Reset the database
  const resetDatabase = async () => {
    try {
      setIsLoading(true)
      await initializeDatabase(true) // true to force reset
      await refreshData()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reset database")
    } finally {
      setIsLoading(false)
    }
  }

  // Gear operations
  const refreshGearItems = async () => {
    try {
      const items = await gearOperations.getAllGearItems()
      setGearItems(items)
    } catch (err) {
      console.error("Error refreshing gear items:", err)
    }
  }

  const addGearItem = async (item: Omit<GearItem, "id">): Promise<GearItem> => {
    const newItem = {
      ...item,
      id: crypto.randomUUID(),
    } as GearItem

    const added = await gearOperations.addGearItem(newItem)
    await refreshGearItems()
    return added
  }

  const updateGearItem = async (item: GearItem): Promise<GearItem> => {
    const updated = await gearOperations.updateGearItem(item)
    await refreshGearItems()
    return updated
  }

  const deleteGearItem = async (id: string): Promise<void> => {
    await gearOperations.deleteGearItem(id)
    await refreshGearItems()
  }

  const getGearItemsByCategory = async (category: string): Promise<GearItem[]> => {
    return await gearOperations.getGearItemsByCategory(category)
  }

  // Pack list operations
  const refreshPackLists = async () => {
    try {
      const lists = await packListOperations.getAllPackLists()
      setPackLists(lists)
    } catch (err) {
      console.error("Error refreshing pack lists:", err)
    }
  }

  const addPackList = async (packList: Omit<PackList, "id">): Promise<PackList> => {
    const newPackList = {
      ...packList,
      id: crypto.randomUUID(),
    } as PackList

    const added = await packListOperations.addPackList(newPackList)
    await refreshPackLists()
    return added
  }

  const updatePackList = async (packList: PackList): Promise<PackList> => {
    const updated = await packListOperations.updatePackList(packList)
    await refreshPackLists()
    return updated
  }

  const deletePackList = async (id: string): Promise<void> => {
    await packListOperations.deletePackList(id)
    await refreshPackLists()
  }

  const getPackListItems = packListOperations.getPackListItems
  const calculatePackWeight = packListOperations.calculatePackWeight
  const addItemToPackList = packListOperations.addItemToPackList
  const updatePackListItem = packListOperations.updatePackListItem
  const removeItemFromPackList = packListOperations.removeItemFromPackList

  // Trip operations
  const refreshTripPlans = async () => {
    try {
      const trips = await tripOperations.getAllTripPlans()
      setTripPlans(trips)
    } catch (err) {
      console.error("Error refreshing trip plans:", err)
    }
  }

  const addTripPlan = async (trip: Omit<TripPlan, "id">): Promise<TripPlan> => {
    const added = await tripOperations.addTripPlan(trip)
    await refreshTripPlans()
    return added
  }

  const updateTripPlan = async (trip: TripPlan): Promise<TripPlan> => {
    const updated = await tripOperations.updateTripPlan(trip)
    await refreshTripPlans()
    return updated
  }

  const deleteTripPlan = async (id: string): Promise<void> => {
    await tripOperations.deleteTripPlan(id)
    await refreshTripPlans()
  }

  const getTripWithPackList = tripOperations.getTripWithPackList

  // User profile operations
  const refreshUserProfile = async () => {
    try {
      const profile = await userProfileOperations.getUserProfile()
      setUserProfile(profile)
    } catch (err) {
      console.error("Error refreshing user profile:", err)
    }
  }

  const updateUserProfileHandler = async (profile: UserProfile): Promise<UserProfile> => {
    const updated = await userProfileOperations.updateUserProfile(profile)
    await refreshUserProfile()
    return updated
  }

  // Context value
  const contextValue: DatabaseContextValue = {
    isLoading,
    isInitialized,
    error,
    resetDatabase,
    // Gear operations
    gearItems,
    addGearItem,
    updateGearItem,
    deleteGearItem,
    getGearItemsByCategory,
    refreshGearItems,
    // Pack list operations
    packLists,
    addPackList,
    updatePackList,
    deletePackList,
    getPackListItems,
    calculatePackWeight,
    addItemToPackList,
    updatePackListItem,
    removeItemFromPackList,
    refreshPackLists,
    // Trip operations
    tripPlans,
    addTripPlan,
    updateTripPlan,
    deleteTripPlan,
    getTripWithPackList,
    refreshTripPlans,
    // User profile operations
    userProfile,
    updateUserProfile: updateUserProfileHandler,
    refreshUserProfile,
  }

  return <DatabaseContext.Provider value={contextValue}>{children}</DatabaseContext.Provider>
}

// Custom hook to use the database context
export function useDatabase() {
  const context = useContext(DatabaseContext)

  if (context === undefined) {
    throw new Error("useDatabase must be used within a DatabaseProvider")
  }

  return context
}
