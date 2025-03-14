import { CommonQuestions } from "@/components/blocks/faqs/faq-common"
import { MainFeatures } from "@/components/blocks/features/main-features"
import { MajorFeatures } from "@/components/blocks/features/major-features"
import { Roadmap } from "@/components/blocks/features/product-roadmap"
import { HeroParallax } from "@/components/blocks/heros/hero-parallax"
import { Pricing } from "@/components/blocks/pricing/pricing-table"
import { Hero } from "@/components/ui/animated-hero"
import { Container } from "@/components/ui/container"

export default function LandingPage() {
  // const inViewProps = {
  //   variants: {
  //     hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
  //     visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  //   },
  //   viewOptions: {
  //     margin: "0px 0px -200px 0px" as UseInViewOptions["margin"],
  //   },
  //   transition: { duration: 0.3, ease: "easeInOut" },
  // }

  return (
    <main>
      <Container className="flex flex-col items-center justify-center">
        <Hero />
      </Container>
      <HeroParallax />
      <Container className="flex flex-col items-center justify-center">
        <MainFeatures />
        <MajorFeatures />
        <Pricing />
        <CommonQuestions />
        <Roadmap />
      </Container>
    </main>
  )
}
