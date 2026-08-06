import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Brewery — Port O' Pints Crescent City",
  description:
    "Port O' Pints Brewing Co. — Crescent City's original craft brewery. 80+ beer awards, live music, and good people since 2014. Del Norte County's most awarded brewery near Redwood National Park.",
};

const team = [
  { src: "/images/team-devin.jpg",   name: "Devin Beach",       title: "Owner / Brewmaster",
    desc: "Devin built the recipes, built the brewery, and keeps the taps flowing. His award-winning craft beers are the backbone of everything we do." },
{ src: "/images/team-john.jpg",    name: "Dr. John Kirk",     title: "Owner",
    desc: "A Crescent City OBGYN who put his roots where his heart is. John's love of craft beer and good food drove the 2023 purchase." },
  { src: "/images/team-cynthia.jpg", name: "Cynthia Parenteau", title: "Owner",
    desc: "Retired trauma nurse turned hospitality veteran. Cynthia runs the day-to-day and makes sure every guest feels taken care of." },
  { src: "/images/team-cameron.jpg", name: "Cameron Cook",      title: "Production",
    desc: "Cameron keeps production dialed in — from the brewery floor to the back of house." },
  { src: "/images/team-russell.jpg", name: "Russell Smithson",  title: "Marketing",
    desc: "Russell handles the brand, the socials, and getting the word out about what's happening on the harbor." },
];

