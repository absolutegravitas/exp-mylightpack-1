export interface GearItem {
  id: string
  name: string
  weight?: number
  brand?: string
  price?: number
  usage?: string
  description?: string
}

const DB_NAME = "myLightPackDatabase"
const DB_VERSION = 1
const GEAR_ITEMS_STORE = "gearItems"

let dbPromise: Promise<IDBDatabase> | null = null

function getDb(): Promise<IDBDatabase> {
  if (dbPromise) {
    return dbPromise
  }

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = () => {
      reject(new Error("Failed to open database"))
    }

    request.onsuccess = () => {
      resolve(request.result)
    }

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBRequest).result as IDBDatabase
      if (!db.objectStoreNames.contains(GEAR_ITEMS_STORE)) {
        db.createObjectStore(GEAR_ITEMS_STORE, { keyPath: "id" })
      }
    }
  })

  return dbPromise
}

async function getAllGearItems(): Promise<GearItem[]> {
  const db = await getDb()
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(GEAR_ITEMS_STORE, "readonly")
    const store = transaction.objectStore(GEAR_ITEMS_STORE)
    const request = store.getAll()

    request.onsuccess = () => {
      resolve(request.result as GearItem[])
    }

    request.onerror = () => {
      reject(new Error("Failed to get all gear items"))
    }
  })
}

async function addGearItem(item: GearItem): Promise<void> {
  const db = await getDb()
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(GEAR_ITEMS_STORE, "readwrite")
    const store = transaction.objectStore(GEAR_ITEMS_STORE)
    const request = store.add(item)

    request.onsuccess = () => {
      resolve()
    }

    request.onerror = () => {
      reject(new Error("Failed to add gear item"))
    }
  })
}

export const db = {
  getAllGearItems,
  addGearItem,
}
