"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const FeaturesMain = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <p className="mb-6 text-xs font-medium tracking-wider uppercase">Simplify And add lightness.</p>
          <h3 className="mb-3 text-3xl font-semibold tracking-tighter text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            myLightPack Features
          </h3>
          <p className="text-muted-foreground mb-8 lg:max-w-2xl lg:text-lg">
            Track your gear and optimize your pack weight for any trip. Whether it's the PCT Thru Hike or a solo weekend
            getaway, mylightpack helps you pack lightly and carry the right gear for your next adventure.
          </p>
        </div>
        <div className="#mt-24">
          <div dir="ltr" className="mx-auto flex w-fit flex-col items-center gap-8 md:gap-12">
            <Tabs defaultValue="blog" orientation="horizontal">
              <TabsList className="bg-muted text-muted-foreground flex h-auto w-fit flex-wrap items-center justify-center gap-x-2 rounded-lg p-2">
                <TabsTrigger
                  value="product"
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  Gear & Kits
                </TabsTrigger>
                <TabsTrigger
                  value="services"
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  Lists
                </TabsTrigger>
                <TabsTrigger
                  value="company"
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  Sharing
                </TabsTrigger>
                <TabsTrigger
                  value="portfolio"
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  Groups
                </TabsTrigger>
                <TabsTrigger
                  value="blog"
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  Offline Mode
                </TabsTrigger>
              </TabsList>
              <TabsContent value="product"></TabsContent>
              <TabsContent value="services"></TabsContent>
              <TabsContent value="company"></TabsContent>
              <TabsContent value="portfolio"></TabsContent>
              <TabsContent value="blog">
                <div className="grid grid-cols-1 items-center gap-10 py-6 md:grid-cols-2">
                  <div>
                    <h2 className="mb-4 text-2xl font-semibold tracking-tighter md:text-4xl">
                      Offline Mode. No app to install. Works everywhere the Internet doesn't.
                    </h2>
                    <p className="text-muted-foreground text-xl">
                      Take your list with you off on adventures without internet and sync to your account when you get
                      back to civilization. myLightPack works even where the Internet doesnt and on every device. No
                      apps to install.
                    </p>
                    <ul className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-2">
                      <li className="flex items-center gap-2">
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
                          className="lucide lucide-circle-check w-4"
                          data-darkreader-inline-stroke=""
                          style={{ "--darkreader-inline-stroke": "currentColor" } as React.CSSProperties}
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="font-medium">Variety of options</span>
                      </li>
                      <li className="flex items-center gap-2">
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
                          className="lucide lucide-circle-check w-4"
                          data-darkreader-inline-stroke=""
                          style={{ "--darkreader-inline-stroke": "currentColor" } as React.CSSProperties}
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="font-medium">Keep it simple</span>
                      </li>
                      <li className="flex items-center gap-2">
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
                          className="lucide lucide-circle-check w-4"
                          data-darkreader-inline-stroke=""
                          style={{ "--darkreader-inline-stroke": "currentColor" } as React.CSSProperties}
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="font-medium">Get creative</span>
                      </li>
                    </ul>
                    <a href="#" className="mt-8 flex items-center gap-2 font-medium hover:underline">
                      Learn more
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
                        className="lucide lucide-arrow-right w-4"
                        data-darkreader-inline-stroke=""
                        style={{ "--darkreader-inline-stroke": "currentColor" } as React.CSSProperties}
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <img
                    alt="Customize and build"
                    className="order-first max-h-[400px] w-full rounded-lg object-cover md:order-last"
                    src="/images/img2.jpg"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesMain
