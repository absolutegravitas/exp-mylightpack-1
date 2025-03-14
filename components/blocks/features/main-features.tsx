"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const MainFeatures = () => {
  return (
    <section className="py-32">
      <div className="container pb-20">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-3">
            {/* <p className="text-muted-foreground text-lg">Comprehensive Investment Solutions</p> */}
            <h2 className="mb-3 text-3xl font-semibold tracking-tighter text-pretty md:mb-4 md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-4xl">
              Manage your gear, create and share your packing lists.
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-muted-foreground text-lg tracking-tighter">
              Use myLightPack to manage your gear, pack lists and travel light for your next adventure. Track your gear
              and optimize your pack weight for any trip. Whether it's the PCT Thru Hike or a solo weekend getaway,
              myLightPack helps you pack lightly and carry the right gear for your next adventure.
            </p>
            <div className="mt-10 flex gap-3">
              <Button size="lg" className="#m-4 p-8 text-2xl tracking-tighter">
                Test Drive
              </Button>
              <Button className="#m-4 p-8 text-2xl tracking-tighter" variant="secondary">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Separator className="mt-24 mb-6" /> */}
      <div className="container grid gap-8 lg:grid-cols-3">
        <div className="group relative grid overflow-hidden sm:grid-cols-2 lg:grid-cols-1">
          <div className="text-background absolute top-0 left-0 z-20 flex w-full justify-between gap-2 p-6 sm:bottom-0 sm:left-1/2 sm:w-1/2 sm:flex-col lg:bottom-auto lg:left-0 lg:w-full lg:flex-row lg:items-center">
            <div>
              <h3 className="lg:text-5x md:text-3l mb-3 text-3xl font-semibold tracking-tighter text-pretty md:mb-4 lg:mb-6 lg:max-w-2xl">
                Track your gear and create reusable Kits
              </h3>
              <p className="text-base text-pretty">
                Keep track of all of your gear with photos, weights, maintenance, and notes to keep things organised.
              </p>
            </div>
            {/* <span className="bg-background text-primary flex size-12 shrink-0 items-center justify-center rounded-full sm:self-end lg:size-14 lg:self-auto">
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
                  className="lucide lucide-arrow-right"
                  data-darkreader-inline-stroke=""
                  style={{ "--darkreader-inline-stroke": "currentColor" } as React.CSSProperties}
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span> */}
          </div>
          <img
            src="https://images.unsplash.com/photo-1698516923132-b0236bc8f3ef?q=80&amp;w=2022&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="scale-105 transition-all duration-500 group-hover:scale-[1.1]"
          />
          <div className="bg-primary z-10"></div>
        </div>
        <div className="group relative grid overflow-hidden sm:grid-cols-2 lg:grid-cols-1">
          <div className="text-background absolute top-0 left-0 z-20 flex w-full justify-between gap-2 p-6 sm:bottom-0 sm:left-1/2 sm:w-1/2 sm:flex-col lg:bottom-auto lg:left-0 lg:w-full lg:flex-row lg:items-center">
            <div>
              <h3 className="lg:text-5x md:text-3l mb-3 text-3xl font-semibold tracking-tighter text-pretty md:mb-4 lg:mb-6 lg:max-w-2xl">
                Create & share packing lists
              </h3>
              <p className="text-base text-pretty">
                Create lists for different seasons, locations, scenarios and stay organised. Mix and match gear with
                Kits.
              </p>
            </div>
            {/* <span className="bg-background text-primary flex size-12 shrink-0 items-center justify-center rounded-full sm:self-end lg:size-14 lg:self-auto">
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
                  className="lucide lucide-arrow-right"
                  data-darkreader-inline-stroke=""
                  style={{ "--darkreader-inline-stroke": "currentColor" } as React.CSSProperties}
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span> */}
          </div>
          <img
            src="https://images.unsplash.com/photo-1698402167275-7fbceb30989b?q=80&amp;w=2022&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="scale-105 transition-all duration-500 group-hover:scale-[1.1]"
          />
          <div className="bg-primary z-10"></div>
        </div>
        <div className="group relative grid overflow-hidden sm:grid-cols-2 lg:grid-cols-1">
          <div className="text-background absolute top-0 left-0 z-20 flex w-full justify-between gap-2 p-6 sm:bottom-0 sm:left-1/2 sm:w-1/2 sm:flex-col lg:bottom-auto lg:left-0 lg:w-full lg:flex-row lg:items-center">
            <div>
              <h3 className="lg:text-5x md:text-3l mb-3 text-3xl font-semibold tracking-tighter text-pretty md:mb-4 lg:mb-6 lg:max-w-2xl">
                Manage Group lists and shared gear
              </h3>
              <p>
                Ideal for schools, hiking clubs, scouts, guides etc. Track everyone's gear, share equipment, and
                coordinate group adventures.
              </p>
            </div>
            {/* <span className="bg-background text-primary flex size-12 shrink-0 items-center justify-center rounded-full sm:self-end lg:size-14 lg:self-auto">
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
                  className="lucide lucide-arrow-right"
                  data-darkreader-inline-stroke=""
                  style={{ "--darkreader-inline-stroke": "currentColor" } as React.CSSProperties}
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span> */}
          </div>
          <img
            src="https://images.unsplash.com/photo-1698402178229-863420a8ecf6?q=80&amp;w=2022&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="scale-105 transition-all duration-500 group-hover:scale-[1.1]"
          />
          <div className="bg-primary z-10"></div>
        </div>
      </div>
    </section>
  )
}
