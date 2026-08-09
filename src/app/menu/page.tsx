import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getMenu } from "@/lib/toast";
import type { BeerCategory, FoodCategory } from "@/lib/toast";
import MenuTabs from "@/components/MenuTabs";

export const metadata: Metadata = {
  title: "Craft Beer & Food Menu — Brewery in Crescent City",
  description:
    "80+ award-winning craft beers brewed on-site. Full pub food menu with pizza, subs, nachos, and more. Port O' Pints, Crescent City, CA — near Redwood National Park.",
};

const staticBeers: BeerCategory[] = [
  { category: "Cream Ales", items: [
    { name: "Agate Ale", abv: "4.8%", ibu: "32", desc: "Pale gold, light-bodied and easy drinking. Our best seller.", badge: "Best Seller" },
  ]},
  { category: "Lagers", items: [
    { name: "Amber Lager", abv: "5%", ibu: "42", desc: "Light-bodied amber lager. Slight malty flavor, low hop bitterness." },
    { name: "California Common", abv: "", ibu: "", desc: "Bright amber, moderately malty with moderate hop bitterness." },
  ]},
  { category: "IPAs & Pale Ales", items: [
    { name: "11 Bravo IPA", abv: "6.5%", ibu: "65", desc: "American IPA brewed with Bravo hops, in honor of the US Army Infantry. Balanced hops and malt.", badge: "Fan Favorite" },
    { name: "Slant Bridge IPA", abv: "5%", ibu: "42", desc: "Light golden American IPA with aromatic hop notes and a dry finish." },
    { name: "Fog Bank Hazy IPA", abv: "5.9%", ibu: "34", desc: "Grapefruit, citrus, and pineapple — served unfiltered." },
    { name: "El Juicy Pants NEIPA", abv: "", ibu: "", desc: "New England IPA. Hazy golden, citrusy hop aroma, passion fruit notes. Clean refreshing finish." },
    { name: "Warrior Pale Ale", abv: "", ibu: "", desc: "Single-hopped pale ale brewed in honor of the Del Norte Warriors." },
  ]},
  { category: "Brown Ales & Porters", items: [
    { name: "My Honey's Brown Ale", abv: "5.7%", ibu: "", desc: "Nutty caramel toffee and biscuity notes. Low bitterness, crisp finish." },
    { name: "English Brown Porter", abv: "6.0%", ibu: "12", desc: "Dark with ruby highlights. Chocolate and coffee notes without heavy roast." },
    { name: "Del Norter Porter", abv: "", ibu: "", desc: "A local classic." },
  ]},
  { category: "Stouts", items: [
    { name: "Irish Dry Stout", abv: "", ibu: "", desc: "Light-bodied, roasty. Typically served on nitrogen for a creamy, smooth finish." },
  ]},
  { category: "Belgian Styles", items: [
    { name: "Belgian Tripel", abv: "9.1%", ibu: "32", desc: "Bright gold, rich full head. Grainy sweet with light spicy and fruity character." },
    { name: "Belgian Dark Strong", abv: "9.4%", ibu: "32", desc: "Dark red, very complex. Mildly sweet start, warm full body, clean crisp finish." },
    { name: "Wit-Ness Perfection", abv: "", ibu: "", desc: "Belgian wheat beer. Crisp citrus and coriander with mild body." },
  ]},
  { category: "Red Ales", items: [
    { name: "3 Sisters Irish Red", abv: "6.3%", ibu: "42", desc: "Copper red, easy-drinking. Hints of fresh-cut grass and caramel, low hop presence." },
  ]},
  { category: "Seasonal & Specialty", items: [
    { name: "Cherry Chocolate Sour", abv: "", ibu: "", desc: "Experimental sour with dark cherry and chocolate." },
    { name: "Sneaker Wave", abv: "", ibu: "", desc: "Fruited wheat beer — Paddy Wheat Series." },
  ]},
  { category: "Non-Alcoholic", items: [
    { name: "House-Brewed Root Beer", abv: "0%", ibu: "", desc: "Award-winning. Made in-house. A Port O' Pints staple.", badge: "Award-Winning" },
  ]},
];

