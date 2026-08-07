import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getShows } from "@/lib/calendar";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Live Music & Events in Crescent City",
  description:
    "Live music schedule at Port O' Pints in Crescent City, CA. Local artists, craft beer, and good times every week. The best nightlife near Redwood National Park.",
};

const fallbackShows = [
  { date: "Fri, May 23", artist: "Open Mic Night", genre: "", time: "7pm", cover: "Free", photo: "" },
  { date: "Sat, May 24", artist: "Live Band — TBA", genre: "", time: "8pm", cover: "Free", photo: "" },
  { date: "Fri, May 30", artist: "Live Music — TBA", genre: "", time: "8pm", cover: "Free", photo: "" },
  { date: "Sat, May 31", artist: "Live Music — TBA", genre: "", time: "8pm", cover: "Free", photo: "" },
];


export default async function EventsPage() {
  const liveShows = await getShows(20);
  // null = fetch failed / bad config → use static fallback
  // []   = valid empty week → show empty state, not stale placeholder data
  const shows = liveShows ?? fallbackShows;
  const isEmpty = liveShows !== null && liveShows.length === 0;
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain relative min-h-[75vh] flex flex-col items-center px-4 py-12 bg-[#080d08] overflow-hidden">
        {process.env.NEXT_PUBLIC_ASSETS_URL && (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/live-music/7-person-band-playing-live-1200w.webp`}
              alt=""
              fill
              className="object-cover object-center"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-[#080d08]/50" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080d08] to-transparent" />
          </>
        )}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-8xl font-black tracking-widest text-[#BFA060] leading-none mb-2 sm:mb-3" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
            MUSIC<span className="text-[#DDD8CC]/40"> &amp; </span>EVENTS
          </h1>
          <p className="text-white/90 text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
            Local artists &nbsp;·&nbsp; Good Brews
          </p>
        </div>
        <div className="flex-1" />
      </section>

      {/* SCHEDULE */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase">
              Upcoming Shows
            </h2>
          </div>

          {isEmpty ? (
            <p className="text-white/50 text-sm tracking-wide py-6" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
              Nothing on the calendar yet — check back soon or follow us on social for updates.
            </p>
          ) : null}

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
                    <p className="text-white/65 text-xs mt-0.5" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>{show.genre}</p>
                  </div>
                  <p className="text-white/60 text-xs tracking-wide sm:text-right shrink-0" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
                    {show.time}
                    {show.cover !== "Free" && show.cover !== "TBA" && (
                      <span className="text-[#BFA060]"> &nbsp;·&nbsp; Cover {show.cover}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-xs mt-10 tracking-wide" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
            Schedule subject to change. Follow us on social for last-minute updates.
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <section className="grain py-20 px-4 overflow-hidden border-t-2 border-[#BFA060]/30" style={{ background: "radial-gradient(ellipse 80% 100% at center, #1a3a1a 0%, #1a3a1a 35%, #080d08 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-[#DDD8CC] tracking-wide uppercase mb-4">
            Play Port O&apos; Pints
          </h2>
          <div className="h-px bg-[#BFA060]/30 max-w-xs mb-6" />
          <p className="text-[#DDD8CC]/45 text-sm leading-relaxed mb-8">
            We book local first. If you or your band is based in Del Norte County or the surrounding area, we want to hear from you.
          </p>
          <BookingForm slug={process.env.VENUEFLOW_SLUG ?? ""} />
        </div>
      </section>

    </div>
  );
}
