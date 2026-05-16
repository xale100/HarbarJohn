import Link from "next/link";
import Image from "next/image";

const shows = [
  { date: "Fri May 23", artist: "Open Mic Night", time: "7pm", stage: "Indoor" },
  { date: "Sat May 24", artist: "Live Band — TBA", time: "8pm", stage: "Harbor Stage" },
  { date: "Fri May 30", artist: "Live Music — TBA", time: "8pm", stage: "Indoor" },
  { date: "Sat May 31", artist: "Live Music — TBA", time: "8pm", stage: "Harbor Stage" },
];

const beers = [
  { name: "Agate Ale", style: "Cream Ale", abv: "4.8%" },
  { name: "11 Bravo IPA", style: "American IPA", abv: "6.5%" },
  { name: "Fog Bank", style: "Hazy IPA", abv: "5.9%" },
  { name: "My Honey's Brown", style: "Brown Ale", abv: "5.7%" },
  { name: "3 Sisters", style: "Irish Red", abv: "6.3%" },
  { name: "Belgian Tripel", style: "Belgian", abv: "9.1%" },
];

export default function Home() {
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain relative min-h-screen flex flex-col items-center justify-center px-4 bg-[#080d08]">
        <div className="relative z-10 text-center max-w-3xl mx-auto">

          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Port O'Pints"
              width={120}
              height={120}
              className="object-contain"
              priority
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>

          <h1 className="text-7xl sm:text-[10rem] font-black tracking-widest text-[#BFA060] leading-none mb-3">
            HAR<span className="text-[#DDD8CC]/40">·</span>BAR
          </h1>

          <p className="text-[#DDD8CC]/50 text-xs tracking-[0.4em] uppercase mb-10">
            201 Citizens Dock Rd &nbsp;·&nbsp; Crescent City, CA
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/events"
              className="px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
            >
              See Events
            </Link>
            <Link
              href="/visit"
              className="px-7 py-3 border border-[#DDD8CC]/20 hover:border-[#DDD8CC]/50 text-[#DDD8CC]/70 font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="border-t border-[#BFA060]/15 border-b border-[#BFA060]/15 py-5 px-4 bg-[#0a100a]">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center divide-x divide-[#BFA060]/15">
          {[
            { label: "Award-Winning", sub: "Craft Beer & Root Beer" },
            { label: "On the Harbor", sub: "201 Citizens Dock Rd, Crescent City" },
            { label: "Open Daily", sub: "Mon–Thu 3pm · Fri–Sun 12pm" },
            { label: "707-460-1154", sub: "Call or walk in" },
          ].map((item) => (
            <div key={item.label} className="px-6 py-1 text-center">
              <p className="text-[#DDD8CC]/80 text-sm font-semibold">{item.label}</p>
              <p className="text-[#DDD8CC]/35 text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING SHOWS */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase">
              This Week&apos;s Shows
            </h2>
            <Link href="/events" className="text-[#BFA060]/70 hover:text-[#BFA060] text-xs tracking-widest uppercase transition-colors">
              Full Schedule →
            </Link>
          </div>

          <div className="divide-y divide-[#BFA060]/10">
            {shows.map((show, i) => (
              <div key={i} className="flex items-baseline justify-between py-4 gap-4">
                <p className="text-[#BFA060] text-xs tracking-widest uppercase w-28 shrink-0">{show.date}</p>
                <p className="text-[#DDD8CC] font-semibold flex-1">{show.artist}</p>
                <p className="text-[#DDD8CC]/40 text-xs tracking-wide text-right shrink-0">
                  {show.time} &nbsp;·&nbsp; {show.stage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="grid grid-cols-3 md:grid-cols-5 h-52 md:h-72 overflow-hidden">
        {[
          "/images/venue-1.jpg",
          "/images/harbor-1.jpg",
          "/images/venue-3.jpg",
          "/images/harbor-2.jpg",
          "/images/venue-5.jpg",
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={src}
              alt="Har-Bar"
              fill
              className="object-cover brightness-75"
            />
          </div>
        ))}
      </section>

      {/* ACTIVITIES */}
      <section className="py-20 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-6">
            Activities
          </h2>
          <p className="text-[#DDD8CC]/50 text-lg sm:text-xl font-light tracking-wide leading-relaxed">
            Ax Throwing &nbsp;·&nbsp; Darts &nbsp;·&nbsp; Pool &nbsp;·&nbsp;
            Arcade &nbsp;·&nbsp; Shuffleboard &nbsp;·&nbsp; Foosball
          </p>
          <p className="text-[#DDD8CC]/30 text-xs tracking-widest uppercase mt-4">
            Ax throwing &amp; pool 18+ &nbsp;·&nbsp; Reservations: 707-460-1154
          </p>
        </div>
      </section>

      <hr className="border-[#BFA060]/10 max-w-4xl mx-auto" />

      {/* BEER */}
      <section className="grain py-20 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-1">
                On Tap
              </h2>
              <p className="text-[#DDD8CC]/40 text-sm">Hand-crafted in Crescent City by Devin Beach</p>
            </div>
            <Image
              src="/images/award.png"
              alt="Award-winning"
              width={52}
              height={52}
              className="object-contain shrink-0 opacity-80"
            />
          </div>

          <div className="divide-y divide-[#BFA060]/10">
            {beers.map((beer) => (
              <div key={beer.name} className="flex items-baseline justify-between py-4 gap-4">
                <p className="text-[#DDD8CC] font-semibold">{beer.name}</p>
                <p className="text-[#DDD8CC]/40 text-sm text-right">
                  {beer.style} &nbsp;·&nbsp; {beer.abv}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/menu"
              className="text-[#BFA060]/70 hover:text-[#BFA060] text-xs tracking-widest uppercase transition-colors"
            >
              Full Beer &amp; Food Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="grain py-20 px-4 bg-[#1a3a1a]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 items-end">
          <div>
            <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-6">
              Come Down
            </h2>
            <p className="text-[#DDD8CC]/80 mb-1">201 Citizens Dock Road</p>
            <p className="text-[#DDD8CC]/80 mb-6">Crescent City, CA 95531</p>
            <p className="text-[#DDD8CC]/50 text-sm mb-1">Mon – Thu &nbsp; 3pm – 10pm</p>
            <p className="text-[#DDD8CC]/50 text-sm mb-1">Fri – Sat &nbsp;&nbsp;&nbsp; 12pm – 12am</p>
            <p className="text-[#DDD8CC]/50 text-sm">Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12pm – 10pm</p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="tel:7074601154"
              className="text-[#BFA060] font-black text-2xl hover:text-[#DDD8CC] transition-colors"
            >
              707-460-1154
            </a>
            <Link
              href="/visit"
              className="inline-block px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Directions &amp; Info
            </Link>
            <Link
              href="/events"
              className="inline-block px-7 py-3 border border-[#DDD8CC]/20 hover:border-[#DDD8CC]/40 text-[#DDD8CC]/60 font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Tonight&apos;s Events
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
