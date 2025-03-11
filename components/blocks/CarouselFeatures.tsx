"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const CarouselFeatures = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">Trusted by product builders</h2>
          <p className="text-muted-foreground max-w-md leading-snug font-medium">
            Mainline is built on the habits that make the best product teams successful: staying focused, moving
            quickly, and always aiming for high-quality work.
          </p>
          <button
            data-slot="button"
            className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            Read our Customer Stories{" "}
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
              className="lucide lucide-arrow-right size-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="relative mt-8 md:mt-12 lg:mt-20">
          <Carousel
            className="relative w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="overflow-hidden">
              <CarouselItem className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4">
                <Card className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                  <CardContent className="flex h-full flex-col p-0">
                    <img
                      src="/images/block/mainline/testimonials/amy-chase.webp"
                      alt="Amy Chase"
                      className="h-[288px] object-cover object-top lg:h-[328px]"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                      <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                        We're misusing Mainline as a CRM and it still works!
                      </blockquote>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold">Amy Chase</div>
                        <div className="text-muted-foreground text-xs">PM, Mercury Finance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4">
                <Card className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                  <CardContent className="flex h-full flex-col p-0">
                    <img
                      src="/images/block/mainline/testimonials/jonas-kotara.webp"
                      alt="Jonas Kotara"
                      className="h-[288px] object-cover object-top lg:h-[328px]"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                      <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                        I was able to replace 80% of my team with Mainline bots.
                      </blockquote>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold">Jonas Kotara</div>
                        <div className="text-muted-foreground text-xs">Lead Engineer, Mercury Finance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4">
                <Card className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                  <CardContent className="flex h-full flex-col p-0">
                    <img
                      src="/images/block/mainline/testimonials/kevin-yam.webp"
                      alt="Kevin Yam"
                      className="h-[288px] object-cover object-top lg:h-[328px]"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                      <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                        Founder Mode is hard enough without having a really nice PM app.
                      </blockquote>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold">Kevin Yam</div>
                        <div className="text-muted-foreground text-xs">Founder, Mercury Finance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4">
                <Card className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                  <CardContent className="flex h-full flex-col p-0">
                    <img
                      src="/images/block/mainline/testimonials/kundo-marta.webp"
                      alt="Kundo Marta"
                      className="h-[288px] object-cover object-top lg:h-[328px]"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                      <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                        I can use the tool as a substitute from my PM.
                      </blockquote>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold">Kundo Marta</div>
                        <div className="text-muted-foreground text-xs">Founder, Mercury Finance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4">
                <Card className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                  <CardContent className="flex h-full flex-col p-0">
                    <img
                      src="/images/block/mainline/testimonials/amy-chase.webp"
                      alt="Amy Chase"
                      className="h-[288px] object-cover object-top lg:h-[328px]"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                      <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                        We're misusing Mainline as a CRM and it still works!
                      </blockquote>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold">Amy Chase</div>
                        <div className="text-muted-foreground text-xs">PM, Mercury Finance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4">
                <Card className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                  <CardContent className="flex h-full flex-col p-0">
                    <img
                      src="/images/block/mainline/testimonials/jonas-kotara.webp"
                      alt="Jonas Kotara"
                      className="h-[288px] object-cover object-top lg:h-[328px]"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                      <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                        I was able to replace 80% of my team with Mainline bots.
                      </blockquote>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold">Jonas Kotara</div>
                        <div className="text-muted-foreground text-xs">Lead Engineer, Mercury Finance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4">
                <Card className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                  <CardContent className="flex h-full flex-col p-0">
                    <img
                      src="/images/block/mainline/testimonials/kevin-yam.webp"
                      alt="Kevin Yam"
                      className="h-[288px] object-cover object-top lg:h-[328px]"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                      <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                        Founder Mode is hard enough without having a really nice PM app.
                      </blockquote>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold">Kevin Yam</div>
                        <div className="text-muted-foreground text-xs">Founder, Mercury Finance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="min-w-0 shrink-0 grow basis-4/5 pl-4 md:basis-3/5 lg:basis-[28%] xl:basis-1/4">
                <Card className="text-card-foreground bg-muted h-full overflow-hidden rounded-xl border border-none shadow-sm">
                  <CardContent className="flex h-full flex-col p-0">
                    <img
                      src="/images/block/mainline/testimonials/kundo-marta.webp"
                      alt="Kundo Marta"
                      className="h-[288px] object-cover object-top lg:h-[328px]"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                      <blockquote className="text-primary text-lg leading-none! font-medium md:text-xl">
                        I can use the tool as a substitute from my PM.
                      </blockquote>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold">Kundo Marta</div>
                        <div className="text-muted-foreground text-xs">Founder, Mercury Finance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="mt-8 flex gap-3">
              <CarouselPrevious className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 border-input bg-background hover:bg-accent hover:text-accent-foreground static top-1/2 -left-12 inline-flex size-10 translate-x-0 translate-y-0 items-center justify-center gap-2 rounded-full border text-sm font-medium whitespace-nowrap shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
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
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                <span className="sr-only">Previous slide</span>
              </CarouselPrevious>
              <CarouselNext className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 border-input bg-background hover:bg-accent hover:text-accent-foreground static top-1/2 -right-12 inline-flex size-10 translate-x-0 translate-y-0 items-center justify-center gap-2 rounded-full border text-sm font-medium whitespace-nowrap shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
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
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span className="sr-only">Next slide</span>
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default CarouselFeatures
