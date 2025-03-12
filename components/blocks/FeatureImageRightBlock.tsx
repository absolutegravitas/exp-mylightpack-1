import { ArrowRightIcon, CarIcon, Check, MoveRight, PhoneCall } from "lucide-react"
import Link from "next/link"
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
                  Simplify and add lightness
                </h2>
                <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight">
                  {`Take inspiration from the legendary Colin Chapman (Lotus founder and designer) and use myLightPack to manage your gear, pack lists and travel light for your next adventure.`}
                </p>
                {/* https://www.classicdriver.com/en/article/genius-colin-chapman-simplify-then-add-lightness%E2%80%9D */}
              </div>
            </div>

            <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
              <ul className="grid list-none grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
                <li className="flex flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <Check className="text-primary h-8 w-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>{`Track gear for all of your adventures`}</p>
                    <p className="text-muted-foreground text-sm">
                      {`Keep track of all of your gear with photos, weights, maintenance, and notes to keep things organised. Works for all types of adventures from hiking, backpacking, camping, skiing, climbing, and more.`}
                    </p>
                  </div>
                </li>
                <li className="flex flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <Check className="text-primary h-8 w-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>{`Packing lists for all seasons and scenarios`}</p>
                    <p className="text-muted-foreground text-sm">{`Create an unlimited number of lists for different seasons, locations, scenarios and stay organised. Mix and match gear with Kits.`}</p>
                  </div>
                </li>

                <li className="flex flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <Check className="text-primary h-8 w-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>{`Share and refine your pack with the community`}</p>
                    <p className="text-muted-foreground text-sm">{`Share your myLightPack lists anywhere or only with people you choose to get feedback, do pack shakedowns, or use as shopping checklists.`}</p>
                  </div>
                </li>
                <li className="flex flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <Check className="text-primary h-8 w-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>{`Manage group lists and track shared equipment`}</p>
                    <p className="text-muted-foreground text-sm">{`Track everyone's gear, share equipment, and coordinate group adventures for schools, hiking clubs, scouts, guides etc.`}</p>
                  </div>
                </li>
                <li className="flex flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <Check className="text-primary h-8 w-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>{`Fast, easy & works even where the Internet doesn't`}</p>
                    <p className="text-muted-foreground text-sm">{`myLightPack works on your PC, phone and tablet. Take your list with you off on adventures without internet and sync to your account when you get back to civilization.`}</p>
                  </div>
                </li>
              </ul>
              {/* <div className="flex flex-row gap-4">
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
              </div> */}
            </div>
          </div>
          <div className="bg-muted aspect-square rounded-md">
            <img src="/images/img1.png" alt="Temporary Image" />
          </div>
        </div>
      </div>
    </section>
  )
}
