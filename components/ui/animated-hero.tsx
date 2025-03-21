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
import { Separator } from "@/components/ui/separator"
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
          {/* <div>
            <Link href="/blog/launch" className="cursor-pointer">
              <Button
                variant="secondary"
                size="sm"
                className="hover:bg-accent-foreground hover:text-accent cursor-pointer gap-4"
              >
                Read our launch article <MoveRight className="h-4 w-4" />
              </Button>
            </Link>
          </div> */}
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
            <Separator className="my-4 max-w-3/4" />

            <h3 className="lg:text-5x mb-3 text-center text-3xl font-semibold tracking-tighter text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl">
              Track your gear and optimize your pack for your next adventure.
            </h3>
            {/* <p className="text-muted-foreground max-w-3xl text-center text-lg leading-normal tracking-tight md:text-xl">
              {`Track your gear and optimize your pack weight for your next adventure. For hikers, groups and all travellers obsessed traveling light.`}
            </p> */}
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/demo">
              <Button size="lg" className="gap-4" variant="outline">
                Test Drive <CarIcon className="h-6 w-6" />
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
    </div>
  )
}

export { Hero }
