import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071219] text-[#F5F0E8]/60 border-t border-[#E8900A]/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="text-3xl font-black tracking-widest text-[#E8900A] mb-2">
              HAR<span className="text-[#F5F0E8]">·</span>BAR
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Live music, harbor views, and good people — right here in Crescent City.
            </p>
            <p className="text-xs text-[#F5F0E8]/40">
              Supporting local artists &amp; businesses since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E8900A] font-bold uppercase tracking-widest text-xs mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/events", label: "Live Music & Events" },
                { href: "/activities", label: "Activities" },
                { href: "/about", label: "Our Story" },
                { href: "/visit", label: "Hours & Location" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-[#E8900A] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#E8900A] font-bold uppercase tracking-widest text-xs mb-4">
              Find Us
            </h4>
            <p className="text-sm mb-1">Crescent City, CA</p>
            <p className="text-sm mb-4">On the Harbor</p>
            <p className="text-sm mb-1">Mon – Thu: 4pm – 12am</p>
            <p className="text-sm mb-1">Fri – Sat: 2pm – 2am</p>
            <p className="text-sm">Sun: 12pm – 10pm</p>
          </div>
        </div>

        <div className="border-t border-[#E8900A]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#F5F0E8]/30">
          <span>© {new Date().getFullYear()} Har-Bar. All rights reserved.</span>
          <span>Crescent City, CA · Harbor District</span>
        </div>
      </div>
    </footer>
  );
}
