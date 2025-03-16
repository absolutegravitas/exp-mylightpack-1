"use client"

import { PlusCircle, Scale, Weight } from "lucide-react"
import { useEffect, useState } from "react"
import { Toaster } from "sonner"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { GearItemCard } from "@/components/gear-item"
import { Search } from "@/components/search"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDatabase } from "@/contexts/database-context"
import { PackListManagement } from "./pack-list-management"
import { TripPlanner } from "./trip-planner"

export function MainContent() {
  const { gearItems } = useDatabase()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("gear")

  useEffect(() => {
    const handleSearch = (e: Event) => {
      const customEvent = e as CustomEvent
      setSearchQuery(customEvent.detail.query)
    }

    window.addEventListener("music-search", handleSearch as EventListener)
    return () => {
      window.removeEventListener("music-search", handleSearch as EventListener)
    }
  }, [])

  // Handle URL parameters for tabs
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const tab = params.get("tab")
    if (tab && ["gear", "packs", "trips"].includes(tab)) {
      setActiveTab(tab)
    }
  }, [])

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    const url = new URL(window.location.href)
    url.searchParams.set("tab", value)
    window.history.pushState({}, "", url)
  }

  // Filter gear items based on search query
  const filteredGearItems = gearItems.filter((gear) =>
    searchQuery
      ? gear.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gear.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gear.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  )

  return (
    <div className="relative">
      {/* Toast provider for notifications */}
      <Toaster position="top-right" closeButton />

      <div className="h-full px-4 py-6 lg:px-8">
        <Tabs defaultValue="gear" value={activeTab} onValueChange={handleTabChange} className="h-full space-y-6">
          <div className="space-between flex flex-col gap-4 sm:flex-row sm:items-center">
            <TabsList className="h-10">
              <TabsTrigger value="gear" className="px-4">
                My Gear
              </TabsTrigger>
              <TabsTrigger value="packs" className="px-4">
                Pack Lists
              </TabsTrigger>
              <TabsTrigger value="trips" className="px-4">
                Trip Planner
              </TabsTrigger>
            </TabsList>

            {activeTab === "gear" && (
              <div className="flex flex-1 justify-end">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Gear
                </Button>
              </div>
            )}
          </div>

          {/* My Gear Tab */}
          <TabsContent value="gear" className="border-none p-0 outline-none">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">My Gear Collection</h2>
                <p className="text-muted-foreground text-sm">Browse and manage your gear inventory</p>
              </div>
            </div>
            <Separator className="my-4" />

            {filteredGearItems.length === 0 ? (
              <div className="py-12">
                <EmptyPlaceholder />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredGearItems.map((gear) => (
                  <GearItemCard
                    key={gear.id}
                    item={gear}
                    className="w-[150px]"
                    aspectRatio="square"
                    width={150}
                    height={150}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Pack Lists Tab */}
          <TabsContent value="packs" className="h-full border-none p-0 outline-none">
            <PackListManagement />
          </TabsContent>

          {/* Trip Planner Tab */}
          <TabsContent value="trips" className="h-full border-none p-0 outline-none">
            <TripPlanner />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
