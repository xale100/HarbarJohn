import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "South Beach BrewCade — Port O' Pints at the Harbor",
  description:
    "Port O' Pints second location at the Crescent City Harbor. Craft beer, axe throwing, arcade, billiards, shuffleboard, and more. 201 Citizens Dock Rd, Crescent City, CA.",
};

export default function SouthBeachPage() {
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain py-24 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4">Port O&apos; Pints · Second Location</p>
          <h1 className="text-5xl sm:text-7xl font-black text-[#DDD8CC] mb-4 tracking-wide uppercase">
            South Beach
          </h1>
          <p className="text-[#DDD8CC]/40 text-sm tracking-widest uppercase">BrewCade &amp; Entertainment · Crescent City Harbor</p>
        </div>
      </section>

      {/* INFO */}
      <section className="border-t border-[#BFA060]/20 py-16 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-12">

          <div>
            <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4 border-b border-[#BFA060]/15 pb-2">Location</p>
            <p className="text-[#DDD8CC]/70 leading-relaxed">201 Citizens Dock Road</p>
            <p className="text-[#DDD8CC]/70 mb-4">Crescent City, CA 95531</p>
            <a href="tel:7074601331" className="block text-[#DDD8CC]/60 hover:text-[#BFA060] transition-colors mb-2">
              (707) 460-1331
            </a>
            <a href="mailto:portopints@gmail.com" className="block text-[#DDD8CC]/60 hover:text-[#BFA060] transition-colors">
              portopints@gmail.com
            </a>
          </div>

          <div>
            <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4 border-b border-[#BFA060]/15 pb-2">Hours</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-[#DDD8CC]/50">Monday – Tuesday</span>
                <span className="text-[#DDD8CC]/40">Closed</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#DDD8CC]/50">Wednesday – Thursday</span>
                <span className="text-[#DDD8CC]/70">3pm – 10pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#DDD8CC]/50">Friday – Saturday</span>
                <span className="text-[#DDD8CC]/70">12pm – 12am</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#DDD8CC]/50">Sunday</span>
                <span className="text-[#DDD8CC]/70">12pm – 10pm</span>
              </div>
            </div>
            <p className="text-[#DDD8CC]/20 text-xs mt-4">Hours subject to change.</p>
          </div>

        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="grain py-16 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-8 border-b border-[#BFA060]/15 pb-2">Activities</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Axe Throwing", note: "2 lanes · 18+" },
              { name: "Billiards", note: "Professional table · 18+" },
              { name: "Darts", note: "18+" },
              { name: "Shuffleboard", note: "" },
              { name: "Foosball", note: "" },
              { name: "Arcade & Pinball", note: "Classic games" },
            ].map((a) => (
              <div key={a.name} className="flex items-baseline justify-between py-3 border-b border-[#BFA060]/10">
                <p className="text-[#DDD8CC] font-semibold">{a.name}</p>
                {a.note && <p className="text-[#DDD8CC]/35 text-xs">{a.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="py-16 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4 border-b border-[#BFA060]/15 pb-2">Food</p>
          <p className="text-[#DDD8CC]/60 text-sm leading-relaxed">
            Food truck partners on site. Meals also available for delivery via DoorDash from local restaurants. Guests are welcome to bring their own food.
          </p>
        </div>
      </section>

      {/* BEER */}
      <section className="grain py-16 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4 border-b border-[#BFA060]/15 pb-2">Beer</p>
          <p className="text-[#DDD8CC]/60 text-sm leading-relaxed mb-6">
            15+ award-winning house-brewed beers on tap — the same craft lineup as Port O&apos; Pints on Northcrest Dr, brewed by Devin Beach.
          </p>
          <Link
            href="/menu"
            className="inline-block px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
          >
            View Full Beer Menu →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#BFA060]/20 py-16 px-4 bg-[#080d08] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#DDD8CC]/40 text-xs tracking-widest uppercase mb-6">
            Also visit us at 1215 Northcrest Dr &nbsp;·&nbsp; Crescent City, CA
          </p>
          <Link
            href="/visit"
            className="px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
          >
            Main Location →
          </Link>
        </div>
      </section>

    </div>
  );
}
