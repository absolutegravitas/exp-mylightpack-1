import React from "react"
import CreateGearListSection from "@/components/gear-lists/CreateGearListSection"
import EditGearListSection from "@/components/gear-lists/EditGearListSection"
import ViewGearListsSection from "@/components/gear-lists/ViewGearListsSection"
import { Container } from "@/components/ui/container"

export default function GearListsPage() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center">
      <CreateGearListSection />
      <ViewGearListsSection />
      <EditGearListSection />
    </Container>
  )
}
