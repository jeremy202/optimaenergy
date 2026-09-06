# Optima Global Energy Services — Website (Nuxt 3 + Tailwind CSS)

Component-based rebuild of the Optima Global Energy Services website using Nuxt 3, Vue 3
(Composition API, `<script setup>`), and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Other scripts

```bash
npm run build     # production build
npm run generate  # static site generation
npm run preview   # preview a production build locally
```

## Structure

- `pages/` — the 5 site pages: Home (`index.vue`), Company, Services, Assurance, Contact.
  Nuxt's file-based routing maps these automatically (`/`, `/company`, `/services`, `/assurance`, `/contact`).
- `components/` — reusable UI building blocks (buttons, cards, section headings, tables,
  pill rows, the icon system, header/footer, etc.).
- `components/sections/` — larger, page-section-specific components (e.g. the Services
  page's Well Engineering accordion).
- `composables/` — `useIcons` (the inline SVG icon set) and `useReveal` (scroll-reveal
  animation logic).
- `plugins/reveal.ts` — registers the `v-reveal` directive used for scroll fade-in effects.
- `assets/css/main.css` — design tokens (colors, light/dark mode) and Tailwind layer setup.
- `public/logo.png` — the Optima logo, extracted from the original PDF proposal.

## Notes

- All partner/operator badges (OMASUP Energy, SLB, Weatherford, Eni, Baker Hughes) are
  typographic — no third-party logo artwork is embedded.
- Team and facility photos are currently styled placeholders (`PhotoBlock` component).
  Swap in real photography by replacing those components' usage in `pages/*.vue` and
  `components/*.vue` with `<img>` tags once photos are available.
- Color palette and typography (Fraunces + Inter) match the earlier static-HTML version
  of this site, now expressed as Tailwind design tokens in `tailwind.config.ts` /
  `assets/css/main.css`, with automatic light/dark mode support.
