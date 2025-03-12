"use client"
import Link from "next/link"
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const FAQ = () => {
  return (
    <section className="pb-32">
      <div className="container">
        <div>
          <span
            data-slot="badge"
            className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 bg-primary text-primary-foreground [a&]:hover:bg-primary/90 inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-md border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap shadow-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 [&>svg]:pointer-events-none [&>svg]:size-3"
          >
            FAQ
          </span>
          <h1 className="mt-4 text-4xl font-semibold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mt-6 font-medium">
            Some commonly asked questions and answers.Still have questions? See our full list of FAQs.
          </p>
          <div className="flex md:justify-end">
            <Link href="/faqs">
              <Button
                // variant="secondary"
                className="flex w-3/4 flex-1 items-center justify-center gap-2 text-center sm:w-auto"
              >
                Full FAQs
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="">
              <AccordionTrigger className="text-base font-semibold text-pretty">What is myLightPack?</AccordionTrigger>
              <AccordionContent className="text-base text-pretty">
                is a comprehensive SaaS platform designed for hikers, campers, backpackers, and all types of travellers,
                whether you're going solo or in a group, who are interested in optimising their pack weight and
                efficiently managing their gear and pack lists for specific trips.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What can I do with myLightPack?</AccordionTrigger>
              <AccordionContent>
                you will be able to track your individual gear items in your inventory, create lists of gear for
                specific trips, share these lists for comment review by others or publicly, create and manage groups of
                other users, and create group lists to record shared items for group travel. The goal is to help you
                achieve smarter, lighter packing for all your adventures
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What does Lifetime Access mean?</AccordionTrigger>
              <AccordionContent>
                Lifetime in this context means access to all current AND future features on myLightPack as long as you
                have a user account (active or inactive account with an email address that can receive emails) with us
                or we go out of business. We're offering this on a limited basis and the one time price allows us to
                fund ongoing maintenance and future features on myLightPack. There are no other conditions on Lifetime
                Access. Louis Rossman would be proud.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Will there be more features in the future?</AccordionTrigger>
              <AccordionContent>
                Yes! We are actively developing myLightPack and plan to introduce additional features beyond those
                listed here. Check out our public roadmap for upcoming features and vote on the ones you'd like to see
                next. We are also building in public and sharing our development journey. As a paid user, you can
                suggest additional features and vote on features that are in development. We are committed to
                integrating user feedback to shape future updates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Why do you charge for using myLightPack?</AccordionTrigger>
              <AccordionContent>
                Setting a price to use myLightPack is for multiple purposes. Primarly we use the funds to make
                myLightPack better for our current and future users and fund further improvements and future features on
                our public roadmap. The funds are also used to pay general operational costs primarily these are domain,
                server and storage costs related to your data (e.g. gear photos).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Will myLightPack work on my phone?</AccordionTrigger>
              <AccordionContent>
                Yes, myLightPack will work on any modern phone (5 years old or younger) with a browser. You'll need
                internet access to initially sign up as a user and get access to your dashboard. We use Progressive Web
                App (PWA) technology to allow access through your web browser on any device when your device doesnt have
                access to a reliable connection. Data is stored on your device whilst offline .Once you're back online,
                your data is automatically synced to your online account. Read more here: https://web.dev/what-are-pwas/
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Is my data secure?</AccordionTrigger>
              <AccordionContent>
                Yes, we are as paranoid about security as you are. We use industry best practices to store your data. We
                use Clerk for authentication and Stripe / Polar.sh for secure payments. We only use Social login
                providers (like Google and Facebook) and secure links via email to allow you to login. We don't need
                your real name, address, phone or any other personal info. When you request an account closure, we
                delete AND purge all your data from our systems and allow you to download all of it before deletion. If
                you're in the EU, you may have further rights under GDPR. Learn more about how we secure our systems
                here:.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ
