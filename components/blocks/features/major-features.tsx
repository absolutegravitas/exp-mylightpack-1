"use client"
const features = [
  {
    image: "/images/img1.png",
    alt: "",
    quote: "Track gear for all of your adventures",
    name: "",
    detail:
      "Keep track of all of your gear with photos, weights, maintenance, and notes to keep things organised. Works for all types of adventures from hiking, backpacking, camping, skiing, climbing, and more.",
  },
  {
    image: "/images/img1.png",
    alt: "",
    quote: "Create custom Kits to use in Lists",
    name: "",
    detail: "Organise your gear into pre-defined Kits to use in Lists or share with other myLightPack users",
  },
  {
    image: "/images/img1.png",
    alt: "",
    quote: "Packing lists for all seasons and scenarios",
    name: "",
    detail:
      "Create an unlimited number of lists for different seasons, locations, scenarios and stay organised. Add notes and other info to keep things organised.",
  },
  {
    image: "/images/img1.png",
    alt: "",
    quote: "Flexible list builder",
    name: "",
    detail: "Build your Lists easily by combinining gear, Kits or re-use public Lists from other users",
  },
  {
    image: "/images/img1.png",
    alt: "",
    quote: "Share and refine your pack with the community",
    name: "",
    detail:
      "Share your myLightPack lists anywhere or only with people you choose to get feedback, do pack shakedowns, or use as shopping checklists.",
  },
  {
    image: "/images/img1.png",
    alt: "",
    quote: "Manage group lists and track shared equipment",
    name: "",
    detail:
      "Track everyone's gear, share equipment, and coordinate group adventures for schools, hiking clubs, scouts, guides etc.",
  },
  {
    image: "/images/img1.png",
    alt: "",
    quote: "Fast, easy & works even where the Internet doesn't",
    name: "",
    detail:
      "myLightPack works on your PC, phone and tablet. Take your list with you off on adventures without internet and sync to your account when you get back to civilization.",
  },
]

import Image from "next/image"
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FeatureAccordionProps {
  className?: string
}

const placeholderImg = "/images/img1.png"

export function MajorFeatures({ className }: FeatureAccordionProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="#lg:max-w-3xl">
          <h2 className="mb-5 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-10">Key Features</h2>
          <p className="text-muted-foreground md:text-lg">
            myLightPack is designed to be flexible and powerful to meet your needs. Here are some of the key features
            that make it easy to manage your gear, kits, and packing lists.
          </p>
        </div>
      </div>
      <div className="container mx-auto py-6">
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion
              data-slot="accordion"
              className="w-full"
              type="single"
              collapsible
              defaultValue="item-0" // Expand the first item by default on mobile
            >
              {features.map((feature, index) => (
                <AccordionItem key={index} value={`item-${index}`} data-slot="accordion-item">
                  <AccordionTrigger data-slot="accordion-trigger" className="group cursor-pointer">
                    <h6 className="#text-muted-foreground group-hover:text-foreground text-xl font-semibold tracking-tighter text-pretty transition-colors">
                      {feature.quote}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent data-slot="accordion-content" className="overflow-hidden text-base text-pretty">
                    <div className="pt-0 pb-4">
                      <p className="text-muted-foreground mt-3">{feature.detail}</p>
                      <div className="relative mt-4 h-80 w-full rounded-md md:hidden">
                        <Image src={feature.image} alt={feature.alt} fill className="rounded-md object-cover" />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="bg-muted relative m-auto hidden w-1/2 overflow-hidden rounded-xl md:block">
            <div className="relative aspect-[4/3] pl-4">
              <Image src={placeholderImg} alt="Feature preview" fill className="rounded-md object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
