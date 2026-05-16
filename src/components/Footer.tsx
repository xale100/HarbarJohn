import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080d08] text-[#DDD8CC]/30 border-t border-[#BFA060]/10">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-sm">

          {/* Brand + Contact */}
          <div>
            <p className="text-[#BFA060] font-black tracking-widest text-base mb-3">
              HAR<span className="text-[#DDD8CC]/20">·</span>BAR
            </p>
            <p className="text-[#DDD8CC]/50 leading-relaxed mb-1">201 Citizens Dock Road</p>
            <p className="text-[#DDD8CC]/50 mb-3">Crescent City, CA 95531</p>
            <a href="tel:7074601154" className="block text-[#DDD8CC]/50 hover:text-[#BFA060] transition-colors mb-4">
              707-460-1154
            </a>
            <p className="text-[#DDD8CC]/20 text-xs tracking-widest uppercase mb-2">Formerly PortoPints South Beach</p>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[#DDD8CC]/20 text-xs tracking-widest uppercase mb-3">Hours</p>
            <p className="text-[#DDD8CC]/50 mb-0.5">Mon – Thu &nbsp; 3pm – 10pm</p>
            <p className="text-[#DDD8CC]/50 mb-0.5">Fri – Sat &nbsp;&nbsp;&nbsp; 12pm – 12am</p>
            <p className="text-[#DDD8CC]/50 mb-6">Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12pm – 10pm</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=201+Citizens+Dock+Road,+Crescent+City,+CA+95531"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 border border-[#BFA060]/50 hover:border-[#BFA060] text-[#BFA060] text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Get Directions →
            </a>
          </div>

          {/* Pages */}
          <div>
            <p className="text-[#DDD8CC]/20 text-xs tracking-widest uppercase mb-3">Pages</p>
            <ul className="space-y-1.5">
              {[
                { href: "/events", label: "Live Music & Events" },
                { href: "/activities", label: "Activities" },
                { href: "/menu", label: "Beer & Food" },
                { href: "/about", label: "About" },
                { href: "/visit", label: "Visit Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#DDD8CC]/40 hover:text-[#BFA060] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <p className="text-[#DDD8CC]/20 text-xs tracking-widest uppercase mb-3">Location</p>
            <div className="overflow-hidden rounded-sm border border-[#BFA060]/15">
              <iframe
                src="https://maps.google.com/maps?q=201+Citizens+Dock+Road,+Crescent+City,+CA+95531&z=15&output=embed"
                width="100%"
                height="160"
                style={{ border: 0, display: "block", filter: "grayscale(1) invert(0.85) contrast(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Har-Bar location"
              />
            </div>
          </div>

        </div>

        <div className="border-t border-[#BFA060]/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs">
          <span>© {new Date().getFullYear()} Har-Bar · Crescent City, CA</span>
          <span className="text-[#DDD8CC]/15">Formerly PortoPints South Beach</span>
        </div>
      </div>
    </footer>
  );
}
