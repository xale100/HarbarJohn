"use client";
import { useEffect, useRef } from "react";

export default function BookingForm({ slug }: { slug: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.origin !== "https://getvenueflow.app") return;
      if (!e.data || e.data.type !== "venueflow:height") return;
      if (iframeRef.current) {
        iframeRef.current.style.height = e.data.height + "px";
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const src = `https://getvenueflow.app/embed/${encodeURIComponent(slug)}/form?accent=%23BFA060&bg=transparent&font=sans`;

  return (
    <iframe
      ref={iframeRef}
      src={src}
      style={{ width: "100%", height: "520px", border: "none" }}
      title="Request to play"
    />
  );
}
