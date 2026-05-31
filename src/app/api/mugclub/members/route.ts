import { authOk, generateCardToken, generateMemberId } from "@/lib/mugclub";
import pool from "@/lib/db";

export async function GET(request: Request) {
  if (!authOk(request))
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const search = url.searchParams.get("search");

  const params: string[] = [];
  const conditions: string[] = [];

  if (status) {
    params.push(status);
    conditions.push(`status = $${params.length}`);
  }

  if (search) {
    params.push(`%${search.toLowerCase()}%`);
    const i = params.length;
    conditions.push(
      `(LOWER(first_name || ' ' || last_name) LIKE $${i} OR LOWER(last_name || ' ' || first_name) LIKE $${i})`
    );
  }

  const where = conditions.length ? " WHERE " + conditions.join(" AND ") : "";
  const res = await pool.query(
    `SELECT * FROM members${where} ORDER BY last_name, first_name`,
    params
  );
  return Response.json(res.rows);
}

export async function POST(request: Request) {
  if (!authOk(request))
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const memberId = await generateMemberId();
  const cardToken = generateCardToken();

  const paidDate = body.last_paid_date || null;
  const renewalDue = paidDate
    ? (() => {
        const d = new Date(paidDate + "T00:00:00");
        d.setFullYear(d.getFullYear() + 1);
        return d.toISOString().split("T")[0];
      })()
    : null;

  const res = await pool.query(
    `INSERT INTO members
      (member_id, card_token, first_name, last_name, phone, email,
       shirt_size, photo_url, join_date, last_paid_date, renewal_due_date, status, notes)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,CURRENT_DATE,$9,$10,$11,$12) RETURNING *`,
    [
      memberId, cardToken,
      body.first_name, body.last_name,
      body.phone || null, body.email || null,
      body.shirt_size || null, body.photo_url || null,
      paidDate, renewalDue,
      paidDate ? "active" : "expired",
      body.notes || null,
    ]
  );

  await pool.query(
    `INSERT INTO card_events (member_id, event, new_token, notes)
     VALUES ($1, 'issued', $2, 'Initial card')`,
    [memberId, cardToken]
  );

  return Response.json(res.rows[0], { status: 201 });
}
