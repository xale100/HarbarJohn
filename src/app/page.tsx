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
      <section className="grain relative min-h-[75vh] flex flex-col items-center justify-center px-4 bg-[#080d08]">
        <div className="relative z-10 text-center max-w-3xl mx-auto">

          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo-2.png"
              alt="Port O'Pints"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-7xl sm:text-[10rem] font-black tracking-widest text-[#BFA060] leading-none mb-2 sm:mb-3">
            HAR<span className="text-[#DDD8CC]/40">·</span>BAR
          </h1>

          <p className="text-[#DDD8CC]/50 text-xs tracking-[0.4em] uppercase mb-7 sm:mb-10">
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
      <section className="border-t border-[#BFA060]/30 border-b border-[#BFA060]/30 py-5 px-4 bg-[#1a3a1a]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center divide-x divide-[#BFA060]/25">
          <div className="px-6 py-1 flex items-center gap-3">
            <Image src="/images/award.png" alt="Award-winning" width={44} height={44} className="object-contain" />
            <div>
              <p className="text-[#DDD8CC] text-sm font-semibold">Award-Winning</p>
              <p className="text-[#DDD8CC]/55 text-xs">Craft Beer &amp; Root Beer</p>
            </div>
          </div>
          {[
            { label: "On the Harbor", sub: "201 Citizens Dock Rd, Crescent City" },
            { label: "Open Daily", sub: "Mon–Thu 3pm · Fri–Sun 12pm" },
            { label: "707-460-1154", sub: "Call or walk in" },
          ].map((item) => (
            <div key={item.label} className="px-6 py-1 text-center">
              <p className="text-[#DDD8CC] text-sm font-semibold">{item.label}</p>
              <p className="text-[#DDD8CC]/55 text-xs">{item.sub}</p>
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

      {/* PHOTO STRIP */}
      <section className="grid grid-cols-3 md:grid-cols-5 h-52 md:h-72 overflow-hidden">
        {[
          "/images/venue-1.jpg",
          "/images/venue-2.jpg",
          "/images/venue-3.jpg",
          "/images/harbor-2.jpg",
          "/images/venue-5.jpg",
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image src={src} alt="Har-Bar" fill className="object-cover brightness-75" />
          </div>
        ))}
      </section>

      {/* ACTIVITIES */}
      <section className="bg-[#080d08] pt-0 pb-0">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {[
            { name: "Ax Throwing", photo: null, note: "18+" },
            { name: "Darts", photo: "/images/harbor-1.jpg", note: null },
            { name: "Pool", photo: "/images/pool.jpg", note: "18+" },
            { name: "Arcade", photo: null, note: null },
            { name: "Shuffleboard", photo: null, note: null },
            { name: "Foosball", photo: null, note: null },
          ].map((act) => (
            <div key={act.name} className="relative aspect-square overflow-hidden">
              {act.photo ? (
                <Image
                  src={act.photo}
                  alt={act.name}
                  fill
                  className="object-cover brightness-50 blur-[1.5px] scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-[#1a3a1a]" />
              )}
              <div
                className="absolute inset-0 z-10 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                <p className="text-[#DDD8CC] font-black text-xl sm:text-2xl tracking-widest uppercase">
                  {act.name}
                </p>
                {act.note && (
                  <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-1">
                    {act.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 py-5">
          <p className="text-[#DDD8CC]/30 text-xs tracking-widest uppercase">
            Ax throwing &amp; pool 18+ &nbsp;·&nbsp; Reservations: 707-460-1154
          </p>
        </div>
      </section>


    </div>
  );
}
