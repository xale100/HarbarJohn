import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.PRINTFUL_API_KEY;
  if (!key) return NextResponse.json({ error: "PRINTFUL_API_KEY not set" });

  // List all stores on this account
  const storesRes = await fetch("https://api.printful.com/stores", {
    headers: { Authorization: `Bearer ${key}` },
    cache: "no-store",
  });
  const stores = await storesRes.json();

  return NextResponse.json({ storesStatus: storesRes.status, stores });
}
