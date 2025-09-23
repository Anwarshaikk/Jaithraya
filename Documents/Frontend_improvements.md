
---

## 0) Baseline Refactor & Design Tokens

**Prompt:**
“You are a senior Frontend dev. Audit my Next.js + Tailwind project for consistency.
**Goal:** establish global typography, spacing, and color tokens; add container widths and shadows.
**Edit files:**

* `tailwind.config.ts` → add font sizes (xs–6xl), spacing scale (2–96), container `maxWidth`, and shadows (`shadow-soft`, `shadow-elevated`).
* `app/globals.css` → CSS variables: `--brand-saffron`, `--brand-teal`, `--bg-wash`, `--card`, `--muted`.
* Ensure base font-size = 16px, line-height 1.6.
  **Acceptance:** a `tokens.md` comment block at top of `globals.css` listing brand colors, example classes, and how to use them.”

---

## 1) Navigation: Sticky, Clear CTAs

**Prompt:**
“Create a sticky header with reduced height on scroll.
**Files:** `components/NavBar.tsx`, `app/layout.tsx`.
**Details:**

* Left: logo; Center: section links (`Features`, `Process`, `Pricing`, `Success`, `Contact`); Right: primary CTA `Get Free Consultation`.
* Add active-section highlight using IntersectionObserver.
* Mobile: slide-in menu (Trap focus, ESC to close).
  **Acceptance:** Lighthouse a11y ≥ 95, no CLS on scroll, keyboard accessible.”

---

## 2) Hero: Sharper Messaging + Social Proof Row

**Prompt:**
“Revamp hero in `app/solutions/professional-services/page.tsx`.
**Structure:**

* H1: `Transform Your Service Business`
* Subhead: 2 short lines (≤ 80 chars each).
* Primary CTA: `Start My Free Consultation` (filled), Secondary: `See How It Works` (ghost; scroll to Process).
* Add compact social proof row: ⭐ 4.9/5 rating, `10+ industries`, `95% retention`.
* Add subtle framer-motion fade/slide-up on load.
  **Acceptance:** content fits above the fold on 1440×900, CTAs visible without scroll.”

---

## 3) Feature Clusters (Readable, Scannable)

**Prompt:**
“Replace the long features grid with **3 clusters**.
**Files:** `components/FeatureCluster.tsx`, update page usage.
**Clusters:**

1. `Scheduling & Booking` (smart scheduling, staff calendar, notifications)
2. `Customer & Payments` (CRM, reminders, online payments)
3. `Analytics & Ops` (performance dashboards, audits, data security)
   **Design:** section title + short tagline, 3–5 bullet items per cluster, each bullet with an icon (lucide-react).
   **Behavior:** hover lift (`shadow-elevated`) + subtle border accent (brand-teal).
   **Acceptance:** total text per card ≤ 80 words; mobile collapses to accordion.”

---

## 4) Three-Step Process with Icons & Timelines

**Prompt:**
“Redesign the 3-step process.
**Files:** `components/ProcessStep.tsx`, `components/ProcessTimeline.tsx`.
**Specs:** each step = icon + title + 4 bullets + ‘What you get’ checklist.
Add a horizontal timeline with progress dots on desktop; vertical on mobile.
**CTA:** small ‘Book This Step’ button under each card, opening the main `Consultation` modal.
**Acceptance:** section scrolls into view with staggered animations (framer-motion).”

---

## 5) Pricing Cards (Equal Height, Clear Value)

**Prompt:**
“Refactor pricing to **equal-height** cards with clear differentiators.
**Files:** `components/PricingCard.tsx`, `components/PricingToggle.tsx`.
**Specs:**

* Plans: Starter, Growth, Enterprise.
* Add badges (`Most Popular` on Growth).
* Include a ‘What’s included’ short list + expandable ‘Full details’ drawer.
* Add monthly vs annual toggle (show 2 months free).
* CTA labels personal: `Choose Growth →`.
  **Acceptance:** aligned card heights at ≥1024px; tab order: toggle → cards; CTAs trigger lead form.”

---

## 6) Testimonials Carousel + Logos

**Prompt:**
“Compress the long testimonial list into a responsive carousel.
**Files:** `components/TestimonialCarousel.tsx`, `data/testimonials.ts`.
**Specs:**

* Each slide: quote, name, role, small avatar, metric chip (e.g., `+25% bookings`).
* Below: a ‘Used by’ logo strip (6–8 logos; use placeholders).
* Auto-play with pause on hover; keyboard accessible.
  **Acceptance:** 12-column layout at desktop; no layout shift.”

---

## 7) Persistent CTA Bar (Long Pages)

