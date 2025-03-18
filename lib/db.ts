export interface PackList {
  id: string
  name: string
  description: string
  items: number
  totalWeight: number
}

export interface GearItem {
  id: string
  name: string
  brand: string
  category: string
  weight: number // weight in pounds
  image: string
}
export interface TripPlan {
  id: string
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  packListId: string
  notes?: string
}

export interface UserProfile {
  id: string
  name: string
  preferences: {
    weightUnit: "lb" | "kg" | "oz"
    defaultPackList?: string
  }
}

export interface PackListItem {
  id: string
  packListId: string
  gearItemId: string
  quantity: number
  isChecked: boolean
  notes?: string
}

const DB_NAME = "myLightPackDB"
const DB_VERSION = 1

// New IndexedDB database for real users
const REAL_DB_NAME = "myLightPackRealDB"
const REAL_DB_VERSION = 1

// Define database schema and migrations
const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject("IndexedDB is not supported in this browser")
      return
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = (event) => {
      reject("Database error: " + (event.target as IDBOpenDBRequest).error)
    }

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      resolve(db)
    }

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result

      // Create object stores
      if (!db.objectStoreNames.contains("gearItems")) {
        const gearStore = db.createObjectStore("gearItems", { keyPath: "id" })
        gearStore.createIndex("category", "category", { unique: false })
        gearStore.createIndex("brand", "brand", { unique: false })
      }

      if (!db.objectStoreNames.contains("packLists")) {
        // Comment out unused variable warning
        // const packListStore = db.createObjectStore("packLists", { keyPath: "id" });
        db.createObjectStore("packLists", { keyPath: "id" })
      }

      if (!db.objectStoreNames.contains("packListItems")) {
        const packListItemsStore = db.createObjectStore("packListItems", {
          keyPath: "id",
        })
        packListItemsStore.createIndex("packListId", "packListId", {
          unique: false,
        })
        packListItemsStore.createIndex("gearItemId", "gearItemId", {
          unique: false,
        })
      }

      if (!db.objectStoreNames.contains("tripPlans")) {
        const tripPlansStore = db.createObjectStore("tripPlans", {
          keyPath: "id",
        })
        tripPlansStore.createIndex("packListId", "packListId", {
          unique: false,
        })
      }

      if (!db.objectStoreNames.contains("userProfile")) {
        db.createObjectStore("userProfile", { keyPath: "id" })
      }
    }
  })
}

// Initialize real database
const initRealDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject("IndexedDB is not supported in this browser")
      return
    }

    const request = indexedDB.open(REAL_DB_NAME, REAL_DB_VERSION)

    request.onerror = (event) => {
      reject("Database error: " + (event.target as IDBOpenDBRequest).error)
    }

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      resolve(db)
    }

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result

      // Create object stores for real users
      if (!db.objectStoreNames.contains("userProfile")) {
        db.createObjectStore("userProfile", { keyPath: "id" })
      }

      if (!db.objectStoreNames.contains("gearItems")) {
        const gearStore = db.createObjectStore("gearItems", { keyPath: "id" })
        gearStore.createIndex("category", "category", { unique: false })
        gearStore.createIndex("brand", "brand", { unique: false })
      }

      if (!db.objectStoreNames.contains("packLists")) {
        const packListStore = db.createObjectStore("packLists", {
          keyPath: "id",
        })
      }

      if (!db.objectStoreNames.contains("packListItems")) {
        const packListItemsStore = db.createObjectStore("packListItems", {
          keyPath: "id",
        })
        packListItemsStore.createIndex("packListId", "packListId", {
          unique: false,
        })
        packListItemsStore.createIndex("gearItemId", "gearItemId", {
          unique: false,
        })
      }

      if (!db.objectStoreNames.contains("tripPlans")) {
        const tripPlansStore = db.createObjectStore("tripPlans", {
          keyPath: "id",
        })
        tripPlansStore.createIndex("packListId", "packListId", {
          unique: false,
        })
      }
    }
  })
}

