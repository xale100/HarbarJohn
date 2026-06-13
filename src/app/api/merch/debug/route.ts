import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.PRINTFUL_API_KEY;

  if (!key) return NextResponse.json({ error: "PRINTFUL_API_KEY not set" });

  const res = await fetch("https://api.printful.com/store/products?limit=100", {
    headers: { Authorization: `Bearer ${key}` },
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json({ status: res.status, data });
}
