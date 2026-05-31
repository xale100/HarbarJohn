import { authOk } from "@/lib/mugclub";
import pool from "@/lib/db";

export async function GET(request: Request) {
  if (!authOk(request))
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(request.url);
  const cardToken = url.searchParams.get("card_token");
  if (!cardToken)
    return Response.json({ error: "card_token required" }, { status: 400 });

  const res = await pool.query(
    "SELECT * FROM members WHERE card_token = $1",
    [cardToken.toUpperCase()]
  );
  if (res.rows.length === 0)
    return Response.json({ error: "Not found" }, { status: 404 });

  const member = res.rows[0];

  // Auto-expire if overdue
  const due = member.renewal_due_date ? new Date(member.renewal_due_date) : null;
  if (due && due < new Date() && member.status === "active") {
    await pool.query(
      "UPDATE members SET status = 'expired', updated_at = NOW() WHERE member_id = $1",
      [member.member_id]
    );
    member.status = "expired";
  }

  // Log the scan
  await pool.query(
    "INSERT INTO scans (member_id, card_token, terminal) VALUES ($1, $2, $3)",
    [
      member.member_id,
      cardToken.toUpperCase(),
      url.searchParams.get("terminal") || "tablet-1",
    ]
  );

  return Response.json(member);
}
