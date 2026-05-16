import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer & Food Menu",
  description:
    "Award-winning craft beer brewed on-site and a full pub food menu at Har-Bar in Crescent City, CA.",
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
    { name: "House-Brewed Root Beer", abv: "0%", ibu: "", desc: "Award-winning. Made in-house. A Har-Bar staple.", badge: "Award-Winning" },
  ]},
];

const food = [
  { category: "Starters", items: [
    { name: "Celtic Garlic Knots (8)", price: "$12", desc: "Fresh dough twisted into knots with garlic, parmesan, and parsley." },
    { name: "Hot Pretzel", price: "–", desc: "Oven-baked, coated in garlic butter and sea salt. Served with stone ground mustard or house beer cheese." },
    { name: "Dino Nuggets (8)", price: "$8", desc: "A classic." },
    { name: "Hot Dog", price: "$6", desc: "" },
    { name: "Irish Nachos", price: "$8 / $15", desc: "Half or full order." },
    { name: "Meatball Sliders (3)", price: "$13", desc: "" },
    { name: "Chips and Cheese", price: "$5", desc: "" },
  ]},
  { category: "Salads", items: [
    { name: "Pub Salad", price: "$13", desc: "" },
    { name: "Greek Salad", price: "$17", desc: "Spring mix, feta, kalamata olives, red onion, bell pepper, tomato, cucumber, Greek dressing." },
    { name: "Garden Salad", price: "–", desc: "Spring mix, onion, tomato. Choice of dressing. Add meat or cheese +$2 each." },
    { name: "Simple Salad", price: "–", desc: "Spring mix, onion, tomato, pepperoncini, olives. Choice of dressing." },
  ]},
  { category: "Pizza & Calzones", items: [
    { name: "Cheese Pizza", price: "$15", desc: "" },
    { name: "Margherita", price: "–", desc: "" },
    { name: "Irish Pizza", price: "–", desc: "Garlic butter base, spinach, mozzarella, onion, goat cheese, hot honey." },
    { name: "Meatball Stuffed Crust", price: "–", desc: "" },
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
    <div className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-bold tracking-[0.4em] uppercase mb-4">Brewed On-Site</p>
          <h1 className="text-5xl sm:text-7xl font-black text-[#F5F0E8] mb-6 tracking-wide">Beer &amp; Food</h1>
          <p className="text-[#F5F0E8]/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Award-winning craft beer brewed in Crescent City by Devin Beach.
            Full pub food menu. Something for every palate.
          </p>
        </div>
      </section>

      {/* BEER MENU */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-1">Handcrafted</p>
              <h2 className="text-3xl font-black text-[#0D1B2A]">On Tap</h2>
            </div>
            <div className="flex-1 h-px bg-[#E8DFD0]" />
            <p className="text-[#6B7280] text-sm">Seasonal availability may vary</p>
          </div>

          <div className="space-y-10">
            {beers.map((section) => (
              <div key={section.category}>
                <h3 className="text-[#0D1B2A] font-black text-lg uppercase tracking-widest border-b border-[#E8DFD0] pb-2 mb-4">
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((beer) => (
                    <div key={beer.name} className="bg-white rounded-xl border border-[#E8DFD0] p-5 shadow-sm flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="text-[#0D1B2A] font-bold text-base">{beer.name}</p>
                          {"badge" in beer && beer.badge && (
                            <span className="shrink-0 text-xs bg-[#E8900A]/15 text-[#C2651A] px-2 py-0.5 rounded-full font-bold">
                              {beer.badge}
                            </span>
                          )}
                        </div>
                        {(beer.abv || beer.ibu) && (
                          <p className="text-[#E8900A] text-xs font-medium mb-2">
                            {beer.abv && `ABV ${beer.abv}`}{beer.abv && beer.ibu && " · "}{beer.ibu && `IBU ${beer.ibu}`}
                          </p>
                        )}
                        <p className="text-[#6B7280] text-sm leading-relaxed">{beer.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#6B7280] text-xs mt-8">
            We reserve the right to alter the tap list at any time. Wine and hard seltzer also available.
          </p>
        </div>
      </section>

      {/* FOOD MENU */}
      <section className="bg-[#0D1B2A] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-[#E8900A] text-xs font-bold tracking-[0.3em] uppercase mb-1">Pub Kitchen</p>
              <h2 className="text-3xl font-black text-[#F5F0E8]">Food Menu</h2>
            </div>
            <div className="flex-1 h-px bg-[#F5F0E8]/10" />
          </div>

          <div className="space-y-10">
            {food.map((section) => (
              <div key={section.category}>
                <h3 className="text-[#E8900A] font-black text-base uppercase tracking-widest border-b border-[#F5F0E8]/10 pb-2 mb-4">
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="bg-[#1A3040] rounded-lg border border-[#F5F0E8]/10 p-4">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <p className="text-[#F5F0E8] font-bold text-sm">{item.name}</p>
                        {item.price && item.price !== "–" && (
                          <span className="text-[#E8900A] font-bold text-sm shrink-0">{item.price}</span>
                        )}
                      </div>
                      {item.desc && <p className="text-[#F5F0E8]/50 text-xs leading-relaxed">{item.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sauces */}
          <div className="mt-10">
            <h3 className="text-[#E8900A] font-black text-base uppercase tracking-widest border-b border-[#F5F0E8]/10 pb-2 mb-4">
              Dipping Sauces
            </h3>
            <div className="flex flex-wrap gap-2">
              {sauces.map((s) => (
                <span key={s} className="px-3 py-1 bg-[#1A3040] border border-[#F5F0E8]/10 rounded-full text-[#F5F0E8]/60 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[#F5F0E8]/30 text-xs mt-8 text-center">
            Menu subject to change. Add meat +$2 · Add cheese +$2.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#F5F0E8] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-[#0D1B2A] mb-4">Come Hungry</h2>
          <p className="text-[#6B7280] mb-8">
            201 Citizens Dock Road · Crescent City, CA 95531
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="px-8 py-3 bg-[#E8900A] hover:bg-[#F5A623] text-[#071219] font-bold rounded tracking-widest uppercase transition-colors text-sm"
            >
              Hours &amp; Directions
            </Link>
            <Link
              href="/events"
              className="px-8 py-3 border-2 border-[#0D1B2A] hover:bg-[#0D1B2A] text-[#0D1B2A] hover:text-[#F5F0E8] font-bold rounded tracking-widest uppercase transition-colors text-sm"
            >
              See Tonight&apos;s Events
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
