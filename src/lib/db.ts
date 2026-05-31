import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 5,
});

export default pool;
// Sun May 31 20:45:08 UTC 2026
// redeploy Sun May 31 20:50:48 UTC 2026
