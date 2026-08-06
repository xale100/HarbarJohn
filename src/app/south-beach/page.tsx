import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "South Beach BrewCade | Port O' Pints · Crescent City Harbor",
  description:
    "Port O' Pints second location at the Crescent City Harbor. BrewCade and entertainment venue featuring axe throwing, billiards, darts, shuffleboard, foosball, and arcade. 201 Citizens Dock Rd, Crescent City, CA.",
};

const beers = [
  { name: "Agate Ale", desc: "A pale gold cream ale, light bodied and easy drinking. Our BEST SELLER.", abv: "5.3%", ibu: "12" },
  { name: "Dean O'Dells IRA", desc: "This Irish Red Ale style has a copper red hue and is a easy drinking ale. Moderate malt body and hints of fresh cut grass, caramel in color and a low hop presence.", abv: "4.7%", ibu: "17" },
  { name: "Honey's Brown Ale", desc: "My Honey's Brown Ale - Moderate malt sweetness with nutty caramel toffee and biscuity notes, low bitterness and a crisp finish.", abv: "4.8%", ibu: "30" },
  { name: "Crescent City Common", desc: "California Common - Bright amber in appearance, moderately malty grainy flavors with moderate hop bitterness present.", abv: "5.9%", ibu: "34" },
  { name: "El Juicy Pants", desc: "A brand new hazy style IPA. Grapefruit, citrus and pineapple notes served unfiltered to enjoy all the layers of flavor.", abv: "6.0%", ibu: "33" },
  { name: "11 Bravo IPA", desc: "American India Pale Ale - A nice balance of hops and malt, brewed with bravo hops in honor of the US Army Infantry.", abv: "6.5%", ibu: "65" },
  { name: "Slant Bridge IPA", desc: "American style IPA. Light Golden in color with aromatic hop notes and a dry finish.", abv: "6.3%", ibu: "42" },
  { name: "Warrior Pale Ale", desc: "Single Hopped Pale Ale - A nice balance of warrior hops and a special blend of malts, brewed in honor of our Del Norte Warriors.", abv: "6.2%", ibu: "42" },
  { name: "Fog Bank (Hazy) IPA", desc: "New England IPA - A hazy golden ale with citrusy hop aroma, passion fruit notes, medium bodied and a clean refreshing finish.", abv: "5.7%", ibu: "0" },
  { name: "Wit-Ness Perfection", desc: "Belgium style wheat beer. Crisp citrus and coriander notes with a mild body.", abv: "5.2%", ibu: "14" },
  { name: "Stout of Jefferson", desc: "Irish Dry Stout - A light bodied roasty beer, typically served using nitrogen that produces a creamy, clean, smooth feel on your palate.", abv: "5%", ibu: "42" },
  { name: "Del Norter Porter", desc: "English Brown Porter - A dark beer with ruby highlights, chocolate and coffee notes and a crisp finish without the heavy roast of a stout.", abv: "4.8%", ibu: "32" },
  { name: "My Friend AL", desc: "Amber Lager - A light bodied lager beer, amber in appearance with a nice white head, slight malty flavors and a low hop bitterness present.", abv: "5%", ibu: "42" },
  { name: "3 Sisters", desc: "Belgian Tripel - Bright gold ale with a rich full head, grainy sweet with light spicy, fruity and alcohol flavors, low spicy bitterness and crisp finish.", abv: "9.1%", ibu: "32" },
  { name: "Sneaker Wave", desc: "Belgian Dark Strong Ale - A dark red beer, very complex mildly sweet start with a warm, full body and clean crisp, refreshing finish.", abv: "9.4%", ibu: "32" },
  { name: "Cherry Chocolate Sour", desc: "An experimental sour with dark cherry and chocolate.", abv: "8%", ibu: "12" },
];

