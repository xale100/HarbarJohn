import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Craft Beer & Food Menu — Brewery in Crescent City",
  description:
    "80+ award-winning craft beers brewed on-site. Full pub food menu with pizza, subs, nachos, and more. Port O' Pints, Crescent City, CA — near Redwood National Park.",
};

const beers = [
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

const food = [
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

const sauces = [
  "Marinara", "Beer Cheese", "Ranch", "Jalapeño Ranch",
  "Thousand Island", "BBQ", "Buffalo", "Stone Ground Mustard",
  "Sweet Heat Mustard", "Sweet Chili",
];

export default function MenuPage() {
  return (
    <div className="bg-[#080d08] text-[#DDD8CC]">

      {/* HERO */}
      <section className="grain py-24 px-4 bg-[#080d08]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-black text-[#DDD8CC] mb-4 tracking-wide uppercase">
            Beer &amp; Food
          </h1>
          <p className="text-[#DDD8CC]/40 text-sm tracking-widest uppercase">
            Hand-crafted in Crescent City &nbsp;·&nbsp; Brewed on-site by Devin Beach
          </p>
        </div>
      </section>

      {/* ON TAP */}
      <section className="grain py-20 px-4 bg-[#0a100a]">
        <div className="max-w-4xl mx-auto">

          <div className="flex items-start justify-between gap-4 mb-12">
            <div>
              <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-1">On Tap</h2>
              <p className="text-[#DDD8CC]/40 text-sm">Seasonal availability may vary</p>
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
                    <div key={beer.name} className="py-4 flex items-baseline justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <p className="text-[#DDD8CC] font-semibold">{beer.name}</p>
                          {"badge" in beer && beer.badge && (
                            <span className="text-[#BFA060] text-[10px] tracking-widest uppercase">{beer.badge}</span>
                          )}
                        </div>
                        {beer.desc && (
                          <p className="text-[#DDD8CC]/35 text-xs leading-relaxed mt-0.5">{beer.desc}</p>
                        )}
                      </div>
                      {(beer.abv || beer.ibu) && (
                        <p className="text-[#DDD8CC]/40 text-xs text-right shrink-0 whitespace-nowrap">
                          {beer.abv && `${beer.abv}`}{beer.abv && beer.ibu && " · "}{beer.ibu && `IBU ${beer.ibu}`}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#DDD8CC]/20 text-xs mt-10 tracking-wide">
            We reserve the right to alter the tap list at any time. Wine and hard seltzer also available.
          </p>
        </div>
      </section>

      {/* FOOD MENU */}
      <section className="grain py-20 px-4 bg-[#0f170f]">
        <div className="max-w-4xl mx-auto">

          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-1">Food Menu</h2>
            <p className="text-[#DDD8CC]/40 text-sm">Pub kitchen · Add meat +$2 · Add cheese +$2</p>
          </div>

          <div className="space-y-12">
            {food.map((section) => (
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
                          <p className="text-[#DDD8CC]/35 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                        )}
                      </div>
                      {item.price && (
                        <p className="text-[#DDD8CC]/40 text-xs text-right shrink-0">{item.price}</p>
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
            <p className="text-[#DDD8CC]/40 text-sm leading-relaxed">
              {sauces.join(" · ")}
            </p>
          </div>

          <p className="text-[#DDD8CC]/20 text-xs mt-10 tracking-wide">
            Menu subject to change. Ask your server about daily specials.
          </p>
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
