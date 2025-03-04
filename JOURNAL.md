8-Feb

- picked repo to use for app - next-enterprise
- deployed it to vercel
- added million, dexie, stripe, upstash, posthog resend, react-email packages
- configured posthog web analytics
- removed eslint-plugin-tailwind as it doesnt support tw4
- added dev journal to see if that helps

9-Feb

- install setup clerk config/app
  DOESNT RUN LOCALLY AND CANT FUCKING FIGURE OUT LAST KNOWN GOOD CONFIG SO STARTING AGAIN
- deploy fresh to vercel
- added million, dexie, stripe, upstash, posthog, resend packages
- configured posthog web analytics
- configured posthog product analytics
- configured million but doesnt work with turborepo
- configured Clerk Auth
- updated continue rules
- add shadcn/ui and tailwind after much screwing around as shadcn hasnt updated for tw4

10-Feb

- no dev

11-Feb

- no dev

12-Feb

- no dev

13-Feb

- no dev

14-Feb

- setup vscode code server on new tablet running termux and ubuntu
- tested commits and fetches
- tested running build client side
- SERVER SIDE RUNS ON SAME PORT CLEARLY WRONG SO NEEd TO FIX LATER

17-Feb

- added journal.md to repo
- added basic dexieClient and upstashClient
- created logical schema v1 and v2 DBML located in /schema

21-Feb

- docs for nextjs and upstash and dexie in continue
- embeddings indexing for documents
- better understand continue.dev config

22-Feb

- play with RooCode - so fucking awesome
- add react ui dev mode to RooCode
- downloaded onlook.dev for local build - design ui with ai

23-Feb

- distracted further by RooCline MCP servers - wicked
- incorporated memory, planning, github and puppeteer as MCPs
- no using Architect mode to plan and document the features out
- deleted PRD not useful

25-Feb

- RooCode is WICKED and fast tracked the development of my web app
- cooking WITH SPEED

- placeholder routes for waitlist, about
- shadcn based montec ui components
- basic screenshots and image
- basic waitlist page copy - checkout resend / new.email for inspiration
- basic logo
- setup waitlist page
- setup promoted posts and SEO tuning
- setup posthog experiments for landing page
- use v0 or bolt.diy to duplicate montec website for this saas

- setup dexie
- clean up project schedule / issues on github
- dyanmic posthog recordings via feature flags
- posthog experiments
- posthog surveys
- posthog / vercel feature flags
- add polar https://docs.polar.sh/documentation/basics/getting-started
- setup stripe
- configure qstash messaging
  instead of the previous link use blocks from shadcn directly. some are located here https://ui.shadcn.com/blocks
- onboarding tour - https://nyxbui.design/docs/components/tour

Examine the local Git commit history. For each commit, analyze the code changes by reviewing the diffs. Update the 'memory bank' documentation to reflect the code modifications introduced by each commit. Update the progress file to record completion for each commit, including the commit hash and a brief summary of documented changes. Clarifying questions are encouraged to ensure accurate interpretation of any ambiguous instructions

Build List from Gear or Bundle https://www.kibo-ui.com/components/kanban
Pill components shttps://www.kibo-ui.com/components/pill
Fancy multiselect for adding stuff to lists etc. https://craft.mxkaske.dev/post/fancy-multi-select
Data Table with sort cool pills etc. https://data-table.openstatus.dev/
v0 UI components https://v0.dev/chat/history

https://motion-primitives.com/docs

animated icons https://icons.pqoqubbw.dev/
https://linked-chart.vercel.app/
https://originui.com/

# Product Roadmap - mylightpack.com

## Corpo

- [] register LLC in Wyoming set up for filing federal taxes with IRS
- [] setup DBA in Wyoming
- [] setup US bank account
- [] add corpo details to stripe
- [] add payout details to stripe
- [] add branding to stripe
- [] update privacy & terms with corpo details

## Marketing & Social Promotion

