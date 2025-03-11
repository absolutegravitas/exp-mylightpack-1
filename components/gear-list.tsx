"use client"

import { Copy, MoreVertical, Plus, Scale, Trash2 } from "lucide-react"
import Image from "next/image"

import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { type GearItem, type Kit, type PackingList, useGear } from "@/hooks/use-gear"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

export function GearList() {
  const [selectedItems, setSelectedItems] = React.useState<(GearItem | Kit | PackingList)[]>([])
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [isUploading, setIsUploading] = React.useState(false)

  const {
    viewMode,
    gearItems,
    kits,
    packingLists,
    selectItem,
    getTotalWeight,
    addGearItem,
    addKit,
    addPackingList,
    deleteGearItem,
    deleteKit,
    deletePackingList,
    duplicateGearItem,
    duplicateKit,
    duplicatePackingList,
    uploadImage,
  } = useGear()

  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const isMobile = useMediaQuery("(max-width: 767px)")

  const items = React.useMemo(() => {
    let filteredItems: (GearItem | Kit | PackingList)[] = []

    switch (viewMode) {
      case "gear":
        filteredItems = gearItems
        break
      case "kits":
        filteredItems = kits
        break
      case "lists":
        filteredItems = packingLists
        break
      default:
        filteredItems = gearItems
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filteredItems = filteredItems.filter(
        (item) => item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
      )
    }

    return filteredItems
  }, [viewMode, gearItems, kits, packingLists, searchQuery])

  React.useEffect(() => {
    setSelectedItems([])
  }, [viewMode])

  const formatWeight = (weight: number): string => {
    return weight < 1000 ? `${weight}g` : `${(weight / 1000).toFixed(2)}kg`
  }

  const handleAddNew = () => {
    setIsAddDialogOpen(true)
  }

  const handleAddSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      if (viewMode === "gear") {
        const newGear: Omit<GearItem, "id"> = {
          name: formData.get("name") as string,
          // Cast to the expected literal union type
          category: formData.get("category") as
            | "shelter"
            | "sleep"
            | "clothing"
            | "cooking"
            | "water"
            | "electronics"
            | "other",
          weight: Number.parseInt(formData.get("weight") as string),
          price: Number.parseInt(formData.get("price") as string),
          description: formData.get("description") as string,
          notes: (formData.get("notes") as string) || undefined,
          purchaseDate: (formData.get("purchaseDate") as string) || undefined,
        }
        const addedItem = addGearItem(newGear)

        const fileInput = document.getElementById("image-upload") as HTMLInputElement | null
        if (fileInput?.files && fileInput.files[0]) {
          const file: File = fileInput.files[0]!
          setIsUploading(true)
          await uploadImage(addedItem.id, "gear", file)
          setIsUploading(false)
        }
      } else if (viewMode === "kits") {
        const newKit: Omit<Kit, "id"> = {
          name: formData.get("name") as string,
          // Cast to the expected literal union type
          category: formData.get("category") as "summer" | "winter" | "3-season" | "ultralight" | "custom",
          description: formData.get("description") as string,
          gearIds: [],
        }
        const addedKit = addKit(newKit)

        const fileInput = document.getElementById("image-upload") as HTMLInputElement | null
        if (fileInput?.files && fileInput.files[0]) {
          const file: File = fileInput.files[0]!
          setIsUploading(true)
          await uploadImage(addedKit.id, "kit", file)
          setIsUploading(false)
        }
      } else if (viewMode === "lists") {
        const newList: Omit<PackingList, "id"> = {
          name: formData.get("name") as string,
          description: formData.get("description") as string,
          date: formData.get("date") as string,
          gearIds: [],
          kitIds: [],
        }
        const addedList = addPackingList(newList)

        const fileInput = document.getElementById("image-upload") as HTMLInputElement | null
        if (fileInput?.files && fileInput.files[0]) {
          const file: File = fileInput.files[0]!
          setIsUploading(true)
          await uploadImage(addedList.id, "list", file)
          setIsUploading(false)
        }
      }

      setIsAddDialogOpen(false)
    } catch (error) {
      console.error("Error adding item:", error)
    }
  }

  const handleDelete = (item: GearItem | Kit | PackingList, e: React.MouseEvent) => {
    e.stopPropagation()

    if ("weight" in item) {
      deleteGearItem(item.id)
    } else if ("gearIds" in item && !("kitIds" in item)) {
      deleteKit(item.id)
    } else if ("kitIds" in item) {
      deletePackingList(item.id)
    }
  }

  const handleDuplicate = (item: GearItem | Kit | PackingList, e: React.MouseEvent) => {
    e.stopPropagation()

    if ("weight" in item) {
      duplicateGearItem(item.id)
    } else if ("gearIds" in item && !("kitIds" in item)) {
      duplicateKit(item.id)
    } else if ("kitIds" in item) {
      duplicatePackingList(item.id)
    }
  }

  const handleFileUpload = async (file: File, itemId: string, itemType: "gear" | "kit" | "list") => {
    setIsUploading(true)
    try {
      await uploadImage(itemId, itemType, file)
    } catch (error) {
      console.error("Error uploading file:", error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <TooltipProvider>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="select-all"
              className="translate-y-[2px]"
              checked={selectedItems.length > 0}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedItems(items)
                } else {
                  setSelectedItems([])
                }
              }}
            />
            <div className="flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={selectedItems.length === 0}>
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem>Add to kit</DropdownMenuItem>
                  <DropdownMenuItem>Add to list</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={handleAddNew}>
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Add new</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Add new</TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn("h-8 w-[180px] lg:w-[280px]", isMobile ? "w-[120px]" : "")}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-2 p-4">
            {items.map((item) => {
              if (viewMode === "gear" && "weight" in item) {
                // Render gear item
                const gearItem = item as GearItem
                return (
                  <div
                    key={gearItem.id}
                    className={cn(
                      "hover:bg-accent relative flex cursor-pointer flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all",
                      gearItem.selected && "bg-muted"
                    )}
                    onClick={() => selectItem(gearItem)}
                  >
                    <div className="flex w-full gap-3">
                      {gearItem.images && gearItem.images.length > 0 && (
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={gearItem.images[0]?.url || "/placeholder.svg"}
                            alt={gearItem.images[0]?.alt || "Gear Image"}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex flex-grow flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id={`select-${gearItem.id}`}
                              checked={selectedItems.includes(gearItem)}
                              onClick={(e) => {
                                e.stopPropagation()
                              }}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedItems([...selectedItems, gearItem])
                                } else {
                                  setSelectedItems(selectedItems.filter((i) => i.id !== gearItem.id))
                                }
                              }}
                            />
                            <span className="font-semibold">{gearItem.name}</span>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <Badge
                              variant={gearItem.category === "shelter" ? "default" : "secondary"}
                              className="ml-auto"
                            >
                              {gearItem.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-xs font-medium">{gearItem.description}</div>
                        <div className="text-muted-foreground line-clamp-2 text-xs">
                          {gearItem.notes?.substring(0, 100)}
                        </div>
                        <div className="flex w-full items-center">
                          <div className="flex items-center gap-2">
                            <Scale className="text-muted-foreground h-4 w-4" />
                            <span className="text-muted-foreground text-xs">{formatWeight(gearItem.weight)}</span>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <span className="text-muted-foreground text-xs">${gearItem.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 hover:opacity-100">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={(e) => handleDuplicate(gearItem, e)}
                      >
                        <Copy className="h-3.5 w-3.5" />
                        <span className="sr-only">Duplicate</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={(e) => handleDelete(gearItem, e)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                )
              } else if (viewMode === "kits" && "gearIds" in item && !("kitIds" in item)) {
                // Render kit
                const kit = item as Kit
                return (
                  <div
                    key={kit.id}
                    className={cn(
                      "hover:bg-accent relative flex cursor-pointer flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all",
                      kit.selected && "bg-muted"
                    )}
                    onClick={() => selectItem(kit)}
                  >
                    <div className="flex w-full gap-3">
                      {kit.images && kit.images.length > 0 && (
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={kit.images[0]?.url || "/placeholder.svg"}
                            alt={kit.images[0]?.alt || "Kit Image"}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex flex-grow flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id={`select-${kit.id}`}
                              checked={selectedItems.includes(kit)}
                              onClick={(e) => {
                                e.stopPropagation()
                              }}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedItems([...selectedItems, kit])
                                } else {
                                  setSelectedItems(selectedItems.filter((i) => i.id !== kit.id))
                                }
                              }}
                            />
                            <span className="font-semibold">{kit.name}</span>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <Badge
                              variant={kit.category === "ultralight" ? "default" : "secondary"}
                              className="ml-auto"
                            >
                              {kit.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-xs font-medium">{kit.description}</div>
                        <div className="flex w-full items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground text-xs">{kit.gearIds.length} items</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 hover:opacity-100">
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => handleDuplicate(kit, e)}>
                        <Copy className="h-3.5 w-3.5" />
                        <span className="sr-only">Duplicate</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => handleDelete(kit, e)}>
                        <Trash2 className="h-3.5 w-3.5" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                )
              } else if (viewMode === "lists" && "kitIds" in item) {
                // Render packing list
                const list = item as PackingList
                const totalWeight = getTotalWeight(list)

                return (
                  <div
                    key={list.id}
                    className={cn(
                      "hover:bg-accent relative flex cursor-pointer flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all",
                      list.selected && "bg-muted"
                    )}
                    onClick={() => selectItem(list)}
                  >
                    <div className="flex w-full gap-3">
                      {list.images && list.images.length > 0 && (
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={list.images[0]?.url || "/placeholder.svg"}
                            alt={list.images[0]?.alt || "Packing List Image"}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex flex-grow flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id={`select-${list.id}`}
                              checked={selectedItems.includes(list)}
                              onClick={(e) => {
                                e.stopPropagation()
                              }}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedItems([...selectedItems, list])
                                } else {
                                  setSelectedItems(selectedItems.filter((i) => i.id !== list.id))
                                }
                              }}
                            />
                            <span className="font-semibold">{list.name}</span>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <span className="text-muted-foreground text-xs">
                              {new Date(list.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs font-medium">{list.description}</div>
                        <div className="flex w-full items-center">
                          <div className="flex items-center gap-2">
                            <Scale className="text-muted-foreground h-4 w-4" />
                            <span className="text-muted-foreground text-xs">{formatWeight(totalWeight)}</span>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <span className="text-muted-foreground text-xs">
                              {list.gearIds.length + list.kitIds.length} items
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 hover:opacity-100">
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => handleDuplicate(list, e)}>
                        <Copy className="h-3.5 w-3.5" />
                        <span className="sr-only">Duplicate</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => handleDelete(list, e)}>
                        <Trash2 className="h-3.5 w-3.5" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
        </ScrollArea>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {viewMode === "gear"
                  ? "Add New Gear Item"
                  : viewMode === "kits"
                  ? "Add New Kit"
                  : "Add New Packing List"}
              </DialogTitle>
              <DialogDescription>
                Fill in the details below to add a new{" "}
                {viewMode === "gear" ? "gear item" : viewMode === "kits" ? "kit" : "packing list"}.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" name="name" className="col-span-3" required />
                </div>

                {viewMode === "gear" && (
                  <>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="category" className="text-right">
                        Category
                      </Label>
                      <Select name="category" defaultValue="other">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shelter">Shelter</SelectItem>
                          <SelectItem value="sleep">Sleep</SelectItem>
                          <SelectItem value="clothing">Clothing</SelectItem>
                          <SelectItem value="cooking">Cooking</SelectItem>
                          <SelectItem value="water">Water</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="weight" className="text-right">
                        Weight (g)
                      </Label>
                      <Input id="weight" name="weight" type="number" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="price" className="text-right">
                        Price ($)
                      </Label>
                      <Input id="price" name="price" type="number" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="purchaseDate" className="text-right">
                        Purchase Date
                      </Label>
                      <Input id="purchaseDate" name="purchaseDate" type="date" className="col-span-3" />
                    </div>
                  </>
                )}

                {viewMode === "kits" && (
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Select name="category" defaultValue="custom">
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="summer">Summer</SelectItem>
                        <SelectItem value="winter">Winter</SelectItem>
                        <SelectItem value="3-season">3-Season</SelectItem>
                        <SelectItem value="ultralight">Ultralight</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {viewMode === "lists" && (
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date
                    </Label>
                    <Input id="date" name="date" type="date" className="col-span-3" required />
                  </div>
                )}

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="description" name="description" className="col-span-3" required />
                </div>

                {viewMode === "gear" && (
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="notes" className="text-right">
                      Notes
                    </Label>
                    <Textarea id="notes" name="notes" className="col-span-3" />
                  </div>
                )}

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="image-upload" className="text-right">
                    Image
                  </Label>
                  <div className="col-span-3">
                    <Input id="image-upload" name="image" type="file" accept="image/*" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isUploading}>
                  {isUploading ? "Uploading..." : "Add"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  )
}
