import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Music & Events",
  description:
    "Check out the live music schedule at Har-Bar in Crescent City. Two stages, local artists, and harbor views every week.",
};

const shows = [
  {
    date: "Fri, May 23",
    artist: "The Coastal Drifters",
    genre: "Blues / Rock",
    time: "8pm – 11pm",
    stage: "Indoor Stage",
    cover: "Free",
    desc: "The Drifters bring their signature Pacific Northwest blues sound back to Har-Bar for a set you won't forget.",
  },
  {
    date: "Sat, May 24",
    artist: "Marina Sound Collective",
    genre: "Indie / Folk",
    time: "7pm – 10pm",
    stage: "Harbor Stage",
    cover: "Free",
    desc: "Crescent City's favorite folk collective plays the outdoor stage with the harbor as their backdrop.",
  },
  {
    date: "Thu, May 29",
    artist: "Thursday League Night",
    genre: "Open Stage / Jam",
    time: "7pm – Close",
    stage: "Indoor Stage",
    cover: "Free",
    desc: "Open mic and jam session. Bring your axe — sign-up sheet starts at 6:30.",
  },
  {
    date: "Fri, May 30",
    artist: "Low Tide Revival",
    genre: "Americana",
    time: "9pm – 12am",
    stage: "Indoor Stage",
    cover: "$5",
    desc: "Down-home Americana with a coastal twist. Dancing encouraged.",
  },
  {
    date: "Sat, May 31",
    artist: "Del Norte All-Stars",
    genre: "Classic Rock",
    time: "8pm – 11:30pm",
    stage: "Harbor Stage",
    cover: "Free",
    desc: "Local legends Del Norte All-Stars headline the outdoor Harbor Stage to close out the month.",
  },
  {
    date: "Fri, Jun 6",
    artist: "TBA – Local Spotlight",
    genre: "Varies",
    time: "8pm",
    stage: "Indoor Stage",
    cover: "TBA",
    desc: "We rotate in new local acts every month. Follow us on socials for the announcement.",
  },
];

const stages = [
  {
    name: "Indoor Stage",
    desc: "Our main room stage fits the full band setup — PA, lights, the works. Rain or shine, the show goes on.",
    capacity: "~150",
    features: ["Full PA system", "Stage lighting", "Climate controlled", "Bar service"],
  },
  {
    name: "Harbor Stage",
    desc: "Open-air stage on the harbor side. No better view in Crescent City when the sky's clear.",
    capacity: "~250",
    features: ["Harbor views", "Outdoor seating", "Weather permitting", "Covered bar nearby"],
  },
];

export default function EventsPage() {
  return (
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            On the Stages
          </p>
          <h1 className="text-5xl sm:text-7xl font-black text-[#F5F0E8] mb-6 tracking-wide">
            Live Music &amp; Events
          </h1>
          <p className="text-[#F5F0E8]/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Two stages. Local artists. Harbor views.
            Something going on almost every night of the week.
          </p>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-[#0D1B2A] tracking-wide mb-8 uppercase">
            Upcoming Shows
          </h2>

          <div className="space-y-4">
            {shows.map((show, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#E8DFD0] p-6 flex flex-col md:flex-row md:items-center gap-4 card-hover shadow-sm"
              >
                {/* Date column */}
                <div className="md:w-36 shrink-0">
                  <p className="text-[#E8900A] font-bold text-sm tracking-widest uppercase">
                    {show.date}
                  </p>
                  <p className="text-[#6B7280] text-xs mt-0.5">{show.time}</p>
                </div>

                {/* Main info */}
                <div className="flex-1">
                  <h3 className="text-[#0D1B2A] font-black text-xl leading-tight">
                    {show.artist}
                  </h3>
                  <p className="text-[#6B7280] text-sm">{show.genre}</p>
                  <p className="text-[#0D1B2A]/70 text-sm mt-2 leading-relaxed hidden md:block">
                    {show.desc}
                  </p>
                </div>

                {/* Stage & cover badges */}
                <div className="flex md:flex-col items-center md:items-end gap-3 shrink-0">
                  <span className="px-3 py-1 bg-[#0D1B2A] text-[#F5F0E8] text-xs rounded-full font-medium">
                    {show.stage}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-bold ${
                      show.cover === "Free"
                        ? "bg-[#E8900A]/15 text-[#C2651A]"
                        : "bg-[#E8DFD0] text-[#0D1B2A]"
                    }`}
                  >
                    {show.cover === "Free" ? "Free Entry" : `Cover: ${show.cover}`}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#6B7280] text-sm mt-8">
            Schedule subject to change. Follow us on social for last-minute updates.
          </p>
        </div>
      </section>

      {/* STAGES */}
      <section className="bg-[#1E3A2F] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-[#F5F0E8] tracking-wide mb-8 uppercase text-center">
            The Stages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map((stage) => (
              <div
                key={stage.name}
                className="bg-[#0D1B2A]/60 rounded-xl border border-[#E8900A]/20 p-8"
              >
                <h3 className="text-[#E8900A] font-black text-2xl mb-3">{stage.name}</h3>
                <p className="text-[#F5F0E8]/70 leading-relaxed mb-6">{stage.desc}</p>
                <p className="text-[#F5F0E8]/40 text-xs uppercase tracking-widest mb-3">
                  Capacity: {stage.capacity}
                </p>
                <ul className="space-y-1">
                  {stage.features.map((f) => (
                    <li key={f} className="text-[#F5F0E8]/60 text-sm flex items-center gap-2">
                      <span className="text-[#E8900A]">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="py-16 px-4 bg-[#F5F0E8] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#0D1B2A] mb-4">
            Play Har-Bar?
          </h2>
          <p className="text-[#6B7280] mb-8 text-lg">
            We book local first. If you or your band is based in Del Norte County or
            the surrounding area, we want to hear from you.
          </p>
          <Link
            href="/visit"
            className="inline-block px-8 py-3 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-bold rounded tracking-widest uppercase transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
