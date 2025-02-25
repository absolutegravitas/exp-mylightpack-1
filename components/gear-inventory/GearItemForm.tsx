"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { db, GearItem } from "@/lib/indexedDbClient" // Import GearItem and db from "@/lib/indexedDbClient"

interface GearItemFormProps {
  onSubmit?: () => void // onSubmit is now optional and doesn't take data
}

const GearItemForm: React.FC<GearItemFormProps> = ({ onSubmit }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    // Make handleSubmit async
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries()) as { [key: string]: string } // Type FormData entries

    const gearItem: GearItem = {
      id: crypto.randomUUID(), // Generate UUID
      name: data.name ?? "",
      weight: data.weight ? parseInt(data.weight, 10) : undefined,
      brand: data.brand ?? undefined,
      price: data.price ? parseFloat(data.price) : undefined,
      usage: data.usage ?? undefined, // ADD USAGE FIELD
      description: data.description ?? undefined,
    }

    await db.addGearItem(gearItem) // Use db.addGearItem to add the item
    if (onSubmit) {
      onSubmit() // Call onSubmit to refresh the list in parent component
    }
    // Optionally clear the form here if needed
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <Input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
          Weight (grams)
        </label>
        <Input type="number" id="weight" name="weight" />
      </div>
      <div>
        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
          Brand
        </label>
        <Input type="text" id="brand" name="brand" />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price ($)
        </label>
        <Input type="number" id="price" name="price" />
      </div>
      <div>
        <label htmlFor="usage" className="block text-sm font-medium text-gray-700">
          {" "}
          {/* USAGE FIELD */}
          Usage
        </label>
        <Input type="text" id="usage" name="usage" /> {/* USAGE FIELD */}
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <Input type="text" id="description" name="description" />
      </div>
      <Button type="submit">Add Gear Item</Button>
    </form>
  )
}

export default GearItemForm
