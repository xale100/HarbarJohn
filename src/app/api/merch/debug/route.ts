import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.PRINTFUL_API_KEY;
  if (!key) return NextResponse.json({ error: "PRINTFUL_API_KEY not set" });

  const listRes = await fetch("https://api.printful.com/store/products?limit=100", {
    headers: { Authorization: `Bearer ${key}` },
    cache: "no-store",
  });
  const list = await listRes.json();
  const products = list.result ?? [];

  const detailed = await Promise.all(
    products.map(async (p: { id: number; name: string }) => {
      const r = await fetch(`https://api.printful.com/store/products/${p.id}`, {
        headers: { Authorization: `Bearer ${key}` },
        cache: "no-store",
      });
      const d = await r.json();
      const result = d.result;
      return {
        id: result?.sync_product?.id,
        name: result?.sync_product?.name,
        thumbnail_url: result?.sync_product?.thumbnail_url,
        variants: (result?.sync_variants ?? []).map((v: any) => ({
          id: v.id,
          name: v.name,
          retail_price: v.retail_price,
          is_enabled: v.is_enabled,
          variant_id: v.variant_id,
        })),
      };
    })
  );

  // Also test a shipping request with the first enabled variant we find
  let shippingTest: any = null;
  const firstVariant = detailed.flatMap(p => p.variants).find(v => v.is_enabled && v.id);
  if (firstVariant) {
    const shipRes = await fetch("https://api.printful.com/shipping/rates", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        recipient: { address1: "1 Test St", city: "Los Angeles", state_code: "CA", zip: "90001", country_code: "US" },
        items: [{ sync_variant_id: firstVariant.id, quantity: 1 }],
        currency: "USD",
        locale: "en_US",
      }),
    });
    const shipData = await shipRes.json();
    shippingTest = { variant_used: firstVariant, status: shipRes.status, response: shipData };
  }

  return NextResponse.json({ products: detailed, shippingTest });
}
