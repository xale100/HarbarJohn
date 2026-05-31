import { randomBytes } from "crypto";
import pool from "./db";

export function authOk(request: Request): boolean {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const valid = process.env.MUGCLUB_TOKEN;
  if (!valid || !token) return false;
  return token === valid;
}

export function generateCardToken(): string {
  return randomBytes(8).toString("hex").toUpperCase();
}

export async function generateMemberId(): Promise<string> {
  const res = await pool.query(
    "SELECT member_id FROM members ORDER BY member_id DESC LIMIT 1"
  );
  if (res.rows.length === 0) return "HB-0001";
  const last = res.rows[0].member_id as string;
  const num = parseInt(last.replace("HB-", ""), 10) + 1;
  return `HB-${String(num).padStart(4, "0")}`;
}
