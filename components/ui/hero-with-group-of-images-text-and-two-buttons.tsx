import { Check, MoveRight, PhoneCall } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40">
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

      <div className="container mx-auto">
        <div className="container grid grid-cols-1 items-center gap-8 rounded-lg py-8 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div>
                <Badge variant="outline">Platform</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter lg:text-5xl">
                  Something new!
                </h2>
                <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight">
                  Managing a small business today is already tough.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
              <div className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 h-4 w-4" />
                <div className="flex flex-col gap-1">
                  <p>Easy to use</p>
                  <p className="text-muted-foreground text-sm">We&apos;ve made it easy to use and understand.</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 h-4 w-4" />
                <div className="flex flex-col gap-1">
                  <p>Fast and reliable</p>
                  <p className="text-muted-foreground text-sm">We&apos;ve made it fast and reliable.</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 h-4 w-4" />
                <div className="flex flex-col gap-1">
                  <p>Beautiful and modern</p>
                  <p className="text-muted-foreground text-sm">We&apos;ve made it beautiful and modern.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted aspect-square rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
