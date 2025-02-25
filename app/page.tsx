"use client"
import React, { useCallback, useState } from "react" // Import useState and useCallback
import GearItemForm from "@/components/gear-inventory/GearItemForm"
import GearItemList from "@/components/gear-inventory/GearItemList"
import FeaturesSection from "@/components/landing/FeaturesSection"
import HeroDescription from "@/components/landing/HeroDescription"
import HeroTitle from "@/components/landing/HeroTitle"
import SignUpForm from "@/components/landing/SignUpForm"
// import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export default function LandingPage() {
  const [refreshList, setRefreshList] = useState(false) // State to trigger list refresh

  // useCallback to prevent re-renders
  const handleItemAdded = useCallback(() => {
    setRefreshList((prevState) => !prevState) // Toggle state to refresh list
  }, [setRefreshList])

  return (
    <Container className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />
      <GearItemForm onSubmit={handleItemAdded} /> {/* Pass handleItemAdded as onSubmit */}
      <GearItemList refresh={refreshList} /> {/* Pass refresh state to GearItemList */}
      <FeaturesSection />
    </Container>
  )
}

const HeroSection = () => {
  return (
    <div className="text-center">
      <HeroTitle />
      <HeroDescription />
      <SignUpForm />
    </div>
  )
}
