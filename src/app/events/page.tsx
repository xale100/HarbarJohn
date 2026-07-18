import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getShows } from "@/lib/calendar";

export const metadata: Metadata = {
  title: "Live Music & Events in Crescent City",
  description:
    "Live music schedule at Port O' Pints in Crescent City, CA. Local artists, good brews, and harbor views every week. The best nightlife near Redwood National Park.",
};

const fallbackShows = [
  { date: "Fri, May 23", artist: "Open Mic Night", genre: "", time: "7pm", cover: "Free", photo: "" },
  { date: "Sat, May 24", artist: "Live Band — TBA", genre: "", time: "8pm", cover: "Free", photo: "" },
  { date: "Fri, May 30", artist: "Live Music — TBA", genre: "", time: "8pm", cover: "Free", photo: "" },
  { date: "Sat, May 31", artist: "Live Music — TBA", genre: "", time: "8pm", cover: "Free", photo: "" },
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
            Local artists &nbsp;·&nbsp; Good Brews
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
              <div key={i} className="py-5 flex gap-4 items-center">
                {show.photo && (
                  <div className="relative w-16 h-16 rounded-sm overflow-hidden shrink-0">
                    <Image src={show.photo} alt={show.artist} fill className="object-cover" unoptimized />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 flex-1 min-w-0">
                  <p className="text-[#BFA060] text-xs tracking-widest uppercase sm:w-32 shrink-0">{show.date}</p>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#DDD8CC] font-semibold">{show.artist}</p>
                    <p className="text-[#DDD8CC]/35 text-xs mt-0.5">{show.genre}</p>
                  </div>
                  <p className="text-[#DDD8CC]/40 text-xs tracking-wide sm:text-right shrink-0">
                    {show.time}
                    {show.cover !== "Free" && show.cover !== "TBA" && (
                      <span className="text-[#BFA060]"> &nbsp;·&nbsp; Cover {show.cover}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#DDD8CC]/20 text-xs mt-10 tracking-wide">
            Schedule subject to change. Follow us on social for last-minute updates.
          </p>
        </div>
      </section>

      {/* BOOKING + CTA */}
      <section className="grain py-20 px-4 overflow-hidden border-t-2 border-[#BFA060]/30 text-center" style={{ background: "radial-gradient(ellipse 80% 100% at center, #1a3a1a 0%, #1a3a1a 35%, #080d08 100%)" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-[#DDD8CC] tracking-wide uppercase mb-4">
            Play Port O&apos; Pints
          </h2>
          <div className="h-px bg-[#BFA060]/30 max-w-xs mx-auto mb-6" />
          <p className="text-[#DDD8CC]/45 text-sm leading-relaxed mb-8">
            We book local first. If you or your band is based in Del Norte County or the surrounding area, we want to hear from you.
          </p>
          <a
            href="tel:7074601154"
            className="inline-block px-8 py-4 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-black text-sm tracking-widest uppercase transition-colors mb-10"
          >
            707-460-1154
          </a>
          <p className="text-[#DDD8CC]/25 text-xs tracking-widest uppercase mb-4">
            1215 Northcrest Dr &nbsp;·&nbsp; Crescent City, CA
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/menu" className="px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors">
              Beer &amp; Food Menu
            </Link>
            <Link href="/visit" className="px-7 py-3 border border-[#DDD8CC]/20 hover:border-[#DDD8CC]/50 text-[#DDD8CC]/70 font-bold text-sm tracking-widest uppercase transition-colors">
              Hours &amp; Directions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
