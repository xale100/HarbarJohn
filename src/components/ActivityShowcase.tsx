"use client";
import { useState } from "react";
import Image from "next/image";

const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`;

const activities = [
  {
    name: "Axe Throwing",
    age: "18+",
    desc: "Two lanes, instruction included. Walk-in or reserve. Perfect for groups, date nights, or birthdays.",
    details: ["2 throwing lanes", "Walk-ins welcome", "Group reservations available", "No experience needed"],
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
    desc: "A hand-picked selection of classic arcade games and pinball machines. All-ages welcome.",
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

const SLIDES = 3;

export default function ActivityShowcase() {
  const [selected, setSelected] = useState<string | null>(null);
  const [slide, setSlide] = useState(0);

  const activity = activities.find((a) => a.name === selected) ?? null;

  function open(name: string) {
    setSelected(name);
    setSlide(0);
  }

  function close() {
    setSelected(null);
  }

  function prev(e: React.MouseEvent) {
    e.stopPropagation();
    setSlide((s) => (s - 1 + SLIDES) % SLIDES);
  }

  function next(e: React.MouseEvent) {
    e.stopPropagation();
    setSlide((s) => (s + 1) % SLIDES);
  }

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3">
        {activities.map((act) => (
          <button
            key={act.name}
            onClick={() => open(act.name)}
            className="relative overflow-hidden text-left focus:outline-none"
            style={{ aspectRatio: "1" }}
          >
            {act.photo ? (
              <Image src={act.photo} alt={act.name} fill className="object-cover brightness-50 blur-[1.5px] scale-105" />
            ) : (
              <div className="absolute inset-0 bg-[#1a3a1a]" />
            )}
            <div className="absolute inset-0 z-10 opacity-40" style={{ backgroundImage: NOISE }} />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
              <p className="text-[#DDD8CC] font-black text-xs sm:text-2xl tracking-widest uppercase">{act.name}</p>
              {act.age && <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-1">{act.age}</p>}
              <p className="text-[#DDD8CC]/30 text-[9px] tracking-widest uppercase mt-3">Tap for info</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activity && (
        <div
          className="fixed inset-0 z-50 bg-[#080d08]/95 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={close}
        >
          <div
            className="w-full sm:max-w-lg bg-[#080d08] border border-[#BFA060]/20 max-h-[92dvh] overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#BFA060]/15 shrink-0">
              <div>
                <h2 className="text-[#DDD8CC] font-black text-lg tracking-wide uppercase">{activity.name}</h2>
                {activity.age && (
                  <span className="text-[#BFA060] text-[10px] tracking-widest uppercase">{activity.age}</span>
                )}
              </div>
              <button
                onClick={close}
                className="text-[#DDD8CC]/30 hover:text-[#DDD8CC] text-xl leading-none transition-colors p-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Carousel */}
            <div className="relative bg-[#1a3a1a] aspect-video sm:aspect-square shrink-0 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/logo-2.png"
                  alt={activity.name}
                  width={80}
                  height={80}
                  className="opacity-15 object-contain"
                />
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#DDD8CC]/40 hover:text-[#DDD8CC] transition-colors"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#DDD8CC]/40 hover:text-[#DDD8CC] transition-colors"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {Array.from({ length: SLIDES }).map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSlide(i); }}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === slide ? "bg-[#BFA060]" : "bg-[#DDD8CC]/20"}`}
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="px-5 py-6 flex flex-col gap-4">
              <p className="text-[#DDD8CC]/70 text-sm leading-relaxed">{activity.desc}</p>

              <ul className="space-y-2">
                {activity.details.map((d) => (
                  <li key={d} className="text-[#DDD8CC]/50 text-xs flex items-start gap-2">
                    <span className="text-[#BFA060] shrink-0">·</span>{d}
                  </li>
                ))}
              </ul>

              {/* Group CTA */}
              <div className="border-t border-[#BFA060]/15 pt-4 mt-2">
                <p className="text-[#DDD8CC]/30 text-[10px] tracking-widest uppercase mb-1">Doing this with a group?</p>
                <a
                  href="tel:7074601154"
                  className="text-[#BFA060] font-black text-lg hover:text-[#DDD8CC] transition-colors"
                >
                  707-460-1154
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