**Prompt:**
“Add a bottom sticky CTA bar that appears after 30% scroll.
**Files:** `components/StickyCTA.tsx`.
**Content:** plan selector (Starter/Growth/Enterprise) + button `Start My Free Consultation`.
**Acceptance:** hidden on mobile keyboards; respects reduced motion settings.”

---

## 8) Consultation Modal (Short, High-Converting)

**Prompt:**
“Design a minimal, 3-field lead modal.
**Files:** `components/ConsultationModal.tsx`.
**Fields:** name, email, company size (select).
**Validation:** client-side; show success state (confetti).
**Integrations:** event tracking hooks (`onOpen`, `onSubmitSuccess`).
**Acceptance:** keyboard & screen-reader friendly; submits in ≤ 300ms (mock).”

---

## 9) Typography & Rhythm Pass

**Prompt:**
“Apply a site-wide type scale & vertical rhythm.
**Files:** sweep all `components/**.tsx`.
**Rules:**

* H1 48–56 / H2 36–40 / H3 28–32 / body 16–18.
* Max line-length \~70ch for paragraphs.
* Increase `leading-relaxed` for long copy; tighten lists.
  **Acceptance:** Lighthouse readability plugin passes; headings consistently spaced (mt-10 md\:mt-12).”

---

## 10) Performance & A11y Guardrails

**Prompt:**
“Add performance and accessibility guardrails.
**Tasks:**

* Replace large PNGs with `next/image` optimized WebP/AVIF.
* Preload main font; use `font-display: swap`.
* Add semantic landmarks (`header`, `main`, `nav`, `section`, `footer`).
* All interactive elements get visible focus styles.
  **Acceptance:** Lighthouse: Performance ≥ 90, Accessibility ≥ 95.”

---

## 11) Section Anchors + TOC

**Prompt:**
“Add section anchors and a floating Table-of-Contents on desktop.
**Files:** `components/PageTOC.tsx`.
**Anchors:** `#features #process #pricing #success #contact`.
**Behavior:** TOC highlights current section; click scroll is smooth & respects reduced motion.
**Acceptance:** No overlap with sticky header; deep links work.”

---

## 12) Dark Mode (Optional but Polished)

**Prompt:**
“Implement dark mode via `class` strategy.
**Files:** `tailwind.config.ts`, `app/layout.tsx`.
**Specs:** brand colors adapt (teal/saffron slightly muted), cards use `bg-card/90`.
Add toggle in nav; remember preference in `localStorage`.
**Acceptance:** Contrast meets WCAG AA in dark.”

---

## 13) SEO & Social Cards

**Prompt:**
“Add metadata per page and an OG image generator.
**Files:** `app/solutions/professional-services/opengraph-image.tsx`, `next-seo.config.ts`.
**Acceptance:** correct title/description; OG renders with headline, subline, and brand gradient.”

---

## 14) Analytics + Event Map

**Prompt:**
“Instrument key events with a tiny analytics layer.
**Files:** `lib/analytics.ts`, wrappers on CTAs/modals.
**Events:** `hero_cta_click`, `pricing_select`, `consult_submit_success`, `sticky_cta_click`.
**Acceptance:** Debug logger prints to console in dev; easy to swap to GA/Segment later.”

---

## 15) A/B Copy Test (CTA Labels)

**Prompt:**
“Create a lightweight A/B test for CTA text.
**Files:** `components/CTAButton.tsx`.
**Variants:** A) `Get Free Consultation`, B) `Start My Free Consultation`.
**Assignment:** localStorage bucket; track click event with variant.
**Acceptance:** simple hook, safe for SSR.”

---

## 16) Content Tightening (Microcopy)

**Prompt:**
“Rewrite long sub-lines into crisp, scannable sentences.
**Files:** current page only.
**Rules:**

* ≤ 14 words per sentence where possible.
* Use verbs and benefits: ‘Book faster. Get paid sooner. See performance clearly.’
* Replace jargon; ensure each section starts with a clear payoff.
  **Acceptance:** reading grade level ≤ 8.”

---

## 17) Responsive Polish

**Prompt:**
“Audit breakpoints: sm, md, lg, xl, 2xl.
**Fixes:**

* Pricing cards: 1-col (sm), 2-col (md), 3-col (lg+).
* Feature clusters: 1-col (sm), 2-col (md), 3-col (xl).
* Prevent orphan CTAs—ensure buttons aren’t off-screen on small devices.
  **Acceptance:** no horizontal scroll at any width; tap targets ≥ 44px.”

---

### Pro tip for Cursor
“**Do not invent new libraries. Use Next.js, Tailwind, framer-motion, lucide-react, shadcn/ui only. List every file you edit and show *complete* diffs.**” also make sure to edit the logs later.
