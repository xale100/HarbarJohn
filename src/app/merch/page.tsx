import type { Metadata } from "next";
import MerchStore from "@/components/MerchStore";

export const metadata: Metadata = {
  title: "Merch",
  description: "Port O' Pints merchandise — tees, growlers, and more.",
};

async function getProducts() {
  try {
    const listRes = await fetch("https://api.printful.com/store/products?limit=100", {
      headers: { Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}` },
      next: { revalidate: 300 },
    });
    if (!listRes.ok) return [];
    const list = await listRes.json();

    const detailed = await Promise.all(
      (list.result ?? []).map(async (p: { id: number }) => {
        const r = await fetch(`https://api.printful.com/store/products/${p.id}`, {
          headers: { Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}` },
          next: { revalidate: 300 },
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

const isSandbox = process.env.SQUARE_ENVIRONMENT === "sandbox";

export default async function MerchPage() {
  const products = await getProducts();

  return (
    <MerchStore
      products={products}
      squareAppId={process.env.SQUARE_APPLICATION_ID ?? ""}
      squareLocationId={process.env.SQUARE_LOCATION_ID ?? ""}
      squareScriptSrc={
        isSandbox
          ? "https://sandbox.web.squarecdn.com/v1/square.js"
          : "https://web.squarecdn.com/v1/square.js"
      }
    />
  );
}
