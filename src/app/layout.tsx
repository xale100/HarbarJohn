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
  title: {
    default: "Port O' Pints | Live Music & Entertainment · Crescent City, CA",
    template: "%s | Port O' Pints",
  },
  description:
    "Port O' Pints is Crescent City's harbor-side BrewCade. Award-winning craft beer, live music, axe throwing, darts, arcade, pool, and outdoor stages with a harbor view.",
  keywords: [
    "Port O' Pints",
    "PortoPints",
    "Crescent City bar",
    "live music Crescent City",
    "harbor bar",
    "axe throwing Crescent City",
    "entertainment venue",
  ],
  openGraph: {
    title: "Port O' Pints | Live Music & Entertainment · Crescent City, CA",
    description:
      "Live music, harbor views, and good people — right in the heart of Crescent City.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
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
