import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#071219] text-[#F5F0E8]/60 border-t border-[#E8900A]/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          <div>
            <Image src="/images/logo.png" alt="Har-Bar" width={80} height={80} className="object-contain mb-3" />
            <div className="text-2xl font-black tracking-widest text-[#E8900A] mb-2">
              HAR<span className="text-[#F5F0E8]">·</span>BAR
            </div>
            <p className="text-sm leading-relaxed mb-2">
              Award-winning craft beer, live music, and entertainment on the Crescent City Harbor.
            </p>
            <p className="text-xs text-[#F5F0E8]/30">Formerly PortoPints South Beach</p>
          </div>

          <div>
            <h4 className="text-[#E8900A] font-bold uppercase tracking-widest text-xs mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/events", label: "Live Music & Events" },
                { href: "/activities", label: "Activities" },
                { href: "/menu", label: "Beer & Food" },
                { href: "/about", label: "Our Story" },
                { href: "/visit", label: "Hours & Location" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#E8900A] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#E8900A] font-bold uppercase tracking-widest text-xs mb-4">Find Us</h4>
            <p className="text-sm font-medium text-[#F5F0E8]/80 mb-1">201 Citizens Dock Road</p>
            <p className="text-sm mb-1">Crescent City, CA 95531</p>
            <p className="text-sm mb-4">
              <a href="tel:7074601154" className="hover:text-[#E8900A] transition-colors">707-460-1154</a>
            </p>
            <p className="text-sm mb-0.5 font-medium text-[#F5F0E8]/70">Mon – Thu: 3pm – 10pm</p>
            <p className="text-sm mb-0.5 font-medium text-[#F5F0E8]/70">Fri – Sat: 12pm – 12am</p>
            <p className="text-sm font-medium text-[#F5F0E8]/70">Sun: 12pm – 10pm</p>
          </div>
        </div>

        <div className="border-t border-[#E8900A]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#F5F0E8]/30">
          <span>© {new Date().getFullYear()} Har-Bar. All rights reserved.</span>
          <span>Crescent City, CA · 201 Citizens Dock Road</span>
        </div>
      </div>
    </footer>
  );
}
