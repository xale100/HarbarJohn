import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Ax throwing, darts, arcade, pool and more at Har-Bar in Crescent City. Walk-in or reserve a lane for your group.",
};

const activities = [
  {
    icon: "🪓",
    name: "Ax Throwing",
    tagline: "Throw. Score. Repeat.",
    desc: "Our ax throwing lanes are open walk-in or by reservation. Perfect for date nights, birthdays, team outings, or just a Tuesday. Safety briefing provided, no experience needed.",
    details: [
      "4 throwing lanes",
      "Walk-ins welcome",
      "Group reservations available",
      "Certified instructors on staff",
      "Ages 13+ (under 18 requires guardian)",
    ],
    cta: "Reserve a Lane",
    bg: "bg-[#1E3A2F]",
    accent: "#E8900A",
  },
  {
    icon: "🎯",
    name: "Darts",
    tagline: "Steel tip. Electronic. Your call.",
    desc: "Multiple dart boards including both electronic and steel tip. We run a weekly dart league every Wednesday — all skill levels welcome. Show up solo or bring a crew.",
    details: [
      "8 boards (4 electronic, 4 steel tip)",
      "Free to play with drink purchase",
      "Wednesday league nights",
      "Monthly tournaments",
      "House darts available",
    ],
    cta: "Join the League",
    bg: "bg-[#0D1B2A]",
    accent: "#E8900A",
  },
  {
    icon: "🎮",
    name: "Arcade",
    tagline: "Classic games, no quarters needed.",
    desc: "A hand-picked selection of arcade classics and modern machines. Token system keeps it simple. All-ages until 9pm, 21+ after.",
    details: [
      "15+ machines",
      "Token system",
      "All-ages before 9pm",
      "Prize redemption counter",
      "Pinball included",
    ],
    cta: "See the Machines",
    bg: "bg-[#1A3040]",
    accent: "#E8900A",
  },
  {
    icon: "🎱",
    name: "Pool",
    tagline: "Regulation tables. Cold drinks.",
    desc: "Full-size regulation pool tables in a dedicated room. Hourly table rentals, Thursday tournament nights, and a house cue rack if you didn't bring your own stick.",
    details: [
      "4 full-size regulation tables",
      "Hourly rental",
      "Thursday tournament nights",
      "House cues and chalk available",
      "Private room available for events",
    ],
    cta: "Reserve a Table",
    bg: "bg-[#1E3A2F]",
    accent: "#E8900A",
  },
];

const groupPackages = [
  {
    name: "Harbor Night Out",
    desc: "2 hours of ax throwing + pool table + drink credits for up to 8 people.",
    price: "Call for pricing",
  },
  {
    name: "Birthday Package",
    desc: "Reserved section, arcade tokens, darts, and a birthday round of drinks.",
    price: "Call for pricing",
  },
  {
    name: "Team Outing",
    desc: "Full venue buy-out or partial reservation. Custom activity combo for your group.",
    price: "Custom quote",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Not Just a Bar
          </p>
          <h1 className="text-5xl sm:text-7xl font-black text-[#F5F0E8] mb-6 tracking-wide">
            Activities
          </h1>
          <p className="text-[#F5F0E8]/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Ax throwing, darts, arcade, pool — all under one roof, all night long.
            Bring a group or fly solo.
          </p>
        </div>
      </section>

      {/* ACTIVITIES GRID */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {activities.map((act, i) => (
            <div
              key={act.name}
              className={`${act.bg} rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start`}
            >
              {/* Icon + name */}
              <div className="md:w-48 shrink-0 text-center md:text-left">
                <div className="text-6xl mb-4">{act.icon}</div>
                <h2 className="text-[#F5F0E8] font-black text-3xl leading-tight">
                  {act.name}
                </h2>
                <p className="text-[#E8900A] text-sm font-medium mt-1">{act.tagline}</p>
              </div>

              {/* Details */}
              <div className="flex-1">
                <p className="text-[#F5F0E8]/70 leading-relaxed mb-6 text-lg">{act.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {act.details.map((d) => (
                    <li key={d} className="text-[#F5F0E8]/60 text-sm flex items-start gap-2">
                      <span className="text-[#E8900A] mt-0.5">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/visit"
                  className="inline-block px-6 py-3 border-2 border-[#E8900A] text-[#E8900A] hover:bg-[#E8900A] hover:text-[#071219] font-bold rounded tracking-widest uppercase transition-all text-sm"
                >
                  {act.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GROUP PACKAGES */}
      <section className="bg-[#F5F0E8] py-16 px-4 border-t border-[#E8DFD0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">
              Bring the Crew
            </p>
            <h2 className="text-4xl font-black text-[#0D1B2A] mb-4">
              Group Packages
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Har-Bar is made for groups. Birthday parties, team outings, company
              events — we&apos;ll put together a package that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {groupPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-xl border border-[#E8DFD0] p-6 shadow-sm card-hover"
              >
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
