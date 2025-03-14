"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

// Replace original features array with new key features from FeatureImageRightBlock.tsx
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

export const MajorFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideWidth = 310 // adjust if needed; unit in px
  const totalSlides = features.length * 2 // two sets
  const [animateTransition, setAnimateTransition] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  // On transition end, if we're at a duplicate slide, jump instantly without animation.
  const handleTransitionEnd = () => {
    if (currentIndex === features.length) {
      setAnimateTransition(false)
      setCurrentIndex(0)
    } else if (currentIndex === totalSlides - 1) {
      setAnimateTransition(false)
      setCurrentIndex(features.length - 1)
    }
  }

  // Re-enable transition after jump.
  useEffect(() => {
    if (!animateTransition) {
      // Re-enable transition in next tick.
      const timer = setTimeout(() => {
        setAnimateTransition(true)
      }, 0)
      return () => clearTimeout(timer)
    }
  }, [animateTransition])

  return (
    <section className="pb-32">
      <div className="container">
        {/* <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tighter">Key Features</h2>
          <p className="text-muted-foreground max-w-md leading-snug font-medium">
            {`Take inspiration from the legendary Colin Chapman (Lotus founder and designer) and use myLightPack to manage your gear, pack lists and travel light for your next adventure.`}
          </p>
          <Button className="hover:bg-accent hover:text-accent-foreground rounded-md shadow-xs">
            Read our Customer Stories
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div> */}
        <div className="relative mt-8 md:mt-12 lg:mt-20">
          <div className="relative w-full" role="region" aria-roledescription="carousel">
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                onTransitionEnd={handleTransitionEnd}
                className={`-ml-4 flex ${animateTransition ? "transition-transform duration-300" : ""}`}
                style={{ transform: `translate3d(-${currentIndex * slideWidth}px, 0px, 0px)` }}
              >
                {/* Primary testimonial cards */}
                {features.map((t, idx) => (
                  <div
                    key={`primary-${idx}`}
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4"
                  >
                    <div className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                      <div className="flex h-full flex-col p-0">
                        {t.image ? (
                          <div className="relative h-[288px] lg:h-[328px]">
                            <Image src={t.image} alt={t.alt} fill className="object-cover object-top" />
                          </div>
                        ) : null}
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                            {t.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            {t.name ? <div className="#text-sm font-semibold">{t.name}</div> : null}
                            <div className="text-muted-foreground #text-xs leading-snug">{t.detail}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {features.map((t, idx) => (
                  <div
                    key={`duplicate-${idx}`}
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4"
                  >
                    <div className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                      <div className="flex h-full flex-col p-0">
                        {t.image ? (
                          <div className="relative h-[288px] lg:h-[328px]">
                            <Image src={t.image} alt={t.alt} fill className="object-cover object-top" />
                          </div>
                        ) : null}
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                            {t.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            {t.name ? <div className="text-sm font-semibold">{t.name}</div> : null}
                            <div className="text-muted-foreground text-xs">{t.detail}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <button
                onClick={previousSlide}
                className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 border-input bg-background hover:bg-accent hover:text-accent-foreground static top-1/2 -left-12 inline-flex size-10 translate-x-0 translate-y-0 items-center justify-center gap-2 rounded-full border text-sm font-medium whitespace-nowrap shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-left"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                <span className="sr-only">Previous slide</span>
              </button>
              <button
                onClick={nextSlide}
                className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 border-input bg-background hover:bg-accent hover:text-accent-foreground static top-1/2 -right-12 inline-flex size-10 translate-x-0 translate-y-0 items-center justify-center gap-2 rounded-full border text-sm font-medium whitespace-nowrap shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <ArrowRight className="size-4" />
                <span className="sr-only">Next slide</span>
              </button>
              <div className="flex flex-col items-center gap-4 pl-6 md:flex-row">
                <button
                  data-slot="button"
                  className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center gap-2 rounded-md px-6 text-sm font-bold whitespace-nowrap shadow-lg transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-4 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkles"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                  </svg>{" "}
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