export default function SouthBeachPage() {
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain py-24 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-black text-[#DDD8CC] mb-6 tracking-wide uppercase">
            Welcome to South Beach
          </h1>
          <p className="text-[#DDD8CC]/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Conveniently situated in the Crescent City Harbor, this second location from Port O&apos;Pints Brewing Co. is a one of a kind BrewCade and entertainment venue, featuring professional billiards and dart setups, 2 axe throwing lanes, shuffleboard, and foosball. We even rock a classic video game arcade with pinball!
          </p>
          <p className="text-[#DDD8CC]/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We have amazing food truck partners and meals delivered from all our local restaurants via DoorDash — or bring your own treats to pair with our amazing beer!
          </p>
        </div>
      </section>

      {/* HOURS & LOCATION */}
      <section className="border-t border-[#BFA060]/20 py-16 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-12">

          <div>
            <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4 border-b border-[#BFA060]/15 pb-2">Hours</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-[#DDD8CC]/50">Monday &amp; Tuesday</span>
                <span className="text-[#DDD8CC]/40">Closed</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#DDD8CC]/50">Wednesday &amp; Thursday</span>
                <span className="text-[#DDD8CC]/70">3pm – 10pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#DDD8CC]/50">Friday &amp; Saturday</span>
                <span className="text-[#DDD8CC]/70">12pm – 12am</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#DDD8CC]/50">Sunday</span>
                <span className="text-[#DDD8CC]/70">12pm – 10pm</span>
              </div>
            </div>
            <p className="text-[#DDD8CC]/20 text-xs mt-4">We reserve the right to alter these at times.</p>
          </div>

          <div>
            <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4 border-b border-[#BFA060]/15 pb-2">Location</p>
            <p className="text-[#DDD8CC]/70">201 Citizens Dock Road</p>
            <p className="text-[#DDD8CC]/70 mb-4">Crescent City, CA 95531</p>
            <a href="tel:7074601331" className="block text-[#DDD8CC]/60 hover:text-[#BFA060] transition-colors">
              (707) 460-1331
            </a>
          </div>

        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="grain py-16 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-8 border-b border-[#BFA060]/15 pb-2">Now Offering</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Axe Throwing", note: "18+" },
              { name: "Pool & Darts", note: "18+" },
              { name: "Shuffleboard", note: "" },
              { name: "Foosball", note: "" },
              { name: "Arcade Games", note: "" },
            ].map((a) => (
              <div key={a.name} className="flex items-baseline justify-between py-3 border-b border-[#BFA060]/10">
                <p className="text-[#DDD8CC] font-semibold tracking-wide uppercase text-sm">{a.name}</p>
                {a.note && <p className="text-[#BFA060] text-xs tracking-widest">{a.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEER */}
      <section className="grain py-16 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-1">Award-Winning Beer</h2>
          <p className="text-[#DDD8CC]/40 text-sm mb-10">Seasonal availability may vary</p>

          <div className="divide-y divide-[#BFA060]/10">
            {beers.map((beer) => (
              <div key={beer.name} className="py-4 flex items-baseline justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-[#DDD8CC] font-semibold">{beer.name}</p>
                  <p className="text-[#DDD8CC]/35 text-xs leading-relaxed mt-0.5">{beer.desc}</p>
                </div>
                <p className="text-[#DDD8CC]/40 text-xs text-right shrink-0 whitespace-nowrap">
                  {beer.abv} · IBU {beer.ibu}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[#DDD8CC]/20 text-xs mt-10 tracking-wide">
            We reserve the right to alter the tap list at any time.
          </p>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section className="border-t border-[#BFA060]/20 py-16 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-12">

          <div>
            <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4 border-b border-[#BFA060]/15 pb-2">Contact Us</p>
            <p className="text-[#DDD8CC]/50 leading-snug">201 Citizens Dock Road</p>
            <p className="text-[#DDD8CC]/50 mb-3">Crescent City, CA 95531</p>
            <a href="tel:7074601331" className="block text-[#DDD8CC]/50 hover:text-[#BFA060] transition-colors mb-1">
              (707) 460-1331
            </a>
            <a href="mailto:portopints@gmail.com" className="block text-[#DDD8CC]/50 hover:text-[#BFA060] transition-colors">
              portopints@gmail.com
            </a>
          </div>

          <div>
            <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4 border-b border-[#BFA060]/15 pb-2">Opening Hours</p>
            <div className="space-y-1 text-sm text-[#DDD8CC]/50">
              <p>Mon – Tue &nbsp;&nbsp;&nbsp; Closed</p>
              <p>Wed – Thu &nbsp;&nbsp; 3pm – 10pm</p>
              <p>Fri – Sat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12pm – 12am</p>
              <p>Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12pm – 10pm</p>
            </div>
          </div>

        </div>

        <div className="max-w-4xl mx-auto mt-12 pt-6 border-t border-[#BFA060]/10 text-center">
          <p className="text-[#DDD8CC]/20 text-xs mb-2">Also visit our main location</p>
          <Link href="/visit" className="text-[#BFA060]/60 hover:text-[#BFA060] text-xs tracking-widest uppercase transition-colors">
            Port O&apos; Pints · 1215 Northcrest Dr · Crescent City, CA →
          </Link>
        </div>
      </section>

    </div>
  );
}
