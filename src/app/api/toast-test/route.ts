export async function GET() {
  const baseUrl = process.env.TOAST_API_URL;
  const restaurantGuid = process.env.TOAST_RESTAURANT_GUID;
  const apiKey = process.env.TOAST_API_KEY;
  const apiSecret = process.env.TOAST_API_SECRET;

  try {
    const tokenRes = await fetch(`${baseUrl}/authentication/v1/authentication/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: apiKey, clientSecret: apiSecret, userAccessType: "TOAST_MACHINE_CLIENT" }),
    });
    const authData = await tokenRes.json();
    const token = authData.token?.accessToken;

    const menuRes = await fetch(`${baseUrl}/menus/v2/menus?restaurantGuid=${restaurantGuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Toast-Restaurant-External-ID": restaurantGuid!,
      },
    });
    const rawMenus = await menuRes.json();

    const topLevel = Array.isArray(rawMenus) ? rawMenus[0] : rawMenus;
    const topLevelKeys = Object.keys(topLevel ?? {});
    const nestedMenusKey = topLevelKeys.find(k => Array.isArray(topLevel[k]) && topLevel[k][0]?.name);
    const actualMenus = nestedMenusKey ? topLevel[nestedMenusKey] : null;

    return Response.json({
      isArray: Array.isArray(rawMenus),
      topLevelKeys,
      nestedMenusKey,
      actualMenuNames: actualMenus?.map((m: any) => m.name) ?? null,
      rawSample: JSON.stringify(rawMenus).slice(0, 500),
    });
  } catch (e) {
    return Response.json({ error: String(e) });
  }
}
