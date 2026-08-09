import Link from "next/link";
import Image from "next/image";
import HopsO from "@/components/HopsO";
import { getShows } from "@/lib/calendar";
import { getProducts } from "@/lib/printful";

export const revalidate = 3600;

const fallbackShows = [] as { date: string; artist: string; time: string; genre: string; cover: string; photo: string }[];

const beers = [
  { name: "Agate Ale", style: "Cream Ale", abv: "4.8%" },
  { name: "11 Bravo IPA", style: "American IPA", abv: "6.5%" },
  { name: "Fog Bank", style: "Hazy IPA", abv: "5.9%" },
  { name: "My Honey's Brown", style: "Brown Ale", abv: "5.7%" },
  { name: "3 Sisters", style: "Irish Red", abv: "6.3%" },
  { name: "Belgian Tripel", style: "Belgian", abv: "9.1%" },
];

export default async function Home() {
  const [liveShows, products] = await Promise.all([getShows(4), getProducts(3600)]);
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
            <div className="absolute inset-0 bg-[#080d08]/40" />
          </>
        )}
        <div className="relative z-10 text-center max-w-3xl mx-auto -mt-8 sm:-mt-12">

          <div className="mb-5 flex justify-center">
            <Image
              src="/images/logo-2.png"
              alt="Port O' Pints Brewing Co."
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-5xl sm:text-8xl font-black tracking-widest text-[#BFA060] leading-none mb-6 sm:mb-8" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
            PORT <HopsO className="h-[0.7em] w-auto" /> PINTS
          </h1>

          <p className="text-white/90 text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-1" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.7)" }}>
            Brewery &amp; Live Music &nbsp;·&nbsp; Est. 2015
          </p>

          <p className="text-white/90 text-xs tracking-[0.2em] sm:tracking-[0.4em] uppercase mb-1 whitespace-nowrap" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.7)" }}>
            Mon–Sun &nbsp;·&nbsp; 12–10pm
          </p>

          <p className="text-white/90 text-xs tracking-[0.2em] sm:tracking-[0.4em] uppercase mb-1 whitespace-nowrap" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.7)" }}>
            1215 Northcrest Dr &nbsp;·&nbsp; Crescent City, CA
          </p>
          <a
            href="tel:7074601154"
            className="block text-white/90 hover:text-[#BFA060] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-8 sm:mb-12 transition-colors"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.7)" }}
          >
            707-460-1154
          </a>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/events"
              className="px-7 py-3 border-2 border-[#BFA060] hover:border-[#BFA060] text-[#BFA060] font-bold text-xs sm:text-sm tracking-widest uppercase transition-colors"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)", boxShadow: "0 0 12px rgba(191,160,96,0.25)" }}
            >
              See Events
            </Link>
            <Link
              href="/visit"
              className="px-7 py-3 border-2 border-white/60 hover:border-white/90 text-white/90 font-bold text-xs sm:text-sm tracking-widest uppercase transition-colors"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)", boxShadow: "0 0 12px rgba(255,255,255,0.1)" }}
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="border-t border-[#BFA060]/70 border-b border-[#BFA060]/70 py-5 px-4" style={{ background: "radial-gradient(ellipse 60% 100% at center, #1a3a1a 0%, #1a3a1a 55%, #080d08 100%)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-3 sm:gap-4">
            <Image src="/images/award.png" alt="Award-winning" width={56} height={56} className="object-contain w-10 h-10 sm:w-14 sm:h-14" />
            <div>
              <p className="text-[#BFA060] text-base sm:text-lg font-black tracking-widest uppercase">Award-Winning</p>
              <p className="text-white/60 text-xs sm:text-sm" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>Craft Beer &amp; Root Beer</p>
            </div>
          </div>
        </div>
      </section>

      {/* BAR SHOT */}
      {process.env.NEXT_PUBLIC_ASSETS_URL && (
        <section className="relative h-[50vw] max-h-[480px] min-h-[220px] overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/hero/busy-front-of-bar-1200w.webp`}
            alt="Port O' Pints — the bar"
            fill
            className="object-cover object-center"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d08]/60 via-transparent to-[#080d08]/30" />
        </section>
      )}

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
            <span className="text-[#BFA060] text-6xl sm:text-7xl font-black not-italic leading-[0.75] float-left mr-3 mt-1">A</span>
            ward winning craft beers… brewed in house... carefully tended on our 7 barrel direct-fire system.
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
      <section className="grain relative py-10 sm:py-14 px-4 border-t-2 border-[#BFA060]/50 overflow-hidden">
        {process.env.NEXT_PUBLIC_ASSETS_URL && (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/live-music/7-person-band-playing-live-1200w.webp`}
              alt=""
              fill
              className="object-cover object-center"
              quality={85}
            />
            <div className="absolute inset-0 bg-[#080d08]/70" />
          </>
        )}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-white tracking-wide uppercase mb-2" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
              This Week&apos;s Events
            </h2>
            <p className="text-white/70 text-[10px] sm:text-sm mb-2" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>Live music every week in Crescent City</p>
            <Link href="/events" className="text-[#BFA060]/90 hover:text-[#BFA060] text-[10px] sm:text-xs tracking-widest uppercase transition-colors" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>
              Full Schedule →
            </Link>
          </div>

          {shows.length === 0 && (
            <p className="text-white/50 text-sm tracking-wide py-4" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>
              The stage is quiet right now — check back soon for upcoming shows.
            </p>
          )}
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
                <p className={`font-semibold flex-1 ${i === 0 ? "text-white text-sm sm:text-xl" : "text-white/60 text-xs sm:text-base"}`} style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>
                  {show.artist}
                </p>
                <p className={`text-[10px] sm:text-xs tracking-wide text-right shrink-0 ${i === 0 ? "text-white/80" : "text-white/30"}`} style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>
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
                <p className="text-white/60 text-[10px] sm:text-sm mb-1" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>Hand-crafted in Crescent City by Devin Beach</p>
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
                  <p className="text-white/65 text-[10px] sm:text-sm hidden sm:block" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>{beer.style}</p>
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
          {(products.length > 0 ? [...products, ...products] : [
            { name: "Port O' Pints Tee" }, { name: "Sweatshirt" }, { name: "Snapback" },
            { name: "Pint Glass" }, { name: "Growler" }, { name: "Koozie" },
            { name: "Sticker Pack" }, { name: "Tote Bag" }, { name: "Button-Down" },
            { name: "Port O' Pints Tee" }, { name: "Sweatshirt" }, { name: "Snapback" },
            { name: "Pint Glass" }, { name: "Growler" }, { name: "Koozie" },
            { name: "Sticker Pack" }, { name: "Tote Bag" }, { name: "Button-Down" },
          ]).map((item, i) => {
            const isReal = "sync_product" in item;
            const name = isReal ? item.sync_product.name : (item as { name: string }).name;
            const thumb = isReal ? item.sync_product.thumbnail_url : null;
            return (
              <Link
                key={i}
                href={isReal ? `/merch?product=${item.sync_product.id}` : "/merch"}
                className="group border border-[#BFA060]/10 hover:border-[#BFA060]/60 bg-[#080d08] hover:bg-[#1a3a1a] transition-all duration-300 p-3 flex flex-col items-center gap-3 w-36 sm:w-44 shrink-0"
              >
                <div className="w-full aspect-square overflow-hidden bg-[#0a0a0a] relative">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt={name}
                      fill
                      className="object-contain brightness-75 group-hover:brightness-90 transition-all duration-300"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src="/images/logo-2.png"
                        alt={name}
                        width={48}
                        height={48}
                        className="opacity-20 group-hover:opacity-50 transition-opacity duration-300 object-contain"
                      />
                    </div>
                  )}
                </div>
                <p className="text-[#DDD8CC]/40 group-hover:text-[#DDD8CC]/80 text-[9px] tracking-widest uppercase font-bold transition-colors text-center leading-tight">
                  {name}
                </p>
              </Link>
            );
          })}
        </div>
      </section>


    </div>
  );
}