- [] scheduled facebook and instagram content
- [] scheduled blog post and x.com content = articles on underlying problems and how mylightpack solves them, run up to launch, app features e.g. planning for everest / ott / kili etc. hikes with photos
- [] setup retargeting / lookalike audiences in facebook
- [] determine facebook / instagram spend for promo
- [] join facebook and reddit threads for organic promo
- [] drop link to subreddits for critical review
- [] link up with various instagram influencers to tag mylightpack in their posts e.g. cameron's travel wifey, existing friends etc.
- [] add backlinks / crosslinks to other ultralight / hiking websites
- [] get featured on various hiking / backpacking websites and podcasts

## Production Readiness

- [] publish for production OAuth Clients for signin - facebook, google
- [] buy mylightpack.com and mylightpack.co domains via azure if feasible or via aws
- [] setup dns etc. for emails, DKIM, deliverability etc.
- [] setup resend account
- [] update corpo details on pages
- [] stripe switch to PROD
- [] check and finalise internationalisation files translations and sort en at the top of combo box by default

## General

- [] attempt first depploy
- [x] STABLE schema with migrations
- [] cleanup supabase schema for mylightpack instead of midday
- [] replace relative links to common pages to specific ones based on ENV so dashboard can route to website and vice versa e.g. 'process.env.WEBSITE/privacy' instead of '/privacy'
- [] ci/cd pipeline to production
- [] setup ci/cd for preview site
- [] setup replica db for preview / test site
- [] User Driven Feature Backlog - provide paid clients ability to vote and prioritise upcoming features, save votes to account. User Feedback and Fea ture Management -Feature Roadmap area for users to vote on features
- [] SEO & Metadata & OG for static site - https://www.cleanmyseo.com/
- [] Add page / site analytics -- ootb w\ midday via OpenPanel but maybe use vercel if hosting there
- [] Add google tag manager if needed -- not sure what it does or why
- [] Backup & DR - AutomaticBackupSystem for user data protection
- [x] create i18n language translation files - fra, esp, ita, deu, jpn, hin, guj, vn, punj
- [x] hide not-needed features from midday repo - vault
- [x] hide not-needed features from midday repo - inbox
- [x] hide not-needed features from midday repo - invoices
- [x] hide not-needed features from midday repo - assistant
- [x] hide not-needed features from midday repo - menu options
- [x] hide not-needed features from midday repo - icons
- [x] hide not-needed features from midday repo - storybook
- [future] i18n translation functionality based on locate.api

## UI Website

- [] skin with some pay loadcms ui blocks
- [] cookie consent popup and GPDR shenanigans
- [] pages - home, primary landing page
- [] pages - about / story
- [] pages - 404 not found
- [] pages - checkout confirmation page
- [] pages - some starter blog posts
- [] update translation strings for static english in dashboard
- [x] replace branding, logo, slogans, color scheme
- [x] Update favicons and app pngs
- [x] pages - privacy
- [x] pages - terms
- [future] pages - other landing pages for other scenarios - backpackers, general travelers, business travelers & secretaries

## UI Dashboard

- [] items - Table with item image from here: https://ui.shadcn.com/blocks#dashboard-06.
- [] items - Table with add / edit functionaity - https://github.com/sadmann7/shadcn-table
- [] kits - lhs layout in cards w\ images https://ui.shadcn.com/examples/music, multi-select and then "create packlist from selected kits". Selecting individual opens rhs panel layout as table from this https://ui.shadcn.com/examples/tasks with search to add functions
- [] pack lists - lhs layout in condensed cards (no image) similar to emails collapsible fully, rhs detail of the list. Top Left donut chart here: https://ui.shadcn.com/blocks#charts-01. Top Right other list props, fields, share functions etc for the list based on this https://ui.shadcn.com/blocks#dashboard-07. Below both the table of kits and items. Kits are expandable to child items. https://ui.aceternity.com/components
- [] Filter Columns - filter by columns
- [] Hide Columns - hide columns if not relevant
- [] Sort Columns - click to sort relevant columns
- [] supabase auth email link template make nicer - right now just has a code https://supabase.com/docs/guides/functions/examples/auth-send-email-hook-react-email-resend
- [] share via what-3-words link
- [] share via qr code
- [] support / ticketing system for paid customers to report bugs -- ootb w midday but uses plain which fucking requires an onboarding call
- [] Offline Access - access and edit their lists without internet. Smart syncing to update changes once a connection is reestablished, catering to users in remote areas or on hikes.
- [] Progressive Web App - PWA to install on device
- [x] items - table from this https://ui.shadcn.com/examples/tasks,
- [x] overall header / top layout - header menu and search box from this https://ui.shadcn.com/examples/dashboard
- [x] replace branding, logo, slogans, color scheme
- [x] concept ui for dashboard page incl. responsive ui
- [future] onboarding wizard for new customers using this - https://github.com/uixmat/onborda
- [future] demo playground / data for users who login but havent subscribed yet - read only, clickable viewable but no upserts
- [future] Update Hotkeys - hotkeys to rapidly add / delete items, kits, listitems etc.
- [future] Drag & Drop - https://github.com/sujjeee/nextjs-dnd

