"use client"

import { Menu as MenuIcon, User } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AppLayout } from "./app-layout"
import { Search } from "./search"

export function MenuBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    window.dispatchEvent(
      new CustomEvent("music-search", {
        detail: { query: value },
      })
    )
  }

  return (
    <div className="flex h-14 items-center border-b px-4 backdrop-blur-sm lg:h-[60px] dark:border-gray-800 dark:bg-zinc-950/80">
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[320px]">
            <SheetHeader>
              <SheetTitle>myLightPack</SheetTitle>
              <SheetDescription>Manage your gear and pack lists</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <AppLayout />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex flex-1 items-center gap-4">
        <h1 className="hidden text-xl font-semibold tracking-tighter md:block">myLightPack</h1>
        <div className="ml-auto md:ml-4">
          <Search value={searchQuery} placeholder="Search gear, brands, categories..." onChange={handleSearch} />
        </div>
      </div>
      <div className="ml-2 flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">User account</span>
        </Button>
      </div>
    </div>
  )
}
