export async function GET() {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

  if (!calendarId || !apiKey) {
    return Response.json({ error: "Missing env vars", calendarId: !!calendarId, apiKey: !!apiKey });
  }

  try {
    const now = new Date().toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${now}&orderBy=startTime&singleEvents=true&maxResults=5`;
    const res = await fetch(url);
    const data = await res.json();
    return Response.json({ status: res.status, data });
  } catch (e) {
    return Response.json({ error: String(e) });
  }
}
