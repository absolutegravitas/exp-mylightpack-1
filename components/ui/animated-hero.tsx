"use client"

import { motion } from "framer-motion"
import {
  ArrowBigDown,
  ArrowDown,
  ArrowRightIcon,
  CarIcon,
  ChevronDownIcon,
  LeafyGreenIcon,
  MoveRight,
  ShipWheelIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { TextEffect } from "@/components/ui/text-effect"
import { TextLoop } from "@/components/ui/text-loop"
import { Logo } from "./logo"

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ["gram", "ounce", "kilo", "pound", "litre"], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 pt-20 pb-10 lg:pt-40 lg:pb-20">
          <div>
            <Link href="/blog/launch" className="cursor-pointer">
              <Button
                variant="secondary"
                size="sm"
                className="hover:bg-accent-foreground hover:text-accent cursor-pointer gap-4"
              >
                Read our launch article <MoveRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            {/* <h1 className="flex scroll-m-20 items-center text-center align-middle text-4xl font-extrabold tracking-tight lg:text-5xl">
              <Logo className="h-18 w-18 pr-2" />
              myLightPack
            </h1> */}
            <h1 className="font-regular max-w-lg text-left text-5xl tracking-tighter md:text-7xl">
              <Logo className="h-18 w-18 pr-2" />
              myLightPack
            </h1>
            <h2 className="font-regular #md:leading-10 max-w-xl text-center text-2xl tracking-tighter italic md:text-3xl">
              <span className="inline-flex whitespace-pre-wrap">
                {"count every "}
                <TextLoop
                  className="overflow-y-clip"
                  transition={{
                    type: "spring",
                    stiffness: 900,
                    damping: 80,
                    mass: 10,
                  }}
                  variants={{
                    initial: {
                      y: 20,
                      rotateX: 90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                    animate: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                    exit: {
                      y: -20,
                      rotateX: -90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                  }}
                >
                  <span className="font-semibold">gram</span>
                  <span className="font-semibold">ounce</span>
                  <span className="font-semibold">kilo</span>
                  <span className="font-semibold">pound</span>
                  <span className="font-semibold">litre</span>
                  <span className="font-semibold">cup</span>
                  <span className="font-semibold">teaspoon</span>
                  <span className="font-semibold">bowl</span>
                </TextLoop>
              </span>
            </h2>
            <p className="text-muted-foreground max-w-3xl text-center text-lg leading-normal tracking-tight md:text-xl">
              {`Track your gear and optimize your pack weight for your next adventure. For solo hikers, groups and other travellers obsessed with traveling right and traveling light.`}
            </p>
            {/* <TextEffect
              per="word"
              as="h3"
              preset="blur"
              delay={1}
              speedReveal={1}
              className="text-muted-foreground max-w-3xl text-center text-lg leading-normal tracking-tight md:text-xl"
            >
              For solo hikers, groups, or general travellers obsessed with traveling right and traveling light.
            </TextEffect> */}
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/demo">
              <Button size="lg" className="gap-4" variant="outline">
                Test Drive <CarIcon className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" className="gap-4">
                Sign Up
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <section className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">Trusted by these companies</h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            <Image
              src="https://assets.vercel.com/image/upload/v1681812111/logos/vercel-logotype-dark.svg"
              alt="Vercel logo"
              width={109}
              height={48}
              className="h-7 w-auto"
            />
            <Image
              src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype.ed60a6f85c663923c4d6.svg"
              alt="Tailwind logo"
              width={109}
              height={48}
              className="h-5 w-auto"
            />
            <Image
              src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.808c310a.svg&w=384&q=75"
              alt="Supabase logo"
              width={109}
              height={48}
              className="h-6 w-auto"
            />
            <Image
              src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x312.png"
              alt="Figma logo"
              width={109}
              height={48}
              className="h-5 w-auto"
            />
            <Image
              src="https://astro.build/assets/press/full-logo-dark.svg"
              alt="Astro logo"
              width={109}
              height={48}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export { Hero }
