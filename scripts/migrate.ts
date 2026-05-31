import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function migrate() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS members (
        member_id       TEXT PRIMARY KEY,
        card_token      CHAR(16) NOT NULL UNIQUE,
        first_name      TEXT NOT NULL,
        last_name       TEXT NOT NULL,
        phone           TEXT,
        email           TEXT,
        shirt_size      TEXT,
        photo_url       TEXT,
        join_date       DATE NOT NULL DEFAULT CURRENT_DATE,
        last_paid_date  DATE,
        renewal_due_date DATE,
        status          TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'expired')),
        notes           TEXT,
        created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS scans (
        id              BIGSERIAL PRIMARY KEY,
        member_id       TEXT NOT NULL REFERENCES members(member_id),
        card_token      CHAR(16) NOT NULL,
        scanned_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        terminal        TEXT
      );

      CREATE TABLE IF NOT EXISTS card_events (
        id              BIGSERIAL PRIMARY KEY,
        member_id       TEXT NOT NULL REFERENCES members(member_id),
        event           TEXT NOT NULL CHECK (event IN ('issued', 'replaced', 'deactivated')),
        old_token       CHAR(16),
        new_token       CHAR(16),
        event_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        notes           TEXT
      );

      CREATE INDEX IF NOT EXISTS idx_members_card_token ON members(card_token);
      CREATE INDEX IF NOT EXISTS idx_members_status ON members(status);
      CREATE INDEX IF NOT EXISTS idx_scans_member_id ON scans(member_id);
      CREATE INDEX IF NOT EXISTS idx_scans_scanned_at ON scans(scanned_at);
    `);
    console.log("Migration complete.");
  } finally {
    client.release();
    await pool.end();
  }
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
