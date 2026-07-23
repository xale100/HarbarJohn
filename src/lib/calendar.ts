export type Show = {
  date: string;
  artist: string;
  genre: string;
  time: string;
  cover: string;
  photo: string;
};

function formatDate(dateStr: string, tz: string): string {
  // dateStr is venue-local ("2026-07-24") — interpret at noon UTC to avoid
  // any date-boundary shift when rendering in the venue timezone.
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: tz,
  });
}

function formatTime(timeStr: string): string {
  // timeStr is already venue-local ("18:30:00") — parse directly, no conversion.
  const [h, m] = timeStr.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m === 0 ? `${hour}${ampm}` : `${hour}:${String(m).padStart(2, "0")}${ampm}`;
}

function formatCover(charge: string | null): string {
  if (charge === null) return "";          // not entered — omit from display
  if (parseFloat(charge) === 0) return "Free"; // explicitly confirmed free
  return `$${parseFloat(charge).toFixed(2).replace(/\.00$/, "")}`;
}

function mapShow(show: any, tz: string): Show {
  const time = show.endTime
    ? `${formatTime(show.startTime)} – ${formatTime(show.endTime)}`
    : formatTime(show.startTime);

  return {
    date: formatDate(show.date, tz),
    artist: show.title || "TBA",
    genre: show.genre || "",
    time,
    cover: formatCover(show.coverCharge),
    photo: show.photoUrl || "",
  };
}

// Returns null on config/fetch error (caller should use fallback content).
// Returns [] when the venue simply has no upcoming shows booked — a valid empty state.
export async function getShows(maxResults = 20): Promise<Show[] | null> {
  const slug = process.env.VENUEFLOW_SLUG;
  if (!slug) return null;

  try {
    const res = await fetch(
      `https://getvenueflow.app/api/public/venues/${slug}/shows`,
      { next: { revalidate: 3600 } },
    );

    // 404 means bad slug — fail loudly so misconfiguration is obvious.
    if (res.status === 404) {
      console.error(`VenueFlow: venue slug "${slug}" not found`);
      return null;
    }
    if (!res.ok) return null;

    const data = await res.json();
    if (data.error) {
      console.error("VenueFlow error:", data.error);
      return null;
    }

    const tz = data.venue?.timezone ?? "America/Los_Angeles";
    return (data.shows ?? []).slice(0, maxResults).map((s: any) => mapShow(s, tz));
  } catch {
    return null;
  }
}
