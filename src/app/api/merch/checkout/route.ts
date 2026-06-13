import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

const squareBase =
  process.env.SQUARE_ENVIRONMENT === "sandbox"
    ? "https://connect.squareupsandbox.com"
    : "https://connect.squareup.com";

export async function POST(req: NextRequest) {
  const { sourceId, amountCents, items, recipient, shippingId } = await req.json();

  // 1. Charge Square
  const payRes = await fetch(`${squareBase}/v2/payments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      "Square-Version": "2024-01-18",
    },
    body: JSON.stringify({
      source_id: sourceId,
      idempotency_key: randomUUID(),
      amount_money: { amount: amountCents, currency: "USD" },
      location_id: process.env.SQUARE_LOCATION_ID,
    }),
  });

  const payData = await payRes.json();
  if (!payRes.ok || payData.payment?.status !== "COMPLETED") {
    const msg = payData.errors?.[0]?.detail ?? "Payment declined";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  // 2. Create Printful order
  const orderRes = await fetch("https://api.printful.com/orders", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ recipient, items, shipping: shippingId }),
  });

  const orderData = await orderRes.json();
  if (!orderRes.ok) {
    console.error("Printful order failed after Square charge", payData.payment.id, orderData);
    return NextResponse.json(
      { error: "Order failed after payment. Call us at 707-460-1154." },
      { status: 500 }
    );
  }

  // 3. Confirm for fulfillment
  await fetch(`https://api.printful.com/orders/${orderData.result.id}/confirm`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}` },
  });

  return NextResponse.json({ orderId: orderData.result.id });
}
