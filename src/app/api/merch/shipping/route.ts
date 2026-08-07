import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const payload = {
    recipient: body.recipient,
    items: body.items,
    currency: "USD",
    locale: "en_US",
  };

  const res = await fetch("https://api.printful.com/shipping/rates", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    const message = data.error?.message ?? data.error?.reason ?? data.message ?? "Shipping unavailable";
    console.error("Printful shipping error:", JSON.stringify(data));
    return NextResponse.json({ error: message }, { status: 400 });
  }
  return NextResponse.json(data.result);
}
