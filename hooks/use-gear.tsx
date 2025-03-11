"use client"

import * as React from "react"

// Define the types for our gear management app
export interface GearImage {
  id: string
  url: string
  alt: string
}

export interface GearDocument {
  id: string
  name: string
  url: string
  type: "pdf" | "txt" | "other"
}

export interface GearItem {
  id: string
  name: string
  category: "shelter" | "sleep" | "clothing" | "cooking" | "water" | "electronics" | "other"
  weight: number // in grams
  price: number
  description: string
  notes?: string
  purchaseDate?: string
  images?: GearImage[]
  documents?: GearDocument[]
  selected?: boolean
}

export interface Kit {
  id: string
  name: string
  description: string
  gearIds: string[]
  category: "summer" | "winter" | "3-season" | "ultralight" | "custom"
  images?: GearImage[]
  documents?: GearDocument[]
  selected?: boolean
}

export interface PackingList {
  id: string
  name: string
  description: string
  date: string
  gearIds: string[]
  kitIds: string[]
  images?: GearImage[]
  documents?: GearDocument[]
  totalWeight?: number
  selected?: boolean
}

type ViewMode = "gear" | "kits" | "lists"
type CategoryFilter = string | null

interface GearContextProps {
  viewMode: ViewMode
  setViewMode: (mode: ViewMode) => void
  categoryFilter: CategoryFilter
  setCategoryFilter: (category: CategoryFilter) => void
  selectedItem: GearItem | Kit | PackingList | null
  selectItem: (item: GearItem | Kit | PackingList | null) => void
  gearItems: GearItem[]
  kits: Kit[]
  packingLists: PackingList[]
  getGearItemsForList: (list: PackingList) => GearItem[]
  getKitsForList: (list: PackingList) => Kit[]
  getTotalWeight: (list: PackingList) => number
  addGearItem: (item: Omit<GearItem, "id">) => GearItem
  addKit: (kit: Omit<Kit, "id">) => Kit
  addPackingList: (list: Omit<PackingList, "id">) => PackingList
  updateGearItem: (id: string, item: Partial<GearItem>) => void
  updateKit: (id: string, kit: Partial<Kit>) => void
  updatePackingList: (id: string, list: Partial<PackingList>) => void
  deleteGearItem: (id: string) => void
  deleteKit: (id: string) => void
  deletePackingList: (id: string) => void
  duplicateGearItem: (id: string) => void
  duplicateKit: (id: string) => void
  duplicatePackingList: (id: string) => void
  uploadImage: (itemId: string, itemType: "gear" | "kit" | "list", file: File) => Promise<void>
  uploadDocument: (itemId: string, itemType: "gear" | "kit" | "list", file: File) => Promise<void>
  deleteImage: (itemId: string, imageId: string, itemType: "gear" | "kit" | "list") => void
  deleteDocument: (itemId: string, documentId: string, itemType: "gear" | "kit" | "list") => void
  getCategoryCount: (category: string) => number
}

const GearContext = React.createContext<GearContextProps>({
  viewMode: "gear",
  setViewMode: () => {},
  categoryFilter: null,
  setCategoryFilter: () => {},
  selectedItem: null,
  selectItem: () => {},
  gearItems: [],
  kits: [],
  packingLists: [],
  getGearItemsForList: () => [],
  getKitsForList: () => [],
  getTotalWeight: () => 0,
  addGearItem: (item: Omit<GearItem, "id">) => {
    throw new Error("addGearItem not implemented")
  },
  addKit: (kit: Omit<Kit, "id">) => {
    throw new Error("addKit not implemented")
  },
  addPackingList: (list: Omit<PackingList, "id">) => {
    throw new Error("addPackingList not implemented")
  },
  updateGearItem: () => {},
  updateKit: () => {},
  updatePackingList: () => {},
  deleteGearItem: () => {},
  deleteKit: () => {},
  deletePackingList: () => {},
  duplicateGearItem: () => {},
  duplicateKit: () => {},
  duplicatePackingList: () => {},
  uploadImage: async () => {},
  uploadDocument: async () => {},
  deleteImage: () => {},
  deleteDocument: () => {},
  getCategoryCount: () => 0,
})

