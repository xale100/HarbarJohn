# Port O' Pints — Launch TODO

## Blocking — must be done before go-live

- [ ] **Devin's brewmaster quote** — real text needed (`src/app/page.tsx` ~line 150)
- [ ] **DNS cutover** — point portopints.com away from Wix → Vercel
- [ ] **VenueFlow slug** — confirm `VENUEFLOW_SLUG` is set in Vercel env vars and calendar loads live shows
- [ ] **Confirm contact email** — verify "Play Port O' Pints" booking email is correct on events page

## Cleanup — before or same day as cutover

- [ ] Remove old Google Calendar env vars from Vercel (`GOOGLE_CALENDAR_ID`, `GOOGLE_CALENDAR_API_KEY`)

## Post-launch — first week

- [ ] Submit sitemap to Google Search Console (https://portopints.com/sitemap.xml)
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor VenueFlow booking exception reports once first submissions come in

## When Har Bar site goes live

- [ ] Remove south-beach page (`src/app/south-beach/page.tsx`)
- [ ] Remove south-beach from nav (`src/components/Nav.tsx`)
- [ ] Remove south-beach entry from `src/app/sitemap.ts`

## External (Russell / Printful dashboard)

- [ ] Change Printful product mockup styles to lifestyle photos (not white ghost mannequin)
        → improves merch appearance on the dark site background

---

## Future Projects (separate scopes)

### Loyalty Analytics Engine

**Goal:** Quantify loyalty program ROI without Toast Loyalty or API integrations.

Pull daily Toast export + loyalty DB export, auto-match transactions using confidence-tiered matching:
- **Direct match** — customer name on transaction + loyalty button used
- **Time-window match** — QR scan timestamp within N minutes of transaction timestamp
- **Fallback match** — payment/card data correlation

**Target:** ~90–95% attribution confidence.

**Daily outputs:**
- Loyalty Visits / Loyalty Revenue / % of Total Transactions Using Loyalty
- Loyalty vs Non-Loyalty Average Check
- Estimated Revenue Attributed to Loyalty
- Retail Value of Size Upgrades Given
- Repeat Visit Trends

**Reports:** Daily loyalty performance dashboard + exception report for unmatched records.

**From this site:** May set up automated DB/Toast export trigger from here once loyalty microservice is scoped.

---

### Photo Pipeline App

**Goal:** Drag in a raw photo → output 3 production-ready WebP files + updated asset manifest.

**Inputs:** raw image, category (hero/team/events/menu/etc.), filename slug

**Outputs per photo:**
```
{category}/{slug}-2400w.webp   ← full-bleed desktop
{category}/{slug}-1200w.webp   ← tablet / cards
{category}/{slug}-800w.webp    ← mobile
```

Plus an auto-updated `manifest.md` showing the full R2 folder tree, committed here so dev always knows what assets are available.
