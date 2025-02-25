# Application Structure: myLightPack SaaS

This document outlines the application's page structure, UI sections, and reusable components, designed with Shadcn UI and Tailwind CSS 4.

## Pages and Routes

- **Landing Page**: `/`

  - **Sections**:
    - Hero Section
      - **Components**:
        - `HeroTitle`
        - `HeroDescription`
        - `SignUpForm`
    - Features Section
      - **Components**:
        - `FeatureCard` (repeated for each feature)
    - Testimonials Section (Optional)
      - **Components**:
        - `TestimonialCard` (repeated for each testimonial)
    - Footer Section
      - **Components**:
        - `Footer`

- **Gear Inventory Page**: `/gear` (renamed from `/gear-inventory`)

  - **Sections**:
    - Add Gear Item Section
      - **Components**:
        - `TextInput`: For gear item name, brand, price
        - `WeightInput`: For gear item weight with unit handling
        - `SelectItem`: For gear item category
        - `FormButton`: To submit new gear item
    - View Gear Inventory Section
      - **Components**:
        - `DataTable`: To display gear items in a table format
        - `SearchInput`: To filter gear items
        - `SortButton`: To sort gear items by different criteria
    - Edit Gear Item Section
      - **Components**:
        - `TextInput`: (Pre-filled) For editing gear item name, brand, price
        - `WeightInput`: (Pre-filled) For editing gear item weight
        - `SelectItem`: (Pre-filled) For editing gear item category
        - `FormButton`: To submit updated gear item
        - `DeleteButton`: To delete gear item

- **Gear Lists Page**: `/lists` (renamed from `/gear-lists`)

  - **Sections**:
    - Create Gear List Section
      - **Components**:
        - `TextInput`: For gear list name
        - `FormButton`: To create new gear list
    - View Gear Lists Section
      - **Components**:
        - `CardList`: To display gear lists as cards
        - `SearchInput`: To filter gear lists
    - Edit Gear List Section
      - **Components**:
        - `TextInput`: (Pre-filled) For editing gear list name
        - `GearItemSelector`: To add/remove gear items from the list (using `DataTable` or similar)
        - `WeightDisplay`: To dynamically display total weight of the list
        - `FormButton`: To save changes to gear list
        - `ShareButton`: To share gear list
        - `DeleteButton`: To delete gear list

- **Specific Gear List Page**: `/lists/[listId]`

  - **Sections**:
    - Gear List Details Section
      - **Components**:
        - `GearListHeader`: Displays list name, description, etc.
        - `GearListDataTable`: Displays gear items in the list
        - `WeightDisplay`: Total weight of the list
    - Actions Section
      - **Components**:
        - `EditButton`: To edit the gear list
        - `ShareButton`: To share the gear list
        - `PrintButton`: To print the gear list

- **Groups Page**: `/groups`

  - **Sections**:
    - Create Group Section
      - **Components**:
        - `TextInput`: For group name
        - `FormButton`: To create group
    - View Groups Section
      - **Components**:
        - `CardList`: To display groups
        - `SearchInput`: To filter groups
    - Group Details Section (`/groups/[groupId]`)
      - **Components**:
        - `GroupHeader`: Displays group name, description, members
        - `SharedListsSection`: Displays shared gear lists for the group
        - `GroupMembersList`: List of group members
        - `InviteMemberButton`: To invite new members

- **Feedback Page**: `/feedback`

  - **Sections**:
    - Submit Feedback Section
      - **Components**:
        - `TextAreaInput`: For feedback description
        - `SelectItem`: For feedback category (Feature Request, Bug Report, etc.)
        - `FormButton`: To submit feedback
    - View Feedback Section
      - **Components**:
        - `FeedbackList`: Displays submitted feedback items
        - `SearchInput`: To filter feedback
        - `SortButton`: To sort feedback by category, status, votes

