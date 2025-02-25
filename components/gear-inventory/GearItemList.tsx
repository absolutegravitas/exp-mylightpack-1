"use client"
import React, { useEffect, useState } from "react"
import { db, GearItem } from "@/lib/indexedDbClient" // Import GearItem type and db

interface GearItemListProps {
  refresh: boolean // Define refresh prop
}

const GearItemList: React.FC<GearItemListProps> = ({ refresh }) => {
  // Use GearItemListProps
  const [gearItems, setGearItems] = useState<GearItem[]>([])

  useEffect(() => {
    const fetchGearItems = async () => {
      const items = await db.getAllGearItems() // Use db.getAllGearItems() to fetch items
      setGearItems(items)
    }

    fetchGearItems()
  }, [refresh]) // Re-fetch items when refresh prop changes

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Gear Inventory</h2>
      {gearItems.length === 0 ? (
        <p>No gear items added yet.</p>
      ) : (
        <ul>
          {gearItems.map((item) => (
            <li key={item.id} className="mb-2 rounded border p-2">
              <h3 className="font-semibold">{item.name}</h3>
              <p>Weight: {item.weight}g</p>
              {item.brand && <p>Brand: {item.brand}</p>}
              {item.price && <p>Price: ${item.price}</p>}
              {item.description && <p>Description: {item.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GearItemList
