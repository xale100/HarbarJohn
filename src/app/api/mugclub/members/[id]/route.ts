import { authOk } from "@/lib/mugclub";
import pool from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!authOk(request))
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const res = await pool.query("SELECT * FROM members WHERE member_id = $1", [id]);
  if (res.rows.length === 0)
    return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json(res.rows[0]);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!authOk(request))
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await request.json();

  const res = await pool.query(
    `UPDATE members SET
      first_name = $1, last_name = $2, phone = $3, email = $4,
      shirt_size = $5, photo_url = $6, notes = $7, updated_at = NOW()
    WHERE member_id = $8 RETURNING *`,
    [
      body.first_name, body.last_name,
      body.phone || null, body.email || null,
      body.shirt_size || null, body.photo_url || null,
      body.notes || null, id,
    ]
  );

  if (res.rows.length === 0)
    return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json(res.rows[0]);
}
