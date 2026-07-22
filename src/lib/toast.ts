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

function transformToastData(rawMenus: any): ToastMenu {
  // TODO: Map Toast menu groups/items to our BeerCategory[] and FoodCategory[] shape.
  // Toast returns menus → groups → items. Each item has name, price, description.
  // Beer items need ABV/IBU parsed from description or custom fields.
  // This stub returns empty arrays — fill in once we have API access and can inspect the response shape.
  const beers: BeerCategory[] = [];
  const food: FoodCategory[] = [];
  const sauces: string[] = [];

  try {
    for (const menu of Array.isArray(rawMenus) ? rawMenus : [rawMenus]) {
      for (const group of menu.groups || []) {
        const items = (group.items || []).map((item: any) => ({
          name: item.name || "",
          price: item.price ? `$${(item.price / 100).toFixed(2).replace(/\.00$/, "")}` : "",
          desc: item.description || "",
        }));

        food.push({ category: group.name || "Other", items });
      }
    }
  } catch {
    // Fall through — return empty, caller uses static fallback
  }

  return { beers, food, sauces };
}

export async function getMenu(): Promise<ToastMenu | null> {
  return fetchToastMenu();
}
