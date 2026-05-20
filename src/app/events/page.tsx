import type { Metadata } from "next";
import Link from "next/link";
import { getShows } from "@/lib/calendar";

export const metadata: Metadata = {
  title: "Live Music & Events",
  description:
    "Check out the live music schedule at Har-Bar in Crescent City. Two stages, local artists, and harbor views every week.",
};

const fallbackShows = [
  { date: "Fri, May 23", artist: "Open Mic Night", genre: "", time: "7pm", stage: "Indoor Stage", cover: "Free" },
  { date: "Sat, May 24", artist: "Live Band — TBA", genre: "", time: "8pm", stage: "Harbor Stage", cover: "Free" },
  { date: "Fri, May 30", artist: "Live Music — TBA", genre: "", time: "8pm", stage: "Indoor Stage", cover: "Free" },
  { date: "Sat, May 31", artist: "Live Music — TBA", genre: "", time: "8pm", stage: "Harbor Stage", cover: "Free" },
];

const stages = [
  {
    name: "Indoor Stage",
    desc: "Main room stage with full PA, lights, and climate control. Rain or shine, the show goes on.",
    capacity: "~150",
  },
  {
    name: "Harbor Stage",
    desc: "Open-air stage on the harbor side. No better view in Crescent City when the sky's clear.",
    capacity: "~250",
  },
];

export default async function EventsPage() {
  const liveShows = await getShows(20);
  const shows = liveShows.length > 0 ? liveShows : fallbackShows;
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain py-24 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-black text-[#DDD8CC] mb-4 tracking-wide uppercase">
            Live Music &amp; Events
          </h1>
          <p className="text-[#DDD8CC]/40 text-sm tracking-widest uppercase">
            Two stages &nbsp;·&nbsp; Local artists &nbsp;·&nbsp; Harbor views
          </p>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase">
              Upcoming Shows
            </h2>
          </div>

          <div className="divide-y divide-[#BFA060]/10">
            {shows.map((show, i) => (
              <div key={i} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <p className="text-[#BFA060] text-xs tracking-widest uppercase sm:w-32 shrink-0">{show.date}</p>
                <div className="flex-1">
                  <p className="text-[#DDD8CC] font-semibold">{show.artist}</p>
                  <p className="text-[#DDD8CC]/35 text-xs mt-0.5">{show.genre}</p>
                </div>
                <p className="text-[#DDD8CC]/40 text-xs tracking-wide sm:text-right shrink-0">
                  {show.time} &nbsp;·&nbsp; {show.stage}
                  {show.cover !== "Free" && show.cover !== "TBA" && (
                    <span className="text-[#BFA060]"> &nbsp;·&nbsp; Cover {show.cover}</span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[#DDD8CC]/20 text-xs mt-10 tracking-wide">
            Schedule subject to change. Follow us on social for last-minute updates.
          </p>
        </div>
      </section>

      {/* STAGES */}
      <section className="grain py-20 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-10">
            The Stages
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {stages.map((stage) => (
              <div key={stage.name} className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <div className="sm:w-48 shrink-0">
                  <p className="text-[#DDD8CC] font-semibold">{stage.name}</p>
                  <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-0.5">Cap. {stage.capacity}</p>
                </div>
                <p className="text-[#DDD8CC]/40 text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-3">
            Play Har-Bar
          </h2>
          <p className="text-[#DDD8CC]/40 text-sm leading-relaxed max-w-xl mb-8">
            We book local first. If you or your band is based in Del Norte County or the surrounding area, we want to hear from you.
          </p>
          <a
            href="tel:7074601154"
            className="inline-block px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
          >
            707-460-1154
          </a>
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
              href="/menu"
              className="px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Beer &amp; Food Menu
            </Link>
            <Link
              href="/visit"
              className="px-7 py-3 border border-[#DDD8CC]/20 hover:border-[#DDD8CC]/50 text-[#DDD8CC]/70 font-bold text-sm tracking-widests uppercase transition-colors"
            >
              Hours &amp; Directions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