- **Blog Page**: `/blog`

  - **Sections**:
    - Blog Post List Section
      - **Components**:
        - `BlogPostCard`: To display blog post previews
        - `SearchInput`: To filter blog posts
    - Blog Post Detail Page (`/blog/[postId]`)
      - **Components**:
        - `BlogPostHeader`: Displays blog post title, author, date
        - `BlogPostContent`: Displays blog post content
        - `CommentSection`: To display and submit comments

- **Waitlist Page**: `/waitlist`
  - **Sections**:
    - Waitlist Sign-up Section
      - **Components**:
        - `WaitlistForm`: Form to collect user email for waitlist sign-up
        - `DescriptionText`: Explaining waitlist benefits

## Reusable UI Components

- **Form Components (components/ui/forms)**:

  - `TextInput`: Shadcn `Input` with Tailwind styling for text input fields.
  - `WeightInput`: Custom component combining `Input` with unit selection (g/kg/oz/lb).
  - `SelectItem`: Shadcn `Select` with Tailwind styling for dropdown selection.
  - `FormButton`: Shadcn `Button` with Tailwind styling for form submission.
  - `TextAreaInput`: Shadcn `Textarea` with Tailwind styling for multi-line text input.
  - `WaitlistForm`: Custom form component for waitlist sign-ups.

- **Data Display Components (components/ui/data-display)**:
  - `DataTable`: Shadcn `Table` with Tailwind styling for tabular data display and interactions (sorting, filtering, pagination).
  - `CardList`: Tailwind CSS grid-based component to display lists of items in a card format.
  - `WeightDisplay`: Component to display weight information with clear formatting and units.
  - `FeatureCard`: Reusable card component for displaying features on the landing page.
  - `TestimonialCard`: Reusable card component for displaying testimonials.
  - `BlogPostCard`: Reusable card component for displaying blog post previews.
  - `TrailCard`: Reusable card component for displaying trail information.
  - `FeedbackList`: Component to display lists of feedback items.
  - `GearListDataTable`: Component to display gear items within a gear list.
- **Navigation & Layout Components (components/ui/layout)**:
  - `Header`: Header component for site navigation.
  - `Footer`: Footer component for site information and links.
  - `NavigationMenu`: Shadcn `NavigationMenu` with Tailwind styling for site navigation.
  - `GroupHeader`: Header component for displaying group information.
  - `TrailHeader`: Header component for displaying trail information.
  - `BlogPostHeader`: Header component for displaying blog post header info.
  - `HeroSection`: Section component for the landing page hero area.
  - `FeaturesSection`: Section component for displaying features.
  - `TestimonialsSection`: Section component for displaying testimonials.
  - `CommentSection`: Section component for displaying and submitting comments.
  - `SharedListsSection`: Section component for displaying shared lists within groups.
  - `GroupMembersList`: Component to display a list of group members.
- **Action Components (components/ui/actions)**:

  - `FormButton`: (Reused from form components, but can be considered action-oriented).
  - `ShareButton`: Shadcn `Button` with Tailwind styling for sharing actions.
  - `DeleteButton`: Shadcn `Button` with Tailwind styling, potentially styled for destructive actions.
  - `SortButton`: Shadcn `Button` or `DropdownMenu` with Tailwind styling for sorting actions.
  - `SearchInput`: Shadcn `Input` with Tailwind styling for search functionality.
  - `EditButton`: Shadcn `Button` with Tailwind styling for edit actions.
  - `PrintButton`: Shadcn `Button` with Tailwind styling for print actions.
  - `InviteMemberButton`: Shadcn `Button` with Tailwind styling for inviting members.
  - `SignUpForm`: Custom form component for sign-ups on the landing page.

- **Specialized Components (components/ui/specialized)**:
  - `MapComponent`: Component for displaying interactive maps (e.g., using Leaflet or Mapbox).
  - `TrailMap`: Component for displaying detailed trail maps.
  - `WeatherForecast`: Component to display weather forecasts (integration with weather API).
  - `GearRecommendationEngine`: Component to provide gear recommendations based on trail metrics.
  - `GearItemSelector`: Component to select gear items, potentially with search and filtering.

This updated structure includes a landing page, more comprehensive routes based on the project brief, renamed routes, and a more detailed breakdown of sections and components.
