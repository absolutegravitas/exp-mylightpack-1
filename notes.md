Create a members area dashboard for users to manage the following for **myLightPack**, a websiite that will help users optimize their pack weight and manage their gear efficiently. Implement a fully functional demo with CRUD interface. Use indexeddb to store user data and PWA to allow for offline use. Start with mock data when user first visits the site. Use shadcn dashboard npx shadcn@latest add dashboard-01 as a starting point as I like the sidebar. Implement dashboard wide search using fuse.js and ability to click through to the specific record that is found.

Features

- **Gear Management:** Track individual gear items with details like photos, weight, brand, price, season rating and usage.
- **Kit Management:** Create and manage kits based on one or more gear items for example a First Aid Kit. Add details about the kit like photos, name, description. Show combined weight from gear items.
- **Pack List Management:** Create and manage pack lists comprised of one or more kits and one or more gear items. Show kits and gear items in the pack list and an interactive visual chart to show weight distribution by category, type, tags and other variables. Show combined weight from kits and gear items.
- **Group Management:** Create and manage groups of users. Add details about the group like name, description, season, and members. Create group lists to record shared and individual items between group members.
- **User Profiles:** Allow users to create and manage their preferences, including unit of measurement, sort / filter preferences, custom tags and categories, language, billing, data export, import.

great start. I want the following changes

For Sidebar:

- allow collapsible sidebar on desktop
- allow resizable sidebar on desktop

For All:

- allow column sorting
- allow column filtering

For Gear:

- allow uploading one or more images. Use the first image as the thumbnail
- on desktop, show edit form to the right of the table like email preview

For Kits:

- allow uploading one or more images. Use the first image as the thumbnail
- on desktop, show edit form to the right of the table like email preview

For Lists

- allow uploading one or more images. Use the first image as the thumbnail
- implement full CRUD interface to add, edit and delete lists
- on desktop, show edit form to the right of the table like email preview
- Create and manage pack lists comprised of one or more kits and one or more gear items. Show kits and gear items in the pack list and an interactive visual chart to show weight distribution by category, type, tags and other variables. Show combined weight from kits and gear items.
- Implement social sharing features for pack lists

For User Profile

- include export functionality to download all user data as zipped files. Export should include any uploaded images and gear / pack lists as csv or json in a single downloadable zip.

Gear

Create a full CRUD interface to add, edit and delete gear items
Allow users to add multiple images to each gear item using drag and drop
Allow users to take a photo or upload images from their device to the gear record

Kits
Allow users to select one or more gear items to create Kits for example a First Aid Kit that contains individual gear items. The same gear item can be in different Kits at the same time.

Pack Lists
Create a full CRUD interface to add, edit and delete lists
Allow users to create pack lists and add individual gear or kits into the list.
Create an option for "drag & drop" interface to create lists where users can find gear and drag and drop them into lists.

Add pack list export functionality to print or save to PDF
Add export/import functionality to share pack lists with other users
Implement social sharing features for pack lists and trip plans
Add a pack sharing feature to allow users to share their optimized pack lists

User Profile
Implement user settings page for managing weight units and app preferences
including export functionality to download all user data as zipped files. Export should include any uploaded images and gear / pack lists as csv or json in a single downloadable zip.

==

For All:

the charts arent showing please fix
allow duplicating gear, kits and lists
add support for keyboard shortcuts to do CRUD operations and navigate between gear, kits, pack lists
when users press ?, show available shortcuts in a modal similar to gmail
implement a basic onboarding wizard for new users, showing them the main features of the app step by step using shadcn tooltips or other better method

For Lists:

add a checklist mode for pack lists so users can check off items as they are packed
add rich metadata tags / OG and SEO for lists when shared on social media

==

Fixes:

- the charts still dont show. check and confirm you are using shadcn charts
- the tour auto navigates to Kits after Create Kits and then it disappears so you never see the rest of the tour
- when clicking on profile, i get an import error The "file-saver" module does not provide an export named "saveAs".

Modified Features

- on the dashboard, remove weight distribution by category section
- on the dashboard, add buttons to go to Gear, Kits or Lists
- on the dashboard, remove analytics sub tab

New Features:

- on the sidebar, add a sub-section with a menu to go back to the marketing web pages. the links should be Home, About, Roadmap. Also add a set of menu options at the bottom for settings, help, request a feature and feedback
- on the sidebar, make the Kits a collapsible menu that shows the most recently updated Kits up to 5 items and then a view all link
- on the sidebar, make the Lists a collapsible menu that shows the most recently updated Lists up to 5 items and then a view all link

==

- on the gear table, can you just allow people to directly edit the table instead of click to see detail AND then another click on the edit button. Record should be saved after each change. show main image thumbnail on the table if it exists, otherwise a placeholder image.
- on the kit table, can you just allow people to directly edit the table instead of click to see detail AND then another click on the edit button. Record should be saved after each change. show main image thumbnail on the table if it exists, otherwise a placeholder image.
- on the list table, can you just allow people to directly edit the table instead of click to see detail AND then another click on the edit button. Record should be saved after each change. show main image thumbnail on the table if it exists, otherwise a placeholder image.
- on the kit table, can you make each record a tree so that the gear items that comprise that kit are viewable when I expand the kit.

==
Fixes:

- Make Settings link in sidcebar go to user preferences.
- under Kits Weight Distribution, show a shadcn chart with the weights of each item making up that Kit
- under Pack Lists Weight Distribution, show shadcn pie chart with the weights of each item or kit making up the pack. Allow users to show by Categor, by Kit, by Type etc.

For Lists:

- create a flag to make lists public. public lists are visible from the community page
- Implement a community section where users can browse popular pack lists that have been made public
- allow users to rate and review public / shared lists
- allow users to comment on public / shared lists
- add QR code to share public / shared lists

==
Fixes:

- in the gear table, allow users to upload one or more images
- in the kit table, allow users to upload one or more images
- in the list table, allow users to upload one or more images
- when i click on Community, I get the following error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
- when i click on profile, i get the following error: Uncaught TypeError: Cannot read properties of undefined (reading 'signal')

New Features:

- implement functionality to import gear and lists from lighterpack.com either via their CSV or from their unique URL. IMPORTANT: you may have to do some research to properly understand and implement this functionality. Example URL: https://lighterpack.com/r/100gxp

==
New Feature:

- i'm going to use PostHog for feature flags. Review the entire codebase and implement feature flags for all features beyond the basic functionality for CRUD operations on gear, kits and lists. Create a markdown file listing the feature flags, description etc and their current state.

==
