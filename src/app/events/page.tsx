import type { Metadata } from "next";
import Image from "next/image";
import VenueFlowWidget from "@/components/VenueFlowWidget";

export const metadata: Metadata = {
  title: "Live Music & Events in Crescent City",
  description:
    "Live music schedule at Port O' Pints in Crescent City, CA. Local artists, craft beer, and good times every week. The best nightlife near Redwood National Park.",
};

export default function EventsPage() {
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
            MUSIC<span style={{ color: "#2d6b1f" }}> &amp; </span>EVENTS
          </h1>
          <p className="text-white/90 text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
            Local artists &nbsp;·&nbsp; Good Brews
          </p>
        </div>
        <div className="flex-1" />
      </section>

      {/* SCHEDULE + BOOKING — VenueFlow widget */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">
          <VenueFlowWidget layout="list" />
        </div>
      </section>

    </div>
  );
}
