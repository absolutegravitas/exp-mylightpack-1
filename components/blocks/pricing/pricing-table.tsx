import { Check, Minus, MoveRight, PhoneCall } from "lucide-react"
import Link from "next/link"
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
    description:
      "One-time payment for lifetime access to all current and future features. Support our work with a one-off payment.",
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
        name: "Create and manage all your Gear and track an unlimited number of items.  Add photos and notes to keep things organised.",
        values: {
          solo: "Unlimited",
          groups: "Unlimited",
          lifetime: "Unlimited",
        },
      },
      // {
      //   name: "Store item photos, receipts and other important info",
      //   values: {
      //     solo: "5 per item",
      //     groups: "10 per item",
      //     lifetime: "20 per item",
      //   },
      // },
      {
        name: "Organise your gear into pre-defined Kits to use in Lists or share with other myLightPack users",
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
        name: "Create & track your packing Lists for all seasons and situations. Add notes and other info to keep things organised.",
        values: {
          solo: true,
          groups: true,
          lifetime: true,
        },
      },
      {
        name: "Build your Lists easily from items, Kits or re-use public Lists from other users",
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
    ],
  },
  // {
  //   category: "Groups",
  //   items: [
  //     {
  //       name: "Create & manage unlimited groups for different activities, trips, or organizations",
  //       values: {
  //         solo: false,
  //         groups: "Unlimited",
  //         lifetime: "Unlimited",
  //       },
  //     },
  //     {
  //       name: "Add and manage group members",
  //       values: {
  //         solo: false,
  //         groups: true,
  //         lifetime: true,
  //       },
  //     },
  //     {
  //       name: "Dedicated group spaces with shared gear libraries and lists",
  //       values: {
  //         solo: false,
  //         groups: true,
  //         lifetime: true,
  //       },
  //     },
  //     {
  //       name: "Share and collaborate on group lists with members",
  //       values: {
  //         solo: false,
  //         groups: true,
  //         lifetime: true,
  //       },
  //     },
  //     {
  //       name: "Track gear assignments and manage equipment distribution within groups",
  //       values: {
  //         solo: false,
  //         groups: true,
  //         lifetime: true,
  //       },
  //     },
  //     {
  //       name: "Create group templates for common activities or trip types",
  //       values: {
  //         solo: false,
  //         groups: true,
  //         lifetime: true,
  //       },
  //     },
  //     {
  //       name: "Analyse how your group is sharing gear across members and optimise carried weight",
  //       values: {
  //         solo: false,
  //         groups: true,
  //         lifetime: true,
  //       },
  //     },
  //   ],
  // },

  // {
  //   category: "Coming Soon (Signup to Vote and Comment on Future Features)",
  //   items: [
  //     {
  //       name: "Import Lists from LighterPack",
  //       values: {
  //         solo: "Coming Soon",
  //         groups: "Coming Soon",
  //         lifetime: "Coming Soon",
  //       },
  //     },
  //     // {
  //     //   name: "Install as app for ready and quick access on your phone",
  //     //   values: {
  //     //     solo: "Coming Soon",
  //     //     groups: "Coming Soon",
  //     //     lifetime: "Coming Soon",
  //     //   },
  //     // },
  //     {
  //       name: "Print-friendly Checklists",
  //       values: {
  //         solo: "Coming Soon",
  //         groups: "Coming Soon",
  //         lifetime: "Coming Soon",
  //       },
  //     },
  //     {
  //       name: "List Versions & Rollback",
  //       values: {
  //         solo: "Coming Soon",
  //         groups: "Coming Soon",
  //         lifetime: "Coming Soon",
  //       },
  //     },

  //     // {
  //     //   name: "AI-based List Construction",
  //     //   values: {
  //     //     solo: "Coming Soon",
  //     //     groups: "Coming Soon",
  //     //     lifetime: "Coming Soon",
  //     //   },
  //     // },
  //     {
  //       name: "Multilingual support - use myLightPack in 20+ languages",
  //       values: {
  //         solo: "Coming Soon",
  //         groups: "Coming Soon",
  //         lifetime: "Coming Soon",
  //       },
  //     },
  //     {
  //       name: "Full Data Backup & Export - You own your data at all times",
  //       values: {
  //         solo: "Coming Soon",
  //         groups: "Coming Soon",
  //         lifetime: "Coming Soon",
  //       },
  //     },
  //   ],
  // },
]
export function Pricing() {
  return (
    <section id="pricing" className="pb-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-y-4 text-center">
          <h2 className="mt-4 text-4xl font-semibold tracking-tighter">Pricing</h2>

          <div className="grid w-full grid-cols-3 divide-x pt-20 text-left lg:grid-cols-3">
            <div className="col-span-3 grid grid-cols-3 lg:relative lg:top-auto lg:col-span-3">
              {plans.map((plan) => (
                <div key={plan.name} className="flex flex-col gap-2 px-3 py-1 leading-snug md:px-6 md:py-4">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter text-pretty md:text-3xl">{plan.name}</h3>

                  <p className="mt-8 flex flex-col gap-x-2 text-xl lg:flex-row lg:items-center">
                    <span className="text-4xl">${plan.price}</span>
                    <span className="text-muted-foreground #text-sm"> / {plan.interval}</span>
                  </p>
                  <Button variant={plan.buttonVariant} className="mt-4 gap-4">
                    {plan.buttonText} <plan.buttonIcon className="h-4 w-4" />
                  </Button>
                  <p className="text-muted-foreground #text-sm py-5">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
