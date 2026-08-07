import type { Metadata } from "next";
import MerchStore from "@/components/MerchStore";
import { getProducts } from "@/lib/printful";

const isSandbox = process.env.SQUARE_ENVIRONMENT === "sandbox";

export default async function MerchPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const [products, params] = await Promise.all([getProducts(), searchParams]);
  const initialProductId = params.product ? parseInt(params.product) : null;

  return (
    <MerchStore
      products={products}
      initialProductId={initialProductId}
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
