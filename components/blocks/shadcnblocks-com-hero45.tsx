import { HandHelping, Users, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface Hero45Props {
  badge?: string
  heading: string
  imageSrc?: string
  imageAlt?: string
  features?: Feature[]
}

const Hero45 = ({
  badge = "shadcnblocks.com",
  heading = "Blocks built with Shadcn & Tailwind",
  imageSrc = "/images/block/placeholder-1.svg",
  imageAlt = "placeholder",
  features = [
    {
      icon: <HandHelping className="h-auto w-5" />,
      title: "Flexible Support",
      description: "Benefit from around-the-clock assistance to keep your business running smoothly.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Collaborative Tools",
      description: "Enhance teamwork with tools designed to simplify project management and communication.",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Lightning Fast Speed",
      description: "Experience the fastest load times with our high performance servers.",
    },
  ],
}: Hero45Props) => {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="text-4xl font-semibold lg:text-5xl">{heading}</h1>
        </div>
        <div className="relative mx-auto max-w-screen-lg">
          <img src={imageSrc} alt={imageAlt} className="aspect-video max-h-[500px] w-full rounded-xl object-cover" />
          <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
          <div className="absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 [background-size:12px_12px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 [background-size:12px_12px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-screen-lg flex-col md:flex-row">
          {features.map((feature, index) => (
            <div key={index}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="from-muted to-muted mx-6 hidden h-auto w-[2px] bg-gradient-to-b via-transparent md:block"
                />
              )}
              <div className="bg-background flex grow basis-0 flex-col rounded-md p-4">
                <div className="bg-background mb-6 flex size-10 items-center justify-center rounded-full drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Hero45 }