// Generic CRUD operations for IndexedDB
export const dbOperations = {
  // Get the database instance based on user status
  getDB: async (isRealUser: boolean = false): Promise<IDBDatabase> => {
    if (isRealUser) {
      return await initRealDB()
    }
    return await initDB()
  },

  // Generic add item operation
  addItem: async <T>(storeName: string, item: T, isRealUser: boolean = false): Promise<T> => {
    const db = await dbOperations.getDB(isRealUser)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite")
      const store = transaction.objectStore(storeName)
      const request = store.add(item)

      request.onsuccess = () => {
        resolve(item)
      }

      request.onerror = (event) => {
        reject("Error adding item: " + (event.target as IDBRequest).error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  },

  // Generic update item operation
  updateItem: async <T>(storeName: string, item: T, isRealUser: boolean = false): Promise<T> => {
    const db = await dbOperations.getDB(isRealUser)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite")
      const store = transaction.objectStore(storeName)
      const request = store.put(item)

      request.onsuccess = () => {
        resolve(item)
      }

      request.onerror = (event) => {
        reject("Error updating item: " + (event.target as IDBRequest).error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  },

  // Generic delete item operation
  deleteItem: async (storeName: string, id: string, isRealUser: boolean = false): Promise<void> => {
    const db = await dbOperations.getDB(isRealUser)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite")
      const store = transaction.objectStore(storeName)
      const request = store.delete(id)

      request.onsuccess = () => {
        resolve()
      }

      request.onerror = (event) => {
        reject("Error deleting item: " + (event.target as IDBRequest).error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  },

  // Generic get item by ID operation
  getItem: async <T>(storeName: string, id: string, isRealUser: boolean = false): Promise<T | null> => {
    const db = await dbOperations.getDB(isRealUser)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly")
      const store = transaction.objectStore(storeName)
      const request = store.get(id)

      request.onsuccess = () => {
        resolve(request.result || null)
      }

      request.onerror = (event) => {
        reject("Error getting item: " + (event.target as IDBRequest).error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  },

  // Generic get all items operation
  getAllItems: async <T>(storeName: string, isRealUser: boolean = false): Promise<T[]> => {
    const db = await dbOperations.getDB(isRealUser)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly")
      const store = transaction.objectStore(storeName)
      const request = store.getAll()

      request.onsuccess = () => {
        resolve(request.result || [])
      }

      request.onerror = (event) => {
        reject("Error getting all items: " + (event.target as IDBRequest).error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  },

  // Generic get items by index
  getItemsByIndex: async <T>(
    storeName: string,
    indexName: string,
    value: string | number,
    isRealUser: boolean = false
  ): Promise<T[]> => {
    const db = await dbOperations.getDB(isRealUser)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly")
      const store = transaction.objectStore(storeName)
      const index = store.index(indexName)
      const request = index.getAll(value)

      request.onsuccess = () => {
        resolve(request.result || [])
      }

      request.onerror = (event) => {
        reject("Error getting items by index: " + (event.target as IDBRequest).error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  },

  /**
   * Syncs data from IndexedDB to Upstash Redis.
   * This function will be called periodically or based on user actions.
   */
  syncToRedis: async (isRealUser: boolean = false) => {
    const db = await dbOperations.getDB(isRealUser)
    const gearItems = await dbOperations.getAllItems<GearItem>("gearItems", isRealUser)
    const packLists = await dbOperations.getAllItems<PackList>("packLists", isRealUser)
    const tripPlans = await dbOperations.getAllItems<TripPlan>("tripPlans", isRealUser)

    // Store the data in Redis
    await redisClient.set("gearItems", JSON.stringify(gearItems))
    await redisClient.set("packLists", JSON.stringify(packLists))
    await redisClient.set("tripPlans", JSON.stringify(tripPlans))

    console.log("Data synced to Upstash Redis.")
  },
}

// Upstash Redis client configuration
import { Redis } from "@upstash/redis"

// Create a Redis client for Upstash
const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL, // replace with your Upstash Redis URL
  token: process.env.UPSTASH_REDIS_REST_TOKEN, // replace with your Upstash Redis token
})

export default redisClient

// Initialize the database with sample data
export const initializeDatabase = async (forceReset = false, isRealUser: boolean = false): Promise<void> => {
  try {
    // Comment out unused variable warning
    // const db = await dbOperations.getDB(isRealUser);

    if (forceReset) {
      // Clear existing data if forceReset is true
      const db = await dbOperations.getDB(isRealUser)
      const stores = ["gearItems", "packLists", "packListItems", "tripPlans", "userProfile"]
      stores.forEach((store) => {
        const transaction = db.transaction(store, "readwrite")
        const objectStore = transaction.objectStore(store)
        objectStore.clear()
      })
    }

    // Check if we have user profile, if not create a default one
    const userProfiles = await dbOperations.getAllItems<UserProfile>("userProfile", isRealUser)
    if (userProfiles.length === 0) {
      const defaultProfile: UserProfile = {
        id: "1",
        name: "Default User",
        preferences: {
          weightUnit: "lb",
        },
      }
      await dbOperations.addItem("userProfile", defaultProfile, isRealUser)
    }

    // Import gear items from our static data if store is empty
    const existingGear = await dbOperations.getAllItems<GearItem>("gearItems", isRealUser)
    if (existingGear.length === 0) {
      // Import from our static data
      const { recommendedGear, popularGear } = await import("../data/gear-items")
      const allGear = [...recommendedGear, ...popularGear]

      for (const gear of allGear) {
        await dbOperations.addItem("gearItems", gear, isRealUser)
      }
    }

    // Import pack lists from our static data if store is empty
    const existingPackLists = await dbOperations.getAllItems<PackList>("packLists", isRealUser)
    if (existingPackLists.length === 0) {
      // Import from our static data
      const { packLists } = await import("../data/pack-lists")

      for (const packList of packLists) {
        await dbOperations.addItem("packLists", packList, isRealUser)
      }
    }

    // db.close()
  } catch (error) {
    console.error("Error initializing database:", error)
  }
}

// Specialized functions for specific operations
export const gearOperations = {
  addGearItem: async (item: GearItem, isRealUser: boolean = false): Promise<GearItem> => {
    return await dbOperations.addItem<GearItem>("gearItems", item, isRealUser)
  },

  updateGearItem: async (item: GearItem, isRealUser: boolean = false): Promise<GearItem> => {
    return await dbOperations.updateItem<GearItem>("gearItems", item, isRealUser)
  },

  deleteGearItem: async (id: string, isRealUser: boolean = false): Promise<void> => {
    return await dbOperations.deleteItem("gearItems", id, isRealUser)
  },

  getGearItem: async (id: string, isRealUser: boolean = false): Promise<GearItem | null> => {
    return await dbOperations.getItem<GearItem>("gearItems", id, isRealUser)
  },

  getAllGearItems: async (isRealUser: boolean = false): Promise<GearItem[]> => {
    return await dbOperations.getAllItems<GearItem>("gearItems", isRealUser)
  },

  getGearItemsByCategory: async (category: string, isRealUser: boolean = false): Promise<GearItem[]> => {
    return await dbOperations.getItemsByIndex<GearItem>("gearItems", "category", category, isRealUser)
  },
}

export const packListOperations = {
  addPackList: async (packList: PackList, isRealUser: boolean = false): Promise<PackList> => {
    return await dbOperations.addItem<PackList>("packLists", packList, isRealUser)
  },

  updatePackList: async (packList: PackList, isRealUser: boolean = false): Promise<PackList> => {
    return await dbOperations.updateItem<PackList>("packLists", packList, isRealUser)
  },

  deletePackList: async (id: string, isRealUser: boolean = false): Promise<void> => {
    // First delete all items in this pack list
    const items = await dbOperations.getItemsByIndex<PackListItem>("packListItems", "packListId", id, isRealUser)
    for (const item of items) {
      await dbOperations.deleteItem("packListItems", item.id, isRealUser)
    }

    // Then delete the pack list itself
    return await dbOperations.deleteItem("packLists", id, isRealUser)
  },

  getPackList: async (id: string, isRealUser: boolean = false): Promise<PackList | null> => {
    return await dbOperations.getItem<PackList>("packLists", id, isRealUser)
  },

  getAllPackLists: async (isRealUser: boolean = false): Promise<PackList[]> => {
    return await dbOperations.getAllItems<PackList>("packLists", isRealUser)
  },

  // Get all items in a pack list with their gear details
  getPackListItems: async (
    packListId: string,
    isRealUser: boolean = false
  ): Promise<(PackListItem & { gear: GearItem | null })[]> => {
    const items = await dbOperations.getItemsByIndex<PackListItem>(
      "packListItems",
      "packListId",
      packListId,
      isRealUser
    )

    // For each item, get the associated gear information
    const itemsWithGear = await Promise.all(
      items.map(async (item) => {
        const gear = await dbOperations.getItem<GearItem>("gearItems", item.gearItemId, isRealUser)
        return { ...item, gear }
      })
    )

    return itemsWithGear
  },

  // Calculate the total weight of a pack list
  calculatePackWeight: async (packListId: string, isRealUser: boolean = false): Promise<number> => {
    const items = await packListOperations.getPackListItems(packListId, isRealUser)

    return items.reduce((total, item) => {
      if (item.gear) {
        return total + item.gear.weight * item.quantity
      }
      return total
    }, 0)
  },

  // Add an item to a pack list
  addItemToPackList: async (item: Omit<PackListItem, "id">, isRealUser: boolean = false): Promise<PackListItem> => {
    const newItem: PackListItem = {
      ...item,
      id: crypto.randomUUID(),
    }
    return await dbOperations.addItem<PackListItem>("packListItems", newItem, isRealUser)
  },

  // Update an item in a pack list
  updatePackListItem: async (item: PackListItem, isRealUser: boolean = false): Promise<PackListItem> => {
    return await dbOperations.updateItem<PackListItem>("packListItems", item, isRealUser)
  },

  // Remove an item from a pack list
  removeItemFromPackList: async (id: string, isRealUser: boolean = false): Promise<void> => {
    return await dbOperations.deleteItem("packListItems", id, isRealUser)
  },
}

export const tripOperations = {
  /**
   * Adds a new trip plan to the database.
   * @param trip - The trip plan to be added, excluding the ID.
   * @returns A promise that resolves to the added trip plan, including the generated ID.
   */
  addTripPlan: async (trip: Omit<TripPlan, "id">, isRealUser: boolean = false): Promise<TripPlan> => {
    const newTrip: TripPlan = {
      ...trip,
      id: crypto.randomUUID(),
    }
    return await dbOperations.addItem<TripPlan>("tripPlans", newTrip, isRealUser)
  },

  /**
   * Updates an existing trip plan in the database.
   * @param trip - The trip plan to be updated, including the ID.
   * @returns A promise that resolves to the updated trip plan.
   */
  updateTripPlan: async (trip: TripPlan, isRealUser: boolean = false): Promise<TripPlan> => {
    return await dbOperations.updateItem<TripPlan>("tripPlans", trip, isRealUser)
  },

  /**
   * Deletes a trip plan from the database.
   * @param id - The ID of the trip plan to be deleted.
   * @returns A promise that resolves when the trip plan has been deleted.
   */
  deleteTripPlan: async (id: string, isRealUser: boolean = false): Promise<void> => {
    return await dbOperations.deleteItem("tripPlans", id, isRealUser)
  },

  /**
   * Retrieves a trip plan by its ID.
   * @param id - The ID of the trip plan to retrieve.
   * @returns A promise that resolves to the trip plan, or null if not found.
   */
  getTripPlan: async (id: string, isRealUser: boolean = false): Promise<TripPlan | null> => {
    return await dbOperations.getItem<TripPlan>("tripPlans", id, isRealUser)
  },

  /**
   * Retrieves all trip plans from the database.
   * @returns A promise that resolves to an array of all trip plans.
   */
  getAllTripPlans: async (isRealUser: boolean = false): Promise<TripPlan[]> => {
    return await dbOperations.getAllItems<TripPlan>("tripPlans", isRealUser)
  },

  /**
   * Retrieves a trip plan along with its associated pack list.
   * @param id - The ID of the trip plan to retrieve.
   * @returns A promise that resolves to an object containing the trip plan and its pack list, or null if not found.
   */
  getTripWithPackList: async (
    id: string,
    isRealUser: boolean = false
  ): Promise<{ trip: TripPlan | null; packList: PackList | null }> => {
    const trip = await dbOperations.getItem<TripPlan>("tripPlans", id, isRealUser)

    let packList = null
    if (trip && trip.packListId) {
      packList = await dbOperations.getItem<PackList>("packLists", trip.packListId, isRealUser)
    }

    return { trip, packList }
  },
}

export const userProfileOperations = {
  getUserProfile: async (isRealUser: boolean = false): Promise<UserProfile | null> => {
    const profiles = await dbOperations.getAllItems<UserProfile>("userProfile", isRealUser)
    return profiles.length > 0 ? profiles[0] ?? null : null
  },

  updateUserProfile: async (profile: UserProfile, isRealUser: boolean = false): Promise<UserProfile> => {
    return await dbOperations.updateItem<UserProfile>("userProfile", profile, isRealUser)
  },
}
