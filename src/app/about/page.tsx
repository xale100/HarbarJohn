import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Har-Bar — formerly PortoPints South Beach — is Crescent City's harbor-side BrewCade. Founded 2014, reborn on the harbor.",
};

const team = [
  {
    name: "Devin Beach",
    role: "Owner & Brewmaster",
    desc: "Devin built the recipes, built the brewery, and keeps the taps flowing. His award-winning craft beers are the backbone of everything we do.",
  },
  {
    name: "Dr. John Kirk",
    role: "Owner",
    desc: "A Crescent City OBGYN who put his roots where his heart is. John's love of craft beer and good food drove the 2023 purchase and continues to shape the vision.",
  },
  {
    name: "Cynthia Parenteau",
    role: "Owner & General Manager",
    desc: "Retired trauma nurse turned hospitality veteran. Cynthia runs the day-to-day and makes sure every guest feels taken care of.",
  },
];

const values = [
  { icon: "🎵", title: "Local Music First", desc: "We book Del Norte County artists first, every time. Our stage exists to amplify local talent." },
  { icon: "🤝", title: "Community Over Everything", desc: "Har-Bar promotes and partners with Crescent City businesses. A stronger community means a better night out for everyone." },
  { icon: "🍺", title: "Award-Winning Beer", desc: "Hand-crafted on-site by Brewmaster Devin Beach since 2014. From easy-drinking cream ales to bold Belgian Tripels." },
  { icon: "⚓", title: "Harbor Roots", desc: "201 Citizens Dock Road. Our location on the harbor isn't scenery — it's our identity." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-4">Our Story</p>
          <h1 className="text-5xl sm:text-7xl font-black text-[#F5F0E8] mb-6 tracking-wide">About Har-Bar</h1>
          <p className="text-[#F5F0E8]/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Built on the harbor. Built for the community. Built to stay.
          </p>
        </div>
      </section>

      {/* PHOTO + STORY */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-3">How We Got Here</p>
              <h2 className="text-4xl font-black text-[#0D1B2A] mb-6">From PortoPints to Har-Bar</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4 text-lg">
                Port O&apos;Pints Brewing Co. was founded in 2014 — one of the first craft
                breweries to plant a flag in Crescent City. The South Beach location became
                something special: a BrewCade, an entertainment venue, a live music spot,
                all wrapped into one harbor-side address.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                In 2023, Cynthia Parenteau, Dr. John Kirk, and Brewmaster Devin Beach
                took ownership and set out to build on that foundation. The result is
                Har-Bar — a rebrand that puts the harbor front and center and doubles
                down on everything that made this place worth keeping.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Same award-winning beer. Same commitment to local music. New name,
                new energy, same address: 201 Citizens Dock Road, Crescent City, CA.
              </p>
              <blockquote className="border-l-4 border-[#E8900A] pl-4 text-[#0D1B2A] italic mt-6">
                &ldquo;Our love of craft beer and good food certainly motivated the purchase and
                will enrich us as we continue the traditions of this beautiful and classic
                establishment.&rdquo;
                <footer className="text-[#6B7280] text-sm not-italic mt-2">— John Kirk, Owner</footer>
              </blockquote>
            </div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3">
              {["/images/venue-2.jpg","/images/venue-3.jpg","/images/harbor-1.jpg","/images/venue-5.jpg"].map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src={src} alt="Har-Bar venue" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">The People</p>
            <h2 className="text-4xl font-black text-[#F5F0E8]">Who Runs Har-Bar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#1A3040] rounded-xl border border-[#E8900A]/20 p-7">
                <h3 className="text-[#E8900A] font-black text-xl mb-1">{member.name}</h3>
                <p className="text-[#F5F0E8]/40 text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-[#F5F0E8]/70 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-4 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">What We Stand For</p>
            <h2 className="text-4xl font-black text-[#0D1B2A]">What Makes Har-Bar Different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-[#E8DFD0] p-6 shadow-sm flex gap-4">
                <span className="text-4xl shrink-0">{v.icon}</span>
                <div>
                  <h3 className="text-[#0D1B2A] font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#1E3A2F] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">What People Say</p>
            <h2 className="text-4xl font-black text-[#F5F0E8]">Don&apos;t Take Our Word for It</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "The beer here is delicious — had the Irish Red Ale. 10/10. The bartenders are super friendly!", attr: "Google Review" },
              { quote: "The food is excellent and beers are even better! Definitely the most pleasant surprise of our trip!", attr: "Google Review" },
              { quote: "Irish Nachos were really good. The establishment is well frequented by locals. Go there already!", attr: "Google Review" },
            ].map((t, i) => (
              <div key={i} className="bg-[#0D1B2A]/60 rounded-xl border border-[#E8900A]/20 p-6">
                <p className="text-[#F5F0E8]/80 text-sm leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[#E8900A] text-xs font-bold uppercase tracking-widest">{t.attr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="harbor-gradient py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#F5F0E8] mb-4">Come See It for Yourself</h2>
          <p className="text-[#F5F0E8]/60 mb-8">The harbor isn&apos;t going anywhere. Neither are we.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visit" className="px-8 py-3 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-bold rounded tracking-widest uppercase transition-colors">
              Hours &amp; Location
            </Link>
            <Link href="/events" className="px-8 py-3 border-2 border-[#F5F0E8]/40 hover:border-[#E8900A] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors">
              See Events
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
