import FeatureCard from "@/components/landing/FeatureCard"

const features = [
  {
    title: "Track Gear Weight",
    description: "Easily add and track the weight of all your backpacking gear.",
  },
  {
    title: "Create Gear Lists",
    description: "Create and manage gear lists for different types of trips.",
  },
  {
    title: "Share Lists",
    description: "Share your gear lists with others.",
  },
]

export default function FeaturesSection() {
  return (
    <div className="features container py-16">
      <h2 className="mb-8 text-center text-3xl font-semibold">Features</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  )
}
