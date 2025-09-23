 “Do not add new libraries. Use Next.js, Tailwind, framer-motion, lucide-react, shadcn/ui only. Show complete diffs for every file you edit.
---

## 1) Data model + sample content

**Prompt:**
“Create `src/data/showcase.ts` defining a type-safe schema and seed items.

* Export types:

```ts
export type ShowcaseCategory = 'Website' | 'Dashboard' | 'Automation' | 'Chatbot' | 'Integration';
export type Industry = 'Retail & C-store' | 'Food & Hospitality' | 'Cleaning Services' | 'Professional Services' | 'Smoke Shop' | 'Other';

export type KPI = { label: string; value: string };
export type Media = { type: 'image' | 'video' | 'iframe'; src: string; alt?: string; };
export type ShowcaseItem = {
  slug: string;
  title: string;
  subtitle?: string;
  category: ShowcaseCategory;
  industry: Industry;
  summary: string;
  highlights: string[];              // bullet points
  kpis?: KPI[];                      // chips like +25% bookings
  features: string[];                // what’s included
  media: Media[];                    // gallery
  techStack?: string[];
  demo?: { url?: string; creds?: { user?: string; pass?: string } };
  tags: string[];
  published: boolean;
};
```

* Export `SHOWCASE_ITEMS: ReadonlyArray<ShowcaseItem>` with at least 8 items (mix: 3 Websites, 3 Dashboards, 2 Automations) using placeholder media paths like `/images/showcase/retail-dashboard-1.png`. Add realistic KPIs and highlights (booking boost, no-show drop, etc.).

* Export helpers: `allCategories`, `allIndustries`, `allTags` derived from items.

* Add saffron-teal friendly tags like `booking`, `crm`, `payments`, `analytics`, `ai-assistant`.
  Return full file.”

---

## 2) Showcase page route

**Prompt:**
“Create `app/showcase/page.tsx` with a filterable, searchable gallery.

**Layout**

* Page title ‘Showcase & Live Examples’.
* Intro text one short paragraph.
* Filters bar (sticky on scroll): Tabs for Category, Dropdown for Industry, Tag multi-select chips, Search input.
* Sort dropdown (Most relevant, Latest).

**Grid**

* Masonry-like responsive grid (1/2/3/4 cols at sm/md/lg/2xl).
* Each card shows: cover image, category badge, title, industry, KPI chips, and two CTAs:

  * `View Details` (opens /showcase/\[slug])
  * `Quick Preview` (opens lightbox)

**State**

* Client-side filter/search (no external libs). Query params sync (`?q=&category=&industry=&tags=`).

**Theme**

* Use saffron/teal:

  * badges: `bg-saffron-light text-tealbrand`
  * hover border: `border-tealbrand/40`
  * sticky bar with subtle gradient `from-saffron-light via-white to-tealbrand-light`.

**Perf & UX**

* `next/image` for thumbs (`loading="lazy"`), skeleton loaders, framer-motion fade-in.
* Empty state with CTA ‘Request a Custom Demo’.

Return full page component.”

---

## 3) Reusable components

**Prompt:**
“Create these components:

* `src/components/showcase/ShowcaseCard.tsx`

  * Props: `item: ShowcaseItem`
  * Cover uses `next/image` (16:9). On hover: lift + shadow teal.
  * Chips for KPIs. Category badge top-left (saffron).
  * Buttons: Primary ‘View Details’, Ghost ‘Quick Preview’.

* `src/components/showcase/FiltersBar.tsx`

  * Props: { categories, industries, tags, value, onChange }
  * Contains: Category tabs, Industry `Select`, Tag multiselect, Search input, Sort dropdown.
  * Sticky with backdrop blur; respects reduced motion.

* `src/components/showcase/Lightbox.tsx`

  * Modal that renders media (image/video/iframe).
  * Keyboard accessible (ESC, focus trap). Arrows to navigate.

* `src/components/ui/KPIChip.tsx`

  * Small rounded chip: label + value.

Provide all components with Tailwind classes aligned to saffron-teal tokens from our theme.”

---

## 4) Dynamic detail pages

**Prompt:**
“Create `app/showcase/[slug]/page.tsx` with static generation.

**Hero**

* Breadcrumbs back to /showcase.
* Title, industry, category, KPI chips.
* Primary CTA ‘Schedule Free Consultation’, Secondary ‘View Live Demo’.

**Content**

* Left: rich description, ‘Highlights’ bullets, ‘What’s Included’ list.
* Right: `Gallery` (images/video/iframe) with thumbnails (opens Lightbox).
* Section ‘Tech Stack’ and ‘Results’ (KPI grid).
* ‘Related examples’ rail at bottom.