const values = [
  { title: "Local Music First", desc: "We book Del Norte County artists first, every time. Our stage exists to amplify local talent." },
  { title: "Community Over Everything", desc: "Port O&apos; Pints promotes and partners with Crescent City businesses. A stronger community means a better night out for everyone." },
  { title: "Award-Winning Beer", desc: "Hand-crafted on-site by Brewmaster Devin Beach. Brewing on the Redwood Coast since 2014 — from easy-drinking cream ales to bold Belgian Tripels." },
  { title: "Crescent City Roots", desc: "1215 Northcrest Dr, one minute off Highway 101. Right in the heart of Crescent City, near Redwood National Park." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain relative min-h-[75vh] flex flex-col items-center px-4 py-12 bg-[#080d08] overflow-hidden">
        {process.env.NEXT_PUBLIC_ASSETS_URL && (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/brewing/grayscale-porto-pints-brew-kettles-1200w.webp`}
              alt=""
              fill
              className="object-cover object-center"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-[#080d08]/50" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0f170f] to-transparent" />
          </>
        )}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-white/90 text-5xl sm:text-8xl font-black tracking-widest leading-none" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
            THE BREWERY
          </p>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-8xl font-black tracking-widest text-[#BFA060] leading-none mb-2 sm:mb-3" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
            PORT<span className="text-[#DDD8CC]/40"> O&apos; </span>PINTS
          </h1>
          <p className="text-white/90 text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.7)" }}>
            Crescent City&apos;s craft brewery &nbsp;·&nbsp; Est. 2014
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-8">
            Our Story
          </h2>

          <div className="space-y-4 text-[#DDD8CC]/55 leading-relaxed mb-10">
            <p>
              Port O&apos; Pints Brewing Co. was founded in 2014 — one of the first craft
              breweries on the Redwood Coast. What started as a small taproom became
              something special: a BrewCade, an entertainment venue, a live music spot,
              and Crescent City&apos;s go-to gathering place.
            </p>
            <p>
              In 2023, Cynthia Parenteau, Dr. John Kirk, and Brewmaster Devin Beach
              took ownership and set out to build on that foundation — keeping everything
              that made this place worth keeping and doubling down on it.
            </p>
            <p>
              Award-winning beer. Local music first. 1215 Northcrest Dr,
              Crescent City, CA. Same as it ever was.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#BFA060]/50 pl-5">
            <p className="text-[#DDD8CC]/60 italic leading-relaxed">
              &ldquo;Our love of craft beer and good food certainly motivated the purchase and
              will enrich us as we continue the traditions of this beautiful and classic
              establishment.&rdquo;
            </p>
            <p className="text-[#BFA060] text-xs tracking-widest uppercase mt-3">— John Kirk, Owner</p>
          </blockquote>
        </div>
      </section>

      {/* BREWING PHOTOS */}
      <section className="relative py-8 px-4 overflow-hidden">
        {process.env.NEXT_PUBLIC_ASSETS_URL && (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/beer/full-beer-front-of-bar-looking-up-at-the-top-of-the-glass-800w.webp`}
              alt=""
              fill
              className="object-cover object-top -translate-y-1/2 scale-[2.3] origin-top brightness-125"
            />
            <div className="absolute inset-0 bg-[#080d08]/65" />
          </>
        )}
        {/* Rising bubbles */}
        {[
          { left: '4%',  bottom: '12%', size: 7,  delay: '0s',   dur: '5s'   },
          { left: '13%', bottom: '6%',  size: 4,  delay: '1.8s', dur: '4.5s' },
          { left: '23%', bottom: '18%', size: 11, delay: '0.6s', dur: '6s'   },
          { left: '36%', bottom: '8%',  size: 5,  delay: '2.4s', dur: '4.2s' },
          { left: '48%', bottom: '22%', size: 8,  delay: '1.1s', dur: '5.5s' },
          { left: '59%', bottom: '10%', size: 4,  delay: '3.0s', dur: '4s'   },
          { left: '70%', bottom: '15%', size: 9,  delay: '0.4s', dur: '6.5s' },
          { left: '80%', bottom: '5%',  size: 5,  delay: '1.6s', dur: '5s'   },
          { left: '90%', bottom: '20%', size: 7,  delay: '2.1s', dur: '4.8s' },
          { left: '96%', bottom: '9%',  size: 4,  delay: '0.9s', dur: '5.2s' },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#BFA060] pointer-events-none"
            style={{
              left: b.left, bottom: b.bottom,
              width: b.size, height: b.size,
              animation: `rise ${b.dur} ease-in ${b.delay} infinite`,
            }}
          />
        ))}
        <div className="relative z-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-3 sm:gap-5">

            {/* Left column — flush top */}
            <div className="flex flex-col gap-5 sm:gap-7">
              <div className="border border-[#BFA060]/25 p-[5px]">
                <div className="border border-[#BFA060]/55 p-[3px]">
                  <div className="relative h-64 sm:h-80 overflow-hidden border border-[#BFA060]/85">
                    {process.env.NEXT_PUBLIC_ASSETS_URL && (
                      <Image src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/brewing/3-guys-filling-a-fresh-keg-1200w.webp`} alt="Filling a fresh keg at Port O' Pints" fill className="object-cover object-center" />
                    )}
                  </div>
                </div>
              </div>
              <div className="border border-[#BFA060]/25 p-[5px]">
                <div className="border border-[#BFA060]/55 p-[3px]">
                  <div className="relative h-56 sm:h-72 overflow-hidden border border-[#BFA060]/85">
                    {process.env.NEXT_PUBLIC_ASSETS_URL && (
                      <Image src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/hero/busy-front-of-bar-1200w.webp`} alt="Port O' Pints bar" fill className="object-cover object-center" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column — offset down */}
            <div className="flex flex-col gap-5 sm:gap-7 mt-12 sm:mt-20">
              <div className="border border-[#BFA060]/25 p-[5px]">
                <div className="border border-[#BFA060]/55 p-[3px]">
                  <div className="relative h-56 sm:h-72 overflow-hidden border border-[#BFA060]/85">
                    {process.env.NEXT_PUBLIC_ASSETS_URL && (
                      <Image src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/brewing/grayscale-porto-pints-brew-kettles-1200w.webp`} alt="Port O' Pints brew kettles" fill className="object-cover object-center" />
                    )}
                  </div>
                </div>
              </div>
              <div className="border border-[#BFA060]/25 p-[5px]">
                <div className="border border-[#BFA060]/55 p-[3px]">
                  <div className="relative h-64 sm:h-80 overflow-hidden border border-[#BFA060]/85">
                    {process.env.NEXT_PUBLIC_ASSETS_URL && (
                      <Image src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/beer/full-beer-in-fancy-flute-with-brew-kettles-in-the-background-729w.webp`} alt="Port O' Pints craft beer" fill className="object-cover object-center" />
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="grain py-20 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-8">
            The Team
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {team.map((p) => (
              <div key={p.name} className="py-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="relative w-40 h-52 rounded-sm overflow-hidden shrink-0">
                  <Image src={p.src} alt={p.name} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-[#DDD8CC] font-semibold text-sm leading-tight">{p.name}</p>
                    <p className="text-[#BFA060] text-[10px] tracking-widest uppercase mt-0.5">{p.title}</p>
                  </div>
                </div>
                <div className="flex-1 sm:self-center border-l border-[#BFA060]/20 pl-5">
                  <p className="text-[#DDD8CC]/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="grain py-10 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-6">
            What We Stand For
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {values.map((v) => (
              <div key={v.title} className="py-5 flex flex-col sm:flex-row gap-2 sm:gap-8">
                <p className="text-[#DDD8CC] font-semibold sm:w-52 shrink-0">{v.title}</p>
                <p className="text-[#DDD8CC]/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="grain py-10 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-6">
            What People Say
          </h2>

          <div className="divide-y divide-[#BFA060]/10">
            {[
              { quote: "The beer here is delicious — had the Irish Red Ale. 10/10. The bartenders are super friendly!" },
              { quote: "The food is excellent and beers are even better! Definitely the most pleasant surprise of our trip!" },
              { quote: "Irish Nachos were really good. The establishment is well frequented by locals. Go there already!" },
            ].map((t, i) => (
              <div key={i} className="py-5">
                <p className="text-[#DDD8CC]/55 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#BFA060]/20 py-16 px-4 bg-[#080d08] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#DDD8CC]/40 text-xs tracking-widest uppercase mb-6">
            1215 Northcrest Dr &nbsp;·&nbsp; Crescent City, CA
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/visit"
              className="px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Hours &amp; Directions
            </Link>
            <Link
              href="/events"
              className="px-7 py-3 border border-[#DDD8CC]/20 hover:border-[#DDD8CC]/50 text-[#DDD8CC]/70 font-bold text-sm tracking-widest uppercase transition-colors"
            >
              See Events
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
