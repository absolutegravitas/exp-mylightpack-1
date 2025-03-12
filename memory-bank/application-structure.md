# Application Structure: myLightPack SaaS

This document outlines the application's page structure, UI sections, and reusable components, designed with Shadcn UI and Tailwind CSS 4.

## Pages and Routes

- **Landing Page**: `/`

  - **File Path**: `app/page.tsx`

- **Blog Page**: `/blog`

  - **File Path**: `app/blog/page.tsx`
  - **Blog Post Detail Page**: `/blog/[postId]`
    - **File Path**: `app/blog/[postId]/page.tsx`

- **Changelog Page**: `/changelog`

  - **File Path**: `app/changelog/page.tsx`

- **Demo Page**: `/demo`

  - **File Path**: `app/demo/page.tsx`
  - **Layout File**: `app/demo/layout.tsx`

- **FAQs Page**: `/faqs`

  - **File Path**: `app/faqs/page.tsx`

- **Privacy Page**: `/privacy`

  - **File Path**: `app/privacy/page.tsx`

- **Request Features Page**: `/request-features`

  - **File Path**: `app/request-features/page.tsx`

- **Sign In Page**: `/sign-in`

  - **File Path**: `app/sign-in/[[...sign-in]]/page.tsx`

- **Terms Page**: `/terms`

  - **File Path**: `app/terms/page.tsx`

- **Health API Endpoint**: `/api/health`
  - **File Path**: `app/api/health/route.ts`

## Reusable UI Components

- **Form Components (components/ui)**:

  - `Accordion` (`accordion.tsx`)
  - `Alert` (`alert.tsx`)
  - `Input` (`input.tsx`)
  - `Label` (`label.tsx`)
  - `Select` (`select.tsx`)
  - `Textarea` (`textarea.tsx`)
  - `Checkbox` (`checkbox.tsx`)
  - `Collapsible` (`collapsible.tsx`)
  - `Dialog` (`dialog.tsx`)
  - `DropdownMenu` (`dropdown-menu.tsx`)
  - `Popover` (`popover.tsx`)
  - `Resizable` (`resizable.tsx`)
  - `Sheet` (`sheet.tsx`)
  - `Textarea` (`textarea.tsx`)

- **Data Display Components (components/ui)**:

  - `Avatar` (`avatar.tsx`)
  - `Badge` (`badge.tsx`)
  - `Breadcrumb` (`breadcrumb.tsx`)
  - `Card` (`card.tsx`)
  - `Carousel` (`carousel.tsx`)
  - `ChartPie` (`chart-pie.tsx`)
  - `Chart` (`chart.tsx`)
  - `ScrollArea` (`scroll-area.tsx`)
  - `Skeleton` (`skeleton.tsx`)
  - `Table` (`table.tsx`)
  - `Tabs` (`tabs.tsx`)
  - `Timeline` (`timeline.tsx`)
  - `Tooltip` (`tooltip.tsx`)
  - `AppleCardsCarousel` (`apple-cards-carousel.tsx`)

- **Navigation & Layout Components (components/ui)**:

  - `Container` (`container.tsx`)
  - `Footer` (`footer.tsx`)
  - `NavigationMenu` (`navigation-menu.tsx`)
  - `Sidebar` (`sidebar.tsx`)
  - `LayoutGrid` (`layout-grid.tsx`)

- **Action Components (components/ui)**:

  - `Button` (`button.tsx`)
  - `Command` (`command.tsx`)
  - `DropdownMenu` (`dropdown-menu.tsx`)
  - `Progress` (`progress.tsx`)

- **Specialized Components (components/ui)**:

  - `AnimatedHero` (`animated-hero.tsx`)
  - `FlipWords` (`flip-words.tsx`)
  - `GlowEffect` (`glow-effect.tsx`)
  - `Grip` (`grip.tsx`)
  - `InView` (`in-view.tsx`)
  - `Layers` (`layers.tsx`)
  - `Logo` (`logo.tsx`)
  - `TextEffect` (`text-effect.tsx`)
  - `TextLoop` (`text-loop.tsx`)
  - `TextRoll` (`text-roll.tsx`)
  - `Sonner` (`sonner.tsx`)

- **Block Components (components/blocks)**:
  - `AccordionFAQ` (`AccordionFAQ.tsx`)
  - `CarouselFeatures` (`CarouselFeatures.tsx`)
  - `Community` (`Community.tsx`)
  - `FAQ` (`faq.tsx`)
  - `FeatureCard` (`FeatureCard.tsx`)
  - `FeaturesSection` (`FeaturesSection.tsx`)
  - `HeroDescription` (`HeroDescription.tsx`)
  - `HeroSection` (`HeroSection.tsx`)
  - `HeroTitle` (`HeroTitle.tsx`)
  - `SignUpForm` (`SignUpForm.tsx`)
  - `TestimonialsSection` (`TestimonialsSection.tsx`)
  - `AccordionFeatureSection` (`accordion-feature-section.tsx`)
  - `Content5` (`content-5.tsx`)
  - `DisplayCards` (`display-cards.tsx`)
  - `FeatureBento` (`feature-bento.tsx`)
  - `FeatureImageRightBlock` (`FeatureImageRightBlock.tsx`)
  - `FeatureMajor` (`FeatureMajor.tsx`)
  - `FeatureSectionWithGrid` (`feature-section-with-grid.tsx`)
  - `FeatureSectionWithHoverEffects` (`feature-section-with-hover-effects.tsx`)
  - `FeatureTabs` (`FeatureTabs.tsx`)
  - `Features7` (`features-7.tsx`)
  - `Features9` (`features-9.tsx`)
  - `GearItemForm` (`GearItemForm.tsx`)
  - `GearItemList` (`GearItemList.tsx`)
  - `HeaderBlock` (`header.tsx`)
  - `HeroParallax` (`hero-parallax.tsx`)
  - `MajorFeature2` (`MajorFeature2.tsx`)
  - `Pricing` (`pricing.tsx`)
  - `PricingSectionWithComparison` (`pricing-section-with-comparison.tsx`)
  - `ShadcnblocksComFeature108` (`shadcnblocks-com-feature108.tsx`)
  - `ShadcnblocksComHero45` (`shadcnblocks-com-hero45.tsx`)
  - `Stats` (`stats.tsx`)
  - `TeamSwitcher` (`team-switcher.tsx`)
  - `Testimonials` (`testimonials.tsx`)
