"use client"

import { Copy, Download, File, FileText, MoreVertical, Pencil, Reply, Save, Scale, Trash2 } from "lucide-react"
import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { type GearDocument, type GearImage, type GearItem, type Kit, useGear } from "@/hooks/use-gear"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { FileUpload } from "./file-upload"

export function GearDisplay() {
  const [isEditing, setIsEditing] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState("details")
  const [isUploading, setIsUploading] = React.useState(false)

  const {
    selectedItem,
    selectItem,
    viewMode,
    getGearItemsForList,
    getKitsForList,
    gearItems,
    updateGearItem,
    updateKit,
    updatePackingList,
    uploadImage,
    uploadDocument,
    deleteImage,
    deleteDocument,
  } = useGear()

  const isMobile = useMediaQuery("(max-width: 767px)")

  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }

  // Format weight for display
  const formatWeight = (weight: number): string => {
    if (weight < 1000) {
      return `${weight}g`
    } else {
      return `${(weight / 1000).toFixed(2)}kg`
    }
  }

  // Handle image upload
  const handleImageUpload = async (file: File) => {
    if (!selectedItem) return

    setIsUploading(true)
    try {
      if ("weight" in selectedItem) {
        await uploadImage(selectedItem.id, "gear", file)
      } else if ("gearIds" in selectedItem && !("kitIds" in selectedItem)) {
        await uploadImage(selectedItem.id, "kit", file)
      } else if ("kitIds" in selectedItem) {
        await uploadImage(selectedItem.id, "list", file)
      }
    } catch (error) {
      console.error("Error uploading image:", error)
    } finally {
      setIsUploading(false)
    }
  }

  // Handle document upload
  const handleDocumentUpload = async (file: File) => {
    if (!selectedItem) return

    setIsUploading(true)
    try {
      if ("weight" in selectedItem) {
        await uploadDocument(selectedItem.id, "gear", file)
      } else if ("gearIds" in selectedItem && !("kitIds" in selectedItem)) {
        await uploadDocument(selectedItem.id, "kit", file)
      } else if ("kitIds" in selectedItem) {
        await uploadDocument(selectedItem.id, "list", file)
      }
    } catch (error) {
      console.error("Error uploading document:", error)
    } finally {
      setIsUploading(false)
    }
  }

  // Handle image delete
  const handleImageDelete = (imageId: string) => {
    if (!selectedItem) return

    if ("weight" in selectedItem) {
      deleteImage(selectedItem.id, imageId, "gear")
    } else if ("gearIds" in selectedItem && !("kitIds" in selectedItem)) {
      deleteImage(selectedItem.id, imageId, "kit")
    } else if ("kitIds" in selectedItem) {
      deleteImage(selectedItem.id, imageId, "list")
    }
  }

  // Handle document delete
  const handleDocumentDelete = (documentId: string) => {
    if (!selectedItem) return

    if ("weight" in selectedItem) {
      deleteDocument(selectedItem.id, documentId, "gear")
    } else if ("gearIds" in selectedItem && !("kitIds" in selectedItem)) {
      deleteDocument(selectedItem.id, documentId, "kit")
    } else if ("kitIds" in selectedItem) {
      deleteDocument(selectedItem.id, documentId, "list")
    }
  }

  // Render images gallery
  const renderImagesGallery = (images?: GearImage[]) => {
    if (!images || images.length === 0) {
      return (
        <div className="bg-muted/20 rounded-md border p-8 text-center">
          <p className="text-muted-foreground">No images available</p>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((image) => (
          <div key={image.id} className="group relative">
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              className="h-40 w-full rounded-md border object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <Button variant="ghost" size="icon" className="text-white" onClick={() => handleImageDelete(image.id)}>
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Render documents list
  const renderDocumentsList = (documents?: GearDocument[]) => {
    if (!documents || documents.length === 0) {
      return (
        <div className="bg-muted/20 rounded-md border p-8 text-center">
          <p className="text-muted-foreground">No documents available</p>
        </div>
      )
    }

    return (
      <div className="space-y-2">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between rounded-md border p-3">
            <div className="flex items-center gap-2">
              {doc.type === "pdf" ? (
                <FileText className="h-5 w-5 text-red-500" />
              ) : doc.type === "txt" ? (
                <File className="h-5 w-5 text-blue-500" />
              ) : (
                <File className="h-5 w-5 text-gray-500" />
              )}
              <span>{doc.name}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href={doc.url} target="_blank" rel="noopener noreferrer" download>
                  <Download className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => handleDocumentDelete(doc.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!selectedItem) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-lg font-medium">
            {viewMode === "gear"
              ? "Select a gear item to view details"
              : viewMode === "kits"
              ? "Select a kit to view details"
              : "Select a packing list to view details"}
          </h3>
          <p className="text-muted-foreground text-sm">No item selected</p>
        </div>
      </div>
    )
  }

  // Render gear item details
  if ("weight" in selectedItem && "category" in selectedItem && !("kitIds" in selectedItem)) {
    const gearItem = selectedItem as GearItem

    return (
      <TooltipProvider>
        <div className="flex h-full flex-col">
          <div className="flex items-center border-b p-2 md:p-4">
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => selectItem(null)}
                    className={cn(isMobile ? "md:hidden" : "hidden")}
                  >
                    <Reply className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Back</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Duplicate</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Duplicate</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Delete</TooltipContent>
              </Tooltip>
              <Separator orientation="vertical" className="mx-1 h-6" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={handleEditClick}>
                    {isEditing ? <Save className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
                    <span className="sr-only">{isEditing ? "Save" : "Edit"}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isEditing ? "Save" : "Edit"}</TooltipContent>
              </Tooltip>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Scale className="text-muted-foreground h-4 w-4" />
              <span className="text-muted-foreground text-xs">{formatWeight(gearItem.weight)}</span>
              <Separator orientation="vertical" className="mx-1 h-6" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Add to kit</DropdownMenuItem>
                  <DropdownMenuItem>Add to list</DropdownMenuItem>
                  <DropdownMenuItem>View history</DropdownMenuItem>
                  <DropdownMenuItem>Export details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden">
            <div className="border-b">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="details"
                  className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none border-b-2 border-b-transparent px-4 pt-2 pb-3 font-semibold"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="images"
                  className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none border-b-2 border-b-transparent px-4 pt-2 pb-3 font-semibold"
                >
                  Images
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none border-b-2 border-b-transparent px-4 pt-2 pb-3 font-semibold"
                >
                  Documents
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-auto p-4">
              <div className="mx-auto max-w-3xl">
                <TabsContent value="details" className="mt-0 space-y-6">
                  {isEditing ? (
                    // Edit mode
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue={gearItem.name} />
                      </div>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select defaultValue={gearItem.category}>
                            <SelectTrigger>
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
                        <div className="space-y-2">
                          <Label htmlFor="purchase-date">Purchase Date</Label>
                          <Input id="purchase-date" type="date" defaultValue={gearItem.purchaseDate} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="weight">Weight (g)</Label>
                          <Input id="weight" type="number" defaultValue={gearItem.weight.toString()} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="price">Price ($)</Label>
                          <Input id="price" type="number" defaultValue={gearItem.price.toString()} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" defaultValue={gearItem.description} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea id="notes" defaultValue={gearItem.notes} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Button onClick={handleEditClick}>Save</Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // View mode
                    <>
                      <div>
                        <h1 className="text-xl font-bold md:text-2xl">{gearItem.name}</h1>
                        <div className="mt-2 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
                          <div className="flex items-center gap-2">
                            <Badge variant={gearItem.category === "shelter" ? "default" : "secondary"}>
                              {gearItem.category}
                            </Badge>
                          </div>
                          <div className="text-muted-foreground ml-0 flex items-center gap-2 text-xs md:ml-auto">
                            {gearItem.purchaseDate && (
                              <span>Purchased: {new Date(gearItem.purchaseDate).toLocaleDateString()}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Weight</h3>
                          <p className="text-sm">{formatWeight(gearItem.weight)}</p>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Price</h3>
                          <p className="text-sm">${gearItem.price}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium">Description</h3>
                        <p className="text-sm">{gearItem.description}</p>
                      </div>
                      {gearItem.notes && (
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Notes</h3>
                          <p className="text-sm">{gearItem.notes}</p>
                        </div>
                      )}
                    </>
                  )}
                </TabsContent>

                <TabsContent value="images" className="mt-0 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold">Images</h2>
                    </div>

                    {renderImagesGallery(gearItem.images)}

                    <div className="pt-4">
                      <FileUpload
                        onUpload={handleImageUpload}
                        accept="image/*"
                        label="Upload Image"
                        isUploading={isUploading}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="documents" className="mt-0 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold">Documents</h2>
                    </div>

                    {renderDocumentsList(gearItem.documents)}

                    <div className="pt-4">
                      <FileUpload
                        onUpload={handleDocumentUpload}
                        accept=".pdf,.txt,.doc,.docx"
                        label="Upload Document"
                        isUploading={isUploading}
                      />
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </TooltipProvider>
    )
  }

  // Render kit details
  else if ("gearIds" in selectedItem && !("kitIds" in selectedItem)) {
    const kit = selectedItem as Kit
    const kitGear = gearItems.filter((item) => kit.gearIds.includes(item.id))
    const totalWeight = kitGear.reduce((sum, item) => sum + item.weight, 0)

    return <></>
  }
}
