import { MetadataRoute } from "next";

const BASE = "https://portopints.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE,                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/menu`,              lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/events`,            lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/visit`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/merch`,             lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/about`,             lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/activities`,        lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    // TODO: remove south-beach once Har Bar site goes live
    { url: `${BASE}/south-beach`,       lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];
}
