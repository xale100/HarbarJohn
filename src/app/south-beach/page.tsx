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
          <p className="text-white/60 text-sm tracking-widest uppercase" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>BrewCade &amp; Entertainment · Crescent City Harbor</p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="grain py-16 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-8 border-b border-[#BFA060]/15 pb-2">Now Offering</p>
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "Axe Throwing", note: "2 lanes · 18+" },
              { name: "Pool & Darts", note: "18+" },
              { name: "Shuffleboard", note: "" },
              { name: "Foosball", note: "" },
              { name: "Arcade & Pinball", note: "Classic games" },
            ].map((a) => (
              <div key={a.name} className="flex items-baseline justify-between py-3 border-b border-[#BFA060]/10">
                <p className="text-[#DDD8CC] font-semibold">{a.name}</p>
                {a.note && <p className="text-white/65 text-xs" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>{a.note}</p>}
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
            15+ award-winning house-brewed beers on tap — brewed on-site by Devin Beach.
          </p>
          <Link
            href="/menu"
            className="inline-block px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
          >
            View Full Beer Menu →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080d08] text-[#DDD8CC]/30 border-t border-[#BFA060]/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex gap-8 mb-4 text-sm">

            <div>
              <p className="text-[#BFA060] font-black tracking-widest text-base mb-2">South Beach</p>
              <p className="text-[#DDD8CC]/50 leading-snug">201 Citizens Dock Road</p>
              <p className="text-[#DDD8CC]/50 mb-2">Crescent City, CA 95531</p>
              <a href="tel:7074601331" className="block text-[#DDD8CC]/50 hover:text-[#BFA060] transition-colors mb-1">
                (707) 460-1331
              </a>
              <a href="mailto:portopints@gmail.com" className="block text-[#DDD8CC]/50 hover:text-[#BFA060] transition-colors">
                portopints@gmail.com
              </a>
            </div>

            <div className="text-center">
              <p className="text-[#BFA060] font-black tracking-widest text-base mb-2">Hours</p>
              <p className="text-[#DDD8CC]/50 leading-snug">Mon – Tue &nbsp; Closed</p>
              <p className="text-[#DDD8CC]/50 leading-snug">Wed – Thu &nbsp; 3pm – 10pm</p>
              <p className="text-[#DDD8CC]/50 leading-snug">Fri – Sat &nbsp;&nbsp;&nbsp;&nbsp; 12pm – 12am</p>
              <p className="text-[#DDD8CC]/50">Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12pm – 10pm</p>
            </div>

          </div>

          <div className="border-t border-[#BFA060]/10 pt-4 flex flex-col sm:flex-row justify-between gap-1 text-xs">
            <span>© {new Date().getFullYear()} Port O&apos; Pints South Beach · Crescent City, CA</span>
            <span className="text-[#DDD8CC]/30">Crescent City Harbor · 201 Citizens Dock Rd</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
