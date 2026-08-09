"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Live Music & Events" },
  { href: "/menu", label: "Beer & Food" },
  { href: "/merch", label: "Merch" },
  { href: "/about", label: "The Brewery" },
  { href: "/visit", label: "Visit Us" },
  { href: "/south-beach", label: "South Beach", pair: { href: "/activities", label: "Activities" } },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    function onScroll() {
      if (window.scrollY > 60) setOpen(false);
    }

    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-[#080d08]/95 backdrop-blur-sm border-b border-[#BFA060]/15">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#BFA060] focus-visible:outline-offset-2 rounded-sm">
          <Image
            src="/images/logo-2.png"
            alt="Port O' Pints"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-xl font-black tracking-widest text-[#BFA060] group-hover:text-[#DDD8CC] transition-colors whitespace-nowrap">
            PORT <span style={{ color: "#2d6b1f" }}>O</span><img src="/images/hops-apostrophe.png" alt="" aria-hidden="true" className="inline-block align-middle" style={{ height: "0.38em", width: "auto", marginBottom: "0.45em", transform: "rotate(20deg)" }} /> PINTS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href;
            const pairActive = l.pair && pathname === l.pair.href;
            return (
              <span key={l.href} className="flex items-center gap-2">
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-xs font-medium transition-colors tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#BFA060] focus-visible:outline-offset-2 rounded-sm ${
                    active ? "text-[#DDD8CC]" : "text-[#DDD8CC]/50 hover:text-[#DDD8CC]"
                  }`}
                >
                  {l.label}
                </Link>
                {l.pair && (
                  <>
                    <span className="text-[#BFA060]/30 text-xs">·</span>
                    <Link
                      href={l.pair.href}
                      aria-current={pairActive ? "page" : undefined}
                      className={`text-xs font-medium transition-colors tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#BFA060] focus-visible:outline-offset-2 rounded-sm ${
                        pairActive ? "text-[#DDD8CC]" : "text-[#DDD8CC]/50 hover:text-[#DDD8CC]"
                      }`}
                    >
                      {l.pair.label}
                    </Link>
                  </>
                )}
              </span>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#DDD8CC]/60 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#BFA060] focus-visible:outline-offset-2 rounded-sm"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-3 h-px bg-current" />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="md:hidden bg-[#080d08] border-t border-[#BFA060]/10 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => {
            const active = pathname === l.href;
            const pairActive = l.pair && pathname === l.pair.href;
            return (
              <span key={l.href} className={l.pair ? "flex items-center gap-3" : ""}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`text-xs font-medium transition-colors tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#BFA060] focus-visible:outline-offset-2 rounded-sm ${
                    active ? "text-[#DDD8CC]" : "text-[#DDD8CC]/50 hover:text-[#DDD8CC]"
                  }`}
                >
                  {l.label}
                </Link>
                {l.pair && (
                  <>
                    <span className="text-[#BFA060]/30 text-xs">·</span>
                    <Link
                      href={l.pair.href}
                      aria-current={pairActive ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`text-xs font-medium transition-colors tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#BFA060] focus-visible:outline-offset-2 rounded-sm ${
                        pairActive ? "text-[#DDD8CC]" : "text-[#DDD8CC]/50 hover:text-[#DDD8CC]"
                      }`}
                    >
                      {l.pair.label}
                    </Link>
                  </>
                )}
              </span>
            );
          })}
        </nav>
      )}
    </header>
  );
}
