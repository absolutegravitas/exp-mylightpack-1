"use client"

import { Backpack, Box, FileText, Plus, Settings } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useGear } from "@/hooks/use-gear"
import { cn } from "@/lib/utils"

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

export function Sidebar({ className }: SidebarProps) {
  const { viewMode, setViewMode, gearItems, kits, packingLists, categoryFilter, setCategoryFilter, getCategoryCount } =
    useGear()

  // Get categories based on current view mode
  const categories = React.useMemo(() => {
    if (viewMode === "gear") {
      return [
        { id: "shelter", name: "Shelter", color: "bg-primary" },
        { id: "sleep", name: "Sleep", color: "bg-green-500" },
        { id: "clothing", name: "Clothing", color: "bg-orange-500" },
        { id: "cooking", name: "Cooking", color: "bg-blue-500" },
        { id: "water", name: "Water", color: "bg-yellow-500" },
        { id: "electronics", name: "Electronics", color: "bg-purple-500" },
        { id: "other", name: "Other", color: "bg-gray-500" },
      ]
    } else if (viewMode === "kits") {
      return [
        { id: "summer", name: "Summer", color: "bg-yellow-500" },
        { id: "winter", name: "Winter", color: "bg-blue-500" },
        { id: "3-season", name: "3-Season", color: "bg-green-500" },
        { id: "ultralight", name: "Ultralight", color: "bg-primary" },
        { id: "custom", name: "Custom", color: "bg-gray-500" },
      ]
    }
    return []
  }, [viewMode])

  // Handle category filter click
  const handleCategoryClick = (categoryId: string) => {
    if (categoryFilter === categoryId) {
      setCategoryFilter(null) // Clear filter if clicking the active category
    } else {
      setCategoryFilter(categoryId)
    }
  }

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="px-4 py-2">
        <Button className="w-full justify-start gap-2" size="sm">
          <Plus className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:inline-block">Add New</span>
        </Button>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1 py-2">
          <Button
            variant={viewMode === "gear" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start gap-2"
            onClick={() => {
              setViewMode("gear")
              setCategoryFilter(null)
            }}
          >
            <Backpack className="h-4 w-4" />
            <span className="sr-only md:not-sr-only md:inline-block">Gear</span>
            <span className="ml-auto text-xs font-medium">{gearItems.length}</span>
          </Button>
          <Button
            variant={viewMode === "kits" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start gap-2"
            onClick={() => {
              setViewMode("kits")
              setCategoryFilter(null)
            }}
          >
            <Box className="h-4 w-4" />
            <span className="sr-only md:not-sr-only md:inline-block">Kits</span>
            <span className="ml-auto text-xs font-medium">{kits.length}</span>
          </Button>
          <Button
            variant={viewMode === "lists" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start gap-2"
            onClick={() => {
              setViewMode("lists")
              setCategoryFilter(null)
            }}
          >
            <FileText className="h-4 w-4" />
            <span className="sr-only md:not-sr-only md:inline-block">Lists</span>
            <span className="ml-auto text-xs font-medium">{packingLists.length}</span>
          </Button>
        </div>

        {(viewMode === "gear" || viewMode === "kits") && (
          <>
            <Separator className="my-2" />
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-semibold">Categories</div>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={categoryFilter === category.id ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start gap-2"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <span className={`h-2 w-2 rounded-full ${category.color}`} />
                    <span className="sr-only md:not-sr-only md:inline-block">{category.name}</span>
                    <span className="ml-auto text-xs font-medium">{getCategoryCount(category.id)}</span>
                  </Button>
                ))}
              </div>
            </div>
          </>
        )}
      </ScrollArea>
      <div className="mt-auto p-4">
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span className="text-xs font-medium">Settings</span>
        </div>
      </div>
    </div>
  )
}
