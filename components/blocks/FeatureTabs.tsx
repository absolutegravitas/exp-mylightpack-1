"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const FeatureTabs = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6">
          <h2 className="mb-4 text-center text-3xl font-semibold lg:text-5xl">This is where your feature goes</h2>
          <p className="text-muted-foreground text-center text-balance lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aut doloribus voluptatum distinctio! Eum
          </p>
        </div>
        <div className="mt-24">
          <Tabs
            defaultValue="services"
            orientation="horizontal"
            className="mx-auto flex w-fit flex-col items-center gap-8 md:gap-12"
          >
            <TabsList
              aria-orientation="horizontal"
              className="bg-muted text-muted-foreground flex h-auto w-fit flex-wrap items-center justify-center gap-x-2 rounded-lg p-2"
              tabIndex={0}
              // orientation="horizontal"
              style={{ outline: "none" }}
            >
              <TabsTrigger
                value="product"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                Product
              </TabsTrigger>
              <TabsTrigger
                value="services"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                Services
              </TabsTrigger>
              <TabsTrigger
                value="company"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                Company
              </TabsTrigger>
              <TabsTrigger
                value="portfolio"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                Portfolio
              </TabsTrigger>
              <TabsTrigger
                value="blog"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] hover:bg-white focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm md:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                Blog
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="services"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 max-w-screen-lg flex-1 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0"
            >
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-semibold md:text-4xl">Customize and build</h2>
                  <p className="text-muted-foreground text-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, voluptatibus.
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
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="font-medium">A block for everything</span>
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
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="font-medium">Easy to use</span>
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
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="font-medium">Ready to use</span>
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
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <img
                  alt="Customize and build"
                  className="order-first max-h-[400px] w-full rounded-lg object-cover md:order-last"
                  src="/images/block/placeholder-2.svg"
                />
              </div>
            </TabsContent>
            <TabsContent
              value="product"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 max-w-screen-lg flex-1 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0"
            >
              Product content
            </TabsContent>
            <TabsContent
              value="company"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 max-w-screen-lg flex-1 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0"
            >
              Company content
            </TabsContent>
            <TabsContent
              value="portfolio"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 max-w-screen-lg flex-1 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0"
            >
              Portfolio content
            </TabsContent>
            <TabsContent
              value="blog"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 max-w-screen-lg flex-1 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0"
            >
              Blog content
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default FeatureTabs
