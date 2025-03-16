"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { useDatabase } from "@/contexts/database-context"
import { PackList } from "@/lib/db"

interface PackListFormProps {
  packList?: PackList
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: (packList: PackList) => void
}

export function PackListForm({ packList, open, onOpenChange, onSave }: PackListFormProps) {
  const { addPackList, updatePackList } = useDatabase()
  const [name, setName] = useState(packList?.name || "")
  const [description, setDescription] = useState(packList?.description || "")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      toast.error("Pack list name is required")
      return
    }

    try {
      setIsSubmitting(true)

      if (packList) {
        // Update existing pack list
        const updated = await updatePackList({
          ...packList,
          name,
          description,
        })
        onSave?.(updated)
        toast.success(`${name} has been updated successfully.`)
      } else {
        // Create new pack list
        const newPackList = await addPackList({
          name,
          description,
          items: 0,
          totalWeight: 0,
        })
        onSave?.(newPackList)
        toast.success(`${name} has been created successfully.`)
      }

      onOpenChange(false)
      // Reset form after successful submission
      if (!packList) {
        setName("")
        setDescription("")
      }
    } catch (error) {
      console.error("Error saving pack list:", error)
      toast.error("Failed to save pack list. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{packList ? "Edit Pack List" : "Create New Pack List"}</SheetTitle>
          <SheetDescription>
            {packList
              ? "Update the details of your existing pack list."
              : "Create a new pack list to organize your gear for different trips."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Summer Backpacking" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Lightweight setup for summer hiking"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </SheetClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : packList ? "Update" : "Create"}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
