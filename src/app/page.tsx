import Link from "next/link";
import Image from "next/image";
import { getShows } from "@/lib/calendar";

export const revalidate = 3600;

const fallbackShows = [
  { date: "Fri May 23", artist: "Open Mic Night", time: "7pm", genre: "", cover: "Free", photo: "" },
  { date: "Sat May 24", artist: "Live Band — TBA", time: "8pm", genre: "", cover: "Free", photo: "" },
  { date: "Fri May 30", artist: "Live Music — TBA", time: "8pm", genre: "", cover: "Free", photo: "" },
  { date: "Sat May 31", artist: "Live Music — TBA", time: "8pm", genre: "", cover: "Free", photo: "" },
];

const beers = [
  { name: "Agate Ale", style: "Cream Ale", abv: "4.8%" },
  { name: "11 Bravo IPA", style: "American IPA", abv: "6.5%" },
  { name: "Fog Bank", style: "Hazy IPA", abv: "5.9%" },
  { name: "My Honey's Brown", style: "Brown Ale", abv: "5.7%" },
  { name: "3 Sisters", style: "Irish Red", abv: "6.3%" },
  { name: "Belgian Tripel", style: "Belgian", abv: "9.1%" },
];

export default async function Home() {
  const liveShows = await getShows(4);
  const shows = (liveShows && liveShows.length > 0)
    ? liveShows.map(s => ({ date: s.date, artist: s.artist, time: s.time, genre: s.genre, cover: s.cover, photo: s.photo }))
    : fallbackShows;
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain relative min-h-[75vh] flex flex-col items-center justify-center px-4 bg-[#080d08]">
        {process.env.NEXT_PUBLIC_ASSETS_URL && (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/beer/full-beer-in-fancy-flute-with-brew-kettles-in-the-background-729w.webp`}
              alt=""
              fill
              className="object-cover object-center"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-[#080d08]/75" />
          </>
        )}
        <div className="relative z-10 text-center max-w-3xl mx-auto">

          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo-2.png"
              alt="Port O' Pints Brewing Co."
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-5xl sm:text-8xl font-black tracking-widest text-[#BFA060] leading-none mb-2 sm:mb-3">
            PORT<span className="text-[#DDD8CC]/40"> O&apos; </span>PINTS
          </h1>

          <p className="text-[#DDD8CC]/50 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3">
            Brewery &amp; Live Music &nbsp;·&nbsp; Est. 2014
          </p>

          <p className="text-[#DDD8CC]/30 text-[10px] tracking-[0.2em] sm:tracking-[0.4em] uppercase mb-2 whitespace-nowrap">
            1215 Northcrest Dr &nbsp;·&nbsp; Crescent City, CA
          </p>
          <a
            href="tel:7074601154"
            className="block text-[#DDD8CC]/40 hover:text-[#BFA060] text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-7 sm:mb-10 transition-colors"
          >
            707-460-1154
          </a>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/events"
              className="px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-[10px] sm:text-sm tracking-widest uppercase transition-colors"
            >
              See Events
            </Link>
            <Link
              href="/visit"
              className="px-7 py-3 border border-[#DDD8CC]/20 hover:border-[#DDD8CC]/50 text-[#DDD8CC]/70 font-bold text-[10px] sm:text-sm tracking-widest uppercase transition-colors"
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="border-t border-[#BFA060]/70 border-b border-[#BFA060]/70 py-5 px-4" style={{ background: "radial-gradient(ellipse 60% 100% at center, #1a3a1a 0%, #1a3a1a 55%, #080d08 100%)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-center divide-x divide-[#BFA060]/20">
          <div className="px-2 sm:px-8 py-1 flex items-center gap-2 sm:gap-3 shrink-0">
            <Image src="/images/award.png" alt="Award-winning" width={56} height={56} className="object-contain w-8 h-8 sm:w-14 sm:h-14" />
            <div>
              <p className="text-[#BFA060] text-[11px] sm:text-sm font-black tracking-widest uppercase">Award-Winning</p>
              <p className="text-[#DDD8CC]/40 text-[10px] sm:text-xs">Craft Beer &amp; Root Beer</p>
            </div>
          </div>
          <div className="px-2 sm:px-8 py-1 text-center shrink-0">
            <p className="text-[#DDD8CC]/70 text-[11px] sm:text-sm font-semibold">1215 Northcrest Dr</p>
            <p className="text-[#DDD8CC]/30 text-[10px] sm:text-xs">Crescent City, CA</p>
          </div>
          <div className="px-2 sm:px-8 py-1 text-center shrink-0">
            <p className="text-[#DDD8CC]/70 text-[11px] sm:text-sm font-semibold">Mon–Sun</p>
            <p className="text-[#DDD8CC]/30 text-[10px] sm:text-xs">12–10pm</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="grid grid-cols-5 h-[40vw]">
        {[
          { src: "/images/team-devin.jpg",   name: "Devin Beach",       title: "Owner / Brewmaster" },
          { src: "/images/team-john.jpg",     name: "John Kirk",         title: "Owner" },
          { src: "/images/team-cynthia.jpg",  name: "Cynthia Parenteau", title: "Owner" },
          { src: "/images/team-cameron.jpg",  name: "Cameron Cook",      title: "Production" },
          { src: "/images/team-russell.jpg",  name: "Russell Smithson",  title: "Marketing" },
        ].map((p) => (
          <div key={p.name} className="relative overflow-hidden">
            <Image src={p.src} alt={p.name} fill className="object-cover object-top brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-3">
              <p className="text-[#DDD8CC] font-bold text-[10px] md:text-xs leading-tight truncate">{p.name}</p>
              <p className="text-[#BFA060] text-[9px] md:text-[10px] tracking-wide truncate">{p.title}</p>
            </div>
          </div>
        ))}
      </section>

      {/* BREWMASTER QUOTE */}
      <section className="relative px-6 sm:px-16 py-4 sm:py-5 bg-[#080d08] overflow-hidden border-t border-[#BFA060]/30">

        {/* Medallion blown up as background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <svg viewBox="0 0 56 56" className="w-[680px] h-[680px]" fill="none" opacity="0.06">
            <circle cx="28" cy="28" r="26" stroke="#BFA060" strokeWidth="0.75"/>
            <circle cx="28" cy="28" r="18" stroke="#BFA060" strokeWidth="0.75"/>
            <line x1="2"   y1="28"  x2="54"  y2="28"  stroke="#BFA060" strokeWidth="0.7"/>
            <line x1="28"  y1="2"   x2="28"  y2="54"  stroke="#BFA060" strokeWidth="0.7"/>
            <line x1="9.8" y1="9.8" x2="46.2" y2="46.2" stroke="#BFA060" strokeWidth="0.55"/>
            <line x1="46.2" y1="9.8" x2="9.8" y2="46.2" stroke="#BFA060" strokeWidth="0.55"/>
            <polygon points="28,13 43,28 28,43 13,28" stroke="#BFA060" strokeWidth="0.75" fill="none"/>
            <polygon points="28,21 35,28 28,35 21,28" stroke="#BFA060" strokeWidth="0.75" fill="none"/>
            <circle cx="28" cy="28" r="2.5" fill="#BFA060"/>
            <circle cx="2"  cy="28" r="1.5" fill="#BFA060"/>
            <circle cx="54" cy="28" r="1.5" fill="#BFA060"/>
            <circle cx="28" cy="2"  r="1.5" fill="#BFA060"/>
            <circle cx="28" cy="54" r="1.5" fill="#BFA060"/>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="h-px bg-[#BFA060]/25 mb-6" />
          <p className="text-[#DDD8CC]/75 italic leading-relaxed text-base sm:text-xl">
            <span className="text-[#BFA060] text-6xl sm:text-7xl font-black not-italic leading-[0.75] float-left mr-3 mt-1">P</span>
            laceholder for we make beer
          </p>
          <div className="clear-both" />
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#BFA060]/25" />
            <p className="text-[#BFA060] text-[10px] tracking-[0.35em] uppercase shrink-0">Devin Beach · Brewmaster</p>
            <div className="h-px flex-1 bg-[#BFA060]/25" />
          </div>
        </div>

      </section>

      {/* UPCOMING SHOWS */}
      <section className="grain py-10 sm:py-14 px-4 border-t-2 border-[#BFA060]/50" style={{ background: "radial-gradient(ellipse 48% 35% at 25% 25%, rgba(180,148,85,0.055) 0%, transparent 100%), #0f170f" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-2">
              This Week&apos;s Events
            </h2>
            <p className="text-[#DDD8CC]/40 text-[10px] sm:text-sm mb-2">Live music every week in Crescent City</p>
            <Link href="/events" className="text-[#BFA060]/70 hover:text-[#BFA060] text-[10px] sm:text-xs tracking-widest uppercase transition-colors">
              Full Schedule →
            </Link>
          </div>

          <div className="divide-y divide-[#BFA060]/10">
            {shows.map((show, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 relative"
                style={i === 0 ? {
                  padding: "20px 16px",
                  margin: "0 -16px",
                  background: "radial-gradient(ellipse 70% 100% at center, rgba(26,58,26,0.9) 0%, rgba(26,58,26,0.9) 40%, transparent 100%)",
                } : { padding: "16px 0" }}
              >
                <div className="flex items-center gap-2 w-36 shrink-0">
                  <p className={`text-[10px] sm:text-xs tracking-widest uppercase ${i === 0 ? "text-[#BFA060]" : "text-[#BFA060]/50"}`}>
                    {show.date}
                  </p>
                  {i === 0 && (
                    <span className="hidden sm:inline-block bg-[#BFA060] text-[#080d08] text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 leading-none">
                      Next Up
                    </span>
                  )}
                </div>
                <p className={`font-semibold flex-1 ${i === 0 ? "text-[#DDD8CC] text-sm sm:text-xl" : "text-[#DDD8CC]/50 text-xs sm:text-base"}`}>
                  {show.artist}
                </p>
                <p className={`text-[10px] sm:text-xs tracking-wide text-right shrink-0 ${i === 0 ? "text-[#DDD8CC]/70" : "text-[#DDD8CC]/25"}`}>
                  {show.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEER */}
      <section className="grain relative py-10 sm:py-14 px-4 border-t-2 border-[#BFA060]/30 overflow-hidden" style={{ background: "radial-gradient(ellipse 45% 40% at 15% 20%, rgba(180,148,85,0.055) 0%, transparent 100%), #130e06" }}>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <h2
              className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase leading-none mb-3"
              style={{ textShadow: "0 0 40px rgba(191,160,96,0.35), 0 0 12px rgba(191,160,96,0.20)" }}
            >
              On Tap
            </h2>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[#DDD8CC]/40 text-[10px] sm:text-sm mb-1">Hand-crafted in Crescent City by Devin Beach</p>
                <Link
                  href="/menu"
                  className="text-[#BFA060]/70 hover:text-[#BFA060] text-[10px] sm:text-xs tracking-widest uppercase transition-colors"
                >
                  Full Menu →
                </Link>
              </div>
              <Image
                src="/images/award.png"
                alt="Award-winning"
                width={52}
                height={52}
                className="object-contain opacity-80 shrink-0"
              />
            </div>
            <div className="h-px bg-[#BFA060]/20 mt-6" />
          </div>

          <div className="divide-y divide-[#BFA060]/15">
            {beers.map((beer) => (
              <div key={beer.name} className="flex items-center justify-between py-4 gap-4">
                <p className="text-[#BFA060] font-black text-sm sm:text-lg tracking-wide">{beer.name}</p>
                <div className="flex items-center gap-3 shrink-0">
                  <p className="text-[#DDD8CC]/35 text-[10px] sm:text-sm hidden sm:block">{beer.style}</p>
                  <span className="border border-[#BFA060]/50 text-[#BFA060] text-[9px] sm:text-[10px] font-black tracking-widest px-1.5 py-0.5 leading-none">{beer.abv}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MERCH */}
      <section className="grain py-6 bg-[#0f170f] overflow-hidden">
        <div
          className="flex gap-4"
          style={{ animation: "marquee 32s linear infinite", width: "max-content", willChange: "transform" }}
        >
          {[
            { name: "Port O&apos; Pints Tee",   anim: null },
            { name: "Sweatshirt",    anim: "breathe 3s ease-in-out infinite" },
            { name: "Snapback",      anim: null },
            { name: "Pint Glass",    anim: null },
            { name: "Growler",       anim: "pour 3.5s ease-in-out infinite" },
            { name: "Koozie",        anim: null },
            { name: "Sticker Pack",  anim: null },
            { name: "Tote Bag",      anim: null },
            { name: "Button-Down",   anim: null },
            { name: "Work Hat",      anim: null },
            { name: "Port O&apos; Pints Tee",   anim: null },
            { name: "Sweatshirt",    anim: "breathe 3s ease-in-out infinite" },
            { name: "Snapback",      anim: null },
            { name: "Pint Glass",    anim: null },
            { name: "Growler",       anim: "pour 3.5s ease-in-out infinite" },
            { name: "Koozie",        anim: null },
            { name: "Sticker Pack",  anim: null },
            { name: "Tote Bag",      anim: null },
            { name: "Button-Down",   anim: null },
            { name: "Work Hat",      anim: null },
          ].map(({ name, anim }, i) => (
            <Link
              key={`${name}-${i}`}
              href="/merch"
              className="group border border-[#BFA060]/10 hover:border-[#BFA060]/60 bg-[#080d08] hover:bg-[#1a3a1a] transition-all duration-300 p-5 flex flex-col items-center gap-4 w-36 sm:w-44 shrink-0"
            >
              <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo-2.png"
                  alt={name}
                  width={64}
                  height={64}
                  className="opacity-20 group-hover:opacity-60 transition-opacity duration-300 object-contain"
                  style={anim ? { animation: anim } : {}}
                />
              </div>
              <p className="text-[#DDD8CC]/40 group-hover:text-[#DDD8CC]/80 text-[9px] tracking-widest uppercase font-bold transition-colors text-center">
                {name}
              </p>
            </Link>
          ))}
        </div>
      </section>


    </div>
  );
}