## AuthN / AuthZ

- [] role-based / subscription-based feature access - check user subscription to determine app features available, disable editing if subscription is not paid up
- [] add in signup providers - google, use THANKLY for now and switch to mylightpack domain for prod
- [x] add in signup providers - facebook
- [x] add in signup providers - email - ootb w\ midday, sent via supabase
- [x] add 2fa capability -> ootb w\ midday
- [future] add in signup providers - strava, garmin
- [never] add in signup providers - apple - yearly subscription cost just for oauth

## Billing & Payments

- [] stripe webhooks and post-processing
- [] stripe checkout / subscription management integration
- [x] stripe.com product / subscription pricing setup
- [x] adaptive pricing automatic in stripe where countries' currency specific price isnt added to stripe
- [x] stripe update supabase schema for user <> subscriptions https://github.com/vercel/nextjs-subscription-payments/blob/main/supabase/migrations/20230530034630_init.sql
- [future] stripe prices for non-US countries
- [future] integrate razorpay for INR payments
- [future] dynamic pricing presentation in pricing tables based on geolocate -- per month INR 250 / 800, AUD|NZD|USD|EUR|ROW 5 / 15, VND 80,000 / 245,000

## User Preferences

- [] add functionality for unit conversions (metric / imperial / fun)
- [] add fun units
- [] add user data export / takeout inc. photos
- [] default theme to light and allow to change
- [x] add ui for unit preferences (metric / imperial)
- [future] add additional languages - punjabi, tamil, malay, bahasa, thai, portuguese, dutch, polish, czech

## Items

- [] inventory system to manage items with photos and other props - I would love a sort of master gear library where one would add all equipment owned. When making a new packing list for a trip, one would then have the option to make a copy of the master gear library, or add items (drag-n-drop) from the gear library filter.
- [] types, categories, tags, notes, price, weight, description, links, owned vs wanted
- [] gear maintenance, purchase dates, receipts etc.
- [] food items can store energy values - summary, fat, carbs, protein - It would be great to be able to build meal plans, with weight, calories, and calculated calories per ounce.
- [future] image recognition to auto-tag and categorize items, making list creation and updates more intuitive and efficient
- [future] Crowd sourced gear inventory - It'd be great to have some sort of way to add gear that other people have already filled out the info for. This would make building a new list of gear really fast since one could just search for their gear and add it right into their owned inventory, complete with a picture, weight, etc. please add autocomplete search suggestions when adding an item for the item "name".
- [future] take photo and AI automatically creates the item for you
- [future] Item / Weight lookup (SKU / barcode / other identifier e.g. Amazon search)

## Kits

