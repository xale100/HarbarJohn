import { authOk, generateCardToken } from "@/lib/mugclub";
import pool from "@/lib/db";

export async function POST(request: Request) {
  if (!authOk(request))
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { member_id, notes } = await request.json();
  if (!member_id)
    return Response.json({ error: "member_id required" }, { status: 400 });

  const memberRes = await pool.query(
    "SELECT card_token FROM members WHERE member_id = $1",
    [member_id]
  );
  if (memberRes.rows.length === 0)
    return Response.json({ error: "Not found" }, { status: 404 });

  const oldToken = memberRes.rows[0].card_token;
  const newToken = generateCardToken();

  await pool.query(
    "UPDATE members SET card_token = $1, updated_at = NOW() WHERE member_id = $2",
    [newToken, member_id]
  );

  await pool.query(
    `INSERT INTO card_events (member_id, event, old_token, new_token, notes)
     VALUES ($1, 'replaced', $2, $3, $4)`,
    [member_id, oldToken, newToken, notes || "Card replaced"]
  );

  return Response.json({ member_id, card_token: newToken });
}
