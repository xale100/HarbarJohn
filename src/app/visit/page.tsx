import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Hours, location, and directions to Har-Bar — 201 Citizens Dock Road, Crescent City, CA 95531. On the harbor.",
};

const hours = [
  { day: "Monday", hours: "3pm – 10pm" },
  { day: "Tuesday", hours: "3pm – 10pm" },
  { day: "Wednesday", hours: "3pm – 10pm" },
  { day: "Thursday", hours: "3pm – 10pm" },
  { day: "Friday", hours: "12pm – 12am" },
  { day: "Saturday", hours: "12pm – 12am" },
  { day: "Sunday", hours: "12pm – 10pm" },
];

const faqs = [
  {
    q: "Is there a cover charge?",
    a: "Most nights are free. Occasional ticketed shows are listed on the events page with cover info.",
  },
  {
    q: "What's the age requirement for ax throwing?",
    a: "Ax throwing is 18+. All other areas of the venue are all-ages during family hours.",
  },
  {
    q: "Can I reserve ax throwing lanes or pool tables?",
    a: "Yes — call us at 707-460-1154 or walk in. Reservations recommended for groups of 6+.",
  },
  {
    q: "When is it all-ages vs. 21+?",
    a: "All-ages are welcome during daytime and early evening hours. 21+ applies later in the evening — check with us for specific times on event nights.",
  },
  {
    q: "Do you host private events?",
    a: "Absolutely. Birthdays, team outings, company events — call us at 707-460-1154 and we'll build a package.",
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
    a: "Yes — pub food including pizza, subs, nachos, salads, and more. See our full menu on the Beer & Food page.",
  },
];

export default function VisitPage() {
  return (
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-4">Find Us</p>
          <h1 className="text-5xl sm:text-7xl font-black text-[#F5F0E8] mb-6 tracking-wide">Visit Har-Bar</h1>
          <p className="text-[#F5F0E8]/60 text-xl max-w-2xl mx-auto leading-relaxed">
            201 Citizens Dock Road · Crescent City, CA 95531
          </p>
          <a
            href="tel:7074601154"
            className="inline-block mt-4 text-[#E8900A] font-bold text-xl hover:text-[#F5A623] transition-colors"
          >
            707-460-1154
          </a>
        </div>
      </section>

      {/* LOCATION + HOURS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Location</p>
              <h2 className="text-3xl font-black text-[#0D1B2A] mb-6">On the Harbor</h2>

              <div className="bg-[#0D1B2A] rounded-2xl p-8 mb-6">
                <p className="text-[#F5F0E8] font-bold text-xl mb-1">Har-Bar</p>
                <p className="text-[#F5F0E8]/60 mb-4">
                  201 Citizens Dock Road<br />
                  Crescent City, CA 95531
                </p>
                <div className="border-t border-[#F5F0E8]/10 pt-4 space-y-2">
                  <p className="text-[#F5F0E8]/60 text-sm">
                    <span className="text-[#E8900A]">📍</span>{" "}
                    Crescent City Harbor District
                  </p>
                  <p className="text-[#F5F0E8]/60 text-sm">
                    <span className="text-[#E8900A]">📞</span>{" "}
                    <a href="tel:7074601154" className="hover:text-[#E8900A] transition-colors">707-460-1154</a>
                  </p>
                  <p className="text-[#F5F0E8]/60 text-sm">
                    <span className="text-[#E8900A]">✉️</span>{" "}
                    <a href="mailto:info@portopints.com" className="hover:text-[#E8900A] transition-colors">info@portopints.com</a>
                  </p>
                </div>
              </div>

              {/* Map placeholder — swap with real Google Maps embed */}
              <div className="bg-[#1A3040] rounded-2xl h-52 flex items-center justify-center border border-[#E8900A]/20">
                <div className="text-center">
                  <p className="text-4xl mb-2">⚓</p>
                  <p className="text-[#F5F0E8]/40 text-sm">201 Citizens Dock Road</p>
                  <p className="text-[#F5F0E8]/30 text-xs mt-1">Crescent City, CA 95531</p>
                  <a
                    href="https://maps.google.com/?q=201+Citizens+Dock+Road+Crescent+City+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#E8900A] text-xs font-bold hover:text-[#F5A623] transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Hours</p>
              <h2 className="text-3xl font-black text-[#0D1B2A] mb-6">When We&apos;re Open</h2>

              <div className="bg-white rounded-2xl border border-[#E8DFD0] overflow-hidden shadow-sm mb-4">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center px-6 py-4 ${i < hours.length - 1 ? "border-b border-[#E8DFD0]" : ""}`}
                  >
                    <span className="font-medium text-[#0D1B2A] text-sm">{h.day}</span>
                    <span className="text-sm font-bold text-[#E8900A]">{h.hours}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#6B7280] text-xs mb-6">
                Kitchen hours may vary. Event nights may have extended hours.
                Check social media for holiday schedules.
              </p>

              <div className="bg-[#0D1B2A] rounded-xl p-5">
                <p className="text-[#E8900A] font-bold text-sm mb-1">Ax Throwing &amp; Pool — 18+</p>
                <p className="text-[#F5F0E8]/60 text-sm">
                  All-ages welcome in the main bar area. Ax throwing lanes and pool tables
                  are 18+ only. Call ahead to reserve lanes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">Good to Know</p>
            <h2 className="text-4xl font-black text-[#F5F0E8]">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#1A3040] rounded-xl border border-[#E8900A]/20 p-6">
                <h3 className="text-[#F5F0E8] font-bold text-base mb-2">{faq.q}</h3>
                <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-4 bg-[#F5F0E8] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#0D1B2A] mb-4">Get In Touch</h2>
          <p className="text-[#6B7280] mb-8 text-lg">
            Questions about reservations, private events, or booking? Give us a call.
          </p>

          <a
            href="tel:7074601154"
            className="inline-block px-10 py-4 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-black text-xl rounded tracking-widest uppercase transition-colors mb-6"
          >
            707-460-1154
          </a>

          <p className="text-[#6B7280] text-sm">
            Or email us at{" "}
            <a href="mailto:info@portopints.com" className="text-[#E8900A] hover:text-[#F5A623] transition-colors">
              info@portopints.com
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
