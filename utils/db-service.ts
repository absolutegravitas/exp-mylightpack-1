import { BaseItem, Document, GearItem, KitItem, ListItem, StoreNames } from "./types"

const DB_VERSION = 1
const STORES: Record<StoreNames, StoreNames> = {
  GEAR: "GEAR",
  KITS: "KITS",
  LISTS: "LISTS",
  DOCUMENTS: "DOCUMENTS",
}

// Get dynamic database name based on mode
export const getDbName = (isTestDrive = false): string => {
  return isTestDrive ? "gearManagerTestDriveDB" : "gearManagerDB"
}

// Database initialization
export const initDatabase = (isTestDrive = false): Promise<IDBDatabase> => {
  const dbName = getDbName(isTestDrive)

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, DB_VERSION)

    request.onerror = (event) => {
      console.error("Database error:", request.error)
      reject(request.error)
    }

    request.onsuccess = (event) => {
      const db = request.result
      console.log(`Database ${dbName} opened successfully`)
      resolve(db)
    }

    request.onupgradeneeded = (event) => {
      const db = request.result

      // Create object stores if they don't exist
      if (!db.objectStoreNames.contains(STORES.GEAR)) {
        const gearStore = db.createObjectStore(STORES.GEAR, { keyPath: "id" })
        gearStore.createIndex("name", "name", { unique: false })
        gearStore.createIndex("category", "category", { unique: false })
      }

      if (!db.objectStoreNames.contains(STORES.KITS)) {
        const kitsStore = db.createObjectStore(STORES.KITS, { keyPath: "id" })
        kitsStore.createIndex("name", "name", { unique: false })
      }

      if (!db.objectStoreNames.contains(STORES.LISTS)) {
        const listsStore = db.createObjectStore(STORES.LISTS, { keyPath: "id" })
        listsStore.createIndex("name", "name", { unique: false })
      }

      if (!db.objectStoreNames.contains(STORES.DOCUMENTS)) {
        const docsStore = db.createObjectStore(STORES.DOCUMENTS, { keyPath: "id" })
        // Store references to parent items (gear, kit, or list)
        docsStore.createIndex("parentId", "parentId", { unique: false })
        docsStore.createIndex("parentType", "parentType", { unique: false })
        docsStore.createIndex("type", "type", { unique: false })
      }
    }
  })
}

// Generic CRUD operations - updated with isTestDrive parameter

