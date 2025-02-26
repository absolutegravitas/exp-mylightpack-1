import React from "react"
import AddGearItemSection from "@/components/gear-inventory/AddGearItemSection"
import EditGearItemSection from "@/components/gear-inventory/EditGearItemSection"
import ViewGearInventorySection from "@/components/gear-inventory/ViewGearInventorySection"
import { Container } from "@/components/ui/container"

export default function GearInventoryPage() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <AddGearItemSection />
      <ViewGearInventorySection />
      <EditGearItemSection />
    </Container>
  )
}
