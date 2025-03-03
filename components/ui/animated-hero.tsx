"use client"

import { motion } from "framer-motion"
import { ArrowBigDown, ArrowDown, ChevronDownIcon, LeafyGreenIcon, MoveRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ["gram", "ounce", "kilo", "pound", "litre", "gallon", "cup", "teaspoon", "bowl"], [])

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
        <div className="#lg:py-40 #py-20 flex flex-col items-center justify-center gap-8">
          <div>
            <Link href="/blog/launch">
              <Button variant="secondary" size="sm" className="gap-4">
                Read our launch article <MoveRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">myLightPack</h1>

            <h2 className="font-regular max-w-xl text-center text-3xl tracking-tighter italic md:text-4xl md:leading-10">
              <span className="text-spektr-cyan-50">{`count every`}</span>
              <span className="#md:pt-1 #flex relative w-full items-center justify-center overflow-hidden text-center md:pb-4">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{
                      opacity: 0,
                      y: -100,
                    }}
                    // initial={{ opacity: 0, y: "-100" }}
                    transition={{
                      type: "spring",
                      stiffness: 85,
                      damping: 10,
                    }}
                    // transition={{ type: "spring", stiffness: 50 }}
                    // animate={{
                    //   opacity: 1,
                    //   y: 0,
                    // }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -10 : 10,
                            opacity: 0,
                          }
                    }
                    exit={{
                      opacity: 0,
                      y: -40,
                      x: 40,
                      filter: "blur(8px)",
                      scale: 2,
                      position: "absolute",
                    }}
                  >
                    {/* edit suggested by Sajal: https://x.com/DewanganSajal */}
                    {/* {(title || "").split(" ").map((word, wordIndex) => (
                      <motion.span
                        key={word + wordIndex}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          delay: wordIndex * 0.3,
                          duration: 0.3,
                        }}
                        className="inline-block whitespace-nowrap"
                      >
                        {word.split("").map((letter, letterIndex) => (
                          <motion.span
                            key={word + letterIndex}
                            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                              delay: wordIndex * 0.3 + letterIndex * 0.05,
                              duration: 0.2,
                            }}
                            className="inline-block"
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </motion.span>
                    ))} */}
                    {` ${title}`}
                  </motion.span>
                ))}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-center text-lg leading-relaxed tracking-tight md:text-xl">
              Managing a small business today is already tough. Avoid further complications by ditching outdated,
              tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/#features">
              <Button size="lg" className="gap-4" variant="outline">
                Learn More <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" className="gap-4">
                Sign Up
                <LeafyGreenIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
