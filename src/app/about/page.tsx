import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Port O' Pints is Crescent City's original harbor-side BrewCade. Award-winning craft beer, live music, and good people since 2014.",
};

const team = [
  { src: "/images/team-devin.jpg",   name: "Devin Beach",       title: "Owner / Brewmaster",
    desc: "Devin built the recipes, built the brewery, and keeps the taps flowing. His award-winning craft beers are the backbone of everything we do." },
  { src: "/images/team-spinner.jpg", name: "Spinner Spencer",   title: "General Manager",
    desc: "Spinner keeps the floor running and the energy right. The face you'll see most nights behind the bar." },
  { src: "/images/team-john.jpg",    name: "Dr. John Kirk",     title: "Owner",
    desc: "A Crescent City OBGYN who put his roots where his heart is. John's love of craft beer and good food drove the 2023 purchase." },
  { src: "/images/team-cynthia.jpg", name: "Cynthia Parenteau", title: "Owner",
    desc: "Retired trauma nurse turned hospitality veteran. Cynthia runs the day-to-day and makes sure every guest feels taken care of." },
  { src: "/images/team-cameron.jpg", name: "Cameron Cook",      title: "Production",
    desc: "Cameron keeps production dialed in — from the brewery floor to the back of house." },
  { src: "/images/team-russell.jpg", name: "Russell Smithson",  title: "Marketing",
    desc: "Russell handles the brand, the socials, and getting the word out about what's happening on the harbor." },
];

const values = [
  { title: "Local Music First", desc: "We book Del Norte County artists first, every time. Our stage exists to amplify local talent." },
  { title: "Community Over Everything", desc: "Port O&apos; Pints promotes and partners with Crescent City businesses. A stronger community means a better night out for everyone." },
  { title: "Award-Winning Beer", desc: "Hand-crafted on-site by Brewmaster Devin Beach since 2014. From easy-drinking cream ales to bold Belgian Tripels." },
  { title: "Harbor Roots", desc: "201 Citizens Dock Road. Our location on the harbor isn't scenery — it's our identity." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain py-24 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-black text-[#DDD8CC] mb-4 tracking-wide uppercase">
            About Port O&apos; Pints
          </h1>
          <p className="text-[#DDD8CC]/40 text-sm tracking-widest uppercase">
            Built on the harbor &nbsp;·&nbsp; Built for the community &nbsp;·&nbsp; Built to stay
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-8">
            Our Story
          </h2>

          <div className="space-y-4 text-[#DDD8CC]/55 leading-relaxed mb-10">
            <p>
              Port O&apos; Pints Brewing Co. was founded in 2014 — one of the first craft
              breweries to plant a flag in Crescent City. The South Beach location became
              something special: a BrewCade, an entertainment venue, a live music spot,
              all wrapped into one harbor-side address.
            </p>
            <p>
              In 2023, Cynthia Parenteau, Dr. John Kirk, and Brewmaster Devin Beach
              took ownership and set out to build on that foundation — keeping everything
              that made this place worth keeping and doubling down on it.
            </p>
            <p>
              Award-winning beer. Local music first. Harbor views. 201 Citizens Dock Road,
              Crescent City, CA. Same as it ever was.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#BFA060]/50 pl-5">
            <p className="text-[#DDD8CC]/60 italic leading-relaxed">
              &ldquo;Our love of craft beer and good food certainly motivated the purchase and
              will enrich us as we continue the traditions of this beautiful and classic
              establishment.&rdquo;
            </p>
            <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-3">— John Kirk, Owner</p>
          </blockquote>
        </div>
      </section>

      {/* TEAM PHOTO GRID */}
      <section className="grid grid-cols-3 md:grid-cols-6">
        {team.map((p) => (
          <div key={p.name} className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image src={p.src} alt={p.name} fill className="object-cover object-top brightness-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-3">
              <p className="text-[#DDD8CC] font-bold text-[10px] md:text-xs leading-tight truncate">{p.name}</p>
              <p className="text-[#BFA060] text-[9px] md:text-[10px] tracking-wide truncate">{p.title}</p>
            </div>
          </div>
        ))}
      </section>

      {/* TEAM BIOS */}
      <section className="grain py-20 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-10">
            The Team
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {team.map((p) => (
              <div key={p.name} className="py-5 flex flex-col sm:flex-row gap-2 sm:gap-8">
                <div className="sm:w-52 shrink-0">
                  <p className="text-[#DDD8CC] font-semibold">{p.name}</p>
                  <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-0.5">{p.title}</p>
                </div>
                <p className="text-[#DDD8CC]/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-10">
            What We Stand For
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {values.map((v) => (
              <div key={v.title} className="py-5 flex flex-col sm:flex-row gap-2 sm:gap-8">
                <p className="text-[#DDD8CC] font-semibold sm:w-52 shrink-0">{v.title}</p>
                <p className="text-[#DDD8CC]/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="grain py-20 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-10">
            What People Say
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {[
              { quote: "The beer here is delicious — had the Irish Red Ale. 10/10. The bartenders are super friendly!" },
              { quote: "The food is excellent and beers are even better! Definitely the most pleasant surprise of our trip!" },
              { quote: "Irish Nachos were really good. The establishment is well frequented by locals. Go there already!" },
            ].map((t, i) => (
              <div key={i} className="py-5">
                <p className="text-[#DDD8CC]/55 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-2">Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#BFA060]/20 py-16 px-4 bg-[#080d08] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#DDD8CC]/40 text-xs tracking-widest uppercase mb-6">
            201 Citizens Dock Road &nbsp;·&nbsp; Crescent City, CA
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/visit"
              className="px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Hours &amp; Directions
            </Link>
            <Link
              href="/events"
              className="px-7 py-3 border border-[#DDD8CC]/20 hover:border-[#DDD8CC]/50 text-[#DDD8CC]/70 font-bold text-sm tracking-widest uppercase transition-colors"
            >
              See Events
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
