export type Show = {
  date: string;
  artist: string;
  genre: string;
  time: string;
  cover: string;
  photo: string;
};

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatTime(timeStr: string): string {
  const [h, m] = timeStr.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m === 0 ? `${hour}${ampm}` : `${hour}:${String(m).padStart(2, "0")}${ampm}`;
}

function formatCover(charge: string | null): string {
  if (!charge || parseFloat(charge) === 0) return "Free";
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

export async function getShows(maxResults = 20): Promise<Show[]> {
  const slug = process.env.VENUEFLOW_SLUG;
  if (!slug) return [];

  try {
    const res = await fetch(
      `https://getvenueflow.app/api/public/venues/${slug}/shows`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];

    const data = await res.json();
    return (data.shows ?? []).slice(0, maxResults).map(mapShow);
  } catch {
    return [];
  }
}
