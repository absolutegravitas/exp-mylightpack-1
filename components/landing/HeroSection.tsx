import HeroDescription from "@/components/landing/HeroDescription"
import HeroTitle from "@/components/landing/HeroTitle"
import SignUpForm from "@/components/landing/SignUpForm"

export default function HeroSection() {
  return (
    <div className="hero container max-w-screen-md py-20 text-center">
      <HeroTitle />
      <HeroDescription />
      <SignUpForm />
    </div>
  )
}
