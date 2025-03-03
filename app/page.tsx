import { Feature197Demo } from "@/components/landing/AccordionFAQ"
import CommunitySection from "@/components/landing/Community"
import { FeaturesSectionWithHover } from "@/components/landing/FeaturesSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import { Hero } from "@/components/ui/animated-hero"
import { Container } from "@/components/ui/container"
import { FAQ } from "@/components/ui/faq"
import { Feature } from "@/components/ui/feature-section-with-grid"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { Hero as BentoFeature } from "@/components/ui/hero-with-group-of-images-text-and-two-buttons"
import { LatestPosts } from "@/components/ui/latest-posts"
import Pricing from "@/components/ui/pricing-section-with-comparison"

export default function LandingPage() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <Hero />
      <FeaturesSectionWithHover />

      <HeroParallax products={products} />

      <Feature197Demo />
      <BentoFeature />
      <Pricing />
      <FAQ />

      <TestimonialsSection />
      <Feature />
      <LatestPosts />

      <CommunitySection />
    </Container>
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
