import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080d08] text-[#DDD8CC]/30 border-t border-[#BFA060]/10">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 text-sm">

          <div>
            <p className="text-[#BFA060] font-black tracking-widest text-base mb-3">
              HAR<span className="text-[#DDD8CC]/20">·</span>BAR
            </p>
            <p className="leading-relaxed text-[#DDD8CC]/40">
              201 Citizens Dock Road<br />
              Crescent City, CA 95531
            </p>
            <a href="tel:7074601154" className="block mt-2 text-[#DDD8CC]/40 hover:text-[#BFA060] transition-colors">
              707-460-1154
            </a>
          </div>

          <div>
            <p className="text-[#DDD8CC]/20 text-xs tracking-widest uppercase mb-3">Hours</p>
            <p className="text-[#DDD8CC]/40 mb-0.5">Mon – Thu &nbsp; 3pm – 10pm</p>
            <p className="text-[#DDD8CC]/40 mb-0.5">Fri – Sat &nbsp;&nbsp;&nbsp; 12pm – 12am</p>
            <p className="text-[#DDD8CC]/40">Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12pm – 10pm</p>
          </div>

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
        </div>

        <div className="border-t border-[#BFA060]/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs">
          <span>© {new Date().getFullYear()} Har-Bar · Crescent City, CA</span>
          <span className="text-[#DDD8CC]/20">Formerly PortoPints South Beach</span>
        </div>
      </div>
    </footer>
  );
}
