export async function GET() {
  const baseUrl = process.env.TOAST_API_URL;
  const apiKey = process.env.TOAST_API_KEY;
  const apiSecret = process.env.TOAST_API_SECRET;

  if (!baseUrl || !apiKey || !apiSecret) {
    return Response.json({ error: "Missing env vars", baseUrl: !!baseUrl, apiKey: !!apiKey, apiSecret: !!apiSecret });
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
    const restaurantGuid = authData.token?.restaurantGuid ?? authData.restaurantGuid ?? null;

    // Try to list restaurants to find the GUID
    const listRes = await fetch(`${baseUrl}/restaurants/v1/restaurants`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const listData = listRes.ok ? await listRes.json() : { status: listRes.status, body: await listRes.text() };

    return Response.json({
      success: true,
      restaurantGuidFromToken: restaurantGuid,
      restaurantsList: listData,
      authDataKeys: Object.keys(authData),
      tokenKeys: authData.token ? Object.keys(authData.token) : null,
    });
  } catch (e) {
    return Response.json({ error: String(e) });
  }
}
