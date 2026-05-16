import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Hours, location, and directions to Har-Bar in Crescent City, CA. Find us on the harbor.",
};

const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "4pm – 12am" },
  { day: "Wednesday", hours: "4pm – 12am" },
  { day: "Thursday", hours: "4pm – 12am" },
  { day: "Friday", hours: "2pm – 2am" },
  { day: "Saturday", hours: "2pm – 2am" },
  { day: "Sunday", hours: "12pm – 10pm" },
];

const faqs = [
  {
    q: "Is there a cover charge?",
    a: "Most nights are free. Occasional ticketed shows are listed on the events page with cover info.",
  },
  {
    q: "Can I reserve ax throwing lanes or pool tables in advance?",
    a: "Yes. Call us or walk in — we'll get you set up either way. Reservations are recommended for groups of 6+.",
  },
  {
    q: "Is Har-Bar all-ages?",
    a: "Yes, before 9pm. After 9pm it's 21+ to stay on the premises. Minors are welcome earlier in the evening.",
  },
  {
    q: "Do you host private events?",
    a: "Absolutely. Birthday parties, team outings, company events — reach out and we'll build a package.",
  },
  {
    q: "Do you have outdoor seating?",
    a: "Yes. The Harbor Stage area has outdoor seating with views of the marina. Weather dependent.",
  },
  {
    q: "Is there parking?",
    a: "Street parking and a public lot are available adjacent to the venue. Arrive early on weekends.",
  },
];

export default function VisitPage() {
  return (
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Find Us
          </p>
          <h1 className="text-5xl sm:text-7xl font-black text-[#F5F0E8] mb-6 tracking-wide">
            Visit Har-Bar
          </h1>
          <p className="text-[#F5F0E8]/60 text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re on the harbor in Crescent City. Come down — the view is worth it even
            if you don&apos;t end up staying all night.
          </p>
        </div>
      </section>

      {/* LOCATION + HOURS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Location card */}
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Location
              </p>
              <h2 className="text-3xl font-black text-[#0D1B2A] mb-6">
                On the Harbor
              </h2>

              <div className="bg-[#0D1B2A] rounded-2xl p-8 mb-6">
                <p className="text-[#F5F0E8] font-bold text-xl mb-1">Har-Bar</p>
                <p className="text-[#F5F0E8]/60 mb-4">Crescent City Harbor<br />Crescent City, CA 95531</p>
                <div className="border-t border-[#F5F0E8]/10 pt-4 space-y-2">
                  <p className="text-[#F5F0E8]/60 text-sm">
                    <span className="text-[#E8900A]">📍</span>{" "}
                    Harbor District, Crescent City
                  </p>
                  <p className="text-[#F5F0E8]/60 text-sm">
                    <span className="text-[#E8900A]">📞</span>{" "}
                    Phone number coming soon
                  </p>
                  <p className="text-[#F5F0E8]/60 text-sm">
                    <span className="text-[#E8900A]">✉️</span>{" "}
                    Contact via social for now
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#1A3040] rounded-2xl h-48 flex items-center justify-center border border-[#E8900A]/20">
                <div className="text-center">
                  <p className="text-4xl mb-2">⚓</p>
                  <p className="text-[#F5F0E8]/40 text-sm">Map embed coming soon</p>
                  <p className="text-[#F5F0E8]/30 text-xs mt-1">Crescent City Harbor</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Hours
              </p>
              <h2 className="text-3xl font-black text-[#0D1B2A] mb-6">
                When We&apos;re Open
              </h2>

              <div className="bg-white rounded-2xl border border-[#E8DFD0] overflow-hidden shadow-sm">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center px-6 py-4 ${
                      i < hours.length - 1 ? "border-b border-[#E8DFD0]" : ""
                    } ${h.hours === "Closed" ? "opacity-40" : ""}`}
                  >
                    <span className="font-medium text-[#0D1B2A] text-sm">{h.day}</span>
                    <span
                      className={`text-sm font-bold ${
                        h.hours === "Closed" ? "text-[#6B7280]" : "text-[#E8900A]"
                      }`}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[#6B7280] text-xs mt-3">
                Kitchen hours may vary. Event nights may have extended hours.
                Check social media for holiday schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">
              Good to Know
            </p>
            <h2 className="text-4xl font-black text-[#F5F0E8]">
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-[#1A3040] rounded-xl border border-[#E8900A]/20 p-6"
              >
                <h3 className="text-[#F5F0E8] font-bold text-base mb-2">{faq.q}</h3>
                <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / SOCIAL CTA */}
      <section className="py-20 px-4 bg-[#F5F0E8] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#0D1B2A] mb-4">
            Stay in the Loop
          </h2>
          <p className="text-[#6B7280] mb-8 text-lg">
            Follow us on social for last-minute show announcements, specials,
            and everything happening at the harbor.
          </p>

          {/* Social placeholders */}
          <div className="flex justify-center gap-4 mb-10">
            {["Facebook", "Instagram"].map((platform) => (
              <div
                key={platform}
                className="px-6 py-3 bg-[#0D1B2A] text-[#F5F0E8] rounded-lg font-bold text-sm opacity-60 cursor-default"
              >
                {platform} — Link Coming Soon
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-[#E8DFD0] p-8 shadow-sm">
            <h3 className="text-[#0D1B2A] font-black text-xl mb-2">
              Want to Book a Private Event?
            </h3>
            <p className="text-[#6B7280] mb-6 text-sm">
              Birthdays, company events, team outings — reach out and we&apos;ll put
              something together.
            </p>
            <Link
              href="/activities"
              className="inline-block px-6 py-3 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-bold rounded tracking-widest uppercase transition-colors text-sm"
            >
              See Group Packages
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
