import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hours, Location & Directions — Brewery in Crescent City",
  description:
    "Visit Port O' Pints Brewing Co. at 1215 Northcrest Dr, Crescent City, CA 95531. Open daily 12–10pm. Directions, parking, and FAQs. Near Redwood National Park.",
};

const hours = [
  { day: "Monday",    hours: "12pm – 10pm" },
  { day: "Tuesday",   hours: "12pm – 10pm" },
  { day: "Wednesday", hours: "12pm – 10pm" },
  { day: "Thursday",  hours: "12pm – 10pm" },
  { day: "Friday",    hours: "12pm – 10pm" },
  { day: "Saturday",  hours: "12pm – 10pm" },
  { day: "Sunday",    hours: "12pm – 10pm" },
];

const faqs = [
  {
    q: "Is there a cover charge?",
    a: "Most nights are free. Occasional ticketed shows are listed on the events page with cover info.",
  },
  {
    q: "Do you host private events?",
    a: "Absolutely. Birthdays, team outings, company events — give us a call and we'll build a package.",
  },
  {
    q: "Is there outdoor seating?",
    a: "Yes — we have outdoor seating on site. Weather dependent.",
  },
  {
    q: "Is there parking?",
    a: "Street parking and a public lot are available nearby. Just one minute off Highway 101 — easy to find whether you're coming from Eureka or Brookings.",
  },
  {
    q: "Are dogs allowed?",
    a: "Yes — Port O' Pints is dog friendly. Well-behaved pups are always welcome.",
  },
  {
    q: "Do you have food?",
    a: <>Yes — award-winning craft beer brewed on-site plus a full pub food menu including pizza, subs, nachos, salads, and more. See the full menu on the <Link href="/menu" className="text-[#BFA060]/70 hover:text-[#BFA060] transition-colors">Beer &amp; Food page</Link>.</>,
  },
];

export default function VisitPage() {
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain relative min-h-[75vh] flex flex-col items-center px-4 py-12 bg-[#080d08] overflow-hidden">
        {process.env.NEXT_PUBLIC_ASSETS_URL && (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/beer/2-beers-at-the-beach-on-a-rock-succulants-looking-at-the-ocean-768w.webp`}
              alt=""
              fill
              className="object-cover object-center -rotate-[8deg] scale-125"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-[#080d08]/35" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0f170f] to-transparent" />
          </>
        )}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-8xl font-black tracking-widest text-[#BFA060] leading-none mb-2 sm:mb-3" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
            VISIT US
          </h1>
          <p className="text-white/90 text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.7)" }}>
            Brewery &amp; Live Music &nbsp;·&nbsp; Est. 2015
          </p>
        </div>
        <div className="flex-1" />
      </section>

      {/* HOURS */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-10">
            Hours
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between items-baseline py-4">
                <p className={`font-semibold ${h.hours === "Closed" ? "text-[#DDD8CC]/25" : "text-[#DDD8CC]"}`}>{h.day}</p>
                <p className={`text-sm tracking-wide ${h.hours === "Closed" ? "text-[#DDD8CC]/25" : "text-[#BFA060]"}`}>{h.hours}</p>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-xs mt-8 tracking-wide" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
            Kitchen hours may vary. Event nights may have extended hours. Check social media for holiday schedules.
          </p>
        </div>
      </section>

      {/* LOCATION + MAP */}
      <section className="grain py-20 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-10">
            Location
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            <div>
              <div className="divide-y divide-[#BFA060]/10">
                <div className="py-4 flex justify-between">
                  <p className="text-white/60 text-sm" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>Address</p>
                  <div className="text-right">
                    <p className="text-[#DDD8CC] text-sm">1215 Northcrest Dr</p>
                    <p className="text-[#DDD8CC] text-sm">Crescent City, CA 95531</p>
                  </div>
                </div>
                <div className="py-4 flex justify-between items-baseline">
                  <p className="text-white/60 text-sm" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>Phone</p>
                  <a href="tel:7074601154" className="text-[#DDD8CC] text-sm hover:text-[#BFA060] transition-colors">707-460-1154</a>
                </div>
                <div className="py-4 flex justify-between items-baseline">
                  <p className="text-white/60 text-sm" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>Neighborhood</p>
                  <p className="text-[#DDD8CC] text-sm">Northcrest · Off Highway 101</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Port+O+Pints,+1215+Northcrest+Dr,+Crescent+City,+CA+95531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
              >
                Get Directions →
              </a>
            </div>

            <div className="overflow-hidden rounded-sm border border-[#BFA060]/15">
              <iframe
                src="https://maps.google.com/maps?q=Port+O+Pints,+1215+Northcrest+Dr,+Crescent+City,+CA+95531&z=17&output=embed&t=k"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Port O' Pints location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-10">
            Good to Know
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-5 flex flex-col sm:flex-row gap-2 sm:gap-8">
                <p className="text-[#DDD8CC] font-semibold sm:w-64 shrink-0 text-sm">{faq.q}</p>
                <p className="text-white/65 text-sm leading-relaxed" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#BFA060]/20 py-16 px-4 bg-[#080d08] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-white/55 text-xs tracking-widest uppercase mb-3" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
            Reservations &amp; private events
          </p>
          <a
            href="tel:7074601154"
            className="block text-3xl sm:text-4xl font-black text-[#BFA060] hover:text-[#DDD8CC] transition-colors mb-6"
          >
            707-460-1154
          </a>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/events"
              className="px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
            >
              See Events
            </Link>
            <Link
              href="/menu"
              className="px-7 py-3 border border-[#DDD8CC]/20 hover:border-[#DDD8CC]/50 text-[#DDD8CC]/70 font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Beer &amp; Food Menu
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
