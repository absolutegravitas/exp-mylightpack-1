"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export const Roadmap = () => {
  return (
    <section className="bg-muted mb-32 py-20">
      <div className="container p-32">
        <div className="mx-auto grid gap-20 lg:grid-cols-2 lg:gap-32">
          <div className="text-center lg:text-left">
            <h1 className="mb-4 text-3xl font-bold tracking-tighter text-balance lg:text-4xl">
              Help build the future of myLightPack
            </h1>
            <p className="text-muted-foreground mb-4">
              We're building myLightPack in public working on future features that you want to see.
            </p>
            <p className="text-muted-foreground mb-4">
              Every myLightPack User gets the ability to recommend new features and to upvote existing features. The top
              voted features get assessed for technical feasibility and incorporated into myLightPack.
            </p>
            <p className="text-muted-foreground mb-8">
              Learn more about our "build in public" ethos at{" "}
              <Link href="/build-in-public" className="underline">
                here
              </Link>{" "}
              and sign up as a User to vote on future features in our Roadmap.
            </p>
            {/* https://buildinpublic.com/ */}
            <div className="mb-10 flex flex-wrap justify-center gap-4 lg:mb-20 lg:justify-start">
              <Button variant="default">Sign Up</Button>
              <Button variant="outline">Roadmap</Button>
            </div>
            <p className="text-muted-foreground mb-7 text-xs uppercase">We use the following tech at myLightPack</p>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:justify-start">
              {/* Vercel Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="currentColor" d="M12 2L2 19.7778H22L12 2Z" />
              </svg>

              {/* Next.js Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  fill="currentColor"
                  d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
                />
              </svg>

              {/* Shadcn */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                ></line>
              </svg>

              {/* Tailwind Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="h-6 w-6">
                <path
                  fill="currentColor"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                />
              </svg>
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
