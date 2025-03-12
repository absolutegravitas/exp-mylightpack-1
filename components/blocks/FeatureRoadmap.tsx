"use client"

import React from "react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const FeatureRoadmap = () => {
  return (
    <section className="bg-muted mb-32 pt-32">
      <div className="container">
        <div className="mx-auto grid gap-20 p-5 lg:grid-cols-2 lg:gap-32">
          <div className="text-center lg:text-left">
            <h1 className="mb-4 text-3xl font-bold tracking-tighter text-balance lg:text-4xl">
              Help build the future of myLightPack
            </h1>
            <p className="text-muted-foreground mb-8">
              Check out our public feature roadmap for upcoming features suggested by other myLightPack users. Every
              myLightPack user gets the abililty to vote on upcoming features and suggest new ones for us to
              incorporate. In this way, we're adopting a build in public approach to building smarter, faster, and with
              the people who care about making myLightPack better all the time. Learn more about the "build in public"
              ethos and our updates here https://buildinpublic.com/.
            </p>
            <Button className="mb-10 lg:mb-20">Sign Up</Button>
            <p className="text-muted-foreground mb-7 text-xs uppercase">We use and rely on the following tech</p>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:justify-start">
              <img src="/images/block/logos/shadcn-ui-wordmark.svg" alt="logo" className="h-6 sm:h-8" />
              <img src="/images/block/logos/sketch-wordmark.svg" alt="logo" className="h-8 sm:h-11" />
              <img src="/images/block/logos/tailwind-wordmark.svg" alt="logo" className="h-4 sm:h-5" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-background flex gap-5 rounded-xl p-6">
              <Avatar className="size-9">
                <AvatarImage src="/images/block/avatar-1.webp" alt="placeholder" />
              </Avatar>
              <div>
                <p className="mb-1 text-sm font-medium">Emily Johnson</p>
                <p className="text-muted-foreground text-xs">
                  Joining the Innovators Community has completely transformed my approach to product development. The
                  discussions are insightful, and the community events have been fantastic for networking with industry
                  peers.
                </p>
              </div>
            </div>
            <div className="flex gap-5 rounded-xl border p-6">
              <Avatar className="size-9">
                <AvatarImage src="/images/block/avatar-2.webp" alt="placeholder" />
              </Avatar>
              <div>
                <p className="mb-1 text-sm font-medium">Alex Smith</p>
                <p className="text-muted-foreground text-xs">
                  Being part of this community has helped me stay up-to-date with the latest trends in innovation. The
                  exclusive workshops are incredibly valuable for anyone looking to expand their knowledge.
                </p>
              </div>
            </div>
            <div className="bg-background flex gap-5 rounded-xl p-6">
              <Avatar className="size-9">
                <AvatarImage src="/images/block/avatar-3.webp" alt="placeholder" />
              </Avatar>
              <div>
                <p className="mb-1 text-sm font-medium">Sarah Parker</p>
                <p className="text-muted-foreground text-xs">
                  The Innovators Community has been instrumental in connecting me with like-minded professionals. I’ve
                  gained valuable insights and developed partnerships that have benefited my career.
                </p>
              </div>
            </div>
            <div className="flex gap-5 rounded-t-xl border-x border-t px-5 pt-6 pb-1">
              <Avatar className="size-9">
                <AvatarImage src="/images/block/avatar-4.webp" alt="placeholder" />
              </Avatar>
              <div>
                <p className="mb-1 text-sm font-medium">Michael Lee</p>
                <p className="text-muted-foreground text-xs">
                  I’ve attended several virtual events through the Innovators Community, and they’ve been incredibly
                  helpful. The opportunity to learn from leaders in the field has significantly impacted my professional
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureRoadmap
