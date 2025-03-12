"use client"

import React from "react"
import { Button } from "@/components/ui/button"

const FeatureGroup = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <p className="mb-6 text-xs font-medium tracking-wider uppercase">Simplify And add lightness.</p>
          <h3 className="mb-3 text-3xl font-semibold tracking-tighter text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            All your gear. All your lists. For all of your adventures. All in one place.
          </h3>
          <p className="text-muted-foreground mb-8 lg:max-w-2xl lg:text-lg">
            Track your gear and optimize your pack weight for any trip. Whether it's the PCT Thru Hike or a solo weekend
            getaway, mylightpack helps you pack lightly and carry the right gear for your next adventure.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="mb-2 w-full sm:mb-0 sm:w-auto">
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
                className="lucide lucide-arrow-down mr-2 size-4"
                data-darkreader-inline-stroke=""
                style={{ ["--darkreader-inline-stroke" as string]: "currentColor" }}
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
              See all below
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          <a href="#" className="group relative col-span-2 overflow-clip rounded-lg sm:max-lg:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
              alt="placeholder"
              className="absolute h-full w-full object-cover object-center"
            />
            <div className="bg-primary/60 text-primary-foreground hover:bg-primary/70 relative flex h-full w-full flex-col items-start justify-between p-4 transition-colors sm:aspect-[3/2] md:p-6 lg:p-10">
              <img
                src="/images/block/logos/astro-wordmark.svg"
                alt="placeholder logo"
                className="mb-12 h-10 invert md:h-12"
              />
              <div className="flex items-center text-xs font-medium md:text-base lg:text-lg">
                Read more{" "}
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
                  className="lucide lucide-arrow-right ml-2 size-4 transition-transform group-hover:translate-x-1"
                  data-darkreader-inline-stroke=""
                  style={{ ["--darkreader-inline-stroke" as string]: "currentColor" } as React.CSSProperties}
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </a>
          <div className="bg-accent flex flex-col justify-between rounded-lg p-4 sm:justify-end md:p-6 lg:p-10">
            <div className="mb-8 text-3xl sm:mb-2 lg:text-5xl">100+</div>
            <div className="text-xs md:text-base lg:text-lg">Metric 1</div>
          </div>
          <div className="bg-accent flex flex-col justify-between rounded-lg p-4 sm:justify-end md:p-6 lg:p-10">
            <div className="mb-8 text-3xl sm:mb-2 lg:text-5xl">5</div>
            <div className="text-xs md:text-base lg:text-lg">Metric 2</div>
          </div>
          <div className="bg-accent flex flex-col justify-between rounded-lg p-4 md:p-6 lg:p-10">
            <div className="mb-8 text-3xl lg:text-5xl">150+</div>
            <div className="text-xs md:text-base lg:text-lg">Metric 3</div>
          </div>
          <div className="bg-accent flex flex-col justify-between rounded-lg p-4 md:p-6 lg:p-10">
            <div className="mb-8 text-3xl lg:text-5xl">10</div>
            <div className="text-xs md:text-base lg:text-lg">Metric 4</div>
          </div>
          <a href="#" className="group relative col-span-2 overflow-clip rounded-lg sm:max-lg:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
              alt="placeholder"
              className="absolute h-full w-full object-cover object-center"
            />
            <div className="bg-primary/50 text-primary-foreground hover:bg-primary/70 relative flex h-full w-full flex-col items-start justify-between gap-4 p-4 transition-colors sm:aspect-[2/1] md:flex-row md:items-end md:p-6 lg:p-10">
              <div>
                <img
                  src="/images/block/logos/shadcn-ui-wordmark.svg"
                  alt="placeholder logo"
                  className="mb-8 h-8 invert md:mb-0 md:h-10"
                />
              </div>
              <div className="flex shrink-0 items-center text-xs font-medium md:text-base lg:text-lg">
                Read more{" "}
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
                  className="lucide lucide-arrow-right ml-2 size-4 transition-transform group-hover:translate-x-1"
                  data-darkreader-inline-stroke=""
                  style={{ ["--darkreader-inline-stroke" as string]: "currentColor" } as React.CSSProperties}
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeatureGroup
