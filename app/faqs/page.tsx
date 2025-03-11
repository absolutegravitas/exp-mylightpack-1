// app/faqs/page.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "@/components/ui/container"

import { useState } from 'react';


export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

export default function FaqsPage() {
  return (
    <Container className="py-10">
      <div className="container max-w-4xl py-32">
        <div className="text-center">
          <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">We've got answers</h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-center text-balance">
            This really should be an LLM but we're waiting for RAG to truly reach commodity stage before we touch it.
          </p>
        </div>
        <div className="mt-8 grid max-w-5xl gap-8 md:mt-12 md:grid-cols-[200px_1fr] md:gap-12 lg:mt-16">
          <div className="sticky top-24 flex h-fit flex-col gap-4 max-md:hidden">
            <button
              data-slot="button"
              className={`ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-semibold whitespace-nowrap transition-colors focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${activeCategory === 'Support' ? 'bg-accent text-accent-foreground' : 'hover:opacity-75'}`}
              onClick={() => setActiveCategory('Support')}
            >
              Support
            </button>
            <button
              data-slot="button"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-semibold whitespace-nowrap transition-colors focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              Support
            </button>
            <button
              data-slot="button"
              className={`ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-normal whitespace-nowrap transition-colors hover:opacity-75 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${activeCategory === 'Account' ? 'bg-accent text-accent-foreground' : 'hover:opacity-75'}`}
              onClick={() => setActiveCategory('Account')}
            >
              Account
            </button>
            <button
              data-slot="button"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-normal whitespace-nowrap transition-colors hover:opacity-75 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              Account
            </button>
            <button
            {activeCategory === 'Support' && (
              <div
                id="faq-support"
                className="bg-background rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Support"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is there a free version?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 1. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is support free, or do I need to Perplexity everything?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 2. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if I need immediate assistance?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 3. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
            {activeCategory === 'Support' ? (
              <div
                id="faq-support"
                className="bg-background rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Support"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is there a free version?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 1. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is support free, or do I need to Perplexity everything?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if I need immediate assistance?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
            {activeCategory === 'Support' ? (
              <div
                id="faq-support"
                className="bg-background rounded-xl px-6"
            {activeCategory === 'Account' ? (
              <div
                id="faq-account"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Account"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I update my account without breaking my laptop?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 1. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I update my account without breaking the universe?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 2. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I forget my password?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 3. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
                style={{ scrollMargin: "300px" }}
                data-category="Support"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is there a free version?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 1. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is support free, or do I need to Perplexity everything?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if I need immediate assistance?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
            {activeCategory === 'Support' ? (
              <div
                id="faq-support"
            {activeCategory === 'Features' ? (
              <div
                id="faq-features"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Features"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Are you going to be subsumed by AI?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 1. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What makes your platform unique?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 2. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you support integration with other tools?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 3. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
                className="bg-background rounded-xl px-6"
            {activeCategory === 'Account' ? (
              <div
                id="faq-account"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Account"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I update my account without breaking my laptop?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 1. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I update my account without breaking the universe?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I forget my password?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
            {activeCategory === 'Security' ? (
              <div
                id="faq-security"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Security"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How secure is my data?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 1. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What happens in case of a data breach?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 2. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you have a backup system?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 3. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
              </div>
            ) : null}
                style={{ scrollMargin: "300px" }}
                data-category="Support"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is there a free version?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is support free, or do I need to Perplexity everything?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if I need immediate assistance?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Support - item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
            {activeCategory === 'Support' ? (
            {activeCategory === 'Other' ? (
              <div
                id="faq-other"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Other"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why is your pricing so complicated?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 1. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 2. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What's your roadmap look like?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 3. Will replace with actual content later...</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
              <div
                id="faq-support"
            {activeCategory === 'Features' ? (
              <div
                id="faq-features"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Features"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Are you going to be subsumed by AI?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 1. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What makes your platform unique?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you support integration with other tools?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
                className="bg-background rounded-xl px-6"
            {activeCategory === 'Account' ? (
              <div
                id="faq-account"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Account"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I update my account without breaking my laptop?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 1.  Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I update my account without breaking the universe?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I forget my password?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
            {activeCategory === 'Security' ? (
              <div
                id="faq-security"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Security"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How secure is my data?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 1. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What happens in case of a data breach?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you have a backup system?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
              </div>
            ) : null}
                style={{ scrollMargin: "300px" }}
                data-category="Support"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is there a free version?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is support free, or do I need to Perplexity everything?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if I need immediate assistance?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
            {activeCategory === 'Support' && (
            {activeCategory === 'Other' ? (
              <div
                id="faq-other"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Other"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why is your pricing so complicated?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 1. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What's your roadmap look like?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
              <div
                id="faq-support"
            {activeCategory === 'Features' ? (
              <div
                id="faq-features"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Features"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Are you going to be subsumed by AI?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 1. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What makes your platform unique?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you support integration with other tools?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
                className="bg-background rounded-xl px-6"
            {activeCategory === 'Account' ? (
              <div
                id="faq-account"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Account"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I update my account without breaking my laptop?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I update my account without breaking the universe?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I forget my password?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Account - item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
            {activeCategory === 'Security' ? (
              <div
                id="faq-security"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Security"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How secure is my data?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 1. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What happens in case of a data breach?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you have a backup system?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
              </div>
            ) : null}
                style={{ scrollMargin: "300px" }}
                data-category="Support"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is there a free version?</AccordionTrigger>
                    <AccordionContent>
                      <div className="text-muted-foreground pt-0 pb-4 text-base font-medium">
                        Yes! We offer a generous free plan with just enough features except that one feature you really
                        want! Our strategy is to get your credit card details on file then steadily double our prices
                        against inflation rates.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is support free, or do I need to Perplexity everything?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if I need immediate assistance?</AccordionTrigger>
            {activeCategory === 'Other' ? (
              <div
                id="faq-other"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Other"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why is your pricing so complicated?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 1. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 2. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What's your roadmap look like?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 3. Will replace with actual content later.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
            {activeCategory === 'Features' ? (
              <div
                id="faq-features"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Features"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Are you going to be subsumed by AI?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What makes your platform unique?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you support integration with other tools?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Features - item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
                </Accordion>
            {activeCategory === 'Account' ? (
              <div
                id="faq-account"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Account"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I update my account without breaking my laptop?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I update my account without breaking the universe?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I forget my password?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
            {activeCategory === 'Security' ? (
              <div
                id="faq-security"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Security"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How secure is my data?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What happens in case of a data breach?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you have a backup system?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Security - item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
              </div>
            ) : null}
              </div>
            )}
              data-slot="button"
              className={`ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-normal whitespace-nowrap transition-colors hover:opacity-75 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${activeCategory === 'Features' ? 'bg-accent text-accent-foreground' : 'hover:opacity-75'}`}
              onClick={() => setActiveCategory('Features')}
            >
              Features
            </button>
            <button
              data-slot="button"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-normal whitespace-nowrap transition-colors hover:opacity-75 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              Features
            </button>
            <button
              data-slot="button"
              className={`ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-normal whitespace-nowrap transition-colors hover:opacity-75 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${activeCategory === 'Security' ? 'bg-accent text-accent-foreground' : 'hover:opacity-75'}`}
              onClick={() => setActiveCategory('Security')}
            >
              Security
            {activeCategory === 'Other' ? (
              <div
                id="faq-other"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Other"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why is your pricing so complicated?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What's your roadmap look like?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for Other - item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
            </button>
            <button
            {activeCategory === 'Features' ? (
              <div
                id="faq-features"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Features"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Are you going to be subsumed by AI?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What makes your platform unique?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you support integration with other tools?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
              data-slot="button"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-normal whitespace-nowrap transition-colors hover:opacity-75 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              Security
            </button>
            <button
              data-slot="button"
            {activeCategory === 'Account' && (
              <div
                id="faq-account"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Account"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I update my account without breaking my laptop?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I update my account without breaking the universe?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
            {activeCategory === 'Security' ? (
              <div
                id="faq-security"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Security"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How secure is my data?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What happens in case of a data breach?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you have a backup system?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I forget my password?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
            {activeCategory === 'Account' ? (
              <div
                id="faq-account"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Account"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I update my account without breaking my laptop?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I update my account without breaking the universe?</AccordionTrigger>
            {activeCategory === 'Other' ? (
              <div
                id="faq-other"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Other"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why is your pricing so complicated?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What's your roadmap look like?</AccordionTrigger>
                    <AccordionContent>This is the expanded content for item 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I forget my password?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            {activeCategory === 'Features' && (
              <div
                id="faq-features"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Features"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Are you going to be subsumed by AI?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What makes your platform unique?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you support integration with other tools?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
            ) : null}
              className={`ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-normal whitespace-nowrap transition-colors hover:opacity-75 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${activeCategory === 'Other' ? 'bg-accent text-accent-foreground' : 'hover:opacity-75'}`}
              onClick={() => setActiveCategory('Other')}
            >
              Other
            </button>
            <button
              data-slot="button"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start gap-2 rounded-md px-4 py-2 text-left text-xl font-normal whitespace-nowrap transition-colors hover:opacity-75 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              Other
            </button>
          </div>
          <div className="space-y-6">
            <div
            {activeCategory === null || activeCategory === 'Support' ? (
              <div
                id="faq-support"
                className="bg-background rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Support"
              >
            {activeCategory === 'Security' && (
              <div
                id="faq-security"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Security"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How secure is my data?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What happens in case of a data breach?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you have a backup system?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
                <Accordion type="single" collapsible className="w-full">
            {activeCategory === 'Features' ? (
              <div
                id="faq-features"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Features"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Are you going to be subsumed by AI?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What makes your platform unique?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you support integration with other tools?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
            {activeCategory === 'Other' && (
              <div
                id="faq-other"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Other"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why is your pricing so complicated?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What's your roadmap look like?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
              </div>
            ) : null}
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is there a free version?</AccordionTrigger>
                    <AccordionContent>
                      <div className="text-muted-foreground pt-0 pb-4 text-base font-medium">
                        Yes! We offer a generous free plan with just enough features except that one feature you really
                        want! Our strategy is to get your credit card details on file then steadily double our prices
                        against inflation rates.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is support free, or do I need to Perplexity everything?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if I need immediate assistance?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
              id="faq-support"
            {activeCategory === 'Security' ? (
              <div
                id="faq-security"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Security"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How secure is my data?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What happens in case of a data breach?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you have a backup system?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
              className="bg-background rounded-xl px-6"
              style={{ scrollMargin: "300px" }}
              data-category="Support"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is there a free version?</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-muted-foreground pt-0 pb-4 text-base font-medium">
                      Yes! We offer a generous free plan with just enough features except that one feature you really
                      want! Our strategy is to get your credit card details on file then steadily double our prices
                      against inflation rates.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is support free, or do I need to Perplexity everything?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What if I need immediate assistance?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
            {activeCategory === 'Other' ? (
              <div
                id="faq-other"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Other"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why is your pricing so complicated?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What's your roadmap look like?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
                </AccordionItem>
              </Accordion>
            </div>

            {activeCategory === null || activeCategory === 'Account' ? (
              <div
                id="faq-account"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Account"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I update my account without breaking my laptop?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I update my account without breaking the universe?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I forget my password?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
            <div
              id="faq-account"
              className="bg-background/40 rounded-xl px-6"
              style={{ scrollMargin: "300px" }}
              data-category="Account"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I update my account without breaking my laptop?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I update my account without breaking the universe?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What happens if I forget my password?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {activeCategory === null || activeCategory === 'Features' ? (
              <div
                id="faq-features"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Features"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Are you going to be subsumed by AI?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What makes your platform unique?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you support integration with other tools?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
            <div
              id="faq-features"
              className="bg-background/40 rounded-xl px-6"
              style={{ scrollMargin: "300px" }}
              data-category="Features"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Are you going to be subsumed by AI?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What makes your platform unique?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you support integration with other tools?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {activeCategory === null || activeCategory === 'Security' ? (
              <div
                id="faq-security"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Security"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How secure is my data?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What happens in case of a data breach?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you have a backup system?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
            <div
              id="faq-security"
              className="bg-background/40 rounded-xl px-6"
              style={{ scrollMargin: "300px" }}
              data-category="Security"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How secure is my data?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What happens in case of a data breach?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you have a backup system?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {activeCategory === null || activeCategory === 'Other' ? (
              <div
                id="faq-other"
                className="bg-background/40 rounded-xl px-6"
                style={{ scrollMargin: "300px" }}
                data-category="Other"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why is your pricing so complicated?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What's your roadmap look like?</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : null}
            <div
              id="faq-other"
              className="bg-background/40 rounded-xl px-6"
              style={{ scrollMargin: "300px" }}
              data-category="Other"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Why is your pricing so complicated?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What's your roadmap look like?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
