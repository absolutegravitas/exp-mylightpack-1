export interface BaseItem {
  id: string
  name: string
  dateAdded: number
  dateModified: number
}

export interface GearItem extends BaseItem {
  category: string
  description?: string
  weight?: number
  price?: number
  quantity?: number
  consumable?: boolean
  worn?: boolean
  notes?: string
  firstImageUrl?: string | ArrayBuffer
}

export interface KitItem extends BaseItem {
  description?: string
  gearIds: string[]
  notes?: string
  isPublic?: boolean
}

export interface ListItem extends BaseItem {
  description?: string
  kitIds: string[]
  gearIds: string[]
  notes?: string
  isPublic?: boolean
  season?: string
  type?: string
  firstImageUrl?: string | undefined
}

export interface Document extends BaseItem {
  parentId: string
  parentType: "GEAR" | "KITS" | "LISTS" | "DOCUMENTS"
  type: "image" | "pdf" | "txt" | "unknown"
  data: string | ArrayBuffer
  contentType: string
}

export type StoreNames = "GEAR" | "KITS" | "LISTS" | "DOCUMENTS"