const staticFood: FoodCategory[] = [
  { category: "Starters", items: [
    { name: "Celtic Garlic Knots (8)", price: "$12", desc: "Fresh dough twisted into knots with garlic, parmesan, and parsley." },
    { name: "Hot Pretzel", price: "", desc: "Oven-baked, coated in garlic butter and sea salt. Served with stone ground mustard or house beer cheese." },
    { name: "Dino Nuggets (8)", price: "$8", desc: "" },
    { name: "Hot Dog", price: "$6", desc: "" },
    { name: "Irish Nachos", price: "$8 / $15", desc: "Half or full order." },
    { name: "Meatball Sliders (3)", price: "$13", desc: "" },
    { name: "Chips and Cheese", price: "$5", desc: "" },
  ]},
  { category: "Salads", items: [
    { name: "Pub Salad", price: "$13", desc: "" },
    { name: "Greek Salad", price: "$17", desc: "Spring mix, feta, kalamata olives, red onion, bell pepper, tomato, cucumber, Greek dressing." },
    { name: "Garden Salad", price: "", desc: "Spring mix, onion, tomato. Choice of dressing. Add meat or cheese +$2 each." },
    { name: "Simple Salad", price: "", desc: "Spring mix, onion, tomato, pepperoncini, olives. Choice of dressing." },
  ]},
  { category: "Pizza & Calzones", items: [
    { name: "Cheese Pizza", price: "$15", desc: "" },
    { name: "Margherita", price: "", desc: "" },
    { name: "Irish Pizza", price: "", desc: "Garlic butter base, spinach, mozzarella, onion, goat cheese, hot honey." },
    { name: "Meatball Stuffed Crust", price: "", desc: "" },
    { name: "Cheese Bread", price: "$11", desc: "" },
  ]},
  { category: "Subs & Sandwiches", items: [
    { name: "Meatball Sub", price: "$19.50", desc: "Meatballs, provolone, marinara on a toasted Italian roll." },
    { name: "Italian Sub", price: "$19.50", desc: "Prosciutto, mortadella, soppressata salami, provolone, lettuce, red onion, pepperoncini, house Italian dressing." },
    { name: "Chicken Sub", price: "$15.50", desc: "Deli-sliced roasted chicken on Italian roll. Customizable toppings." },
    { name: "Build Your Own Melt", price: "$8.50", desc: "Sourdough, Italian roll, or sliced rye." },
  ]},
];

const staticSauces = [
  "Marinara", "Beer Cheese", "Ranch", "Jalapeño Ranch",
  "Thousand Island", "BBQ", "Buffalo", "Stone Ground Mustard",
  "Sweet Heat Mustard", "Sweet Chili",
];

