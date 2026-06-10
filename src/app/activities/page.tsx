import type { Metadata } from "next";
import Link from "next/link";
import ActivityGrid from "./ActivityGrid";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Axe throwing, darts, pool, arcade, shuffleboard and foosball at Port O' Pints in Crescent City. Walk-in or reserve.",
};

const packages = [
  {
    name: "Harbor Night Out",
    desc: "Axe throwing + pool + drinks for your group. Call to build a custom package.",
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
            Axe Throwing &nbsp;·&nbsp; Darts &nbsp;·&nbsp; Pool
          </p>
          <p className="text-[#DDD8CC]/40 text-sm tracking-widest uppercase mt-1">
            Arcade &nbsp;·&nbsp; Shuffleboard &nbsp;·&nbsp; Foosball
          </p>
        </div>
      </section>

      {/* INTERACTIVE PHOTO GRID */}
      <section className="bg-[#080d08]">
        <ActivityGrid />
      </section>

      {/* GROUP PACKAGES */}
      <section className="grain py-10 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-1">
            Group Packages
          </h2>
          <p className="text-[#DDD8CC]/40 text-sm mb-6">
            Birthdays, team outings, company events — call us and we&apos;ll put something together.
          </p>

          <div className="divide-y divide-[#BFA060]/10">
            {packages.map((pkg) => (
              <div key={pkg.name} className="py-4 flex flex-col sm:flex-row gap-1 sm:gap-8">
                <p className="text-[#DDD8CC] font-semibold sm:w-52 shrink-0">{pkg.name}</p>
                <p className="text-[#DDD8CC]/40 text-sm leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE CTA */}
      <section className="grain py-6 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#DDD8CC]/40 text-xs tracking-widest uppercase mb-2">
            Axe throwing reservations &amp; group bookings
          </p>
          <a
            href="tel:7074601154"
            className="block text-xl sm:text-3xl font-black text-[#BFA060] hover:text-[#DDD8CC] transition-colors mb-1"
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
