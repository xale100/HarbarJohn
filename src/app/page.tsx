import Link from "next/link";
import Image from "next/image";

const upcomingShows = [
  { date: "FRI MAY 23", artist: "Open Mic Night", genre: "Local Artists", time: "7pm", stage: "Indoor Stage" },
  { date: "SAT MAY 24", artist: "Live Band TBA", genre: "Check Socials", time: "8pm", stage: "Harbor Stage" },
  { date: "FRI MAY 30", artist: "Live Music", genre: "Check Socials", time: "8pm", stage: "Indoor Stage" },
  { date: "SAT MAY 31", artist: "Live Music", genre: "Check Socials", time: "8pm", stage: "Harbor Stage" },
];

const activities = [
  { icon: "🪓", name: "Ax Throwing", desc: "Two lanes open for walk-ins and reservations. 18+ only. No experience needed — instruction included." },
  { icon: "🎯", name: "Darts & Pool", desc: "18+ tables and boards. Perfect for leagues, tournaments, or a casual round." },
  { icon: "🎮", name: "Arcade", desc: "Classic arcade games and pinball. All-ages welcome during family hours." },
  { icon: "🏒", name: "Shuffleboard & Foosball", desc: "Full-size shuffleboard and foosball tables available throughout the venue." },
];

export default function Home() {
  return (
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 sunset-gradient" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#071219] to-transparent" />

        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#F5F0E8]/20"
            style={{ top: `${10 + (i * 7) % 50}%`, left: `${5 + (i * 13) % 90}%` }}
          />
        ))}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-6">
            201 Citizens Dock Rd · Crescent City, CA
          </p>

          <div className="mb-4 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Har-Bar logo"
              width={180}
              height={180}
              className="object-contain drop-shadow-[0_0_30px_rgba(232,144,10,0.4)]"
              priority
            />
          </div>

          <h1 className="text-7xl sm:text-9xl font-black tracking-widest text-[#E8900A] mb-2 text-amber-glow">
            HAR<span className="text-[#F5F0E8]/90">·</span>BAR
          </h1>

          <p className="text-[#F5F0E8]/70 text-sm tracking-[0.3em] uppercase mb-8">
            Where the Harbor Meets the Stage
          </p>

          <p className="text-[#F5F0E8] text-xl sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Award-winning craft beer, live music, ax throwing, arcade — all on the Crescent City Harbor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="px-8 py-4 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-bold rounded tracking-widest uppercase transition-colors"
            >
              See This Week&apos;s Shows
            </Link>
            <Link
              href="/activities"
              className="px-8 py-4 border-2 border-[#F5F0E8]/40 hover:border-[#E8900A] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors"
            >
              Explore Activities
            </Link>
          </div>

          <div className="mt-16 animate-bounce">
            <div className="w-0.5 h-8 bg-[#E8900A]/40 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* AWARD BADGE + QUICK FACTS */}
      <section className="bg-[#0D1B2A] py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-3">
            <Image src="/images/award.png" alt="Award-winning" width={48} height={48} className="object-contain" />
            <div className="text-left">
              <p className="text-[#E8900A] font-bold text-sm">Award-Winning</p>
              <p className="text-[#F5F0E8]/50 text-xs">Craft Beer & Root Beer</p>
            </div>
          </div>
          <div className="w-px h-10 bg-[#F5F0E8]/10 hidden sm:block" />
          <div>
            <p className="text-[#E8900A] font-bold text-sm">On the Harbor</p>
            <p className="text-[#F5F0E8]/50 text-xs">201 Citizens Dock Rd, Crescent City</p>
          </div>
          <div className="w-px h-10 bg-[#F5F0E8]/10 hidden sm:block" />
          <div>
            <p className="text-[#E8900A] font-bold text-sm">Open Daily</p>
            <p className="text-[#F5F0E8]/50 text-xs">Mon–Thu 3pm · Fri–Sun 12pm</p>
          </div>
          <div className="w-px h-10 bg-[#F5F0E8]/10 hidden sm:block" />
          <div>
            <p className="text-[#E8900A] font-bold text-sm">707-460-1154</p>
            <p className="text-[#F5F0E8]/50 text-xs">Call or walk in</p>
          </div>
        </div>
      </section>

      {/* UPCOMING SHOWS */}
      <section className="bg-[#0D1B2A] py-16 px-4 border-t border-[#F5F0E8]/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-1">On the Stages</p>
              <h2 className="text-3xl font-black text-[#F5F0E8] tracking-wide">Upcoming Shows</h2>
            </div>
            <Link href="/events" className="text-[#E8900A] hover:text-[#F5A623] text-sm font-bold tracking-widest uppercase transition-colors">
              Full Schedule →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingShows.map((show, i) => (
              <div key={i} className="card-hover bg-[#1A3040] border border-[#E8900A]/20 rounded-lg p-5 hover:border-[#E8900A]/50">
                <p className="text-[#E8900A] text-xs font-bold tracking-widest mb-3">{show.date}</p>
                <h3 className="text-[#F5F0E8] font-bold text-lg leading-tight mb-1">{show.artist}</h3>
                <p className="text-[#F5F0E8]/50 text-sm mb-3">{show.genre}</p>
                <div className="flex items-center justify-between text-xs text-[#F5F0E8]/40">
                  <span>{show.time}</span>
                  <span className="bg-[#0D1B2A] px-2 py-0.5 rounded">{show.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="grid grid-cols-3 md:grid-cols-5 h-48 md:h-64 overflow-hidden">
        {["/images/venue-1.jpg","/images/harbor-1.jpg","/images/venue-3.jpg","/images/harbor-2.jpg","/images/venue-5.jpg"].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image src={src} alt="Har-Bar venue" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </section>

      {/* ACTIVITIES */}
      <section className="py-20 bg-[#F5F0E8] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">More Than a Bar</p>
            <h2 className="text-4xl font-black text-[#0D1B2A] tracking-wide mb-4">Something for Everyone</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Har-Bar is Crescent City&apos;s BrewCade — award-winning craft beer, live music,
              and a full entertainment venue all in one spot on the harbor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {activities.map((act) => (
              <div key={act.name} className="card-hover bg-white rounded-xl p-6 shadow-sm border border-[#E8DFD0] text-center">
                <div className="text-5xl mb-4">{act.icon}</div>
                <h3 className="text-[#0D1B2A] font-bold text-lg mb-2">{act.name}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/activities" className="inline-block px-8 py-3 bg-[#0D1B2A] hover:bg-[#1A4A5C] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors text-sm">
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* THE STAGES */}
      <section className="bg-[#1E3A2F] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Two Stages, One Bar</p>
              <h2 className="text-4xl font-black text-[#F5F0E8] mb-6 leading-tight">
                Indoor Stage &amp; the Harbor Stage
              </h2>
              <p className="text-[#F5F0E8]/70 text-lg leading-relaxed mb-6">
                Our covered indoor stage runs year-round. When the weather opens up, the
                outdoor Harbor Stage delivers unobstructed views of the Crescent City
                marina — no better seat in Del Norte County.
              </p>
              <p className="text-[#F5F0E8]/70 leading-relaxed mb-8">
                We book local talent first. If you play, record, or manage artists in
                the area — reach out. We want to put you on.
              </p>
              <Link
                href="/events"
                className="inline-block px-6 py-3 border-2 border-[#E8900A] hover:bg-[#E8900A] text-[#E8900A] hover:text-[#071219] font-bold rounded tracking-widest uppercase transition-all text-sm"
              >
                See the Schedule
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "2", label: "Stages" },
                { stat: "7", label: "Days a Week" },
                { stat: "Local", label: "First Booking" },
                { stat: "Harbor", label: "Views" },
              ].map((item) => (
                <div key={item.label} className="bg-[#0D1B2A]/60 rounded-xl p-6 text-center border border-[#E8900A]/20">
                  <div className="text-4xl font-black text-[#E8900A] mb-2">{item.stat}</div>
                  <div className="text-[#F5F0E8]/60 text-sm uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEER HIGHLIGHT */}
      <section className="py-20 px-4 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-3">
              {[
                { name: "Agate Ale", style: "Cream Ale", abv: "4.8%", note: "Best Seller — light & easy" },
                { name: "11 Bravo IPA", style: "American IPA", abv: "6.5%", note: "Brewed in honor of the US Army Infantry" },
                { name: "My Honey's Brown", style: "Brown Ale", abv: "5.7%", note: "Nutty caramel toffee notes" },
                { name: "Fog Bank", style: "Hazy IPA", abv: "5.9%", note: "Grapefruit, citrus, pineapple" },
              ].map((beer) => (
                <div key={beer.name} className="bg-white rounded-xl border border-[#E8DFD0] p-4 shadow-sm">
                  <p className="text-[#0D1B2A] font-bold text-sm mb-0.5">{beer.name}</p>
                  <p className="text-[#E8900A] text-xs font-medium mb-1">{beer.style} · {beer.abv}</p>
                  <p className="text-[#6B7280] text-xs leading-relaxed">{beer.note}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Hand-Crafted On-Site</p>
              <h2 className="text-4xl font-black text-[#0D1B2A] mb-6">Award-Winning Craft Beer</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4 text-lg">
                Brewed by Devin Beach right here in Crescent City. From the easy-drinking
                Agate Ale to the bold Belgian Tripel — there&apos;s a pour for every palate.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                Can&apos;t decide? Our award-winning house-brewed root beer is always on tap too.
              </p>
              <Link href="/menu" className="inline-block px-6 py-3 bg-[#0D1B2A] hover:bg-[#1A4A5C] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors text-sm">
                See Full Beer List
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="harbor-gradient py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-[#F5F0E8] mb-4">Come Down to the Harbor</h2>
          <p className="text-[#F5F0E8]/70 text-xl mb-4">201 Citizens Dock Rd · Crescent City, CA 95531</p>
          <p className="text-[#F5F0E8]/50 mb-10">Mon–Thu: 3pm–10pm &nbsp;·&nbsp; Fri–Sat: 12pm–12am &nbsp;·&nbsp; Sun: 12pm–10pm</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visit" className="px-8 py-4 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-bold rounded tracking-widest uppercase transition-colors">
              Hours &amp; Directions
            </Link>
            <Link href="/events" className="px-8 py-4 border-2 border-[#F5F0E8]/40 hover:border-[#E8900A] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors">
              Tonight&apos;s Events
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
