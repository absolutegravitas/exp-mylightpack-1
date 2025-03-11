import { deleteDatabase, GearDB, KitsDB, ListsDB } from "./db-service"
import { generateId } from "./file-utils"
import { GearItem, KitItem, ListItem } from "./types"

// Sample gear categories
// Sample gear items

const sampleGear = [
  {
    name: "Tent - 2 Person",
    description: "Lightweight backpacking tent",
    category: "Shelter",
    weight: 1200, // grams
    price: 299.99,
    notes: "Good for 3-season use",
  },
  {
    name: "Sleeping Bag",
    description: "20°F down sleeping bag",
    category: "Sleep System",
    weight: 850,
    price: 189.99,
    notes: "Packs down small",
  },
  {
    name: "Camp Stove",
    description: "Portable propane camp stove",
    category: "Cooking",
    weight: 450,
    price: 49.99,
    notes: "Boils water in 3 minutes",
  },
  {
    name: "Water Filter",
    description: "Gravity-fed water filtration system",
    category: "Water",
    weight: 300,
    price: 89.99,
    notes: "Filters 1,500 gallons",
  },
  {
    name: "Rain Jacket",
    description: "Waterproof breathable shell",
    category: "Clothing",
    weight: 350,
    price: 129.99,
    notes: "Pit zips for ventilation",
  },
  {
    name: "Hiking Boots",
    description: "Mid-height waterproof hiking boots",
    category: "Clothing",
    weight: 850,
    price: 179.99,
    notes: "Good ankle support",
  },
  {
    name: "Topographic Map",
    description: "Detailed trail map",
    category: "Navigation",
    weight: 50,
    price: 12.99,
    notes: "Waterproof",
  },
  {
    name: "First Aid Kit",
    description: "Basic wilderness first aid kit",
    category: "First Aid",
    weight: 200,
    price: 29.99,
    notes: "Includes emergency blanket",
  },
  {
    name: "Headlamp",
    description: "LED headlamp with red night mode",
    category: "Electronics",
    weight: 90,
    price: 39.99,
    notes: "Rechargeable battery",
  },
  {
    name: "Power Bank",
    description: "10,000 mAh portable charger",
    category: "Electronics",
    weight: 220,
    price: 59.99,
    notes: "Charges smartphone 3 times",
  },
]

// Sample kits
const sampleKits = [
  {
    name: "Weekend Backpacking",
    description: "Essential gear for a 2-3 day trip",
  },
  {
    name: "Day Hike",
    description: "Light kit for day hikes",
  },
  {
    name: "Winter Camping",
    description: "Gear for cold weather camping",
  },
]

// Sample lists
const sampleLists = [
  {
    name: "Summer Trip 2023",
    description: "Packing list for Yosemite trip",
  },
  {
    name: "Colorado Trail",
    description: "Complete gear list for thru-hike",
  },
]

// SVG placeholders to use as "images" for sample gear
const placeholderImages: Record<string, string> = {
  Shelter:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZjBmMCIvPjxwYXRoIGQ9Ik0yMCwxNTAgTDEwMCw3MCBMMTgwLDE1MCBaIiBmaWxsPSIjZTBlMGUwIiBzdHJva2U9IiNiMGIwYjAiIHN0cm9rZS13aWR0aD0iMyIvPjx0ZXh0IHg9IjEwMCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM3MDcwNzAiPlRlbnQ8L3RleHQ+PC9zdmc+",
  "Sleep System":
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZjBmMCIvPjxyZWN0IHg9IjMwIiB5PSI2MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSI4MCIgcng9IjEwIiByeT0iMTAiIGZpbGw9IiNlMGUwZTAiIHN0cm9rZT0iI2IwYjBiMCIgc3Ryb2tlLXdpZHRoPSIzIi8+PHRleHQgeD0iMTAwIiB5PSIxNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgdGV4dC1YW5jaG9yPSJtaWRkbGUiIGZpbGw9IiIzNzcwNzAiPlNsZWVwaW5nIEJhZzwvdGV4dD48L3N2Zz4=",
  Cooking:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZjBmMCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNTAiIGZpbGw9IiNlMGUwZTAiIHN0cm9rZT0iI2IwYjBiMCIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTgwLDcwIEwxMjAsNzAgTDEyMCw4MCBMODAsODAgWiIgZmlsbD0iI2IwYjBiMCIvPjx0ZXh0IHg9IjEwMCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM3MDcwNzAiPlN0b3ZlPC90ZXh0Pjwvc3ZnPg==",
  default:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZjBmMCIvPjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNlMGUwZTAiIHN0cm9rZT0iI2IwYjBiMCIgc3Ryb2tlLXdpZHRoPSIzIi8+PHRleHQgeD0iMTAwIiB5PSIxNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgdGV4dC1YW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM3MDcwNzAiPkdlYXIgSXRlbTwvc3ZnPg==",
}

// Function to generate and populate mock data
export const generateMockData = async (isTestDrive = true): Promise<boolean> => {
  try {
    // Generate gear items
    const createdGear: GearItem[] = []
    for (const gear of sampleGear) {
      const timestamp = Date.now()
      const newGear = {
        ...gear,
        id: generateId(),
        // firstImageUrl: (gear.category),
        dateAdded: timestamp,
        dateModified: timestamp,
      } satisfies GearItem
      await GearDB.save(newGear, isTestDrive)
      createdGear.push(newGear)
    }

    // Generate kits with references to gear
    for (const kit of sampleKits) {
      const timestamp = Date.now()
      // Randomly select 3-5 gear items for each kit
      const kitItems = []
      const numItems = Math.floor(Math.random() * 3) + 3

      for (let i = 0; i < numItems; i++) {
        const randomGear = createdGear[Math.floor(Math.random() * createdGear.length)]
        if (randomGear) {
          // Check if randomGear is not undefined
          kitItems.push({
            gearId: randomGear.id,
            quantity: Math.floor(Math.random() * 2) + 1,
          })
        }
      }

      const newKit = {
        ...kit,
        id: generateId(),
        gearIds: kitItems.map((item) => item.gearId), // Extract gearIds
        // firstImageUrl: placeholderImages["default"],
        dateAdded: timestamp,
        dateModified: timestamp,
      } satisfies KitItem

      await KitsDB.save(newKit, isTestDrive)
    }

    // Generate lists with references to gear
    for (const list of sampleLists) {
      const timestamp = Date.now()
      // Randomly select 5-8 gear items for each list
      const listItems = []
      const numItems = Math.floor(Math.random() * 4) + 5

      for (let i = 0; i < numItems; i++) {
        const randomGear = createdGear[Math.floor(Math.random() * createdGear.length)]
        if (randomGear) {
          // Check if randomGear is not undefined
          listItems.push({
            gearId: randomGear.id,
            quantity: Math.floor(Math.random() * 2) + 1,
            packed: Math.random() > 0.5,
          })
        }
      }

      const newList = {
        ...list,
        id: generateId(),
        kitIds: [], // Lists do not have kits in mock data
        gearIds: listItems.map((item) => item.gearId),
        // firstImageUrl: placeholderImages["default"],
        dateAdded: timestamp,
        dateModified: timestamp,
      } satisfies ListItem

      await ListsDB.save(newList, isTestDrive)
    }

    return true
  } catch (error) {
    console.error("Error generating mock data:", error)
    return false
  }
}

// Function to clear test drive data
export const clearTestDriveData = async (): Promise<void> => {
  try {
    await deleteDatabase(true)
  } catch (error) {
    console.error("Error clearing test drive data:", error)
    throw error
  }
}
