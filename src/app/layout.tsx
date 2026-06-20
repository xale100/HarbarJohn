import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portopints.com"),
  title: {
    default: "Port O' Pints Brewing Co. | Brewery, Live Music & Food · Crescent City, CA",
    template: "%s | Port O' Pints · Crescent City, CA",
  },
  description:
    "Award-winning craft brewery near Redwood National Park. Live music, pub food, and craft beer in Crescent City, CA. 80+ beer awards. Open daily 12–9pm.",
  keywords: [
    "Port O' Pints",
    "brewery crescent city",
    "craft beer crescent city",
    "live music crescent city",
    "things to do crescent city",
    "bars crescent city",
    "restaurant crescent city",
    "brewery near redwood national park",
    "crescent city nightlife",
    "del norte county brewery",
    "north coast california brewery",
    "harbor bar crescent city",
  ],
  openGraph: {
    title: "Port O' Pints Brewing Co. | Brewery & Live Music · Crescent City, CA",
    description:
      "Award-winning craft beer, live music, and pub food in Crescent City, CA. Near Redwood National Park.",
    type: "website",
    locale: "en_US",
    siteName: "Port O' Pints Brewing Co.",
    url: "https://portopints.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Port O' Pints Brewing Co. · Crescent City, CA",
    description:
      "Award-winning craft brewery near Redwood National Park. Live music, pub food, and craft beer in Crescent City, CA.",
  },
  alternates: {
    canonical: "https://portopints.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Brewery", "Restaurant", "BarOrPub"],
  name: "Port O' Pints Brewing Co.",
  alternateName: ["Port O Pints", "Porto Pints"],
  url: "https://portopints.com",
  telephone: "+1-707-460-1154",
  email: "",
  foundingDate: "2014",
  description:
    "Award-winning craft brewery in Crescent City, CA. 80+ beer awards, live music, pub food, and harbor views near Redwood National Park.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1215 Northcrest Dr",
    addressLocality: "Crescent City",
    addressRegion: "CA",
    postalCode: "95531",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.7658,
    longitude: -124.2026,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
  servesCuisine: ["American", "Pub Food", "Craft Beer"],
  priceRange: "$$",
  hasMenu: "https://portopints.com/menu",
  acceptsReservations: true,
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 41.7658, longitude: -124.2026 },
    geoRadius: "160000",
  },
  sameAs: [
    "https://www.instagram.com/portopintsbrewingco/",
    "https://www.facebook.com/portopintssouthbeach/",
    "https://untappd.com/PortOPints",
    "https://www.beeradvocate.com/beer/profile/45990/",
    "https://www.yelp.com/biz/port-o-pints-brewing-crescent-city",
    "https://www.tripadvisor.com/Attraction_Review-g60944-d10200221-Reviews-Port_O_Pints_Brewing_Co-Crescent_City_California.html",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#BFA060] focus:text-[#080d08] focus:font-bold focus:text-sm focus:tracking-widest focus:uppercase"
        >
          Skip to content
        </a>
        <div className="fixed top-0 right-0 bottom-0 w-1 bg-[#BFA060] z-40 pointer-events-none" />
        <Nav />
        <main id="main-content" className="min-h-screen pt-[57px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
