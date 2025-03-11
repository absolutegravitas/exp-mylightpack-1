"use client"
import { motion, type MotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { FlipWords } from "@/components/ui/flip-words"
import { TextEffect } from "@/components/ui/text-effect"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [1, 0.5], [0.5, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-400, 500]), springConfig)
  return (
    <div className="#py-20 #lg:py-40 w-full">
      <div className="container mx-auto">
        <div className="#gap-10 flex flex-col">
          <div
            ref={ref}
            className="#h-[200vh] #py-40 relative flex flex-col self-auto overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]"
          >
            <motion.div
              style={{
                rotateX,
                rotateZ,
                translateY,
                opacity,
              }}
              className=""
            >
              <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
                {firstRow.map((product) => (
                  <ProductCard product={product} translate={translateX} key={product.title} />
                ))}
              </motion.div>
              <motion.div className="mb-20 flex flex-row space-x-20">
                {secondRow.map((product) => (
                  <ProductCard product={product} translate={translateXReverse} key={product.title} />
                ))}
              </motion.div>
              <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
                {thirdRow.map((product) => (
                  <ProductCard product={product} translate={translateX} key={product.title} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <section className="py-32">
        <div className="container">
          <span className="text-muted-foreground text-sm uppercase">Build with blocks</span>
          <h2 className="mt-4 mb-5 text-3xl font-extrabold">Our Core Features</h2>
          <div className="mb-20 flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-8">
            <a href="#" className="group text-muted-foreground flex items-center gap-2 hover:cursor-pointer">
              All blocks examples
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
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
                  className="lucide lucide-move-right size-4"
                >
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </span>
            </a>
            <a href="#" className="group text-muted-foreground flex items-center gap-2 hover:cursor-pointer">
              All features examples
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
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
                  className="lucide lucide-move-right size-4"
                >
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="mb-12 flex w-full items-center justify-between gap-28">
            <div className="w-full md:max-w-[400px]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h6 className="text-muted-foreground text-xl font-semibold text-black">Performance</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-0 pb-4">
                      <p className="text-muted-foreground mt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus
                        quae quos deserunt!
                      </p>
                      <div className="mt-4 md:hidden">
                        <img
                          alt="placeholder"
                          className="h-full max-h-80 w-full rounded-md object-cover"
                          src="/images/img2.jpg"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <h6 className="text-muted-foreground text-muted-foreground text-xl font-semibold">Innovation</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-0 pb-4">
                      <p className="text-muted-foreground mt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus
                        quae quos deserunt!
                      </p>
                      <div className="mt-4 md:hidden">
                        <img
                          alt="placeholder"
                          className="h-full max-h-80 w-full rounded-md object-cover"
                          src="/images/img3.jpg"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <h6 className="text-muted-foreground text-muted-foreground text-xl font-semibold">Quality</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-0 pb-4">
                      <p className="text-muted-foreground mt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus
                        quae quos deserunt!
                      </p>
                      <div className="mt-4 md:hidden">
                        <img
                          alt="placeholder"
                          className="h-full max-h-80 w-full rounded-md object-cover"
                          src="/images/img2.jpg"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <h6 className="text-muted-foreground text-muted-foreground text-xl font-semibold">Accessibility</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-0 pb-4">
                      <p className="text-muted-foreground mt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus
                        quae quos deserunt!
                      </p>
                      <div className="mt-4 md:hidden">
                        <img
                          alt="placeholder"
                          className="h-full max-h-80 w-full rounded-md object-cover"
                          src="/images/img1.png"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    <h6 className="text-muted-foreground text-muted-foreground text-xl font-semibold">Affordability</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-0 pb-4">
                      <p className="text-muted-foreground mt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus
                        quae quos deserunt!
                      </p>
                      <div className="mt-4 md:hidden">
                        <img
                          alt="placeholder"
                          className="h-full max-h-80 w-full rounded-md object-cover"
                          src="/images/img1.png"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    <h6 className="text-muted-foreground text-muted-foreground text-xl font-semibold">
                      Customer Support
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-0 pb-4">
                      <p className="text-muted-foreground mt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus
                        quae quos deserunt!
                      </p>
                      <div className="mt-4 md:hidden">
                        <img
                          alt="placeholder"
                          className="h-full max-h-80 w-full rounded-md object-cover"
                          src="/images/img1.png"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="relative m-auto hidden w-[calc(100%-100px)] max-w-[1266px] overflow-hidden md:block">
              <div className="absolute right-0 bottom-0 left-0 z-[2] h-[100px] bg-[linear-gradient(to_top,white_0%,rgba(255,255,255,0)_100%)]"></div>
              <img
                src="/images/img1.png"
                alt="placeholder"
                className="max-h-[490px] w-full rounded-md object-cover transition-opacity duration-300"
              />
            </div>
          </div>
          <button
            data-slot="button"
            className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]]:size-4"
          >
            View all
          </button>
        </div>
      </section>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
        opacity: 1,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          // style={{ opacity: 1 }}
          alt={product.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-70"></div>
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">{product.title}</h2>
    </motion.div>
  )
}
