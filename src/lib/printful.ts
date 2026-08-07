export type SyncVariant = {
  id: number;
  variant_id: number;
  name: string;
  retail_price: string;
  is_enabled: boolean;
  product: { image: string };
};

export type Product = {
  sync_product: { id: number; name: string; thumbnail_url: string };
  sync_variants: SyncVariant[];
};

export async function getProducts(revalidate = 300): Promise<Product[]> {
  const key = process.env.PRINTFUL_API_KEY;
  if (!key) return [];
  try {
    const listRes = await fetch("https://api.printful.com/store/products?limit=100", {
      headers: { Authorization: `Bearer ${key}` },
      next: { revalidate },
    });
    if (!listRes.ok) return [];
    const list = await listRes.json();
    const detailed = await Promise.all(
      (list.result ?? []).map(async (p: { id: number }) => {
        const r = await fetch(`https://api.printful.com/store/products/${p.id}`, {
          headers: { Authorization: `Bearer ${key}` },
          next: { revalidate },
        });
        const d = await r.json();
        return d.result ?? null;
      })
    );
    return detailed.filter(Boolean);
  } catch {
    return [];
  }
}