- [] meal kits - Then be able to drop those built meals into the main List. In the meal plan it you could list detail, e.g. Beans, Rice, Cheese, Tortillas, Hot Sauce, all with there own calories, and oz/grams, with a section title 'Beans And Rice for 1'. Then be able to add that to the gear, just as 'Beans and Rice for 1' so you can still have a consumable weight included in the list. Also it would allow you to build a large list of all the things you might like to eat on trips, and then when a new trip comes up, you could just pull in whatever you are in the mood for.
- [] allow users to clone / copy kits
- [] allow users to archive kits - archived kits dont appear in searches / cant be added to lists
- [] allow users to delete kits - kits cant be deleted if they're used in active lists, lists must be deleted first
- [] types, categories, tags, notes, description, weight
- [] kit creation area from items in inventory
- [] use kit in lists or group lists - I'd like to be able to make a one time "first aid kit" or similar to use for multiple trips. I'm also interested in this feature for the sole purpose of wanting to see the individual items e.g. dragging the 'First Aid Kit Lite' category into a list will bring in the 8 Items i have in that category. Items would need to be able to associate with multiple categories e.g.'First Aid Kit Lite' and 'First Aid Kit Trek' should both be able to have the same items if required.
- [future] take photo and AI automatically creates the items and constructs them into a kit for you

## Lists

- [] From Skin Out (or FSO) base weight is a commonly used term for base pack weight plus worn and carried weight
- [] list specific settings for sort, filter, hide columns
- [] pre-hike and post-hike notes - document gear choices before the hike, and then what worked / didn't work about the gear
- [] hyperlinks in fields clickable
- [] summary info / chart contains weight, price and % of total weight / price
- [future] versioning - implement versioning of lists. Each version can be rolled back to see start vs what I settled on.
- [] human readable weights - 10 lb 3 oz instead of 130 oz
- [] checklist mode - shows checkboxes when activated, selections are saved in preferences, used for whatever user needs
- [] list groups - organise items or kits into logical groups
- [] SEO improvements - OG / meta tags / rich cards
- [] list analytics - visits, ratings & reviews etc.

## Groups

- [] upsert / manage group info - Our troop often shares gear (cooking gear, water filters, etc.), so it would be nice to know who can contribute what and whether our shared gear is adequate while having the weight statistics conveniently ready. I know this will be difficult to implement, but we really want to migrate from Google Sheets .
- [] upsert / manage group members
- [] modify notifications functionality to suit mlp
- [] modify signup email from midday
- [] group discussion function - self moderated, members only

## Group Lists (List of Lists)

- [] upsert / manage group list info - 1 group list per group, create multiple group lists for diff variations
- [] (de)associate lists from group members
- [] create lists for group members
- [] managing shared kits and items inc. option to choose split of # / weight - most of the time you have more than one persons sharing the load for some categories (kitchen, tent, etc) so to get a more fair weight a split would be really nice. Use Case: I'm planning a climbing trip and have a lot of group gear: tent, rope, cams, anchor material, stove, etc, etc. I'm only carrying half the gear for the approach, so I'd like to count half of it towards my total.
- [] shared lists appear on member dashboards
- [] group members must sign up
- [] SEO improvements - OG / meta tags / rich cards
- [] group fees per member / per group - member limit
- [] list locking and/or support concurrent edits

## Community & Socials

- [future] gamify dashboard with badges and leaderboards https://www.freepik.com/icon/badge_2826701
- [future] allow shakedown comments from other users - comment section directly on LighterPack would be very beneficial. This way the owner could keep track of all the critique in one place without having find it on Reddit again. The comment section would be at the bottom of the List and possibly even allow for replies and upvotes. Since usernames are publicly displayed, this feature can evolve into a "LighterPack community" where you can upvote and find others' Lists. This will not only be useful for pack shakedowns, it allows for Boy Scout troop leaders, like me, to easily comment on scouts' preparations for a trip. With this safety feature, I can ensure that my troop is adequately prepared.
- [future] allow shakedown comments from public - with captcha / email requirements - users can request feedback on their Lists from experienced community members or ultralight experts. This feature facilitates knowledge sharing and helps users refine their packing strategies.
- [future] allow ranking public / shared lists - SABCDEF etc. Tier List
- [future] allow rate & review public / shared lists
- [future] discord community with mods

## AI

- [future] AI shakedown suggest possible missing items, alternatives, weight mgmt tips etc
- [future] add chat ai to upsert info
- [future] add voice ai to upsert info
