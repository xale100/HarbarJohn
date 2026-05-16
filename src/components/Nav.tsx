"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/events", label: "Live Music & Events" },
  { href: "/activities", label: "Activities" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#071219]/90 backdrop-blur-md border-b border-[#E8900A]/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-widest text-[#E8900A] group-hover:text-[#F5A623] transition-colors">
            HAR<span className="text-[#F5F0E8]">·</span>BAR
          </span>
          <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-[#F5F0E8]/50 mt-1 leading-none">
            Crescent City
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#F5F0E8]/80 hover:text-[#E8900A] transition-colors tracking-wide uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/visit"
            className="ml-2 px-4 py-2 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-bold text-sm rounded tracking-wide uppercase transition-colors"
          >
            Get Directions
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#F5F0E8] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-4 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#071219] border-t border-[#E8900A]/20 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#F5F0E8]/80 hover:text-[#E8900A] transition-colors tracking-wide uppercase py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/visit"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 bg-[#E8900A] text-[#071219] font-bold text-sm rounded tracking-wide uppercase text-center"
          >
            Get Directions
          </Link>
        </div>
      )}
    </header>
  );
}
