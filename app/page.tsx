import FeaturesSection from "@/components/landing/FeaturesSection"
import FooterSection from "@/components/landing/FooterSection"
import HeroSection from "@/components/landing/HeroSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import { Container } from "@/components/ui/container"

export default function LandingPage() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FooterSection />
    </Container>
  )
}
