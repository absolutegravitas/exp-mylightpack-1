import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { useEffect } from 'react';
import { useDatabase } from "@/contexts/database-context"
import { GearItem } from "@/lib/db" // Import GearItem interface

const EditGearItemForm = ({ item, onClose }: { item: GearItem; onClose: () => void }) => {
  const { updateGearItem } = useDatabase()
  const [name, setName] = useState(item.name)
  const [brand, setBrand] = useState(item.brand)
  const [category, setCategory] = useState(item.category)
  const [weight, setWeight] = useState<number | string>(item.weight) // Change type to number | string
  const [image, setImage] = useState(item.image)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Ensure weight is a number
    const weightValue = parseFloat(weight as string) // Cast weight to string
    if (isNaN(weightValue)) {
      alert("Weight must be a number.")
      return
    }
    try {
      await updateGearItem({ ...item, name, brand, category, weight: weightValue, image })
      onClose() // Close the form after submission
    } catch (error: unknown) {
      console.error("Error updating gear item:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <Input value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" />
      <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <Input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" type="number" />
      <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <Button type="submit">Update Gear Item</Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </form>
  )
}

export default EditGearItemForm
