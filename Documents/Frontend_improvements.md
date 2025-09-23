Here are **Cursor-ready prompts** you can paste directly to update your Pricing page’s color theme to a **light saffron + teal** combo.
Each prompt tells Cursor which files to edit and what to change.

---

### 1️⃣ Add Brand Colors to Tailwind Config

**Prompt**
“Update `tailwind.config.js` to include custom brand colors:

```js
extend: {
  colors: {
    saffron: {
      light: '#FAD680',
      DEFAULT: '#F7B543',
    },
    tealbrand: {
      light: '#A4E6DA',
      DEFAULT: '#2CBFA3',
    },
  },
}
```

Also add a gradient helper:

```js
backgroundImage: {
  'brand-gradient': 'linear-gradient(135deg,#FAD680 0%,#A4E6DA 100%)',
}
```

List the complete diff for `tailwind.config.js`.”

---

### 2️⃣ Pricing Page Gradient Hero

**Prompt**
“In `app/pricing/page.tsx`, wrap the top hero section in
`className="bg-brand-gradient from-saffron-light via-white to-tealbrand-light"`
to create a soft saffron→white→teal gradient background.
Show full updated JSX for that hero section only.”

---

### 3️⃣ Pricing Cards

**Prompt**
“In `components/PricingCard.tsx`:

* Default border → `border-gray-200`
* On hover → `border-tealbrand/40`
* For the ‘Most Popular’ badge use `bg-saffron-light text-tealbrand`
  Return the complete component code.”

---

### 4️⃣ Industry Bundles Hover

**Prompt**
“In `components/IndustryBundleCard.tsx`, add a hover shadow:
`hover:shadow-[0_4px_14px_rgba(44,191,163,0.1)]`
Ensure transition duration 300ms.
Show full diff.”

---

### 5️⃣ Comparison Table Stripes

**Prompt**
“In `components/PricingComparisonTable.tsx`, stripe alternate rows:
`even:bg-[#FFF9F1]` (5% saffron tint).
Display the updated table JSX.”

---

### 6️⃣ CTA Buttons (Global)

**Prompt**
“In `components/Button.tsx`:

* Default CTA → `bg-saffron hover:bg-gradient-to-r hover:from-saffron hover:to-tealbrand text-white`.
* Secondary / ghost → `text-tealbrand border-tealbrand hover:bg-tealbrand-light/20`.
  Return the full component.”

---

### 7️⃣ Footer Link Hover

**Prompt**
“In `components/Footer.tsx`, set link hover color to `text-tealbrand`.
Show full updated footer code.”

---

### 8️⃣ Test + Cleanup

**Prompt**
“Run a sweep across `components/**.tsx`:

* Replace any hardcoded `bg-orange` or `text-cyan` with our new `saffron` and `tealbrand`.
* Ensure contrast ratio ≥ 4.5:1 for text on saffron.
  Return a list of all edits with before/after snippets.”

---

💡 **Usage Tip for Cursor**
When pasting each prompt, append:

> “Do not introduce new libraries. Show the complete file diff with changes applied.”

These prompts will align the page with a **light saffron–teal brand theme** that stays airy and professional.
