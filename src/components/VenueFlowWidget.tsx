"use client";
import { useEffect, useId } from "react";

type Props = {
  layout?: "list" | "card" | "calendar";
  parts?: "shows" | "form";
};

export default function VenueFlowWidget({ layout, parts }: Props) {
  const uid = useId().replace(/:/g, "-");

  useEffect(() => {
    const existing = document.querySelector(`script[data-target="${uid}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://getvenueflow.app/widget.js";
    script.setAttribute("data-venue", "porto-pints");
    script.setAttribute("data-target", uid);
    script.setAttribute("data-accent", "#BFA060");
    script.setAttribute("data-bg", "transparent");
    script.setAttribute("data-scheme", "dark");
    if (layout) script.setAttribute("data-layout", layout);
    if (parts) script.setAttribute("data-parts", parts);
    script.async = true;
    document.body.appendChild(script);

    return () => { script.remove(); };
  }, [uid, layout, parts]);

  return <div id={uid} />;
}
