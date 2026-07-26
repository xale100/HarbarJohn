"use client";
import { useEffect, useRef } from "react";

export default function BookingForm({ slug }: { slug: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.origin !== "https://getvenueflow.app") return;
      const frame = iframeRef.current;
      if (!frame || !e.data) return;

      if (e.data.type === "venueflow:height") {
        frame.style.height = e.data.height + "px";
      }

      if (e.data.type === "venueflow:surface-request") {
        for (let el = frame.parentElement; el; el = el.parentElement) {
          const st = getComputedStyle(el);
          const grad = st.backgroundImage.match(/rgba?\([^)]+\)/);
          const parts = (grad ? grad[0] : st.backgroundColor).match(/[\d.]+/g);
          if (parts && (parts[3] === undefined || +parts[3] > 0)) {
            frame.contentWindow?.postMessage(
              {
                type: "venueflow:surface",
                color: "#" + parts.slice(0, 3).map((n) => (+n).toString(16).padStart(2, "0")).join(""),
              },
              "https://getvenueflow.app",
            );
            return;
          }
        }
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const src = `https://getvenueflow.app/embed/${encodeURIComponent(slug)}/form?accent=%23BFA060&bg=transparent&font=sans&scheme=dark`;

  return (
    <iframe
      ref={iframeRef}
      src={src}
      style={{ width: "100%", height: "520px", border: "none" }}
      title="Request to play"
    />
  );
}
