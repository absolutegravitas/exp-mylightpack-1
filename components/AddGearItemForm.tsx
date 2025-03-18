import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDatabase } from "@/contexts/database-context"
import { GearItem } from "@/lib/db" // Import GearItem interface to resolve the type error

interface AddGearItemFormProps {
  onClose: () => void
}

const AddGearItemForm: React.FC<AddGearItemFormProps> = ({ onClose }) => {
  const { addGearItem, refreshGearItems } = useDatabase()
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [weight, setWeight] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !brand || !category || !weight || !image) {
      alert("Please fill in all fields.")
      return
    }

    try {
      const newGearItem = await addGearItem({ name, brand, category, weight: parseFloat(weight), image })
      // Reset form fields
      setName("")
      setBrand("")
      setCategory("")
      setWeight("")
      setImage("")
      // Optionally refresh gear items here if needed
      await refreshGearItems()
      // Call onClose to close the form
      onClose()
    } catch (error) {
      console.error("Error adding gear item:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <Input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" required />
      <Input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <Input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight (lbs)"
        required
      />
      <Input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
      <Button type="submit">Add Gear Item</Button>
    </form>
  )
}

export default AddGearItemForm
