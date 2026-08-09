"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/south-beach") return null;

  return (
    <footer className="bg-[#080d08] text-[#DDD8CC]/30 border-t border-[#BFA060]/10">
      <div className="max-w-6xl mx-auto px-4 py-6">

        <div className="flex flex-col sm:flex-row gap-6 mb-4 text-sm">

          {/* Address + Hours — always side by side */}
          <div className="flex gap-8 shrink-0">

            {/* Address + Contact */}
            <div>
              <p className="text-[#BFA060] font-black tracking-widest text-base mb-2 whitespace-nowrap">
                PORT <span style={{ color: "#2d6b1f" }}>O</span><img src="/images/hops-apostrophe.png" alt="" aria-hidden="true" className="inline-block align-middle" style={{ height: "0.7em", width: "auto", marginBottom: "0.2em" }} /> PINTS
              </p>
              <p className="text-[#DDD8CC]/50 leading-snug">1215 Northcrest Dr</p>
              <p className="text-[#DDD8CC]/50 mb-2">Crescent City, CA 95531</p>
              <a href="tel:7074601154" className="block text-[#DDD8CC]/50 hover:text-[#BFA060] transition-colors mb-3">
                (707) 460-1154
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Port+O+Pints,+1215+Northcrest+Dr,+Crescent+City,+CA+95531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 border border-[#BFA060]/50 hover:border-[#BFA060] text-[#BFA060] text-xs font-bold tracking-widest uppercase transition-colors"
              >
                Get Directions →
              </a>
            </div>

            {/* Hours */}
            <div className="text-center">
              <p className="text-[#BFA060] font-black tracking-widest text-base mb-2">Hours</p>
              <p className="text-[#DDD8CC]/50 leading-snug">Monday–Sunday</p>
              <p className="text-[#DDD8CC]/50">12:00pm–10:00pm</p>
              <p className="text-[#DDD8CC]/50">Bartender may stay late.</p>
            </div>

          </div>

          {/* Google Map */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-sm border border-[#BFA060]/15">
              <iframe
                src="https://maps.google.com/maps?q=Port+O+Pints,+1215+Northcrest+Dr,+Crescent+City,+CA+95531&z=17&output=embed&t=k"
                width="100%"
                height="160"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Port O&apos; Pints location"
              />
            </div>
          </div>

        </div>

        <div className="border-t border-[#BFA060]/10 pt-4 flex flex-col sm:flex-row justify-between gap-1 text-xs">
          <span>© {new Date().getFullYear()} Port O&apos; Pints · Crescent City, CA</span>
          <span className="text-[#DDD8CC]/30">Est. 2015 · Crescent City, CA</span>
        </div>
      </div>
    </footer>
  );
}
