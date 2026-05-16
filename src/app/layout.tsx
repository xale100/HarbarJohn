import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Har-Bar | Live Music & Entertainment · Crescent City, CA",
    template: "%s | Har-Bar",
  },
  description:
    "Har-Bar is Crescent City's premier harbor-side entertainment venue. Live music, ax throwing, darts, arcade, pool, and outdoor stages with a harbor view.",
  keywords: [
    "Har-Bar",
    "Crescent City bar",
    "live music Crescent City",
    "harbor bar",
    "ax throwing Crescent City",
    "entertainment venue",
  ],
  openGraph: {
    title: "Har-Bar | Live Music & Entertainment · Crescent City, CA",
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
        <Nav />
        <main className="min-h-screen pt-[57px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
