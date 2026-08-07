# Port O' Pints Brewing Co. — Site Reference

**Live domain:** portopints.com  
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Vercel  
**Repo:** xale100/HarbarJohn → deploys `main` to Vercel automatically

---

## Design System

| Token | Value | Used for |
|---|---|---|
| Background | `#080d08` | Page base |
| Section alt | `#0a100a` / `#0f170f` | Alternating sections |
| Text | `#DDD8CC` | Body copy |
| Gold | `#BFA060` | Headings, accents, CTAs |

**Dim text:** `text-white/60–65` + `textShadow: "0 1px 6px rgba(0,0,0,0.9)"` for readability over photos.  
**Grain overlay:** `.grain` class on hero sections.

---

## Key Integrations

| Service | Env var(s) | Notes |
|---|---|---|
| Cloudflare R2 | `NEXT_PUBLIC_ASSETS_URL` | Public bucket `porto-pints-public-images-assets`. Asset slug: `{category}/{slug}-{width}w.webp` |
| Printful | `PRINTFUL_API_KEY` | Sync products/variants. Uses `variant_id` (catalog) for shipping rates, `sync_variant_id` for orders |
| VenueFlow | `VENUEFLOW_SLUG` | Live music calendar on `/events` |
| Square | `SQUARE_APPLICATION_ID` `SQUARE_LOCATION_ID` `SQUARE_ACCESS_TOKEN` `SQUARE_ENVIRONMENT` | Merch checkout. Set `SQUARE_ENVIRONMENT=production` for live charges |
| Supabase | `SUPABASE_URL` `SUPABASE_SERVICE_ROLE_KEY` | Mug Club member data + photos |

---

## Pages & Routes

| Path | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage — hero, beer list, shows carousel, merch carousel, brewmaster quote |
| `/menu` | `src/app/menu/page.tsx` | Beer & Food |
| `/events` | `src/app/events/page.tsx` | Music & Events, VenueFlow calendar |
| `/visit` | `src/app/visit/page.tsx` | Hours, location, FAQ |
| `/merch` | `src/app/merch/page.tsx` | Printful store — grid → detail → shipping → Square payment |
| `/about` | `src/app/about/page.tsx` | Team, values |
| `/activities` | `src/app/activities/page.tsx` | Outdoor activities / area guide |
| `/south-beach` | `src/app/south-beach/page.tsx` | **Har Bar info — remove once harbar.com goes live** |
| `/admin/hb-ubersecret-internal` | `src/app/admin/…` | Mug Club admin — not indexed |

**API routes:**
- `POST /api/merch/shipping` — proxies to Printful `/shipping/rates`
- `POST /api/merch/checkout` — Square charge → Printful order → confirm fulfillment
- `/api/mugclub/*` — Mug Club CRUD + photo upload

---

## Sitemap & Robots

- `src/app/sitemap.ts` — auto-served at `/sitemap.xml` by Next.js
- `public/robots.txt` — allows all bots, blocks `/admin/` and `/api/`

---

## Launch Checklist

### Blocking

- [x] ~~Devin's brewmaster quote~~ — added to homepage + about page
- [ ] **DNS cutover** — move domain from Wix → Cloudflare (where R2 lives), then point to Vercel. Waiting on John's green light.
- [ ] **VenueFlow slug** — confirm `VENUEFLOW_SLUG` set in Vercel env vars (booking form on `/events` routes through VenueFlow, no separate email needed)

### Same day as cutover

- [ ] Remove old Google Calendar env vars from Vercel (`GOOGLE_CALENDAR_ID`, `GOOGLE_CALENDAR_API_KEY`)

### Post-launch — first week

- [ ] Submit sitemap to Google Search Console (`https://portopints.com/sitemap.xml`)
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor VenueFlow booking exception reports once first submissions come in

### When Har Bar site goes live

- [ ] Remove `src/app/south-beach/page.tsx`
- [ ] Remove south-beach link from `src/components/Nav.tsx`
- [ ] Remove south-beach entry from `src/app/sitemap.ts`

### External (Russell / Printful)

- [ ] Switch Printful mockup styles to lifestyle photos — improves merch on dark background

---

## Future Projects

### Loyalty Analytics Engine *(separate microservice)*

**Goal:** Quantify loyalty program ROI without Toast Loyalty or API integrations.

Pull the daily Toast export + loyalty DB export, auto-match transactions via confidence-tiered algorithm:
- **Direct match** — customer name on transaction + loyalty button used
- **Time-window match** — QR scan timestamp within N minutes of transaction timestamp
- **Fallback match** — payment/card data correlation

**Target:** ~90–95% attribution confidence.

**Daily outputs:** Loyalty Visits · Loyalty Revenue · % Transactions Using Loyalty · Loyalty vs Non-Loyalty Avg Check · Estimated Revenue Attributed to Loyalty · Retail Value of Size Upgrades · Repeat Visit Trends

**Reports:** daily performance dashboard + exception report for unmatched records.

**From this site:** may set up automated DB/Toast export trigger once microservice is scoped.

---

### Photo Pipeline App *(separate tool)*

**Goal:** Drag in a raw photo → output 3 production-ready WebP files + updated asset manifest.

**Inputs:** raw image file · category (`hero`, `team`, `events`, `menu`, etc.) · filename slug

**Outputs per photo:**
```
{category}/{slug}-2400w.webp   ← full-bleed desktop
{category}/{slug}-1200w.webp   ← tablet / cards
{category}/{slug}-800w.webp    ← mobile
```

Auto-updates `manifest.md` listing the full R2 folder tree so dev always knows what assets are available.
