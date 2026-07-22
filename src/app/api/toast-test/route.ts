export async function GET() {
  const baseUrl = process.env.TOAST_API_URL;
  const restaurantGuid = process.env.TOAST_RESTAURANT_GUID;
  const apiKey = process.env.TOAST_API_KEY;
  const apiSecret = process.env.TOAST_API_SECRET;

  if (!baseUrl || !restaurantGuid || !apiKey || !apiSecret) {
    return Response.json({ error: "Missing env vars", baseUrl: !!baseUrl, restaurantGuid: !!restaurantGuid, apiKey: !!apiKey, apiSecret: !!apiSecret });
  }

  try {
    const tokenRes = await fetch(`${baseUrl}/authentication/v1/authentication/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: apiKey, clientSecret: apiSecret, userAccessType: "TOAST_MACHINE_CLIENT" }),
    });
    if (!tokenRes.ok) {
      const err = await tokenRes.text();
      return Response.json({ error: "Auth failed", status: tokenRes.status, body: err });
    }
    const authData = await tokenRes.json();
    const token = authData.token?.accessToken;

    const menuRes = await fetch(`${baseUrl}/menus/v2/menus?restaurantGuid=${restaurantGuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Toast-Restaurant-External-ID": restaurantGuid,
      },
    });
    if (!menuRes.ok) {
      const err = await menuRes.text();
      return Response.json({ error: "Menu fetch failed", status: menuRes.status, body: err });
    }

    const menus = await menuRes.json();
    return Response.json({ success: true, menus });
  } catch (e) {
    return Response.json({ error: String(e) });
  }
}
