"use client"

import {
  Backpack,
  LayoutGrid,
  ListChecks,
  Map,
  Package,
  Shirt,
  Smartphone,
  Tent,
  User,
  Utensils,
  Weight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { packLists } from "@/data/pack-lists"
import { cn } from "@/lib/utils"

export function AppLayout({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Explore</h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <Backpack className="mr-2 h-4 w-4" />
              My Gear
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Browse
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Map className="mr-2 h-4 w-4" />
              Trip Planner
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Categories</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <ListChecks className="mr-2 h-4 w-4" />
              Pack Lists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Tent className="mr-2 h-4 w-4" />
              Shelter
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Shirt className="mr-2 h-4 w-4" />
              Clothing
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Utensils className="mr-2 h-4 w-4" />
              Kitchen
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Smartphone className="mr-2 h-4 w-4" />
              Electronics
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-6 text-lg font-semibold tracking-tight">My Pack Lists</h2>
          <ScrollArea className="h-[300px] px-2">
            <div className="space-y-1 p-2">
              {packLists.map((list) => (
                <Button key={list.id} variant="ghost" className="w-full justify-start font-normal">
                  <ListChecks className="mr-2 h-4 w-4" />
                  {list.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
