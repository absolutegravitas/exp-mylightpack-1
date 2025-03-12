import { UseInViewOptions } from "motion/react"
import FAQ from "@/components/blocks/faq"
import FeatureGroup from "@/components/blocks/FeatureGroup"
import FeaturesKeyChecklist from "@/components/blocks/FeatureImageRightBlock"
import FeatureRoadmap from "@/components/blocks/FeatureRoadmap"
import FeaturesHowItWorks from "@/components/blocks/FeaturesHowItWorks"
import FeaturesMain from "@/components/blocks/FeaturesMain"
import { Header1 } from "@/components/blocks/header"
import { HeroParallax } from "@/components/blocks/hero-parallax"
import Pricing from "@/components/blocks/pricing-section-with-comparison"
import { Hero } from "@/components/ui/animated-hero"
import { Container } from "@/components/ui/container"
import { InView } from "@/components/ui/in-view"

export default function LandingPage() {
  const inViewProps = {
    variants: {
      hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    viewOptions: {
      margin: "0px 0px -200px 0px" as UseInViewOptions["margin"],
    },
    transition: { duration: 0.3, ease: "easeInOut" },
  }

  return (
    <main>
      <Container className="flex flex-col items-center justify-center">
        <Header1 />
        <Hero />
      </Container>
      <HeroParallax products={products} />

      <Container className="flex flex-col items-center justify-center">
        <InView {...inViewProps}>
          <FeatureGroup />
        </InView>
        <InView {...inViewProps}>
          <FeaturesMain />
        </InView>
        <InView {...inViewProps}>
          <FeaturesHowItWorks />
        </InView>
        <InView {...inViewProps}>
          <FeaturesKeyChecklist />
        </InView>
        <InView {...inViewProps}>
          <Pricing />
        </InView>
        <InView {...inViewProps}>
          <FAQ />
        </InView>
        <InView {...inViewProps}>
          <FeatureRoadmap />
        </InView>
      </Container>
    </main>
  )
}

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
]
