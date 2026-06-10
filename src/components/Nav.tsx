"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/events", label: "Live Music & Events" },
  { href: "/menu", label: "Beer & Food" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080d08]/95 backdrop-blur-sm border-b border-[#BFA060]/15">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo-2.png"
            alt="Port O' Pints"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-xl font-black tracking-widest text-[#BFA060] group-hover:text-[#DDD8CC] transition-colors">
            PORT<span className="text-[#DDD8CC]/30"> O&apos; </span>PINTS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium text-[#DDD8CC]/50 hover:text-[#DDD8CC] transition-colors tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#DDD8CC]/60 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-3 h-px bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#080d08] border-t border-[#BFA060]/10 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs font-medium text-[#DDD8CC]/50 hover:text-[#DDD8CC] transition-colors tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