interface GearProviderProps {
  children: React.ReactNode
}

export function GearProvider({ children }: GearProviderProps) {
  const [viewMode, setViewMode] = React.useState<ViewMode>("gear")
  const [categoryFilter, setCategoryFilter] = React.useState<CategoryFilter>(null)
  const [selectedItem, setSelectedItem] = React.useState<GearItem | Kit | PackingList | null>(null)

  // Mock data for gear items
  const [gearItems, setGearItems] = React.useState<GearItem[]>([
    {
      id: "g1",
      name: "Zpacks Duplex Tent",
      category: "shelter",
      weight: 539,
      price: 599,
      description: "Ultralight 2-person tent",
      notes: "Great for thru-hiking, needs careful site selection",
      purchaseDate: "2022-03-15",
      images: [
        {
          id: "img1",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Zpacks Duplex Tent",
        },
      ],
      documents: [
        {
          id: "doc1",
          name: "Setup Instructions",
          url: "#",
          type: "pdf",
        },
      ],
    },
    {
      id: "g2",
      name: "Enlightened Equipment Enigma Quilt",
      category: "sleep",
      weight: 625,
      price: 375,
      description: "20°F down quilt",
      notes: "Warm and compressible, use with sleeping pad",
      purchaseDate: "2022-02-10",
      images: [
        {
          id: "img2",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Enlightened Equipment Enigma Quilt",
        },
      ],
    },
    {
      id: "g3",
      name: "Thermarest NeoAir XLite",
      category: "sleep",
      weight: 340,
      price: 185,
      description: "Inflatable sleeping pad",
      notes: "R-value 4.2, can be noisy",
      purchaseDate: "2022-02-10",
      images: [
        {
          id: "img3",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Thermarest NeoAir XLite",
        },
      ],
    },
    {
      id: "g4",
      name: "BRS-3000T Stove",
      category: "cooking",
      weight: 25,
      price: 17,
      description: "Ultralight canister stove",
      notes: "Compact but not very wind resistant",
      purchaseDate: "2021-11-20",
      images: [
        {
          id: "img4",
          url: "/placeholder.svg?height=300&width=400",
          alt: "BRS-3000T Stove",
        },
      ],
    },
    {
      id: "g5",
      name: "Sawyer Squeeze Water Filter",
      category: "water",
      weight: 85,
      price: 37,
      description: "Inline water filter",
      notes: "Backflush regularly, protect from freezing",
      purchaseDate: "2022-01-05",
      images: [
        {
          id: "img5",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Sawyer Squeeze Water Filter",
        },
      ],
    },
    {
      id: "g6",
      name: "Nitecore NU25 Headlamp",
      category: "electronics",
      weight: 28,
      price: 36,
      description: "Rechargeable headlamp",
      notes: "300 lumens, USB rechargeable",
      purchaseDate: "2022-04-12",
      images: [
        {
          id: "img6",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Nitecore NU25 Headlamp",
        },
      ],
    },
    {
      id: "g7",
      name: "Patagonia Capilene Baselayer",
      category: "clothing",
      weight: 106,
      price: 60,
      description: "Lightweight baselayer top",
      notes: "Good for all seasons, dries quickly",
      purchaseDate: "2022-01-15",
      images: [
        {
          id: "img7",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Patagonia Capilene Baselayer",
        },
      ],
    },
    {
      id: "g8",
      name: "Toaks Titanium Pot 750ml",
      category: "cooking",
      weight: 89,
      price: 40,
      description: "Titanium cooking pot",
      notes: "Good size for one person, includes lid",
      purchaseDate: "2021-12-10",
      images: [
        {
          id: "img8",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Toaks Titanium Pot 750ml",
        },
      ],
    },
  ])

  // Mock data for kits
  const [kits, setKits] = React.useState<Kit[]>([
    {
      id: "k1",
      name: "Summer Appalachian Trail Kit",
      description: "Lightweight setup for summer hiking on the AT",
      gearIds: ["g1", "g2", "g5", "g6", "g7"],
      category: "summer",
      images: [
        {
          id: "kimg1",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Summer AT Kit",
        },
      ],
    },
    {
      id: "k2",
      name: "3-Season Cooking System",
      description: "Complete cooking setup for most conditions",
      gearIds: ["g4", "g8"],
      category: "3-season",
      images: [
        {
          id: "kimg2",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Cooking System",
        },
      ],
    },
    {
      id: "k3",
      name: "Ultralight Sleep System",
      description: "Minimalist sleep setup for warm weather",
      gearIds: ["g2", "g3"],
      category: "ultralight",
      images: [
        {
          id: "kimg3",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Sleep System",
        },
      ],
    },
    {
      id: "k4",
      name: "Winter Essentials",
      description: "Additional items for cold weather trips",
      gearIds: ["g3", "g6"],
      category: "winter",
      images: [
        {
          id: "kimg4",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Winter Essentials",
        },
      ],
    },
  ])

  // Mock data for packing lists
  const [packingLists, setPackingLists] = React.useState<PackingList[]>([
    {
      id: "l1",
      name: "John Muir Trail 2023",
      description: "Complete gear list for JMT thru-hike",
      date: "2023-07-15",
      gearIds: ["g1", "g5", "g6"],
      kitIds: ["k2", "k3"],
      images: [
        {
          id: "limg1",
          url: "/placeholder.svg?height=300&width=400",
          alt: "JMT Trail Map",
        },
      ],
    },
    {
      id: "l2",
      name: "Weekend Backpacking Trip",
      description: "Quick 2-night trip in the mountains",
      date: "2023-06-02",
      gearIds: ["g1", "g4", "g5", "g6", "g7", "g8"],
      kitIds: [],
      images: [
        {
          id: "limg2",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Weekend Trip",
        },
      ],
    },
    {
      id: "l3",
      name: "Colorado Trail Section Hike",
      description: "1-week section hike in Colorado",
      date: "2023-08-10",
      gearIds: ["g5", "g6", "g7"],
      kitIds: ["k1", "k2"],
      images: [
        {
          id: "limg3",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Colorado Trail",
        },
      ],
    },
    {
      id: "l4",
      name: "Winter Overnight",
      description: "Cold weather overnight trip",
      date: "2023-01-20",
      gearIds: ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"],
      kitIds: ["k4"],
      images: [
        {
          id: "limg4",
          url: "/placeholder.svg?height=300&width=400",
          alt: "Winter Campsite",
        },
      ],
    },
  ])

  // Helper functions
  const getGearItemsForList = React.useCallback(
    (list: PackingList): GearItem[] => {
      // Get direct gear items
      const directGear = gearItems.filter((item) => list.gearIds.includes(item.id))

      // Get gear from kits
      const kitsInList = kits.filter((kit) => list.kitIds.includes(kit.id))
      const gearFromKits = kitsInList.flatMap((kit) => gearItems.filter((item) => kit.gearIds.includes(item.id)))

      // Combine and remove duplicates
      const allGear = [...directGear, ...gearFromKits]
      const uniqueGear = Array.from(new Map(allGear.map((item) => [item.id, item])).values())

      return uniqueGear
    },
    [gearItems, kits]
  )

  const getKitsForList = React.useCallback(
    (list: PackingList): Kit[] => {
      return kits.filter((kit) => list.kitIds.includes(kit.id))
    },
    [kits]
  )

  const getTotalWeight = React.useCallback(
    (list: PackingList): number => {
      const listGear = getGearItemsForList(list)
      return listGear.reduce((total, item) => total + item.weight, 0)
    },
    [getGearItemsForList]
  )

  const selectItem = React.useCallback((item: GearItem | Kit | PackingList | null) => {
    if (item) {
      setSelectedItem(item)

      // Update selected state based on the current view mode
      if ("category" in item && "weight" in item) {
        // It's a gear item
        setGearItems((prevItems) =>
          prevItems.map((gear) => ({
            ...gear,
            selected: gear.id === item.id,
          }))
        )
      } else if ("gearIds" in item && !("kitIds" in item)) {
        // It's a kit
        setKits((prevKits) =>
          prevKits.map((kit) => ({
            ...kit,
            selected: kit.id === item.id,
          }))
        )
      } else if ("kitIds" in item) {
        // It's a packing list
        setPackingLists((prevLists) =>
          prevLists.map((list) => ({
            ...list,
            selected: list.id === item.id,
          }))
        )
      }
    } else {
      setSelectedItem(null)

      // Clear all selections
      setGearItems((prevItems) =>
        prevItems.map((gear) => ({
          ...gear,
          selected: false,
        }))
      )
      setKits((prevKits) =>
        prevKits.map((kit) => ({
          ...kit,
          selected: false,
        }))
      )
      setPackingLists((prevLists) =>
        prevLists.map((list) => ({
          ...list,
          selected: false,
        }))
      )
    }
  }, [])

  // Generate a unique ID
  const generateId = React.useCallback(() => {
    return Math.random().toString(36).substring(2, 9)
  }, [])

  // CRUD operations for gear items
  const addGearItem = React.useCallback(
    (item: Omit<GearItem, "id">) => {
      const newItem: GearItem = {
        ...item,
        id: `g${generateId()}`,
      }
      setGearItems((prev) => [...prev, newItem])
      return newItem
    },
    [generateId]
  )

  const updateGearItem = React.useCallback((id: string, updates: Partial<GearItem>) => {
    setGearItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)))
  }, [])

  const deleteGearItem = React.useCallback(
    (id: string) => {
      setGearItems((prev) => prev.filter((item) => item.id !== id))

      // If the deleted item is selected, clear selection
      if (selectedItem && "weight" in selectedItem && selectedItem.id === id) {
        selectItem(null)
      }

      // Remove references to this gear item from kits
      setKits((prev) =>
        prev.map((kit) => ({
          ...kit,
          gearIds: kit.gearIds.filter((gearId) => gearId !== id),
        }))
      )

      // Remove references to this gear item from packing lists
      setPackingLists((prev) =>
        prev.map((list) => ({
          ...list,
          gearIds: list.gearIds.filter((gearId) => gearId !== id),
        }))
      )
    },
    [selectedItem, selectItem]
  )

  const duplicateGearItem = React.useCallback(
    (id: string) => {
      const itemToDuplicate = gearItems.find((item) => item.id === id)
      if (itemToDuplicate) {
        const newItem: GearItem = {
          ...itemToDuplicate,
          id: `g${generateId()}`,
          name: `${itemToDuplicate.name} (Copy)`,
          selected: false,
          images: itemToDuplicate.images ? [...itemToDuplicate.images] : undefined,
          documents: itemToDuplicate.documents ? [...itemToDuplicate.documents] : undefined,
        }
        setGearItems((prev) => [...prev, newItem])
        return newItem
      }
      return null
    },
    [gearItems, generateId]
  )

  // CRUD operations for kits
  const addKit = React.useCallback(
    (kit: Omit<Kit, "id">) => {
      const newKit: Kit = {
        ...kit,
        id: `k${generateId()}`,
      }
      setKits((prev) => [...prev, newKit])
      return newKit
    },
    [generateId]
  )

  const updateKit = React.useCallback((id: string, updates: Partial<Kit>) => {
    setKits((prev) => prev.map((kit) => (kit.id === id ? { ...kit, ...updates } : kit)))
  }, [])

  const deleteKit = React.useCallback(
    (id: string) => {
      setKits((prev) => prev.filter((kit) => kit.id !== id))

      // If the deleted kit is selected, clear selection
      if (selectedItem && "gearIds" in selectedItem && !("kitIds" in selectedItem) && selectedItem.id === id) {
        selectItem(null)
      }

      // Remove references to this kit from packing lists
      setPackingLists((prev) =>
        prev.map((list) => ({
          ...list,
          kitIds: list.kitIds.filter((kitId) => kitId !== id),
        }))
      )
    },
    [selectedItem, selectItem]
  )

  const duplicateKit = React.useCallback(
    (id: string) => {
      const kitToDuplicate = kits.find((kit) => kit.id === id)
      if (kitToDuplicate) {
        const newKit: Kit = {
          ...kitToDuplicate,
          id: `k${generateId()}`,
          name: `${kitToDuplicate.name} (Copy)`,
          selected: false,
          images: kitToDuplicate.images ? [...kitToDuplicate.images] : undefined,
          documents: kitToDuplicate.documents ? [...kitToDuplicate.documents] : undefined,
        }
        setKits((prev) => [...prev, newKit])
        return newKit
      }
      return null
    },
    [kits, generateId]
  )

  // CRUD operations for packing lists
  const addPackingList = React.useCallback(
    (list: Omit<PackingList, "id">) => {
      const newList: PackingList = {
        ...list,
        id: `l${generateId()}`,
      }
      setPackingLists((prev) => [...prev, newList])
      return newList
    },
    [generateId]
  )

  const updatePackingList = React.useCallback((id: string, updates: Partial<PackingList>) => {
    setPackingLists((prev) => prev.map((list) => (list.id === id ? { ...list, ...updates } : list)))
  }, [])

  const deletePackingList = React.useCallback(
    (id: string) => {
      setPackingLists((prev) => prev.filter((list) => list.id !== id))

      // If the deleted list is selected, clear selection
      if (selectedItem && "kitIds" in selectedItem && selectedItem.id === id) {
        selectItem(null)
      }
    },
    [selectedItem, selectItem]
  )

  const duplicatePackingList = React.useCallback(
    (id: string) => {
      const listToDuplicate = packingLists.find((list) => list.id === id)
      if (listToDuplicate) {
        const newList: PackingList = {
          ...listToDuplicate,
          id: `l${generateId()}`,
          name: `${listToDuplicate.name} (Copy)`,
          selected: false,
          images: listToDuplicate.images ? [...listToDuplicate.images] : undefined,
          documents: listToDuplicate.documents ? [...listToDuplicate.documents] : undefined,
        }
        setPackingLists((prev) => [...prev, newList])
        return newList
      }
      return null
    },
    [packingLists, generateId]
  )

  // File upload operations
  const uploadImage = React.useCallback(
    async (itemId: string, itemType: "gear" | "kit" | "list", file: File): Promise<void> => {
      // In a real app, you would upload the file to a server and get a URL back
      // For this mock, we'll create a fake URL
      const imageId = `img${generateId()}`
      const imageUrl = URL.createObjectURL(file)

      const newImage: GearImage = {
        id: imageId,
        url: imageUrl,
        alt: file.name,
      }

      if (itemType === "gear") {
        setGearItems((prev) =>
          prev.map((item) =>
            item.id === itemId
              ? {
                  ...item,
                  images: item.images ? [...item.images, newImage] : [newImage],
                }
              : item
          )
        )
      } else if (itemType === "kit") {
        setKits((prev) =>
          prev.map((kit) =>
            kit.id === itemId
              ? {
                  ...kit,
                  images: kit.images ? [...kit.images, newImage] : [newImage],
                }
              : kit
          )
        )
      } else if (itemType === "list") {
        setPackingLists((prev) =>
          prev.map((list) =>
            list.id === itemId
              ? {
                  ...list,
                  images: list.images ? [...list.images, newImage] : [newImage],
                }
              : list
          )
        )
      }
    },
    [generateId]
  )

  const uploadDocument = React.useCallback(
    async (itemId: string, itemType: "gear" | "kit" | "list", file: File): Promise<void> => {
      // In a real app, you would upload the file to a server and get a URL back
      // For this mock, we'll create a fake URL
      const docId = `doc${generateId()}`
      const docUrl = URL.createObjectURL(file)

      // Determine document type
      let docType: "pdf" | "txt" | "other" = "other"
      if (file.name.endsWith(".pdf")) docType = "pdf"
      if (file.name.endsWith(".txt")) docType = "txt"

      const newDocument: GearDocument = {
        id: docId,
        name: file.name,
        url: docUrl,
        type: docType,
      }

      if (itemType === "gear") {
        setGearItems((prev) =>
          prev.map((item) =>
            item.id === itemId
              ? {
                  ...item,
                  documents: item.documents ? [...item.documents, newDocument] : [newDocument],
                }
              : item
          )
        )
      } else if (itemType === "kit") {
        setKits((prev) =>
          prev.map((kit) =>
            kit.id === itemId
              ? {
                  ...kit,
                  documents: kit.documents ? [...kit.documents, newDocument] : [newDocument],
                }
              : kit
          )
        )
      } else if (itemType === "list") {
        setPackingLists((prev) =>
          prev.map((list) =>
            list.id === itemId
              ? {
                  ...list,
                  documents: list.documents ? [...list.documents, newDocument] : [newDocument],
                }
              : list
          )
        )
      }
    },
    [generateId]
  )

  const deleteImage = React.useCallback((itemId: string, imageId: string, itemType: "gear" | "kit" | "list"): void => {
    if (itemType === "gear") {
      setGearItems((prev) =>
        prev.map((item) =>
          item.id === itemId && item.images
            ? {
                ...item,
                images: item.images.filter((img) => img.id !== imageId),
              }
            : item
        )
      )
    } else if (itemType === "kit") {
      setKits((prev) =>
        prev.map((kit) =>
          kit.id === itemId && kit.images
            ? {
                ...kit,
                images: kit.images.filter((img) => img.id !== imageId),
              }
            : kit
        )
      )
    } else if (itemType === "list") {
      setPackingLists((prev) =>
        prev.map((list) =>
          list.id === itemId && list.images
            ? {
                ...list,
                images: list.images.filter((img) => img.id !== imageId),
              }
            : list
        )
      )
    }
  }, [])

  const deleteDocument = React.useCallback(
    (itemId: string, documentId: string, itemType: "gear" | "kit" | "list"): void => {
      if (itemType === "gear") {
        setGearItems((prev) =>
          prev.map((item) =>
            item.id === itemId && item.documents
              ? {
                  ...item,
                  documents: item.documents.filter((doc) => doc.id !== documentId),
                }
              : item
          )
        )
      } else if (itemType === "kit") {
        setKits((prev) =>
          prev.map((kit) =>
            kit.id === itemId && kit.documents
              ? {
                  ...kit,
                  documents: kit.documents.filter((doc) => doc.id !== documentId),
                }
              : kit
          )
        )
      } else if (itemType === "list") {
        setPackingLists((prev) =>
          prev.map((list) =>
            list.id === itemId && list.documents
              ? {
                  ...list,
                  documents: list.documents.filter((doc) => doc.id !== documentId),
                }
              : list
          )
        )
      }
    },
    []
  )

  // Get filtered items based on category
  const getFilteredItems = React.useMemo(() => {
    if (!categoryFilter) {
      return {
        gearItems,
        kits,
        packingLists,
      }
    }

    return {
      gearItems: gearItems.filter((item) => item.category === categoryFilter),
      kits: kits.filter((kit) => kit.category === categoryFilter),
      packingLists,
    }
  }, [gearItems, kits, packingLists, categoryFilter])

  // Get count of items in each category
  const getCategoryCount = React.useCallback(
    (category: string): number => {
      if (viewMode === "gear") {
        return gearItems.filter((item) => item.category === category).length
      } else if (viewMode === "kits") {
        return kits.filter((kit) => kit.category === category).length
      }
      return 0
    },
    [gearItems, kits, viewMode]
  )

  return (
    <GearContext.Provider
      value={{
        viewMode,
        setViewMode,
        categoryFilter,
        setCategoryFilter,
        selectedItem,
        selectItem,
        gearItems: getFilteredItems.gearItems,
        kits: getFilteredItems.kits,
        packingLists: getFilteredItems.packingLists,
        getGearItemsForList,
        getKitsForList,
        getTotalWeight,
        addGearItem,
        addKit,
        addPackingList,
        updateGearItem,
        updateKit,
        updatePackingList,
        deleteGearItem,
        deleteKit,
        deletePackingList,
        duplicateGearItem,
        duplicateKit,
        duplicatePackingList,
        uploadImage,
        uploadDocument,
        deleteImage,
        deleteDocument,
        getCategoryCount,
      }}
    >
      {children}
    </GearContext.Provider>
  )
}

export function useGear() {
  const context = React.useContext(GearContext)
  if (!context) {
    throw new Error("useGear must be used within a GearProvider")
  }
  return context
}
