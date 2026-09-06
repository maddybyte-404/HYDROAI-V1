# Hydro AI Website

A frontend-first Next.js website for Hydro AI, an early-stage Indian AgriTech platform for measured, connected and predictive hydroponics.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production build with `npm run build`.

## Edit website content

Most copy is deliberately centralized:

- `data/site.ts` — positioning, vision, mission and values
- `data/products.ts` — products, capabilities, pricing and statuses
- `data/technology.ts` — technology content and development readiness
- `data/solutions.ts` — audience solution content
- `data/crops.ts` — crop intelligence cards

Do not edit components merely to change repeated marketing copy.

## Add a product or crop

Add a typed entry to `data/products.ts` or `data/crops.ts`. Cards update automatically on the relevant pages.

## Theme and visuals

Global colors and shared styles live in `app/globals.css`; Tailwind color aliases live in `tailwind.config.ts`. The interactive parameter palette is defined inside `components/interactive/parameter-explorer.tsx`.

## V2 visual and UX components

- `components/hero/hero.tsx` — animated sensor-to-core data-flow hero
- `components/interactive/parameter-explorer.tsx` — parameter-specific themes and explanations
- `components/interactive/configuration-tool.tsx` — five-step configuration prototype
- `components/sections/signal-fusion.tsx` — sensing-to-decision architecture visual
- `components/sections/experimental-platform.tsx` — experimental NFT platform credibility section
- `components/sections/intelligence.tsx` — measurable sustainability and economic-planning narrative

No prototype photograph is included in this project. Add an optimized, real project image to `public/images/` and update `experimental-platform.tsx` when one is available; do not substitute fabricated farm photography.

## Add real images

Place optimized images in `public/images/`, then use Next.js `Image` with descriptive alt text. This V1 intentionally uses technical visuals rather than fabricated project photography.

## Deployment

Deploy to Vercel by importing this folder as a Git repository, or run `npm run build` followed by `npm start` on a Node host. Before publishing, set your actual site URL in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.

## V1 limitations

The contact form and configuration tool are client-side prototypes only. No analytics, CRM, form-delivery, authentication, or live farm-data backend is connected.