export default async function MenuPage() {
  const toastMenu = await getMenu();
  const beers = toastMenu?.beers?.length ? toastMenu.beers : staticBeers;
  const ciderWine = toastMenu?.ciderWine ?? [];
  const food = toastMenu?.food?.length ? toastMenu.food : staticFood;
  const sauces = toastMenu?.sauces?.length ? toastMenu.sauces : staticSauces;
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain relative min-h-[75vh] flex flex-col items-center px-4 py-12 bg-[#080d08] overflow-hidden">
        {process.env.NEXT_PUBLIC_ASSETS_URL && (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/beer/2-four-packs-of-canned-porto-pints-beer-1200w.webp`}
              alt=""
              fill
              className="object-cover object-center"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-[#080d08]/50" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080d08] to-transparent" />
          </>
        )}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-8xl font-black tracking-widest text-[#BFA060] leading-none mb-2 sm:mb-3" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
            BEER<span style={{ color: "#2d6b1f" }}> &amp; </span>FOOD
          </h1>
          <p className="text-white/90 text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.8)" }}>
            Crafted on-site by Devin Beach
          </p>
        </div>
        <div className="flex-1" />
      </section>

      <MenuTabs />

      {/* BEER */}
      <section id="beer" className="grain py-20 px-4 bg-[#0a100a] scroll-mt-28">
        <div className="max-w-4xl mx-auto">

          <div className="flex items-start justify-between gap-4 mb-12">
            <div>
              <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-1">Beer</h2>
              <p className="text-white/60 text-sm" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>Seasonal availability may vary</p>
            </div>
            <Image
              src="/images/award.png"
              alt="Award-winning"
              width={52}
              height={52}
              className="object-contain shrink-0 opacity-80"
            />
          </div>

          <div className="space-y-12">
            {beers.map((section) => (
              <div key={section.category}>
                <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-3 border-b border-[#BFA060]/15 pb-2">
                  {section.category}
                </p>
                <div className="divide-y divide-[#BFA060]/10">
                  {section.items.map((beer) => (
                    <div key={beer.name} className={`py-4 flex items-baseline justify-between gap-4 ${beer.outOfStock ? "opacity-50" : ""}`}>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <p className="text-[#DDD8CC] font-semibold">{beer.name}</p>
                          {beer.outOfStock && (
                            <span className="text-[#BFA060]/60 text-[10px] tracking-widest uppercase">Out of Stock</span>
                          )}
                          {"badge" in beer && beer.badge && !beer.outOfStock && (
                            <span className="text-[#BFA060] text-[10px] tracking-widest uppercase">{beer.badge}</span>
                          )}
                        </div>
                        {beer.desc && (
                          <p className="text-white/65 text-xs leading-relaxed mt-0.5" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>{beer.desc}</p>
                        )}
                      </div>
                      {(beer.abv || beer.ibu) && (
                        <p className="text-white/55 text-xs text-right shrink-0 whitespace-nowrap" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
                          {beer.abv && `${beer.abv}`}{beer.abv && beer.ibu && " · "}{beer.ibu && `IBU ${beer.ibu}`}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-xs mt-10 tracking-wide" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
            We reserve the right to alter the tap list at any time.
          </p>
        </div>
      </section>

      {/* CIDER & WINE */}
      {ciderWine.length > 0 && (
        <section id="cider-wine" className="grain py-20 px-4 bg-[#0a100a] scroll-mt-28">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-1">Cider &amp; Wine</h2>
            </div>
            <div className="space-y-12">
              {ciderWine.map((section) => (
                <div key={section.category}>
                  <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-3 border-b border-[#BFA060]/15 pb-2">
                    {section.category}
                  </p>
                  <div className="divide-y divide-[#BFA060]/10">
                    {section.items.map((item) => (
                      <div key={item.name} className="py-4 flex items-baseline justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-[#DDD8CC] font-semibold">{item.name}</p>
                          {item.desc && (
                            <p className="text-white/65 text-xs leading-relaxed mt-0.5" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>{item.desc}</p>
                          )}
                        </div>
                        {(item.abv || item.ibu) && (
                          <p className="text-white/55 text-xs text-right shrink-0 whitespace-nowrap" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
                            {item.abv}{item.abv && item.ibu && " · "}{item.ibu && `IBU ${item.ibu}`}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOD */}
      <section id="food" className="grain py-20 px-4 bg-[#0f170f] scroll-mt-28">
        <div className="max-w-4xl mx-auto">

          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-1">Food Menu</h2>
            <p className="text-white/60 text-sm" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>Pub kitchen · Add meat +$2 · Add cheese +$2</p>
          </div>

          <div className="space-y-12">
            {food.map((section) => (
              <div key={section.category}>
                <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-3 border-b border-[#BFA060]/15 pb-2">
                  {section.category}
                </p>
                <div className="divide-y divide-[#BFA060]/10">
                  {section.items.map((item) => (
                    <div key={item.name} className={`py-4 flex items-baseline justify-between gap-4 ${item.outOfStock ? "opacity-50" : ""}`}>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <p className="text-[#DDD8CC] font-semibold">{item.name}</p>
                          {item.outOfStock && (
                            <span className="text-[#BFA060]/60 text-[10px] tracking-widest uppercase">Out of Stock</span>
                          )}
                        </div>
                        {item.desc && (
                          <p className="text-white/65 text-xs leading-relaxed mt-0.5" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>{item.desc}</p>
                        )}
                      </div>
                      {item.price && (
                        <p className="text-white/55 text-xs text-right shrink-0" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>{item.price}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sauces */}
          <div className="mt-12">
            <p className="text-[#BFA060] text-xs tracking-[0.3em] uppercase mb-4 border-b border-[#BFA060]/15 pb-2">
              Dipping Sauces
            </p>
            <p className="text-white/60 text-sm leading-relaxed" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
              {sauces.join(" · ")}
            </p>
          </div>

          <p className="text-white/40 text-xs mt-10 tracking-wide" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
            Menu subject to change. Ask your server about daily specials.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#BFA060]/20 py-16 px-4 bg-[#080d08] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-white/55 text-xs tracking-widest uppercase mb-6" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
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
