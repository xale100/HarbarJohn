import { authOk } from "@/lib/mugclub";
import pool from "@/lib/db";

export async function POST(request: Request) {
  if (!authOk(request))
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { member_id } = await request.json();
  if (!member_id)
    return Response.json({ error: "member_id required" }, { status: 400 });

  const memberRes = await pool.query(
    "SELECT * FROM members WHERE member_id = $1",
    [member_id]
  );
  if (memberRes.rows.length === 0)
    return Response.json({ error: "Not found" }, { status: 404 });

  const m = memberRes.rows[0];
  const today = new Date();
  const currentDue = m.renewal_due_date ? new Date(m.renewal_due_date) : null;

  const newDue = new Date(currentDue && currentDue > today ? currentDue : today);
  newDue.setFullYear(newDue.getFullYear() + 1);

  const res = await pool.query(
    `UPDATE members SET
      last_paid_date = $1, renewal_due_date = $2, status = 'active', updated_at = NOW()
    WHERE member_id = $3 RETURNING *`,
    [
      today.toISOString().split("T")[0],
      newDue.toISOString().split("T")[0],
      member_id,
    ]
  );

  return Response.json(res.rows[0]);
}
