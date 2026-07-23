import { getMenu } from "@/lib/toast";

export async function GET() {
  const baseUrl = process.env.TOAST_API_URL;
  const restaurantGuid = process.env.TOAST_RESTAURANT_GUID;
  const apiKey = process.env.TOAST_API_KEY;
  const apiSecret = process.env.TOAST_API_SECRET;

  const envCheck = { baseUrl: !!baseUrl, restaurantGuid: !!restaurantGuid, apiKey: !!apiKey, apiSecret: !!apiSecret };

  try {
    // Authenticate and get raw menus to inspect structure
    const tokenRes = await fetch(`${baseUrl}/authentication/v1/authentication/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: apiKey, clientSecret: apiSecret, userAccessType: "TOAST_MACHINE_CLIENT" }),
    });
    if (!tokenRes.ok) {
      return Response.json({ error: "Auth failed", status: tokenRes.status, envCheck });
    }
    const authData = await tokenRes.json();
    const token = authData.token?.accessToken;

    const menuRes = await fetch(`${baseUrl}/menus/v2/menus?restaurantGuid=${restaurantGuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Toast-Restaurant-External-ID": restaurantGuid!,
      },
    });
    if (!menuRes.ok) {
      return Response.json({ error: "Menu fetch failed", status: menuRes.status, envCheck });
    }

    const rawMenus = await menuRes.json();
    const menuNames = (Array.isArray(rawMenus) ? rawMenus : [rawMenus]).map((m: any) => m.name);

    // Also run through getMenu() to see the transformed result
    const transformed = await getMenu();

    return Response.json({
      envCheck,
      menuNames,
      rawMenuCount: Array.isArray(rawMenus) ? rawMenus.length : 1,
      transformed: {
        beerCategories: transformed?.beers?.length ?? 0,
        beerItems: transformed?.beers?.flatMap((c) => c.items).length ?? 0,
        foodCategories: transformed?.food?.length ?? 0,
        foodItems: transformed?.food?.flatMap((c) => c.items).length ?? 0,
        sauces: transformed?.sauces?.length ?? 0,
        firstBeerCategory: transformed?.beers?.[0] ?? null,
        firstFoodCategory: transformed?.food?.[0] ?? null,
      },
    });
  } catch (e) {
    return Response.json({ error: String(e), envCheck });
  }
}
