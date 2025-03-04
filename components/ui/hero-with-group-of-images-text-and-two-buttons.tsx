import { CarIcon, Check, MoveRight, PhoneCall } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function FeaturesKeyChecklist() {
  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="container grid grid-cols-1 items-center gap-8 rounded-lg py-8 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div>
                <Badge variant="outline">Key Features</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter lg:text-5xl">
                  Pack like a boss
                </h2>
                <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight">
                  {`myLightPack makes it easier for you to manage your gear, create lists for your next adventure and share lists to create that perfect light pack.`}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
              <div className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 h-12 w-12" />
                <div className="flex flex-col gap-1">
                  <p>All your gear in one place</p>
                  <p className="text-muted-foreground text-sm">
                    {`Keep track of photos, weights, maintenance, and notes to keep things organised. Create and share lists to get feedback do pack shakedowns, or use as shopping checklists.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 h-12 w-12" />
                <div className="flex flex-col gap-1">
                  <p>Organise group hikes and plan shared equipment</p>
                  <p className="text-muted-foreground text-sm">{`We creatd Group Lists to help schools, hiking clubs, scouts, guides etc. to track everyone's gear, share equipment, and coordinate group adventures.`}</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 h-12 w-12" />
                <div className="flex flex-col gap-1">
                  <p>{`Fast, easy & works even when the Internet doesn't`}</p>
                  <p className="text-muted-foreground text-sm">{`myLightPack works on your PC, phone and tablet. Take your list with you off on adventures without internet and sync to your account when you get back to civilization.`}</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 h-12 w-12" />
                <div className="flex flex-col gap-1">
                  <p>{`Fast, easy & works even when the Internet doesn't`}</p>
                  <p className="text-muted-foreground text-sm">{`myLightPack works on your PC, phone and tablet. Take your list with you off on adventures without internet and sync to your account when you get back to civilization.`}</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <Button size="lg" className="gap-4" variant="outline">
                  Test Drive <CarIcon className="h-4 w-4" />
                </Button>
                <Button size="lg" className="gap-4">
                  Sign Up <MoveRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-muted aspect-square rounded-md">
            <img src="/images/img1.png" alt="Temporary Image" />
          </div>
        </div>
      </div>
      <FeaturesBento />
    </section>
  )
}

export function FeaturesBento() {
  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-regular max-w-lg text-left text-5xl tracking-tighter md:text-7xl">
                This is the start of something!
              </h1>
              <p className="text-muted-foreground max-w-md text-left text-xl leading-relaxed tracking-tight">
                Managing a small business today is already tough. Avoid further complications by ditching outdated,
                tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="h-4 w-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted aspect-square rounded-md"></div>
            <div className="bg-muted row-span-2 rounded-md"></div>
            <div className="bg-muted aspect-square rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
