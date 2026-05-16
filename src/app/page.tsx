import Link from "next/link";

const upcomingShows = [
  { date: "FRI MAY 23", artist: "The Coastal Drifters", genre: "Blues / Rock", time: "8pm", stage: "Indoor Stage" },
  { date: "SAT MAY 24", artist: "Marina Sound Collective", genre: "Indie / Folk", time: "7pm", stage: "Harbor Stage" },
  { date: "FRI MAY 30", artist: "Low Tide Revival", genre: "Americana", time: "9pm", stage: "Indoor Stage" },
  { date: "SAT MAY 31", artist: "Del Norte All-Stars", genre: "Classic Rock", time: "8pm", stage: "Harbor Stage" },
];

const activities = [
  { icon: "🪓", name: "Ax Throwing", desc: "Lanes available walk-in or reserved. Perfect for groups." },
  { icon: "🎯", name: "Darts", desc: "Electronic and steel tip boards. Weekly league nights." },
  { icon: "🎮", name: "Arcade", desc: "Classic and modern machines. All-ages welcome before 9pm." },
  { icon: "🎱", name: "Pool", desc: "Full-size tables. Tournament nights every Thursday." },
];

const locals = [
  "Crescent City Brewing Co.",
  "Harbor Bait & Tackle",
  "North Coast Roasters",
  "Del Norte Arts Center",
  "Lighthouse Provisions",
];

export default function Home() {
  return (
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 sunset-gradient" />

        {/* Subtle harbor silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#071219] to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-1 h-32 bg-[#E8900A]/20 rounded-full" />
        <div className="absolute top-32 right-16 w-1 h-24 bg-[#E8900A]/15 rounded-full" />
        <div className="absolute top-12 right-32 w-0.5 h-16 bg-[#E8900A]/10 rounded-full" />

        {/* Stars scattered */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#F5F0E8]/30"
            style={{
              top: `${10 + (i * 7) % 50}%`,
              left: `${5 + (i * 13) % 90}%`,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-6">
            Crescent City, CA · Harbor District
          </p>

          {/* Logo / Wordmark */}
          <h1 className="text-7xl sm:text-9xl font-black tracking-widest text-[#E8900A] mb-2 text-amber-glow">
            HAR<span className="text-[#F5F0E8]/90">·</span>BAR
          </h1>

          <p className="text-[#F5F0E8]/70 text-sm tracking-[0.3em] uppercase mb-8">
            Where the Harbor Meets the Stage
          </p>

          {/* Tagline */}
          <p className="text-[#F5F0E8] text-xl sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Live music under the stars, harbor views, and more ways to have fun
            than any other spot in the county.
          </p>

          {/* CTAs */}
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

          {/* Scroll hint */}
          <div className="mt-16 animate-bounce">
            <div className="w-0.5 h-8 bg-[#E8900A]/40 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* UPCOMING SHOWS STRIP */}
      <section className="bg-[#0D1B2A] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-1">
                On the Stages
              </p>
              <h2 className="text-3xl font-black text-[#F5F0E8] tracking-wide">
                Upcoming Shows
              </h2>
            </div>
            <Link
              href="/events"
              className="text-[#E8900A] hover:text-[#F5A623] text-sm font-bold tracking-widest uppercase transition-colors"
            >
              Full Schedule →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingShows.map((show, i) => (
              <div
                key={i}
                className="card-hover bg-[#1A3040] border border-[#E8900A]/20 rounded-lg p-5 hover:border-[#E8900A]/50"
              >
                <p className="text-[#E8900A] text-xs font-bold tracking-widest mb-3">
                  {show.date}
                </p>
                <h3 className="text-[#F5F0E8] font-bold text-lg leading-tight mb-1">
                  {show.artist}
                </h3>
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

      {/* ACTIVITIES */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">
              More Than Just a Bar
            </p>
            <h2 className="text-4xl font-black text-[#0D1B2A] tracking-wide mb-4">
              Something for Everyone
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              We built Har-Bar to be Crescent City&apos;s living room. Music, games,
              food, drinks — whatever your night calls for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {activities.map((act) => (
              <div
                key={act.name}
                className="card-hover bg-white rounded-xl p-6 shadow-sm border border-[#E8DFD0] text-center"
              >
                <div className="text-5xl mb-4">{act.icon}</div>
                <h3 className="text-[#0D1B2A] font-bold text-lg mb-2">{act.name}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/activities"
              className="inline-block px-8 py-3 bg-[#0D1B2A] hover:bg-[#1A4A5C] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors text-sm"
            >
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* THE STAGES */}
      <section className="bg-[#1E3A2F] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Two Stages, One Bar
              </p>
              <h2 className="text-4xl font-black text-[#F5F0E8] mb-6 leading-tight">
                Indoor Stage &amp; the Harbor Stage
              </h2>
              <p className="text-[#F5F0E8]/70 text-lg leading-relaxed mb-6">
                Our covered indoor stage keeps the music going rain or shine. When the weather
                cooperates, our outdoor Harbor Stage opens up with unobstructed views of
                the marina — there&apos;s no better seat in Crescent City.
              </p>
              <p className="text-[#F5F0E8]/70 leading-relaxed mb-8">
                We book local talent first. If you play, record, or manage artists in
                Del Norte County — reach out. We want to put you on.
              </p>
              <Link
                href="/events"
                className="inline-block px-6 py-3 border-2 border-[#E8900A] hover:bg-[#E8900A] text-[#E8900A] hover:text-[#071219] font-bold rounded tracking-widest uppercase transition-all text-sm"
              >
                See the Schedule
              </Link>
            </div>

            {/* Stage stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "2", label: "Stages" },
                { stat: "7", label: "Nights a Week" },
                { stat: "200+", label: "Shows Per Year" },
                { stat: "Local First", label: "Booking Policy" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#0D1B2A]/60 rounded-xl p-6 text-center border border-[#E8900A]/20"
                >
                  <div className="text-4xl font-black text-[#E8900A] mb-2">{item.stat}</div>
                  <div className="text-[#F5F0E8]/60 text-sm uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL LOVE */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            Community First
          </p>
          <h2 className="text-4xl font-black text-[#0D1B2A] mb-4">
            We&apos;re All In On Crescent City
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto mb-12 text-lg">
            Har-Bar was built to be a hub, not just a bar. We partner with and
            promote local businesses because a stronger community means a better
            night out for everyone.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {locals.map((biz) => (
              <span
                key={biz}
                className="px-4 py-2 bg-white border border-[#E8DFD0] rounded-full text-[#0D1B2A] text-sm font-medium shadow-sm"
              >
                {biz}
              </span>
            ))}
            <span className="px-4 py-2 bg-white border border-[#E8DFD0] rounded-full text-[#6B7280] text-sm font-medium shadow-sm">
              + more local partners
            </span>
          </div>

          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-[#0D1B2A] hover:bg-[#1A4A5C] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors text-sm"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="harbor-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-[#F5F0E8] mb-4">
            Come Down to the Harbor
          </h2>
          <p className="text-[#F5F0E8]/70 text-xl mb-10">
            Crescent City&apos;s most fun happens right here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="px-8 py-4 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-bold rounded tracking-widest uppercase transition-colors"
            >
              Hours &amp; Directions
            </Link>
            <Link
              href="/events"
              className="px-8 py-4 border-2 border-[#F5F0E8]/40 hover:border-[#E8900A] text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors"
            >
              Tonight&apos;s Events
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
