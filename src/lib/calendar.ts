export type Show = {
  date: string;
  artist: string;
  genre: string;
  time: string;
  cover: string;
  photo: string;
};

function parseField(description: string | undefined, field: string): string {
  if (!description) return "";
  const match = description.match(new RegExp(`${field}:\\s*([^\\n|]+)`, "i"));
  return match ? match[1].trim() : "";
}

function formatShow(event: Record<string, any>): Show {
  const start = new Date(event.start?.dateTime || event.start?.date);
  const end = event.end?.dateTime ? new Date(event.end.dateTime) : null;

  const tz = "America/Los_Angeles";

  const date = start.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: tz,
  });

  const isAllDay = !event.start?.dateTime;

  const time = isAllDay ? "All Day" : start.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: tz,
  });

  const endTime = (!isAllDay && end)
    ? end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: tz })
    : "";

  // Pull photo from Drive attachment or fallback to Photo: field in description
  let photo = parseField(event.description, "Photo");
  if (!photo && event.attachments?.length) {
    const attachment = event.attachments.find((a: any) =>
      a.mimeType?.startsWith("image/") || a.title?.match(/\.(png|jpg|jpeg|webp|gif)$/i)
    );
    if (attachment?.fileUrl) {
      const idMatch = attachment.fileUrl.match(/[-\w]{25,}/);
      if (idMatch) photo = `https://lh3.googleusercontent.com/d/${idMatch[0]}`;
    }
  }

  return {
    date,
    artist: event.summary || "TBA",
    genre: parseField(event.description, "Genre"),
    time: endTime ? `${time} – ${endTime}` : time,
    cover: parseField(event.description, "Cover") || "Free",
    photo,
  };
}

export async function getShows(maxResults = 20): Promise<Show[]> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

  if (!calendarId || !apiKey) return [];

  try {
    const now = new Date().toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${now}&orderBy=startTime&singleEvents=true&maxResults=${maxResults}&supportsAttachments=true`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const data = await res.json();
    return (data.items || []).map(formatShow);
  } catch {
    return [];
  }
}