// Create or update an item
export const saveItem = async <T extends { id: string }>(
  storeName: string,
  item: T,
  isTestDrive = false
): Promise<T> => {
  try {
    const db = await initDatabase(isTestDrive)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite")
      const store = transaction.objectStore(storeName)
      const request = store.put(item)

      request.onsuccess = () => {
        resolve(item)
      }

      request.onerror = () => {
        reject(request.error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  } catch (error) {
    console.error(`Error saving item to ${storeName}:`, error)
    throw error
  }
}

// Get all items from a store
export const getAllItems = async <T>(storeName: string, isTestDrive: boolean = false): Promise<T[]> => {
  try {
    const db = await initDatabase(isTestDrive)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly")
      const store = transaction.objectStore(storeName)
      const request = store.getAll()

      request.onsuccess = () => {
        resolve(request.result as T[])
      }

      request.onerror = () => {
        reject(request.error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  } catch (error) {
    console.error(`Error getting items from ${storeName}:`, error)
    throw error
  }
}

// Get a single item by id
export const getItemById = async <T>(
  storeName: string,
  id: string,
  isTestDrive: boolean = false
): Promise<T | null> => {
  try {
    const db = await initDatabase(isTestDrive)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly")
      const store = transaction.objectStore(storeName)
      const request = store.get(id)

      request.onsuccess = () => {
        resolve((request.result as T) || null)
      }

      request.onerror = () => {
        reject(request.error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  } catch (error) {
    console.error(`Error getting item ${id} from ${storeName}:`, error)
    throw error
  }
}

// Delete an item by id
export const deleteItem = async (storeName: string, id: string, isTestDrive = false): Promise<void> => {
  try {
    const db = await initDatabase(isTestDrive)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite")
      const store = transaction.objectStore(storeName)
      const request = store.delete(id)

      request.onsuccess = () => {
        resolve()
      }

      request.onerror = () => {
        reject(request.error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  } catch (error) {
    console.error(`Error deleting item ${id} from ${storeName}:`, error)
    throw error
  }
}

// Get items by index value
export const getItemsByIndex = async <T>(
  storeName: string,
  indexName: string,
  value: string | number,
  isTestDrive: boolean = false
): Promise<T[]> => {
  try {
    const db = await initDatabase(isTestDrive)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly")
      const store = transaction.objectStore(storeName)
      const index = store.index(indexName)
      const request = index.getAll(value)

      request.onsuccess = () => {
        resolve(request.result as T[])
      }

      request.onerror = () => {
        reject(request.error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  } catch (error) {
    console.error(`Error getting items by index ${indexName} from ${storeName}:`, error)
    throw error
  }
}

// Specific operations for gear management - updated with isTestDrive parameter

// Save a document (file) and link it to a parent item
export const saveDocument = async (document: Document, isTestDrive = false): Promise<void> => {
  try {
    await saveItem(STORES.DOCUMENTS, document, isTestDrive)
  } catch (error) {
    console.error("Error saving document:", error)
    throw error
  }
}

// Get all documents for a specific parent item
export const getDocumentsForItem = async (
  parentId: string,
  parentType: "gear" | "kit" | "list",
  isTestDrive = false
): Promise<Document[]> => {
  try {
    const db = await initDatabase(isTestDrive)
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORES.DOCUMENTS, "readonly")
      const store = transaction.objectStore(STORES.DOCUMENTS)
      const parentIdIndex = store.index("parentId")

      // Using a cursor to filter by parentId and parentType
      const docs: Document[] = []
      const request = parentIdIndex.openCursor(IDBKeyRange.only(parentId))

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result
        if (cursor) {
          if (cursor.value.parentType === parentType) {
            docs.push(cursor.value)
          }
          cursor.continue()
        } else {
          resolve(docs)
        }
      }

      request.onerror = () => {
        reject(request.error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  } catch (error) {
    console.error(`Error getting documents for ${parentType} ${parentId}:`, error)
    throw error
  }
}

// Delete all documents for a specific parent item
export const deleteDocumentsForItem = async (
  parentId: string,
  parentType: "gear" | "kit" | "list",
  isTestDrive = false
): Promise<void> => {
  try {
    const docs = await getDocumentsForItem(parentId, parentType, isTestDrive)
    const db = await initDatabase(isTestDrive)
    const transaction = db.transaction(STORES.DOCUMENTS, "readwrite")
    const store = transaction.objectStore(STORES.DOCUMENTS)

    await Promise.all(
      docs.map((doc) => {
        return new Promise<void>((resolve, reject) => {
          const request = store.delete(doc.id)
          request.onsuccess = () => resolve()
          request.onerror = () => reject(request.error)
        })
      })
    )

    db.close()
  } catch (error) {
    console.error(`Error deleting documents for ${parentType} ${parentId}:`, error)
    throw error
  }
}

// Delete a database entirely
export const deleteDatabase = async (isTestDrive = false): Promise<void> => {
  const dbName = getDbName(isTestDrive)
  return new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase(dbName)

    request.onsuccess = () => {
      console.log(`Database ${dbName} deleted successfully`)
      resolve()
    }

    request.onerror = () => {
      console.error(`Error deleting database ${dbName}:`, request.error)
      reject(request.error)
    }
  })
}

// Export specific store operations for easier imports - updated with isTestDrive parameter
export const GearDB = {
  getAll: (isTestDrive = false) => getAllItems<GearItem>(STORES.GEAR, isTestDrive),
  getById: (id: string, isTestDrive = false) => getItemById<GearItem>(STORES.GEAR, id, isTestDrive),
  save: (gear: GearItem, isTestDrive = false) => saveItem<GearItem>(STORES.GEAR, gear, isTestDrive),
  delete: (id: string, isTestDrive = false) => deleteItem(STORES.GEAR, id, isTestDrive),
  getByCategory: (category: string, isTestDrive = false) =>
    getItemsByIndex<GearItem>(STORES.GEAR, "category", category, isTestDrive),
}

export const KitsDB = {
  getAll: (isTestDrive = false) => getAllItems<KitItem>(STORES.KITS, isTestDrive),
  getById: (id: string, isTestDrive = false) => getItemById<KitItem>(STORES.KITS, id, isTestDrive),
  save: (kit: KitItem, isTestDrive = false) => saveItem<KitItem>(STORES.KITS, kit, isTestDrive),
  delete: (id: string, isTestDrive = false) => deleteItem(STORES.KITS, id, isTestDrive),
}

export const ListsDB = {
  getAll: (isTestDrive = false) => getAllItems<ListItem>(STORES.LISTS, isTestDrive),
  getById: (id: string, isTestDrive = false) => getItemById<ListItem>(STORES.LISTS, id, isTestDrive),
  save: (list: ListItem, isTestDrive = false) => saveItem<ListItem>(STORES.LISTS, list, isTestDrive),
  delete: (id: string, isTestDrive = false) => deleteItem(STORES.LISTS, id, isTestDrive),
}

export const DocumentsDB = {
  getAll: (isTestDrive = false) => getAllItems<Document>(STORES.DOCUMENTS, isTestDrive),
  getById: (id: string, isTestDrive = false) => getItemById<Document>(STORES.DOCUMENTS, id, isTestDrive),
  getForItem: (parentId: string, parentType: "gear" | "kit" | "list", isTestDrive = false) =>
    getDocumentsForItem(parentId, parentType, isTestDrive),
  save: (document: Document, isTestDrive = false) => saveItem<Document>(STORES.DOCUMENTS, document, isTestDrive),
  delete: (id: string, isTestDrive = false) => deleteItem(STORES.DOCUMENTS, id, isTestDrive),
  deleteForItem: (parentId: string, parentType: "gear" | "kit" | "list", isTestDrive = false) =>
    deleteDocumentsForItem(parentId, parentType, isTestDrive),
}
