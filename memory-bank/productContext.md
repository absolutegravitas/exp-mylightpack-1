# Product Context

This file provides a high-level overview of the project and the expected product that will be created. Initially it is based upon projectBrief.md (if provided) and all other available project-related information in the working directory. This file is intended to be updated as the project evolves, and should be used to inform all other modes of the project's goals and context.
2025-03-20 12:51:53 - Log of updates made will be appended as footnotes to the end of this file.

-

## Project Goal

myLightPack is a comprehensive SaaS gear management website designed for hikers, campers, backpackers, scout groups, group travelers and solo travelers. This app will help users optimize their pack weight and manage their gear efficiently. myLightPack aims to be the best gear management app and learn from competitors, extending its functionality with additional features and a more modern, user-friendly experience.

## Key Features

- Gear Inventory Management: Track individual gear items with details like weight, brand, price, season rating and usage.
- Gear List Creation and Management: Create and manage gear lists and then use them for specific trips.
- Weight Calculation: Automatically calculate the total weight of gear lists.
- Sharing and Collaboration:
  - Share lists for comment review by other users within the platform.
  - Publicly share lists on social media.
  - Create and manage group hikes.
  - Create group lists to record shared and individual items between group members.
- Crowdsourced Feature Feedback: Provide users with the ability to raise future features to add to the app and vote on features. Ability to comment on said features for discussion.

## Overall Architecture

myLightPack utilizes a modern web application architecture, leveraging:

- **Frontend:** Next.js 15 (React, TypeScript, Shadcn-ui, Tailwind CSS), React Query for state management
- **Backend:** Vercel serverless functions for API, Upstash Redis & IndexedDB/Dexie for data storage
- **Auth:** Clerk Auth
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.
- **Components:** Shadcn-ui.
- **Schema Validations:** Zod.
- **State Management:** React Query.
- **File Uploading:** TO BE CONFIRMED.
- **Tables:** Tanstack Tables.
- **Forms:** React Hook Form.
- **Linting:** ESLint.
- **Formatting:** Prettier.
- **Database:** IndexedDB, Dexie and Upstash Redis.
- **Hosting:** Vercel serverless.
- **Analytics:** PostHog.
