import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch("https://api.printful.com/shipping/rates", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json(
      { error: data.error?.reason ?? "Shipping unavailable" },
      { status: 400 }
    );
  }
  return NextResponse.json(data.result);
}
