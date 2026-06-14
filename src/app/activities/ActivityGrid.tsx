"use client";
import Image from "next/image";
import { useState } from "react";

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

const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`;

export default function ActivityGrid() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {activities.map((act) => {
        const isOpen = selected === act.name;
        return (
          <button
            key={act.name}
            id={act.name.toLowerCase().replace(/ /g, "-")}
            onClick={() => setSelected(isOpen ? null : act.name)}
            aria-expanded={isOpen}
          aria-label={`${act.name}${act.age ? `, ${act.age}` : ""} — tap for details`}
          className="relative overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#BFA060] focus-visible:outline-offset-[-2px]"
            style={{ aspectRatio: "3/4" }}
          >
            {/* Background */}
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

            {/* Grain */}
            <div className="absolute inset-0 z-10 opacity-40" style={{ backgroundImage: NOISE }} />

            {/* Default state — name + age */}
            <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}>
              <p className="text-[#DDD8CC] font-black text-xs sm:text-2xl tracking-widest uppercase">{act.name}</p>
              {act.age && <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-1">{act.age}</p>}
              <p className="text-[#DDD8CC]/30 text-[9px] tracking-widest uppercase mt-3">Tap for info</p>
            </div>

            {/* Expanded state — details */}
            <div className={`absolute inset-0 z-20 flex flex-col justify-center p-4 sm:p-6 bg-[#080d08]/80 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <p className="text-[#BFA060] font-black text-xs sm:text-base tracking-widest uppercase mb-2">{act.name}</p>
              <p className="text-[#DDD8CC]/80 text-xs sm:text-sm leading-relaxed mb-3">{act.desc}</p>
              <ul className="space-y-1">
                {act.details.map((d) => (
                  <li key={d} className="text-[#DDD8CC]/50 text-[10px] sm:text-xs flex items-start gap-1.5">
                    <span className="text-[#BFA060] shrink-0">·</span>{d}
                  </li>
                ))}
              </ul>
              <p className="text-[#DDD8CC]/20 text-[9px] tracking-widest uppercase mt-4">Tap to close</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
