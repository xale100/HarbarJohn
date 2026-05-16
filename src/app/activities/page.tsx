import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Ax throwing, darts, pool, arcade, shuffleboard and foosball at Har-Bar in Crescent City. Walk-in or reserve.",
};

const activities = [
  {
    icon: "🪓",
    name: "Ax Throwing",
    tagline: "Throw. Score. Repeat.",
    desc: "Two ax throwing lanes — walk-in or reserve. No experience needed, instruction is included. Perfect for groups, date nights, or birthdays. 18+ only.",
    details: [
      "2 throwing lanes",
      "18+ only",
      "Walk-ins welcome",
      "Group reservations available — call 707-460-1154",
      "Instruction included, no experience needed",
    ],
    bg: "bg-[#1E3A2F]",
  },
  {
    icon: "🎯",
    name: "Darts",
    tagline: "Your board is waiting.",
    desc: "Multiple dart boards available throughout the venue. Great for casual play or league nights. 18+ area.",
    details: [
      "Multiple boards",
      "18+ area",
      "League nights — check the schedule",
      "House darts available",
      "Free to play with drink purchase",
    ],
    bg: "bg-[#0D1B2A]",
  },
  {
    icon: "🎱",
    name: "Pool",
    tagline: "Rack 'em up.",
    desc: "Pool tables available for open play. 18+ only. Great for competitive play or a casual round with friends.",
    details: [
      "Full-size pool tables",
      "18+ only",
      "Hourly rental",
      "House cues available",
      "Tournament nights — check schedule",
    ],
    bg: "bg-[#1A3040]",
  },
  {
    icon: "🎮",
    name: "Arcade",
    tagline: "Classic games, all night.",
    desc: "A hand-picked selection of classic arcade games and pinball machines. All-ages welcome during family hours.",
    details: [
      "Classic arcade games",
      "Pinball included",
      "All-ages during family hours",
      "Token system",
    ],
    bg: "bg-[#1E3A2F]",
  },
  {
    icon: "🏒",
    name: "Shuffleboard",
    tagline: "Full-size. No waiting.",
    desc: "Full-size shuffleboard table — one of the best ways to spend an afternoon at the harbor.",
    details: [
      "Full-size table",
      "All-ages welcome",
      "Great for groups",
    ],
    bg: "bg-[#0D1B2A]",
  },
  {
    icon: "⚽",
    name: "Foosball",
    tagline: "Fast. Fun. Free play.",
    desc: "Classic foosball — competitive or casual. Always available, always free to play.",
    details: [
      "Classic foosball table",
      "All-ages welcome",
      "Free to play",
    ],
    bg: "bg-[#1A3040]",
  },
];

const groupPackages = [
  {
    name: "Harbor Night Out",
    desc: "Ax throwing + pool + drinks for your group. Call to build a custom package.",
    price: "Call for pricing",
  },
  {
    name: "Birthday Package",
    desc: "Reserved section, arcade tokens, darts, foosball, and a birthday round of drinks.",
    price: "Call for pricing",
  },
  {
    name: "Team Outing",
    desc: "Partial or full venue reservation. Custom activity combo built around your group.",
    price: "Custom quote",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-4">Not Just a Bar</p>
          <h1 className="text-5xl sm:text-7xl font-black text-[#F5F0E8] mb-6 tracking-wide">Activities</h1>
          <p className="text-[#F5F0E8]/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Ax throwing · darts · pool · arcade · shuffleboard · foosball.
            All on the harbor, all night long.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((act) => (
            <div key={act.name} className={`${act.bg} rounded-2xl p-8 flex flex-col gap-4`}>
              <div className="flex items-start gap-5">
                <div className="text-5xl shrink-0">{act.icon}</div>
                <div>
                  <h2 className="text-[#F5F0E8] font-black text-2xl leading-tight">{act.name}</h2>
                  <p className="text-[#E8900A] text-sm font-medium mt-0.5">{act.tagline}</p>
                </div>
              </div>
              <p className="text-[#F5F0E8]/70 leading-relaxed">{act.desc}</p>
              <ul className="space-y-1.5">
                {act.details.map((d) => (
                  <li key={d} className="text-[#F5F0E8]/60 text-sm flex items-start gap-2">
                    <span className="text-[#E8900A] mt-0.5">·</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVE CTA */}
      <section className="bg-[#0D1B2A] py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#F5F0E8]/60 text-sm mb-2">Ax throwing reservations &amp; group bookings</p>
          <a
            href="tel:7074601154"
            className="text-5xl font-black text-[#E8900A] hover:text-[#F5A623] transition-colors"
          >
            707-460-1154
          </a>
          <p className="text-[#F5F0E8]/40 text-xs mt-2">Walk-ins always welcome · Call ahead for large groups</p>
        </div>
      </section>

      {/* GROUP PACKAGES */}
      <section className="py-16 px-4 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">Bring the Crew</p>
            <h2 className="text-4xl font-black text-[#0D1B2A] mb-4">Group Packages</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Har-Bar is built for groups. Birthdays, team outings, company events —
              call us and we&apos;ll put together something that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {groupPackages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-xl border border-[#E8DFD0] p-6 shadow-sm card-hover">
                <h3 className="text-[#0D1B2A] font-black text-xl mb-3">{pkg.name}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{pkg.desc}</p>
                <p className="text-[#E8900A] font-bold text-sm">{pkg.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/visit"
              className="inline-block px-8 py-3 bg-[#0D1B2A] hover:bg-[#1A4A5C] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors text-sm"
            >
              Contact Us to Book
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
