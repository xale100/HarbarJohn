"use client";
import { useEffect, useState } from "react";

const tabs = [
  { id: "beer", label: "Beer" },
  { id: "cider-wine", label: "Cider & Wine" },
  { id: "food", label: "Food" },
];

export default function MenuTabs() {
  const [active, setActive] = useState("beer");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -65% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="sticky top-[57px] z-30 bg-[#080d08]/95 backdrop-blur-sm border-b border-[#BFA060]/15">
      <div className="max-w-4xl mx-auto px-4 flex">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            className={`px-5 py-4 text-xs font-bold tracking-widest uppercase transition-colors border-b-2 -mb-px ${
              active === id
                ? "text-[#BFA060] border-[#BFA060]"
                : "text-[#DDD8CC]/35 border-transparent hover:text-[#DDD8CC]/60"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
