import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Har-Bar is Crescent City's harbor-side entertainment venue — built to support local music, local businesses, and the community.",
};

const values = [
  {
    icon: "🎵",
    title: "Local Music First",
    desc: "We book Del Norte County artists first, every time. Our stage exists to amplify local talent — not replace it with touring acts.",
  },
  {
    icon: "🤝",
    title: "Community Over Everything",
    desc: "Har-Bar promotes, partners with, and pours resources back into Crescent City businesses. We rise together or not at all.",
  },
  {
    icon: "🚫",
    title: "Not a Dive Bar",
    desc: "We keep things clean, safe, and fun. Har-Bar is a venue where everyone — couples, groups, locals, and visitors — feels welcome.",
  },
  {
    icon: "⚓",
    title: "Harbor Roots",
    desc: "Our location on the harbor isn't just scenery. It's our identity. We're woven into the fabric of Crescent City's waterfront.",
  },
];

const localPartners = [
  { name: "Crescent City Brewing Co.", type: "Craft Beer" },
  { name: "Harbor Bait & Tackle", type: "Local Business" },
  { name: "North Coast Roasters", type: "Coffee / Café" },
  { name: "Del Norte Arts Center", type: "Arts & Culture" },
  { name: "Lighthouse Provisions", type: "Local Food" },
  { name: "Redwood Radio", type: "Local Media" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="text-5xl sm:text-7xl font-black text-[#F5F0E8] mb-6 tracking-wide">
            About Har-Bar
          </h1>
          <p className="text-[#F5F0E8]/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Built on the harbor. Built for the community.
            Built to stay.
          </p>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-3">
                How We Got Here
              </p>
              <h2 className="text-4xl font-black text-[#0D1B2A] mb-6">
                Crescent City Needed This
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4 text-lg">
                Har-Bar was born out of a simple idea: Crescent City deserves a place
                where local music plays every weekend, where you can throw an axe and
                shoot pool in the same night, and where the view from your barstool is
                nothing but harbor.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                What started as PortoPints South Beach has been reimagined and relaunched
                as Har-Bar — a rebrand built around a clearer identity and a deeper
                commitment to the community that made it possible.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                We&apos;re not chasing trends or trying to be something we&apos;re not. We&apos;re a
                harbor bar in Crescent City, and we&apos;re proud of it.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-xl border border-[#E8DFD0] p-5 shadow-sm flex gap-4"
                >
                  <span className="text-3xl shrink-0">{v.icon}</span>
                  <div>
                    <h3 className="text-[#0D1B2A] font-bold text-base mb-1">{v.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL PARTNERS */}
      <section className="bg-[#1E3A2F] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">
              Local Network
            </p>
            <h2 className="text-4xl font-black text-[#F5F0E8] mb-4">
              Partners in the Community
            </h2>
            <p className="text-[#F5F0E8]/60 max-w-xl mx-auto">
              We actively promote local Crescent City and Del Norte County businesses.
              If you&apos;re a local business and want to collaborate, reach out.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {localPartners.map((p) => (
              <div
                key={p.name}
                className="bg-[#0D1B2A]/60 border border-[#E8900A]/20 rounded-xl p-6 text-center card-hover"
              >
                <p className="text-[#F5F0E8] font-bold text-base mb-1">{p.name}</p>
                <p className="text-[#E8900A] text-xs uppercase tracking-widest">{p.type}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/visit"
              className="inline-block px-6 py-3 border-2 border-[#E8900A] text-[#E8900A] hover:bg-[#E8900A] hover:text-[#071219] font-bold rounded tracking-widest uppercase transition-all text-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE ARE / NOT */}
      <section className="py-20 px-4 bg-[#F5F0E8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#0D1B2A] text-center mb-12">
            What Makes Har-Bar Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0D1B2A] rounded-2xl p-8">
              <h3 className="text-[#E8900A] font-black text-xl mb-6 uppercase tracking-widest">
                We Are
              </h3>
              <ul className="space-y-3">
                {[
                  "A live music venue that books local first",
                  "An entertainment hub with ax throwing, darts, arcade, pool",
                  "A community partner that lifts other local businesses",
                  "A harbor-side destination with two stages",
                  "All-ages friendly before 9pm",
                  "Safe, welcoming, and consistently fun",
                ].map((item) => (
                  <li key={item} className="text-[#F5F0E8]/70 flex items-start gap-3 text-sm">
                    <span className="text-[#E8900A] font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#E8DFD0] rounded-2xl p-8">
              <h3 className="text-[#C2651A] font-black text-xl mb-6 uppercase tracking-widest">
                We&apos;re Not
              </h3>
              <ul className="space-y-3">
                {[
                  "A dive bar",
                  "A tourist trap",
                  "A place where locals feel like outsiders",
                  "Just another bar with a pool table in the back",
                  "Booking acts from out of town while local talent sits home",
                  "Chasing trends — we&apos;re building something that lasts",
                ].map((item) => (
                  <li key={item} className="text-[#6B7280] flex items-start gap-3 text-sm">
                    <span className="text-[#C2651A] font-bold mt-0.5">✗</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="harbor-gradient py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#F5F0E8] mb-4">
            Come See It for Yourself
          </h2>
          <p className="text-[#F5F0E8]/60 mb-8">
            The harbor isn&apos;t going anywhere. Neither are we.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="px-8 py-3 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-bold rounded tracking-widest uppercase transition-colors"
            >
              Hours &amp; Location
            </Link>
            <Link
              href="/events"
              className="px-8 py-3 border-2 border-[#F5F0E8]/40 hover:border-[#E8900A] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors"
            >
              See Events
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
