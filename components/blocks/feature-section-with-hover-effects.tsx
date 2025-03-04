import { Boxes, CloudOff, Image, ListChecks, ListPlus, Lock, Package, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Unlimited Gear Items",
      description: "Create and manage all your Gear and track an unlimited number of items",
      icon: <Boxes />,
    },
    {
      title: "Photos and Receipts",
      description: "Store item photos, receipts and other important info",
      icon: <Image />,
    },
    {
      title: "Gear Kits",
      description: "Organise your gear into ready to go Kits to use in Lists",
      icon: <Package />,
    },
    {
      title: "Unlimited Lists",
      description: "Create &amp; track an unlimited number of List for all seasons and all situations",
      icon: <ListChecks />,
    },
    {
      title: "Easy List Builder",
      description: "Build your Lists easily from individual items, Kits or reuse public Lists from other users",
      icon: <ListPlus />,
    },
    {
      title: "Unlimited Groups",
      description: "Create &amp; manage unlimited groups for different activities, trips, or organizations",
      icon: <Users />,
    },
    {
      title: "Offline Mode",
      description: "myLightPack works everywhere the Internet doesn't",
      icon: <CloudOff />,
    },
  ]
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
    </div>
  )
}
