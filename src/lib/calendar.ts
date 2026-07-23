export type Show = {
  date: string;
  artist: string;
  genre: string;
  time: string;
  cover: string;
  photo: string;
};

function formatDate(dateStr: string): string {
  // dateStr is already the venue's local calendar date. Parse as UTC and
  // format with timeZone:"UTC" so no browser/server timezone shifts the day.
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function formatTime(timeStr: string | null): string {
  if (!timeStr) return "Time TBA";
  const [h, m] = timeStr.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m === 0 ? `${hour}${ampm}` : `${hour}:${String(m).padStart(2, "0")}${ampm}`;
}

function formatCover(charge: string | null): string {
  if (charge === null) return "";     // not entered — omit from display
  if (charge === "0.00") return "Free"; // explicitly confirmed free (always 2dp from Postgres)
  return `$${parseFloat(charge).toFixed(2).replace(/\.00$/, "")}`;
}

function mapShow(show: any): Show {
  const time = show.endTime
    ? `${formatTime(show.startTime)} – ${formatTime(show.endTime)}`
    : formatTime(show.startTime);

  return {
    date: formatDate(show.date),
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
      `https://getvenueflow.app/api/public/venues/${encodeURIComponent(slug)}/shows`,
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

    return (data.shows ?? []).slice(0, maxResults).map(mapShow);
  } catch {
    return null;
  }
}
