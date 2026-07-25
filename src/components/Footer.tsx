export default function Footer() {
  return (
    <footer className="bg-[#080d08] text-[#DDD8CC]/30 border-t border-[#BFA060]/10">
      <div className="max-w-6xl mx-auto px-4 py-6">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4 text-sm">

          {/* Brand + Contact */}
          <div>
            <p className="text-[#BFA060] font-black tracking-widest text-base mb-2">
              PORT<span className="text-[#DDD8CC]/20"> O&apos; </span>PINTS
            </p>
            <p className="text-[#DDD8CC]/50 leading-snug mb-0.5">1215 Northcrest Dr, Crescent City, CA 95531 &nbsp;·&nbsp; Mon–Sun 12pm–9pm</p>
            <a href="tel:7074601154" className="block text-[#DDD8CC]/50 hover:text-[#BFA060] transition-colors mb-3">
              (707) 460-1154
            </a>
            <p className="text-[#DDD8CC]/20 text-xs tracking-widest uppercase">Est. 2014</p>
          </div>

          {/* Directions */}
          <div className="flex items-start">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Port+O+Pints,+1215+Northcrest+Dr,+Crescent+City,+CA+95531"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 border border-[#BFA060]/50 hover:border-[#BFA060] text-[#BFA060] text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Get Directions →
            </a>
          </div>

          {/* Google Map */}
          <div>
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
          <span className="text-[#DDD8CC]/30">Est. 2014 · Crescent City, CA</span>
        </div>
      </div>
    </footer>
  );
}