**SEO**

* Use `generateMetadata` with title/description from item, canonical to `/showcase/[slug]`.
* OG image via existing gradient style.

Return full page code.”

---

## 5) Images & placeholders

**Prompt:**
“Create an `/public/images/showcase/` tree and add placeholder assets:

* `retail-dashboard-1.png`, `cleaning-website-landing.png`, `restaurant-online-ordering.png`, `service-booking-flow.png`, `pro-services-crm.png`, `pos-integration-automation.png`, etc.
  Use light mock placeholders (960×540) with saffron-teal gradient and overlaid labels via simple SVG or PNG.
  Update imports/paths accordingly. Provide a list of files created and sizes.”

---

## 6) CTA & lead capture on Showcase

**Prompt:**
“Add a persistent bottom sticky CTA bar on `/showcase` and `[slug]` pages.

* Component `components/StickyCTA.tsx`:

  * Appears after 30% scroll.
  * Text: ‘Like what you see? Get a custom walkthrough.’
  * Buttons: `Schedule Free Consultation` (primary, saffron→teal gradient), `See Pricing` (ghost, teal).

* Wire it into both pages. Ensure it hides when `ConsultationModal` is open. Return diffs.”

---

## 7) Analytics events

**Prompt:**
“Instrument analytics in `lib/analytics.ts` and call:

* `showcase_filter_change`
* `showcase_card_open`
* `showcase_view_details`
* `showcase_quick_preview`
* `showcase_cta_click`

Console-log in dev; expose no PII. Add calls to FiltersBar, ShowcaseCard, Lightbox, StickyCTA.”

---

## 8) SEO & sitemap

**Prompt:**
“Add to `next-sitemap` config or our custom `app/sitemap.ts` dynamic entries for each showcase slug. Ensure `/showcase` is in the sitemap. Update `robots.txt` if present.”

---

## 9) Accessibility & performance polish

**Prompt:**
“Run an a11y & perf pass on the new pages:

* All interactive elements are buttons/links with `aria-label`s.
* Images have `alt`.
* Keyboard navigation works inside Lightbox.
* Use `priority` only on above-the-fold hero image.
* Verify CLS < 0.02 on `/showcase`.
  Provide a short report and any code changes.”

---

## 10) Content starter pack (drop-in)

**Prompt:**
“Replace the placeholder items in `src/data/showcase.ts` with these details (keep the same structure):

* **Retail & E-commerce Dashboard** (Dashboard)
  Highlights: ‘SKU-level sales heatmap’, ‘Dead stock detector’, ‘Auto reorder thresholds’.
  KPIs: `+22% weekly sell-through`, `-18% stockouts`.
  Features: ‘Stripe/Square import’, ‘Daily WhatsApp summary’, ‘Cost of goods tracking’.
  Demo creds: user `demo@jaithraya.com`, pass `demo123`.
  Media: retail-dashboard-1.png, retail-dashboard-2.png, iframe `/demos/retail-dashboard`.

* **Cleaning Services Booking Website** (Website)
  Highlights: ‘Zip-code pricing’, ‘SMS reminders’, ‘Google Reviews widget’.
  KPIs: `2.1× conversion`, `-35% no-shows`.
  Media: cleaning-website-landing.png, cleaning-booking-flow\.png.

* **Restaurant Online Ordering** (Website / Integration)
  Highlights: ‘Menu sync’, ‘Order throttling’, ‘Kitchen display’.
  KPIs: `+29% avg order value`.
  Media: restaurant-online-ordering.png, restaurant-kds.png.

* **Professional Services CRM & Billing** (Dashboard)
  Highlights: ‘Pipeline board’, ‘Invoice + Payments’, ‘Workload planner’.
  KPIs: `+15% billable utilization`.
  Media: pro-services-crm.png.

* **POS → Data Warehouse Automation** (Automation / Integration)
  Highlights: ‘Nightly ETL’, ‘Data quality checks’, ‘Looker Studio templates’.
  KPIs: `T+1 reporting (from T+7)`.
  Media: pos-integration-automation.png.

Add 3 more items of your choice to reach 8+. Ensure tags reflect features. Show the updated array.”

---

### Content & presentation tips (no prompt needed)

* Keep screenshots on **light backgrounds** with thin teal borders to match your theme.
* Prefer **before/after KPI chips** to make value obvious.
* Each detail page should end with a **1–2 minute video** walkthrough (native `<video>` with poster image).
* For “live demo”, if you don’t have a running instance, use an **iframe** to an HTML prototype or show an annotated video and disable the button with tooltip “Live demo available on request”.
