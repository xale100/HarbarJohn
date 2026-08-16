"use client";
import { useEffect, useId } from "react";

type Props = {
  layout?: "list" | "card" | "calendar";
  hideForm?: boolean;
};

export default function VenueFlowWidget({ layout, hideForm }: Props) {
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
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [uid, layout]);

  return (
    <>
      {hideForm && (
        <style>{`#${uid} iframe { display: none !important; }`}</style>
      )}
      <div id={uid} />
    </>
  );
}
