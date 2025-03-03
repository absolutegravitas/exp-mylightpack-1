import { Check, Minus, MoveRight, PhoneCall } from "lucide-react"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Solo",
    description:
      "Manage your gear in one place and create lists for any scenario to give you more time to focus on your adventures.",
    price: 20,
    interval: "year",
    buttonText: "Get Started",
    buttonIcon: MoveRight,
    buttonVariant: "default" as const,
  },
  {
    name: "Groups",
    description:
      "Ideal for schools, hiking clubs, scouts, guides etc. Track everyone's gear, share equipment, and coordinate group adventures.",
    price: 40,
    interval: "year",
    buttonText: "Get Started",
    buttonIcon: MoveRight,
    buttonVariant: "default" as const,
  },
  {
    name: "Lifetime",
    description: "One-time payment for lifetime access to all current and future features. Perfect for supportng us.",
    price: 100,
    interval: "once",
    buttonText: "Get Started",
    buttonIcon: MoveRight,
    buttonVariant: "default" as const,
  },
]

const features = [
  {
    category: "Gear",
    items: [
      {
        name: "Create and manage all your Gear and track an unlimited number of items",
        values: {
          solo: "Unlimited",
          groups: "Unlimited",
          lifetime: "Unlimited",
        },
      },
      {
        name: "Store item photos, receipts and other important info",
        values: {
          solo: "5 per item",
          groups: "10 per item",
          lifetime: "20 per item",
        },
      },
      {
        name: "Organise your gear into ready to go Kits to use in Lists",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Create Kit Templates to use later or share with other myLightPack users",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Fast searching. Customizable tags, categories, and views",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },
    ],
  },
  {
    category: "Lists",
    items: [
      {
        name: "Create & track an unlimited number of List for all seasons and all situations",
        values: {
          solo: "Unlimited",
          groups: "Unlimited",
          lifetime: "Unlimited",
        },
      },
      {
        name: "Build your Lists easily from individual items, Kits or reuse public Lists from other users",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Create List Templates to use later or share with other myLightPack users",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Share your lists publicly or privately and get feedback, do pack shakedowns, or use as shopping checklists",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },

      {
        name: "Fast searching. Customizable tags, categories, and views",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },
    ],
  },
  {
    category: "Groups",
    items: [
      {
        name: "Create & manage unlimited groups for different activities, trips, or organizations",
        values: {
          solo: false,
          groups: "Unlimited",
          lifetime: "Unlimited",
        },
      },
      {
        name: "Add and manage group members",
        values: {
          solo: false,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Dedicated group spaces with shared gear libraries and lists",
        values: {
          solo: false,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Share and collaborate on group lists with members",
        values: {
          solo: false,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Track gear assignments and manage equipment distribution within groups",
        values: {
          solo: false,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Create group templates for common activities or trip types",
        values: {
          solo: false,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Analyse how your group is sharing gear across members and optimise carried weight",
        values: {
          solo: false,
          groups: true,
          lifetime: true,
        },
      },
    ],
  },
  {
    category: "Other",
    items: [
      {
        name: "Offline Mode. myLightPack works everywhere the Internet doesn't",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },

      {
        name: "Secure Passwordless Login",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Get myLightPack to work the way you want. Vote and Comment on Future Features",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },
    ],
  },
  {
    category: "Coming Soon (Signup to Vote and Comment on Future Features)",
    items: [
      {
        name: "Import Lists from LighterPack",
        values: {
          solo: "Coming Soon",
          groups: "Coming Soon",
          lifetime: "Coming Soon",
        },
      },
      {
        name: "Install as app for ready and quick access on your phone",
        values: {
          solo: "Coming Soon",
          groups: "Coming Soon",
          lifetime: "Coming Soon",
        },
      },
      {
        name: "List Versions & Rollback",
        values: {
          solo: "Coming Soon",
          groups: "Coming Soon",
          lifetime: "Coming Soon",
        },
      },
      {
        name: "Print-friendly Checklists",
        values: {
          solo: "Coming Soon",
          groups: "Coming Soon",
          lifetime: "Coming Soon",
        },
      },
      {
        name: "AI-based List Construction",
        values: {
          solo: "Coming Soon",
          groups: "Coming Soon",
          lifetime: "Coming Soon",
        },
      },
      {
        name: "Multilingual support - use myLightPack in 20+ languages",
        values: {
          solo: "Coming Soon",
          groups: "Coming Soon",
          lifetime: "Coming Soon",
        },
      },
      {
        name: "Full Data Backup & Export - You own your data at all times",
        values: {
          solo: "Coming Soon",
          groups: "Coming Soon",
          lifetime: "Coming Soon",
        },
      },
    ],
  },
]
export default function Pricing() {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "string") {
      return <p className="text-muted-foreground text-sm">{value}</p>
    }
    return value ? <Check className="text-primary h-4 w-4" /> : <Minus className="text-muted-foreground h-4 w-4" />
  }

  return (
    <div id="pricing" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Badge>Clear and Transparent Pricing</Badge>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular max-w-xl text-center text-3xl tracking-tighter md:text-5xl">Pricing</h2>
          </div>
          <div className="grid w-full grid-cols-3 divide-x pt-20 text-left lg:grid-cols-4">
            {/* Empty cell for alignment */}
            <div className="col-span-3 lg:col-span-1"></div>

            {/* Pricing plan headers - Add sticky positioning for mobile */}
            <div className="bg-background sticky top-20 z-10 col-span-3 grid grid-cols-3 lg:relative lg:top-auto lg:col-span-3">
              {plans.map((plan) => (
                <div key={plan.name} className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
                  <p className="stext-2xl">{plan.name}</p>
                  <p className="mt-8 flex flex-col gap-x-2 text-xl lg:flex-row lg:items-center">
                    <span className="text-4xl">${plan.price}</span>
                    <span className="text-muted-foreground text-sm"> / {plan.interval}</span>
                  </p>
                  <Button variant={plan.buttonVariant} className="mt-4 gap-4">
                    {plan.buttonText} <plan.buttonIcon className="h-4 w-4" />
                  </Button>
                  <p className="text-muted-foreground py-5 text-sm">{plan.description}</p>
                </div>
              ))}
            </div>

            {/* Features header */}
            <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
              <b>Features</b>
            </div>
            <div></div>
            <div></div>
            <div></div>

            {/* Feature categories and items */}
            {features.map((category) => (
              <>
                {/* Category header */}
                <div
                  key={`category-${category.category}`}
                  className="bg-muted/50 col-span-3 px-3 py-4 lg:col-span-1 lg:px-6"
                >
                  <b>{category.category}</b>
                </div>
                <div className="bg-muted/50"></div>
                <div className="bg-muted/50"></div>
                <div className="bg-muted/50"></div>

                {/* Category items */}
                {category.items.map((item) => (
                  <React.Fragment key={`item-${item.name}`}>
                    <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">{item.name}</div>
                    <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">{renderValue(item.values.solo)}</div>
                    <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
                      {renderValue(item.values.groups)}
                    </div>
                    <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
                      {renderValue(item.values.lifetime)}
                    </div>
                  </React.Fragment>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
