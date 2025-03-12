// app/changelog/page.tsx
import Image from "next/image"
import { Container } from "@/components/ui/container"

export default function ChangelogPage() {
  return (
    <Container className="py-10">
      <section className="py-32">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-semibold md:text-7xl">
              Changelog
              <sup>
                <span
                  data-slot="badge"
                  className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 text-primary-foreground [a&]:hover:bg-primary/90 ml-2 inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-md border border-transparent bg-emerald-400 px-2 py-0.5 text-xs font-semibold whitespace-nowrap shadow-sm transition-[color,box-shadow] hover:bg-emerald-400 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 [&>svg]:pointer-events-none [&>svg]:size-3"
                >
                  NEW
                </span>
              </sup>
            </h1>
            <p className="mx-auto max-w-lg text-lg">
              Everything that's new and improved now available on any plan and everywhere on the platform
            </p>
          </div>
          <div className="border-border mx-auto mt-20 max-w-xl space-y-10 border-l border-dashed pl-6">
            <div>
              <p className="text-muted-foreground relative font-mono text-sm">
                <time className="absolute top-1 -left-6 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400"></time>
                January 11, 2025
              </p>
              <Image
                src="/images/block/placeholder-1.svg"
                alt="placeholder"
                className="my-4 aspect-[8/7] rounded-md object-cover"
                width={500}
                height={437.5}
              />
              <h2 className="mb-2 text-3xl font-semibold">Better export options</h2>
              <p className="prose text-primary/80 dark:prose-invert">
                We've added a <a href="#">components</a> and <a href="#">analytics</a> to help you track your website's
                performance. You can now see your website's performance over time, and get insights into your users.
                <br />
                <br />
                As with all of our <a href="#">integrations</a>, we do the heavy lifting for you. It's easy to set up,
                privacy-focused, performant, and secure. We also handle cookie consent where required, in a very
                Supertape way.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground relative font-mono text-sm">
                <time className="absolute top-1 -left-6 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400"></time>
                December 23, 2024
              </p>
              <Image
                src="/images/block/placeholder-2.svg"
                alt="placeholder"
                className="my-4 aspect-[8/7] rounded-md object-cover"
                width={500}
                height={437.5}
              />
              <h2 className="mb-2 text-3xl font-semibold">New dashboard and analytics</h2>
              <p className="prose text-primary/80 dark:prose-invert">
                We've added a <a href="#">components</a> and <a href="#">analytics</a> to help you track your website's
                performance. You can now see your website's performance over time, and get insights into your users.
                <br />
                <br />
                As with all of our <a href="#">integrations</a>, we do the heavy lifting for you. It's easy to set up,
                privacy-focused, performant, and secure. We also handle cookie consent where required, in a very
                Supertape way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
