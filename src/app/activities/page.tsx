import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Ax throwing, darts, pool, arcade, shuffleboard and foosball at Har-Bar in Crescent City. Walk-in or reserve.",
};

const activities = [
  {
    name: "Axe Throwing",
    age: "18+",
    desc: "Two lanes, instruction included. Walk-in or reserve. Perfect for groups, date nights, or birthdays.",
    details: ["2 throwing lanes", "Walk-ins welcome", "Group reservations — call 707-460-1154", "No experience needed"],
    photo: null,
  },
  {
    name: "Darts",
    age: "18+",
    desc: "Multiple boards throughout the venue. League nights, casual play, house darts available.",
    details: ["Multiple boards", "League nights — check the schedule", "House darts available"],
    photo: "/images/harbor-1.jpg",
  },
  {
    name: "Pool",
    age: "18+",
    desc: "Full-size pool tables for open play. Hourly rental, house cues available.",
    details: ["Full-size tables", "Hourly rental", "House cues available", "Tournament nights — check schedule"],
    photo: "/images/pool.jpg",
  },
  {
    name: "Arcade",
    age: null,
    desc: "A hand-picked selection of classic arcade games and pinball machines.",
    details: ["Classic arcade games", "Pinball included", "All-ages welcome"],
    photo: null,
  },
  {
    name: "Shuffleboard",
    age: null,
    desc: "Full-size shuffleboard table — one of the best ways to spend an afternoon on the harbor.",
    details: ["Full-size table", "All-ages welcome", "Great for groups"],
    photo: null,
  },
  {
    name: "Foosball",
    age: null,
    desc: "Classic foosball — competitive or casual, always available.",
    details: ["All-ages welcome", "Free to play"],
    photo: null,
  },
];

const packages = [
  {
    name: "Harbor Night Out",
    desc: "Ax throwing + pool + drinks for your group. Call to build a custom package.",
  },
  {
    name: "Birthday Package",
    desc: "Reserved section, arcade tokens, darts, foosball, and a birthday round of drinks.",
  },
  {
    name: "Team Outing",
    desc: "Partial or full venue reservation. Custom activity combo built around your group.",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain py-24 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-black text-[#DDD8CC] mb-4 tracking-wide uppercase">
            Activities
          </h1>
          <p className="text-[#DDD8CC]/40 text-sm tracking-widest uppercase">
            Axe throwing &nbsp;·&nbsp; Darts &nbsp;·&nbsp; Pool &nbsp;·&nbsp; Arcade &nbsp;·&nbsp; Shuffleboard &nbsp;·&nbsp; Foosball
          </p>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="bg-[#080d08]">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {activities.map((act) => (
            <div key={act.name} className="relative aspect-square overflow-hidden">
              {act.photo ? (
                <Image
                  src={act.photo}
                  alt={act.name}
                  fill
                  className="object-cover brightness-50 blur-[1.5px] scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-[#1a3a1a]" />
              )}
              <div
                className="absolute inset-0 z-10 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                <p className="text-[#DDD8CC] font-black text-xs sm:text-2xl tracking-widest uppercase">
                  {act.name}
                </p>
                {act.age && (
                  <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-1">{act.age}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITY DETAILS */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-10">
            What&apos;s Inside
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {activities.map((act) => (
              <div key={act.name} className="py-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="sm:w-44 shrink-0">
                  <p className="text-[#DDD8CC] font-semibold">{act.name}</p>
                  {act.age && (
                    <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-0.5">{act.age}</p>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-[#DDD8CC]/50 text-sm leading-relaxed mb-3">{act.desc}</p>
                  <ul className="space-y-1">
                    {act.details.map((d) => (
                      <li key={d} className="text-[#DDD8CC]/30 text-xs flex items-start gap-2">
                        <span className="text-[#BFA060] shrink-0">·</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP PACKAGES */}
      <section className="grain py-20 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-3">
            Group Packages
          </h2>
          <p className="text-[#DDD8CC]/40 text-sm mb-10">
            Birthdays, team outings, company events — call us and we&apos;ll put something together.
          </p>

          <div className="divide-y divide-[#BFA060]/10">
            {packages.map((pkg) => (
              <div key={pkg.name} className="py-5 flex flex-col sm:flex-row gap-2 sm:gap-8">
                <p className="text-[#DDD8CC] font-semibold sm:w-52 shrink-0">{pkg.name}</p>
                <p className="text-[#DDD8CC]/40 text-sm leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE CTA */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#DDD8CC]/40 text-xs tracking-widest uppercase mb-3">
            Axe throwing reservations &amp; group bookings
          </p>
          <a
            href="tel:7074601154"
            className="block text-3xl sm:text-5xl font-black text-[#BFA060] hover:text-[#DDD8CC] transition-colors mb-2"
          >
            707-460-1154
          </a>
          <p className="text-[#DDD8CC]/25 text-xs tracking-wide">
            Walk-ins always welcome &nbsp;·&nbsp; Call ahead for large groups
          </p>
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
              href="/events"
              className="px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
            >
              See Events
            </Link>
            <Link
              href="/menu"
              className="px-7 py-3 border border-[#DDD8CC]/20 hover:border-[#DDD8CC]/50 text-[#DDD8CC]/70 font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Beer &amp; Food Menu
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
