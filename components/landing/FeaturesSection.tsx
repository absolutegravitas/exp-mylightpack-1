import React from "react"
import { Container } from "@/components/ui/container"
import FeatureCard from "./FeatureCard"

const FeaturesSection = () => {
  const features = [
    {
      title: "Gear Inventory Management",
      description: "Easily track and manage all your gear items with detailed information.",
    },
    {
      title: "Gear List Creation",
      description: "Create and manage gear lists for all your adventures.",
    },
    {
      title: "Weight Calculation",
      description: "Automatically calculate the total weight of your gear lists.",
    },
    {
      title: "Sharing and Collaboration",
      description: "Share your gear lists with friends and the community.",
    },
  ]

  return (
    <div className="bg-gray-100 py-12 dark:bg-gray-900">
      <Container>
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">Key Features</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default FeaturesSection
