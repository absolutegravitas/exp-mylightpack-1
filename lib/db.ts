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

      if (!db.objectStoreNames.contains("userProfile")) {
        db.createObjectStore("userProfile", { keyPath: "id" })
      }
    }
  })
}

// Generic CRUD operations for IndexedDB
export const dbOperations = {
  // Get the database instance
  getDB: async (): Promise<IDBDatabase> => {
    try {
      return await initDB()
    } catch (error) {
      console.error("Failed to open database:", error)
      throw error
    }
  },

  // Generic add item operation
  addItem: async <T>(storeName: string, item: T): Promise<T> => {
    const db = await dbOperations.getDB()
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
  updateItem: async <T>(storeName: string, item: T): Promise<T> => {
    const db = await dbOperations.getDB()
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
  deleteItem: async (storeName: string, id: string): Promise<void> => {
    const db = await dbOperations.getDB()
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
  getItem: async <T>(storeName: string, id: string): Promise<T | null> => {
    const db = await dbOperations.getDB()
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
  getAllItems: async <T>(storeName: string): Promise<T[]> => {
    const db = await dbOperations.getDB()
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
  getItemsByIndex: async <T>(storeName: string, indexName: string, value: string | number): Promise<T[]> => {
    const db = await dbOperations.getDB()
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
}

// Initialize the database with sample data
export const initializeDatabase = async (forceReset = false): Promise<void> => {
  try {
    const db = await dbOperations.getDB()

    if (forceReset) {
      // Clear existing data if forceReset is true
      const stores = ["gearItems", "packLists", "packListItems", "tripPlans", "userProfile"]
      stores.forEach((store) => {
        const transaction = db.transaction(store, "readwrite")
        const objectStore = transaction.objectStore(store)
        objectStore.clear()
      })
    }

    // Check if we have user profile, if not create a default one
    const userProfiles = await dbOperations.getAllItems<UserProfile>("userProfile")
    if (userProfiles.length === 0) {
      const defaultProfile: UserProfile = {
        id: "1",
        name: "Default User",
        preferences: {
          weightUnit: "lb",
        },
      }
      await dbOperations.addItem("userProfile", defaultProfile)
    }

    // Import gear items from our static data if store is empty
    const existingGear = await dbOperations.getAllItems<GearItem>("gearItems")
    if (existingGear.length === 0) {
      // Import from our static data
      const { recommendedGear, popularGear } = await import("../data/gear-items")
      const allGear = [...recommendedGear, ...popularGear]

      for (const gear of allGear) {
        await dbOperations.addItem("gearItems", gear)
      }
    }

    // Import pack lists from our static data if store is empty
    const existingPackLists = await dbOperations.getAllItems<PackList>("packLists")
    if (existingPackLists.length === 0) {
      // Import from our static data
      const { packLists } = await import("../data/pack-lists")

      for (const packList of packLists) {
        await dbOperations.addItem("packLists", packList)
      }
    }

    db.close()
  } catch (error) {
    console.error("Error initializing database:", error)
  }
}

// Specialized functions for specific operations
export const gearOperations = {
  addGearItem: async (item: GearItem): Promise<GearItem> => {
    return await dbOperations.addItem<GearItem>("gearItems", item)
  },

  updateGearItem: async (item: GearItem): Promise<GearItem> => {
    return await dbOperations.updateItem<GearItem>("gearItems", item)
  },

  deleteGearItem: async (id: string): Promise<void> => {
    return await dbOperations.deleteItem("gearItems", id)
  },

  getGearItem: async (id: string): Promise<GearItem | null> => {
    return await dbOperations.getItem<GearItem>("gearItems", id)
  },

  getAllGearItems: async (): Promise<GearItem[]> => {
    return await dbOperations.getAllItems<GearItem>("gearItems")
  },

  getGearItemsByCategory: async (category: string): Promise<GearItem[]> => {
    return await dbOperations.getItemsByIndex<GearItem>("gearItems", "category", category)
  },
}

export const packListOperations = {
  addPackList: async (packList: PackList): Promise<PackList> => {
    return await dbOperations.addItem<PackList>("packLists", packList)
  },

  updatePackList: async (packList: PackList): Promise<PackList> => {
    return await dbOperations.updateItem<PackList>("packLists", packList)
  },

  deletePackList: async (id: string): Promise<void> => {
    // First delete all items in this pack list
    const items = await dbOperations.getItemsByIndex<PackListItem>("packListItems", "packListId", id)
    for (const item of items) {
      await dbOperations.deleteItem("packListItems", item.id)
    }

    // Then delete the pack list itself
    return await dbOperations.deleteItem("packLists", id)
  },

  getPackList: async (id: string): Promise<PackList | null> => {
    return await dbOperations.getItem<PackList>("packLists", id)
  },

  getAllPackLists: async (): Promise<PackList[]> => {
    return await dbOperations.getAllItems<PackList>("packLists")
  },

  // Get all items in a pack list with their gear details
  getPackListItems: async (packListId: string): Promise<(PackListItem & { gear: GearItem | null })[]> => {
    const items = await dbOperations.getItemsByIndex<PackListItem>("packListItems", "packListId", packListId)

    // For each item, get the associated gear information
    const itemsWithGear = await Promise.all(
      items.map(async (item) => {
        const gear = await dbOperations.getItem<GearItem>("gearItems", item.gearItemId)
        return { ...item, gear }
      })
    )

    return itemsWithGear
  },

  // Calculate the total weight of a pack list
  calculatePackWeight: async (packListId: string): Promise<number> => {
    const items = await packListOperations.getPackListItems(packListId)

    return items.reduce((total, item) => {
      if (item.gear) {
        return total + item.gear.weight * item.quantity
      }
      return total
    }, 0)
  },

  // Add an item to a pack list
  addItemToPackList: async (item: Omit<PackListItem, "id">): Promise<PackListItem> => {
    const newItem: PackListItem = {
      ...item,
      id: crypto.randomUUID(),
    }
    return await dbOperations.addItem<PackListItem>("packListItems", newItem)
  },

  // Update an item in a pack list
  updatePackListItem: async (item: PackListItem): Promise<PackListItem> => {
    return await dbOperations.updateItem<PackListItem>("packListItems", item)
  },

  // Remove an item from a pack list
  removeItemFromPackList: async (id: string): Promise<void> => {
    return await dbOperations.deleteItem("packListItems", id)
  },
}

export const tripOperations = {
  addTripPlan: async (trip: Omit<TripPlan, "id">): Promise<TripPlan> => {
    const newTrip: TripPlan = {
      ...trip,
      id: crypto.randomUUID(),
    }
    return await dbOperations.addItem<TripPlan>("tripPlans", newTrip)
  },

  updateTripPlan: async (trip: TripPlan): Promise<TripPlan> => {
    return await dbOperations.updateItem<TripPlan>("tripPlans", trip)
  },

  deleteTripPlan: async (id: string): Promise<void> => {
    return await dbOperations.deleteItem("tripPlans", id)
  },

  getTripPlan: async (id: string): Promise<TripPlan | null> => {
    return await dbOperations.getItem<TripPlan>("tripPlans", id)
  },

  getAllTripPlans: async (): Promise<TripPlan[]> => {
    return await dbOperations.getAllItems<TripPlan>("tripPlans")
  },

  // Get trip plan with its associated pack list
  getTripWithPackList: async (id: string): Promise<{ trip: TripPlan | null; packList: PackList | null }> => {
    const trip = await dbOperations.getItem<TripPlan>("tripPlans", id)

    let packList = null
    if (trip && trip.packListId) {
      packList = await dbOperations.getItem<PackList>("packLists", trip.packListId)
    }

    return { trip, packList }
  },
}

export const userProfileOperations = {
  getUserProfile: async (): Promise<UserProfile | null> => {
    const profiles = await dbOperations.getAllItems<UserProfile>("userProfile")
    return profiles.length > 0 ? profiles[0] ?? null : null
  },

  updateUserProfile: async (profile: UserProfile): Promise<UserProfile> => {
    return await dbOperations.updateItem<UserProfile>("userProfile", profile)
  },
}
