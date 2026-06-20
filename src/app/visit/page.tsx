import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hours, Location & Directions — Brewery in Crescent City",
  description:
    "Visit Port O' Pints Brewing Co. at 1215 Northcrest Dr, Crescent City, CA 95531. Open daily 12–9pm. Directions, parking, and FAQs. Near Redwood National Park.",
};

const hours = [
  { day: "Monday",    hours: "12pm – 9pm" },
  { day: "Tuesday",   hours: "12pm – 9pm" },
  { day: "Wednesday", hours: "12pm – 9pm" },
  { day: "Thursday",  hours: "12pm – 9pm" },
  { day: "Friday",    hours: "12pm – 9pm" },
  { day: "Saturday",  hours: "12pm – 9pm" },
  { day: "Sunday",    hours: "12pm – 9pm" },
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
    a: "Yes. The Harbor Stage area has outdoor seating with views of the Crescent City Marina. Weather dependent.",
  },
  {
    q: "Is there parking?",
    a: "Street parking and a public lot are available at the harbor. Arrive early on weekend evenings.",
  },
  {
    q: "Do you have food?",
    a: "Yes — award-winning craft beer brewed on-site plus a full pub food menu including pizza, subs, nachos, salads, and more. See the full menu on the Beer & Food page.",
  },
];

export default function VisitPage() {
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain py-24 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-black text-[#DDD8CC] mb-4 tracking-wide uppercase">
            Visit Port O' Pints
          </h1>
          <p className="text-[#DDD8CC]/40 text-sm tracking-widest uppercase">
            1215 Northcrest Dr &nbsp;·&nbsp; Crescent City, CA 95531
          </p>
          <a
            href="tel:7074601154"
            className="inline-block mt-3 text-[#BFA060]/70 hover:text-[#BFA060] text-sm tracking-widest uppercase transition-colors"
          >
            707-460-1154
          </a>
        </div>
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

          <p className="text-[#DDD8CC]/20 text-xs mt-8 tracking-wide">
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
                  <p className="text-[#DDD8CC]/40 text-sm">Address</p>
                  <div className="text-right">
                    <p className="text-[#DDD8CC] text-sm">1215 Northcrest Dr</p>
                    <p className="text-[#DDD8CC] text-sm">Crescent City, CA 95531</p>
                  </div>
                </div>
                <div className="py-4 flex justify-between items-baseline">
                  <p className="text-[#DDD8CC]/40 text-sm">Phone</p>
                  <a href="tel:7074601154" className="text-[#DDD8CC] text-sm hover:text-[#BFA060] transition-colors">707-460-1154</a>
                </div>
                <div className="py-4 flex justify-between items-baseline">
                  <p className="text-[#DDD8CC]/40 text-sm">Neighborhood</p>
                  <p className="text-[#DDD8CC] text-sm">Crescent City Harbor District</p>
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
                <p className="text-[#DDD8CC]/40 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#BFA060]/20 py-16 px-4 bg-[#080d08] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#DDD8CC]/40 text-xs tracking-widest uppercase mb-3">
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
