# Application Structure: myLightPack SaaS

This document outlines the application's page structure, UI sections, and reusable components, designed with Shadcn UI and Tailwind CSS 4.

## Key Folders

app/
├─ layout.tsx // Root layout with global providers (Clerk, PostHog, Theme, etc.)
├─ error.tsx // Global error boundary
├─ not-found.tsx // Global 404 handling
├─ page.tsx // Optional top-level landing page (public)
├─ (marketing)/
│ ├─ layout.tsx // Marketing/public layout
│ ├─ blog/
│ │ └─ page.tsx
│ ├─ changelog/
│ │ └─ page.tsx
│ ├─ privacy/
│ │ └─ page.tsx
│ └─ ... // Other public/marketing pages
├─ (dashboard)/
│ ├─ layout.tsx // Dashboard layout for logged-in users
│ ├─ page.tsx // Dashboard home or overview
│ └─ ... // Other dashboard pages/routes
├─ (auth)/
│ ├─ sign-in/
│ │ └─ page.tsx
│ ├─ sign-up/
│ │ └─ page.tsx
│ └─ ... // Additional auth routes if needed
├─ (demo)/
│ ├─ layout.tsx // Demo-specific layout if it's separate
│ ├─ page.tsx
│ └─ ClientBody.tsx // Move to components if it's reusable
├─ api/
│ └─ ... // Route handlers for API endpoints
├─ providers/
│ └─ RootProvider.tsx // Optional, if you want a separate file for combined providers
├─ PostHogPageView.tsx // Could live in /components/analytics if shared
└─ provider.tsx // If this is your root provider, rename or merge into RootProvider
