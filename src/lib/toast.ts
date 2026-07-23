export type BeerItem = {
  name: string;
  abv: string;
  ibu: string;
  desc: string;
  badge?: string;
};

export type BeerCategory = {
  category: string;
  items: BeerItem[];
};

export type FoodItem = {
  name: string;
  price: string;
  desc: string;
};

export type FoodCategory = {
  category: string;
  items: FoodItem[];
};

export type ToastMenu = {
  beers: BeerCategory[];
  food: FoodCategory[];
  sauces: string[];
};

async function fetchToastMenu(): Promise<ToastMenu | null> {
  const baseUrl = process.env.TOAST_API_URL;
  const restaurantGuid = process.env.TOAST_RESTAURANT_GUID;
  const apiKey = process.env.TOAST_API_KEY;
  const apiSecret = process.env.TOAST_API_SECRET;

  if (!baseUrl || !restaurantGuid || !apiKey || !apiSecret) return null;

  try {
    const tokenRes = await fetch(`${baseUrl}/authentication/v1/authentication/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: apiKey, clientSecret: apiSecret, userAccessType: "TOAST_MACHINE_CLIENT" }),
    });
    if (!tokenRes.ok) return null;
    const { token } = await tokenRes.json();

    const menuRes = await fetch(
      `${baseUrl}/menus/v2/menus?restaurantGuid=${restaurantGuid}`,
      {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          "Toast-Restaurant-External-ID": restaurantGuid,
        },
        next: { revalidate: 3600 },
      },
    );
    if (!menuRes.ok) return null;

    const menus = await menuRes.json();
    return transformToastData(menus);
  } catch {
    return null;
  }
}

function parseBeerDesc(raw: string): { desc: string; abv: string; ibu: string } {
  if (!raw) return { desc: "", abv: "", ibu: "" };
  const lines = raw.replace(/\r\n/g, "\n").split("\n").map((l) => l.trim()).filter(Boolean);
  const desc = lines[0] ?? "";
  const abv = lines.find((l) => /abv/i.test(l))?.match(/([\d.]+%)/)?.[1] ?? "";
  const ibu = lines.find((l) => /ibu/i.test(l))?.match(/(\d+)/)?.[1] ?? "";
  return { desc, abv, ibu };
}

function formatPrice(price: number | null | undefined): string {
  if (price == null) return "";
  return `$${price.toFixed(2).replace(/\.00$/, "")}`;
}

function transformToastData(rawMenus: any): ToastMenu {
  const beers: BeerCategory[] = [];
  const food: FoodCategory[] = [];
  const sauces: string[] = [];

  try {
    const menus = Array.isArray(rawMenus) ? rawMenus : [rawMenus];

    const beerMenu = menus.find((m: any) => m.name === "Beer Menu");
    const foodMenu = menus.find((m: any) => m.name === "Food Menu");

    if (beerMenu) {
      for (const group of beerMenu.menuGroups ?? []) {
        const items: BeerItem[] = (group.menuItems ?? [])
          .map((item: any) => {
            const { desc, abv, ibu } = parseBeerDesc(item.description ?? "");
            return { name: item.posName || item.name, abv, ibu, desc };
          })
          .filter((item: BeerItem) => item.name);
        if (items.length > 0) beers.push({ category: group.name || "Beers", items });
      }
    }

    if (foodMenu) {
      for (const group of foodMenu.menuGroups ?? []) {
        if (/sauce/i.test(group.name ?? "")) {
          for (const item of group.menuItems ?? []) {
            if (item.name) sauces.push(item.name);
          }
          continue;
        }
        const items: FoodItem[] = (group.menuItems ?? [])
          .filter((item: any) => item.name && item.description)
          .map((item: any) => ({
            name: item.name,
            price: formatPrice(item.price),
            desc: item.description,
          }));
        if (items.length > 0) food.push({ category: group.name || "Food", items });
      }
    }
  } catch {
    // Fall through — caller uses static fallback
  }

  return { beers, food, sauces };
}

export async function getMenu(): Promise<ToastMenu | null> {
  return fetchToastMenu();
}
