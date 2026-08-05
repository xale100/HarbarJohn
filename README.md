This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## TODO — Future Projects

### Loyalty Analytics Engine (separate project / microservice)

**Goal:** Quantify loyalty program ROI without paying for Toast Loyalty or API integrations.

**Approach:** Pull the daily Toast export and loyalty DB export, then auto-match transactions using a confidence-tiered matching algorithm:

- **Direct match** — customer name on transaction + loyalty button used
- **Time-window match** — QR scan timestamp within N minutes of transaction timestamp
- **Fallback match** — payment/card data correlation

**Target:** ~90–95% attribution confidence across all transactions.

**Desired daily outputs:**
- Loyalty Visits
- Loyalty Revenue
- % of Total Transactions Using Loyalty
- Loyalty vs Non-Loyalty Average Check
- Estimated Revenue Attributed to Loyalty
- Retail Value of Size Upgrades Given
- Repeat Visit Trends

**Reports generated:**
- Daily loyalty performance dashboard (loyalty-driven sales vs. benefit cost)
- Exception report for unmatched records (surfaces process gaps)

**From this end (portopints site):** May be able to set up the automated DB/Toast export trigger from here. TBD once loyalty microservice project is scoped.

**Success metric:** Leadership has a clean daily view of loyalty program ROI, no manual reconciliation needed.

---

## TODO — Launch Checklist (portopints.com)

### Blocking — must be done before go-live

- [ ] **Har Bar extraction** — Har Bar content is currently nested inside portopints.com. Rip it out, stand it up at `portopints.com/[path]`, add a link on the Port O' Pints landing page. Sever fully once the dedicated Har Bar site is built.
- [ ] **Photos** — Assets in hand. Pick hero shot(s), integrate into homepage hero + about page team section.
- [ ] **Merch** — Russell adding inventory tomorrow. Verify it auto-populates on `/merch`, spot-check rendering, confirm with him when done.
- [ ] **Devin's brewmaster quote** — Real text needed. Currently a placeholder on the homepage.
- [ ] **VenueFlow slug** — Confirm `VENUEFLOW_SLUG` is set in Vercel env vars and the calendar is loading live shows.
- [ ] **DNS cutover** — Point portopints.com away from Wix. Credentials in hand.

### Cleanup — before or same day as cutover

- [ ] Remove old Google Calendar env vars from Vercel (`GOOGLE_CALENDAR_ID`, `GOOGLE_CALENDAR_API_KEY`)
- [ ] Add `robots.txt` and `sitemap.ts`
- [ ] Confirm "Play Port O' Pints" contact email is correct in events page copy

### Post-launch — first week

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor VenueFlow booking exception reports once first submissions come in
- [ ] Cut Har Bar loose fully once its own standalone site is built
