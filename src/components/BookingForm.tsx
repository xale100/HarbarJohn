"use client";
import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export default function BookingForm({ slug }: { slug: string }) {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Honeypot — abort silently if filled (bot)
    if (data.company) {
      setState("success");
      return;
    }

    try {
      const res = await fetch(
        `https://getvenueflow.app/api/public/venues/${encodeURIComponent(slug)}/submissions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            artistName: data.artistName,
            email: data.email,
            contactName: data.contactName || undefined,
            phone: data.phone || undefined,
            genre: data.genre || undefined,
            websiteUrl: data.websiteUrl || undefined,
            bio: data.bio || undefined,
            company: data.company,
          }),
        },
      );

      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error || "Something went wrong. Try again.");
        setState("error");
      } else {
        setState("success");
      }
    } catch {
      setErrorMsg("Network error. Check your connection and try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-[#BFA060]/30 px-6 py-8 text-center">
        <p className="text-[#BFA060] font-black tracking-widest uppercase text-sm mb-2">Request Sent</p>
        <p className="text-[#DDD8CC]/40 text-sm">We'll be in touch. Thanks for reaching out.</p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-[#DDD8CC]/10 focus:border-[#BFA060]/50 outline-none px-4 py-3 text-[#DDD8CC] text-sm placeholder:text-[#DDD8CC]/20 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-left">

      {/* Honeypot — hidden from real users via CSS, not type=hidden */}
      <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input
            name="artistName"
            required
            placeholder="Artist / Band Name *"
            className={inputClass}
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            required
            placeholder="Email *"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="contactName" placeholder="Contact Name" className={inputClass} />
        <input name="phone" type="tel" placeholder="Phone" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="genre" placeholder="Genre" className={inputClass} />
        <input name="websiteUrl" type="url" placeholder="Website or Social Link" className={inputClass} />
      </div>

      <textarea
        name="bio"
        rows={4}
        placeholder="Tell us about yourself — draw size, availability, anything relevant."
        className={`${inputClass} resize-none`}
      />

      {state === "error" && (
        <p className="text-red-400/70 text-xs">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full sm:w-auto px-8 py-4 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-black text-sm tracking-widest uppercase transition-colors disabled:opacity-40"
      >
        {state === "submitting" ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}
