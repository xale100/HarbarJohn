"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";

interface Member {
  member_id: string;
  card_token: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  email: string | null;
  shirt_size: string | null;
  photo_url: string | null;
  join_date: string;
  last_paid_date: string | null;
  renewal_due_date: string | null;
  status: "active" | "expired";
  notes: string | null;
}

type View = "scanner" | "member" | "edit" | "add" | "photo" | "list";

// ── QR Scanner ───────────────────────────────────────────────────────────────

function QRScanner({
  onScan,
  active,
}: {
  onScan: (s: string) => void;
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);
  const [camReady, setCamReady] = useState(false);
  const [camError, setCamError] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    let stopped = false;

    async function start() {
      try {
        const { default: jsQR } = await import("jsqr");
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: "environment" } },
        });
        if (stopped) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          setCamReady(true);
        }

        function tick() {
          if (stopped) return;
          const v = videoRef.current;
          const c = canvasRef.current;
          if (v && c && v.readyState === v.HAVE_ENOUGH_DATA) {
            c.width = v.videoWidth;
            c.height = v.videoHeight;
            const ctx = c.getContext("2d")!;
            ctx.drawImage(v, 0, 0);
            const d = ctx.getImageData(0, 0, c.width, c.height);
            const code = jsQR(d.data, d.width, d.height);
            if (code?.data) {
              onScan(code.data);
              return;
            }
          }
          animRef.current = requestAnimationFrame(tick);
        }
        animRef.current = requestAnimationFrame(tick);
      } catch {
        setCamError("Camera access denied");
      }
    }

    start();
    return () => {
      stopped = true;
      cancelAnimationFrame(animRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      setCamReady(false);
    };
  }, [active, onScan]);

  return (
    <div className="relative w-full max-w-sm mx-auto bg-black" style={{ aspectRatio: "1" }}>
      {!camReady && !camError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <Image
            src="/images/logo-2.png"
            alt="Loading"
            width={72}
            height={72}
            className="opacity-20 animate-spin"
            style={{ animationDuration: "4s" }}
          />
          <p className="text-[#DDD8CC]/20 text-[10px] tracking-[0.3em] uppercase">
            Loading bouncer...
          </p>
          <p className="text-[#DDD8CC]/10 text-[8px] tracking-widest uppercase">
            est. as portopints south beach
          </p>
        </div>
      )}
      {camError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-red-400/50 text-xs tracking-widest uppercase">{camError}</p>
        </div>
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${camReady ? "opacity-100" : "opacity-0"}`}
        playsInline
        muted
      />
      <canvas ref={canvasRef} className="hidden" />
      {camReady && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 border-2 border-[#BFA060]/50" />
        </div>
      )}
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────────────────────

const SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

function fmtDate(d: string | null) {
  if (!d) return "—";
  const [year, month, day] = d.split("T")[0].split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function expiringSoon(m: Member) {
  if (!m.renewal_due_date) return false;
  return new Date(m.renewal_due_date) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
}

function compressImage(file: File, maxPx = 1200, quality = 0.9): Promise<Blob> {
  return new Promise((resolve) => {
    const img = new window.Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, maxPx / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => resolve(blob ?? file), "image/jpeg", quality);
    };
    img.src = url;
  });
}

function photoCacheKey(memberId: string) {
  return `hb_photo_${memberId}`;
}

function cachePhoto(memberId: string, blob: Blob): Promise<void> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      try { localStorage.setItem(photoCacheKey(memberId), reader.result as string); } catch {}
      resolve();
    };
    reader.readAsDataURL(blob);
  });
}

function getCachedPhoto(memberId: string): string | null {
  try { return localStorage.getItem(photoCacheKey(memberId)); } catch { return null; }
}

function clearPhotoCache(memberId: string) {
  try { localStorage.removeItem(photoCacheKey(memberId)); } catch {}
}

function base64ToBlob(dataUrl: string): Blob {
  const [header, data] = dataUrl.split(",");
  const mime = header.match(/:(.*?);/)?.[1] ?? "image/jpeg";
  const bytes = atob(data);
  const arr = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
  return new Blob([arr], { type: mime });
}

export default function MugClubApp({ token }: { token: string }) {
  const [view, setView] = useState<View>("scanner");
  const [member, setMember] = useState<Member | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [form, setForm] = useState<Partial<Member>>({});
  const [search, setSearch] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const retryActiveRef = useRef(false);

  function flash(text: string, ok = true) {
    setMsg({ text, ok });
    setTimeout(() => setMsg(null), 3000);
  }

  function api(path: string, options?: RequestInit) {
    const sep = path.includes("?") ? "&" : "?";
    return fetch(`/api/mugclub/${path}${sep}token=${token}`, options);
  }

  // On photo step mount, restore cached photo and start background retry if needed
  useEffect(() => {
    if (view !== "photo" || !member) return;
    const cached = getCachedPhoto(member.member_id);
    if (cached && !photoPreview) {
      setPhotoPreview(cached);
      startPhotoRetryLoop(member.member_id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, member?.member_id]);

  // Clean up retry timer on unmount
  useEffect(() => () => {
    if (retryTimerRef.current) clearTimeout(retryTimerRef.current);
  }, []);

  // Fetch signed photo URL whenever member changes
  useEffect(() => {
    setPhotoUrl(null);
    if (!member?.photo_url) return;
    fetch(`/api/mugclub/photo?key=${encodeURIComponent(member.photo_url)}&token=${token}`)
      .then((r) => r.json())
      .then((d) => setPhotoUrl(d.url))
      .catch(() => {});
  }, [member?.photo_url, token]);

  const handleScan = useCallback(
    async (cardToken: string) => {
      setLoading(true);
      const res = await fetch(
        `/api/mugclub/scan?card_token=${encodeURIComponent(cardToken)}&token=${token}`
      );
      setLoading(false);
      if (res.ok) {
        setMember(await res.json());
        setShowQR(false);
        setView("member");
      } else {
        flash("Card not found", false);
      }
    },
    [token]
  );

  async function loadMembers(q = "") {
    setLoading(true);
    const res = await api(`members${q ? `?search=${encodeURIComponent(q)}` : ""}`);
    setLoading(false);
    if (res.ok) setMembers(await res.json());
  }

  async function handleRenew() {
    if (!member) return;
    setLoading(true);
    const res = await api("renew", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ member_id: member.member_id }),
    });
    setLoading(false);
    if (res.ok) {
      setMember(await res.json());
      flash("Renewed!");
    }
  }

  async function handleSave() {
    if (!form.first_name?.trim() || !form.last_name?.trim()) {
      flash("First and last name required", false);
      return;
    }
    setLoading(true);
    const isAdd = view === "add";
    const res = await api(isAdd ? "members" : `members/${member!.member_id}`, {
      method: isAdd ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setMember(await res.json());
      if (isAdd) {
        setPhotoPreview(null);
        setView("photo");
      } else {
        setView("member");
        flash("Saved");
      }
    }
  }

  async function handleRegenCard() {
    if (!member || !confirm("Replace card? Old QR code will stop working.")) return;
    setLoading(true);
    const res = await api("card", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ member_id: member.member_id }),
    });
    setLoading(false);
    if (res.ok) {
      const data = await res.json();
      setMember((p) => (p ? { ...p, card_token: data.card_token } : null));
      setShowQR(true);
      flash("New card generated — print QR below");
    }
  }

  async function handlePhotoCapture(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.files?.[0];
    if (!raw) return;
    setUploading(true);
    const file = await compressImage(raw);
    const filename = `members/${member?.member_id ?? `new-${Date.now()}`}-photo.jpg`;
    const urlRes = await api(`upload-url?filename=${encodeURIComponent(filename)}`);
    if (!urlRes.ok) { flash("Upload failed", false); setUploading(false); return; }
    const blobUrl = URL.createObjectURL(file);
    const { uploadUrl, photoKey } = await urlRes.json();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    let uploadOk = false;
    try {
      const uploadRes = await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": "image/jpeg" },
        signal: controller.signal,
      });
      clearTimeout(timeout);
      uploadOk = uploadRes.ok;
    } catch {
      clearTimeout(timeout);
    }
    setUploading(false);
    if (uploadOk) {
      setForm((p) => ({ ...p, photo_url: photoKey }));
      setPhotoPreview(blobUrl);
      flash("Photo uploaded");
    } else {
      URL.revokeObjectURL(blobUrl);
      flash("Upload failed — try again", false);
    }
  }

  async function handlePhotoStepCapture(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.files?.[0];
    if (!raw || !member) return;
    setUploading(true);
    const file = await compressImage(raw);
    setPhotoPreview(URL.createObjectURL(file));
    await cachePhoto(member.member_id, file);

    // First attempt — show immediate feedback
    const succeeded = await attemptPhotoUpload(member.member_id);
    setUploading(false);
    if (succeeded) {
      flash("Photo saved");
    } else {
      flash("Connectivity issue — retrying in background", false);
      startPhotoRetryLoop(member.member_id);
    }
  }

  // Returns true if upload + DB save both succeeded
  async function attemptPhotoUpload(memberId: string): Promise<boolean> {
    // Check DB first — upload may have already landed (e.g. response was dropped)
    const checkRes = await api(`members/${memberId}`);
    if (checkRes.ok) {
      const data = await checkRes.json();
      if (data.photo_url) {
        clearPhotoCache(memberId);
        setMember((m) => m?.member_id === memberId ? data : m);
        return true;
      }
    }

    const cached = getCachedPhoto(memberId);
    if (!cached) return false;

    const filename = `members/${memberId}-photo.jpg`;
    const urlRes = await api(`upload-url?filename=${encodeURIComponent(filename)}`);
    if (!urlRes.ok) return false;

    const { uploadUrl, photoKey } = await urlRes.json();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    let uploadOk = false;
    try {
      const r = await fetch(uploadUrl, {
        method: "PUT",
        body: base64ToBlob(cached),
        headers: { "Content-Type": "image/jpeg" },
        signal: controller.signal,
      });
      clearTimeout(timeout);
      uploadOk = r.ok;
    } catch { clearTimeout(timeout); }

    if (!uploadOk) return false;

    // Fetch fresh member data for the PUT so we don't clobber other fields
    const memberRes = await api(`members/${memberId}`);
    if (!memberRes.ok) return false;
    const memberData = await memberRes.json();

    const updateRes = await api(`members/${memberId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...memberData, photo_url: photoKey }),
    });
    if (!updateRes.ok) return false;

    clearPhotoCache(memberId);
    setMember((m) => m?.member_id === memberId ? { ...m!, photo_url: photoKey } : m);
    return true;
  }

  function startPhotoRetryLoop(memberId: string) {
    if (retryActiveRef.current) return;
    retryActiveRef.current = true;
    scheduleRetry(memberId, 0);
  }

  function scheduleRetry(memberId: string, attempt: number) {
    const delays = [2000, 4000, 8000, 16000, 30000, 60000];
    const delay = delays[Math.min(attempt, delays.length - 1)];
    retryTimerRef.current = setTimeout(async () => {
      const ok = await attemptPhotoUpload(memberId);
      if (ok) {
        retryActiveRef.current = false;
      } else {
        scheduleRetry(memberId, attempt + 1);
      }
    }, delay);
  }

  // ── Scanner View ────────────────────────────────────────────────────────────

  if (view === "scanner") {
    return (
      <div className="min-h-screen bg-[#080d08] flex flex-col">
        <header className="flex items-center justify-between px-4 py-3 border-b border-[#BFA060]/15">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-2.png" alt="" width={24} height={24} className="opacity-40" />
            <span className="text-[#BFA060] text-[10px] tracking-[0.3em] uppercase font-black">
              Har-Bar Mug Club
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => { loadMembers(); setView("list"); }}
              className="text-[#DDD8CC]/40 hover:text-[#DDD8CC] text-[10px] tracking-widest uppercase transition-colors"
            >
              Members
            </button>
            <button
              onClick={() => { setForm({}); setPhotoPreview(null); setView("add"); }}
              className="text-[#BFA060]/60 hover:text-[#BFA060] text-[10px] tracking-widest uppercase transition-colors"
            >
              + Add
            </button>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4 py-8">
          <QRScanner onScan={handleScan} active={view === "scanner"} />
          <p className="text-[#DDD8CC]/20 text-[10px] tracking-widest uppercase">
            {loading ? "Looking up member..." : "Point camera at member QR code"}
          </p>
          {msg && (
            <p className={`text-xs tracking-widest uppercase ${msg.ok ? "text-[#BFA060]" : "text-red-400/70"}`}>
              {msg.text}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ── Member View ─────────────────────────────────────────────────────────────

  if (view === "member" && member) {
    const expired = member.status === "expired";
    const soon = expiringSoon(member);

    return (
      <div className="min-h-screen bg-[#080d08] text-[#DDD8CC]">
        <header className="flex items-center justify-between px-4 py-3 border-b border-[#BFA060]/15">
          <button
            onClick={() => setView("scanner")}
            className="text-[#DDD8CC]/40 hover:text-[#DDD8CC] text-[10px] tracking-widest uppercase transition-colors"
          >
            ← Scan
          </button>
          <button
            onClick={() => { setForm({ ...member }); setPhotoPreview(null); setView("edit"); }}
            className="text-[#BFA060]/60 hover:text-[#BFA060] text-[10px] tracking-widest uppercase transition-colors"
          >
            Edit
          </button>
        </header>

        <div className="max-w-sm mx-auto px-4 py-8">
          {/* Photo */}
          {photoUrl && (
            <div className="relative w-full aspect-square mb-6 overflow-hidden">
              <Image src={photoUrl} alt={member.first_name} fill className="object-cover object-top" unoptimized />
            </div>
          )}

          {/* Name + ID */}
          <div className="mb-6">
            <h1 className="text-3xl font-black tracking-wide uppercase">
              {member.first_name} {member.last_name}
            </h1>
            <p className="text-[#DDD8CC]/30 text-xs tracking-widest mt-1">{member.member_id}</p>
          </div>

          {/* Status */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 border ${
            expired
              ? "border-red-500/40 text-red-400"
              : soon
              ? "border-yellow-500/40 text-yellow-400"
              : "border-green-500/40 text-green-400"
          }`}>
            <span className={`w-2 h-2 rounded-full ${expired ? "bg-red-400" : soon ? "bg-yellow-400" : "bg-green-400"}`} />
            <span className="text-sm font-bold tracking-widest uppercase">
              {expired ? "Expired" : "Active"}
            </span>
          </div>

          {/* Details */}
          <div className="divide-y divide-[#BFA060]/10 mb-8">
            <div className="py-3 flex justify-between">
              <span className="text-[#DDD8CC]/30 text-xs tracking-widest uppercase">Expires</span>
              <span className={`text-sm font-semibold ${expired ? "text-red-400" : soon ? "text-yellow-400" : "text-[#DDD8CC]"}`}>
                {fmtDate(member.renewal_due_date)}
              </span>
            </div>
            {member.email && (
              <div className="py-3 flex justify-between gap-4">
                <span className="text-[#DDD8CC]/30 text-xs tracking-widest uppercase shrink-0">Email</span>
                <span className="text-sm text-[#DDD8CC]/70 text-right truncate">{member.email}</span>
              </div>
            )}
            {member.phone && (
              <div className="py-3 flex justify-between">
                <span className="text-[#DDD8CC]/30 text-xs tracking-widest uppercase">Phone</span>
                <span className="text-sm text-[#DDD8CC]/70">{member.phone}</span>
              </div>
            )}
            {member.shirt_size && (
              <div className="py-3 flex justify-between">
                <span className="text-[#DDD8CC]/30 text-xs tracking-widest uppercase">Shirt</span>
                <span className="text-sm text-[#DDD8CC]/70">{member.shirt_size}</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            {(expired || soon) && (
              <button
                onClick={handleRenew}
                disabled={loading}
                className="w-full py-4 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-black text-sm tracking-widest uppercase transition-colors disabled:opacity-40"
              >
                {loading ? "Processing..." : "Renew Today"}
              </button>
            )}
            <button
              onClick={() => setShowQR((p) => !p)}
              className="w-full py-3 border border-[#DDD8CC]/10 hover:border-[#DDD8CC]/30 text-[#DDD8CC]/40 hover:text-[#DDD8CC]/70 text-xs tracking-widest uppercase transition-colors"
            >
              {showQR ? "Hide QR" : "Show QR Code"}
            </button>
          </div>

          {/* QR Code */}
          {showQR && (
            <div className="mt-6 p-6 bg-white flex flex-col items-center gap-3">
              <QRCode value={member.card_token} size={180} />
              <p className="text-black text-xs font-mono">{member.member_id}</p>
              <p className="text-black/50 text-[10px]">{member.card_token}</p>
            </div>
          )}

          {msg && (
            <p className={`text-xs tracking-widest uppercase text-center mt-4 ${msg.ok ? "text-[#BFA060]" : "text-red-400/70"}`}>
              {msg.text}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ── Edit / Add Form ─────────────────────────────────────────────────────────

  if (view === "edit" || view === "add") {
    return (
      <div className="min-h-screen bg-[#080d08] text-[#DDD8CC]">
        <header className="flex items-center justify-between px-4 py-3 border-b border-[#BFA060]/15">
          <button
            onClick={() => setView(view === "add" ? "scanner" : "member")}
            className="text-[#DDD8CC]/40 hover:text-[#DDD8CC] text-[10px] tracking-widest uppercase transition-colors"
          >
            ← Back
          </button>
          <span className="text-[#BFA060] text-[10px] tracking-widest uppercase">
            {view === "add" ? "New Member" : "Edit Member"}
          </span>
          <button
            onClick={handleSave}
            disabled={loading}
            className="text-[#BFA060] hover:text-[#DDD8CC] text-[10px] tracking-widest uppercase transition-colors disabled:opacity-40"
          >
            Save
          </button>
        </header>

        <div className="max-w-sm mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            {[
              { label: "First Name *", key: "first_name", type: "text" },
              { label: "Last Name *", key: "last_name", type: "text" },
              { label: "Phone", key: "phone", type: "tel" },
              { label: "Email", key: "email", type: "email" },
            ].map(({ label, key, type }) => (
              <div key={key}>
                <label className="text-[#DDD8CC]/30 text-[10px] tracking-widest uppercase block mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  value={(form as Record<string, string>)[key] ?? ""}
                  onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                  className="w-full bg-[#1a3a1a] border border-[#BFA060]/20 text-[#DDD8CC] px-3 py-2 text-sm focus:outline-none focus:border-[#BFA060]/50"
                />
              </div>
            ))}

            <div>
              <label className="text-[#DDD8CC]/30 text-[10px] tracking-widest uppercase block mb-1">
                Shirt Size
              </label>
              <select
                value={form.shirt_size ?? ""}
                onChange={(e) => setForm((p) => ({ ...p, shirt_size: e.target.value || null }))}
                className="w-full bg-[#1a3a1a] border border-[#BFA060]/20 text-[#DDD8CC] px-3 py-2 text-sm focus:outline-none focus:border-[#BFA060]/50"
              >
                <option value="">— select —</option>
                {SIZES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[#DDD8CC]/30 text-[10px] tracking-widest uppercase block mb-1">
                Paid Date
              </label>
              <input
                type="date"
                value={form.last_paid_date ?? ""}
                onChange={(e) => setForm((p) => ({ ...p, last_paid_date: e.target.value || null }))}
                className="w-full bg-[#1a3a1a] border border-[#BFA060]/20 text-[#DDD8CC] px-3 py-2 text-sm focus:outline-none focus:border-[#BFA060]/50"
              />
            </div>

            <div>
              <label className="text-[#DDD8CC]/30 text-[10px] tracking-widest uppercase block mb-1">
                Notes
              </label>
              <textarea
                value={form.notes ?? ""}
                onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value || null }))}
                rows={3}
                className="w-full bg-[#1a3a1a] border border-[#BFA060]/20 text-[#DDD8CC] px-3 py-2 text-sm focus:outline-none focus:border-[#BFA060]/50 resize-none"
              />
            </div>

            {/* Photo capture — edit only, add uses dedicated photo step */}
            {view === "edit" && (
              <div>
                <label className="text-[#DDD8CC]/30 text-[10px] tracking-widest uppercase block mb-1">
                  Photo
                </label>
                {(photoPreview || (form.photo_url && photoUrl)) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photoPreview ?? photoUrl ?? ""} alt="Preview" className="w-full aspect-square object-cover object-top mb-2" />
                )}
                <label className={`block w-full py-3 text-center border cursor-pointer transition-colors text-xs tracking-widest uppercase ${
                  uploading
                    ? "border-[#BFA060]/10 text-[#DDD8CC]/20 cursor-not-allowed"
                    : "border-[#BFA060]/30 hover:border-[#BFA060] text-[#BFA060]/60 hover:text-[#BFA060]"
                }`}>
                  {uploading ? "Uploading..." : form.photo_url ? "Retake Photo" : "Take Photo"}
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={handlePhotoCapture}
                    disabled={uploading}
                  />
                </label>
              </div>
            )}

            {view === "edit" && (
              <button
                onClick={handleRegenCard}
                className="mt-2 w-full py-3 border border-red-500/20 hover:border-red-500/40 text-red-400/50 hover:text-red-400/80 text-[10px] tracking-widest uppercase transition-colors"
              >
                Replace Card Token
              </button>
            )}
          </div>

          {msg && (
            <p className={`text-xs tracking-widest uppercase text-center mt-6 ${msg.ok ? "text-[#BFA060]" : "text-red-400/70"}`}>
              {msg.text}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ── Photo Step ──────────────────────────────────────────────────────────────

  if (view === "photo" && member) {
    return (
      <div className="min-h-screen bg-[#080d08] text-[#DDD8CC]">
        <header className="flex items-center justify-between px-4 py-3 border-b border-[#BFA060]/15">
          <span className="text-[#BFA060] text-[10px] tracking-widest uppercase">
            Step 2 of 2 — Photo
          </span>
          <button
            onClick={() => { setPhotoPreview(null); setView("member"); }}
            className="text-[#DDD8CC]/40 hover:text-[#DDD8CC] text-[10px] tracking-widest uppercase transition-colors"
          >
            Skip →
          </button>
        </header>

        <div className="max-w-sm mx-auto px-4 py-8 flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-[#BFA060] text-xs tracking-widests uppercase">{member.member_id} created ✓</p>
            <h2 className="text-2xl font-black mt-1">{member.first_name} {member.last_name}</h2>
          </div>

          {photoPreview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photoPreview} alt="Preview" className="w-full aspect-square object-cover object-top" />
          ) : (
            <div className="w-full aspect-square bg-[#1a3a1a] flex items-center justify-center">
              <p className="text-[#DDD8CC]/20 text-xs tracking-widest uppercase">No photo yet</p>
            </div>
          )}

          <label className={`w-full py-4 text-center border cursor-pointer font-black text-sm tracking-widest uppercase transition-colors ${
            uploading
              ? "border-[#BFA060]/10 text-[#DDD8CC]/20 cursor-not-allowed"
              : "border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060]"
          }`}>
            {uploading ? "Uploading..." : photoPreview ? "Retake Photo" : "Take Photo"}
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handlePhotoStepCapture}
              disabled={uploading}
            />
          </label>

          {member.photo_url && (
            <button
              onClick={() => { setPhotoPreview(null); setView("member"); }}
              className="w-full py-3 border border-green-500/40 hover:border-green-500/60 text-green-400 font-black text-sm tracking-widest uppercase transition-colors"
            >
              Done →
            </button>
          )}

          {msg && (
            <p className={`text-xs tracking-widest uppercase ${msg.ok ? "text-[#BFA060]" : "text-red-400/70"}`}>
              {msg.text}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ── Member List ─────────────────────────────────────────────────────────────

  if (view === "list") {
    return (
      <div className="min-h-screen bg-[#080d08] text-[#DDD8CC]">
        <header className="flex items-center justify-between px-4 py-3 border-b border-[#BFA060]/15">
          <button
            onClick={() => setView("scanner")}
            className="text-[#DDD8CC]/40 hover:text-[#DDD8CC] text-[10px] tracking-widest uppercase transition-colors"
          >
            ← Scan
          </button>
          <span className="text-[#BFA060] text-[10px] tracking-widest uppercase">
            Members {members.length > 0 && `(${members.length})`}
          </span>
          <button
            onClick={() => { setForm({}); setView("add"); }}
            className="text-[#BFA060]/60 hover:text-[#BFA060] text-[10px] tracking-widests uppercase transition-colors"
          >
            + Add
          </button>
        </header>

        <div className="max-w-sm mx-auto px-4 pt-4">
          <input
            type="search"
            placeholder="Search members..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              loadMembers(e.target.value);
            }}
            className="w-full bg-[#1a3a1a] border border-[#BFA060]/20 text-[#DDD8CC] placeholder-[#DDD8CC]/20 px-3 py-2 text-sm focus:outline-none focus:border-[#BFA060]/50 mb-4"
          />

          {loading && (
            <p className="text-[#DDD8CC]/20 text-[10px] tracking-widests uppercase text-center py-8">
              Loading...
            </p>
          )}

          <div className="divide-y divide-[#BFA060]/10">
            {members.map((m) => (
              <button
                key={m.member_id}
                onClick={() => { setMember(m); setShowQR(false); setView("member"); }}
                className="w-full py-4 flex items-center justify-between gap-4 text-left hover:bg-[#BFA060]/5 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[#DDD8CC] font-semibold text-sm truncate">
                    {m.last_name}, {m.first_name}
                  </p>
                  <p className="text-[#DDD8CC]/30 text-[10px] tracking-widest">{m.member_id}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-[10px] tracking-widests uppercase font-bold ${
                    m.status === "expired" ? "text-red-400" : expiringSoon(m) ? "text-yellow-400" : "text-green-400"
                  }`}>
                    {m.status}
                  </span>
                  <p className="text-[#DDD8CC]/25 text-[10px]">{fmtDate(m.renewal_due_date)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
