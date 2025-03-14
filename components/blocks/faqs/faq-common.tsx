import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FAQProps {
  className?: string
}

export function CommonQuestions({ className }: FAQProps) {
  // Added FAQs array extracted from faq-shortlist.tsx
  const faqs = [
    {
      question: "What can I do with myLightPack?",
      answer:
        "Manage your individual gear items in your inventory, create lists of gear for specific trips, share these lists for comment review by others or publicly, create and manage groups of other users, and create group lists to record shared items for group travel.",
    },
    {
      question: "What does Lifetime Access mean?",
      answer:
        "Lifetime in this context means access to all current AND future features on myLightPack as long as you have a user account (active or inactive account with an email address that can receive emails) with us or we go out of business. We're offering this on a limited basis and the one time price allows us to fund ongoing maintenance and future features on myLightPack. There are no other conditions on Lifetime Access. Louis Rossmann would be proud.",
    },
    {
      question: "Will there be more features in the future?",
      answer:
        "Yes! We are actively developing myLightPack and plan to introduce additional features beyond those listed here. Check out our public roadmap for upcoming features and vote on the ones you'd like to see next. We are also building in public and sharing our development journey. As a paid user, you can suggest additional features and vote on features that are in development. We are committed to integrating user feedback to shape future updates.",
    },
    {
      question: "Will myLightPack work on my phone?",
      answer:
        "Yes, myLightPack will work on any modern phone (5 years old or younger) with a browser. You'll need internet access to initially sign up as a user and get access to your dashboard. We use Progressive Web App (PWA) technology to allow access through your web browser on any device when your device doesnt have access to a reliable connection. Data is stored on your device whilst offline .Once you're back online, your data is automatically synced to your online account. Read more here: https://web.dev/what-are-pwas/",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we are as paranoid about security as you are. We use industry best practices to store your data. We use Clerk for authentication and Stripe / Polar.sh for secure payments. We only use Social login providers (like Google and Facebook) and secure links via email to allow you to login. We don't need your real name, address, phone or any other personal info. We only send transactional emails to confirm your signup, any changes to your user account and for subscriptions and payments. When you request an account closure, we delete AND purge all your data from our systems and allow you to download all of it before deletion. If you're in the EU, you may have further rights under GDPR. Learn more about how we secure our systems here: .",
    },
  ]

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="#pb-16 text-center tracking-tighter text-pretty">
          {/* <span
            className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 bg-primary text-primary-foreground [a&]:hover:bg-primary/90 inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-md border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap shadow-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 [&>svg]:pointer-events-none [&>svg]:size-3"
            data-slot="badge"
          >
            FAQ
          </span> */}
          <h1 className="mt-4 text-4xl font-semibold">Common Questions</h1>
          <Link href="/faqs" className="flex flex-1 items-center justify-center gap-2 py-3 text-center">
            <Button className="cursor-pointer items-center justify-center gap-2 text-center">Full FAQs</Button>
          </Link>
        </div>

        <div className="mx-auto mt-14 max-w-screen-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="bg-secondary text-primary flex size-6 shrink-0 items-center justify-center rounded-sm font-mono text-xs">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
