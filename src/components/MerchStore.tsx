"use client";

import { useState, useRef, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";

type SyncVariant = {
  id: number;
  name: string;
  retail_price: string;
  is_enabled: boolean;
  product: { image: string };
};

type Product = {
  sync_product: { id: number; name: string; thumbnail_url: string };
  sync_variants: SyncVariant[];
};

type ShippingRate = {
  id: string;
  name: string;
  rate: string;
  minDeliveryDays: number;
  maxDeliveryDays: number;
};

type Address = {
  name: string;
  email: string;
  address1: string;
  city: string;
  state_code: string;
  zip: string;
  country_code: string;
};

declare global {
  interface Window { Square?: any; }
}

type Step = "grid" | "detail" | "address" | "payment" | "success";

type Props = {
  products: Product[];
  squareAppId: string;
  squareLocationId: string;
  squareScriptSrc: string;
};

function parseVariant(name: string) {
  const parts = name.split(" / ");
  return { size: parts[0] ?? name, color: parts[1] ?? "" };
}

export default function MerchStore({ products, squareAppId, squareLocationId, squareScriptSrc }: Props) {
  const [step, setStep] = useState<Step>("grid");
  const [product, setProduct] = useState<Product | null>(null);
  const [variant, setVariant] = useState<SyncVariant | null>(null);
  const [address, setAddress] = useState<Address>({
    name: "", email: "", address1: "", city: "", state_code: "", zip: "", country_code: "US",
  });
  const [rates, setRates] = useState<ShippingRate[]>([]);
  const [selectedRate, setSelectedRate] = useState<ShippingRate | null>(null);
  const [loadingRates, setLoadingRates] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  const cardRef = useRef<any>(null);
  const cardMountedRef = useRef(false);

  useEffect(() => {
    if (step !== "payment" || cardMountedRef.current) return;
    const timer = setTimeout(async () => {
      if (!window.Square) return;
      try {
        const payments = window.Square.payments(squareAppId, squareLocationId);
        const card = await payments.card();
        await card.attach("#sq-card");
        cardRef.current = card;
        cardMountedRef.current = true;
      } catch {
        setError("Payment form failed to load. Please refresh.");
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [step, squareAppId, squareLocationId]);

  useEffect(() => {
    if (step !== "payment") {
      cardRef.current = null;
      cardMountedRef.current = false;
    }
  }, [step]);

  const enabledVariants = product?.sync_variants.filter(v => v.is_enabled) ?? [];
  const selectedSize = variant ? parseVariant(variant.name).size : "";
  const sizes = [...new Set(enabledVariants.map(v => parseVariant(v.name).size))];
  const colors = [...new Set(
    enabledVariants
      .filter(v => parseVariant(v.name).size === selectedSize)
      .map(v => parseVariant(v.name).color)
      .filter(Boolean)
  )];

  async function fetchRates() {
    if (!variant) return;
    setLoadingRates(true);
    setError(null);
    try {
      const res = await fetch("/api/merch/shipping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient: address,
          items: [{ sync_variant_id: variant.id, quantity: 1 }],
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setRates(data);
      setSelectedRate(data[0] ?? null);
      setStep("payment");
    } catch (e: any) {
      setError(e.message ?? "Could not get shipping rates.");
    } finally {
      setLoadingRates(false);
    }
  }

  async function handlePay() {
    if (!cardRef.current || !variant || !selectedRate) return;
    setPaying(true);
    setError(null);
    try {
      const result = await cardRef.current.tokenize();
      if (result.status !== "OK") throw new Error(result.errors?.[0]?.message ?? "Card error");

      const total = Math.round((parseFloat(variant.retail_price) + parseFloat(selectedRate.rate)) * 100);

      const res = await fetch("/api/merch/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceId: result.token,
          amountCents: total,
          items: [{ sync_variant_id: variant.id, quantity: 1, retail_price: variant.retail_price }],
          recipient: address,
          shippingId: selectedRate.id,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setOrderId(data.orderId);
      setStep("success");
    } catch (e: any) {
      setError(e.message ?? "Payment failed.");
    } finally {
      setPaying(false);
    }
  }

  function reset() {
    setStep("grid");
    setProduct(null);
    setVariant(null);
    setRates([]);
    setSelectedRate(null);
    setError(null);
    setOrderId(null);
  }

  const addressComplete =
    address.name && address.email && address.address1 &&
    address.city && address.state_code && address.zip;

  const inputCls = "w-full bg-[#080d08] border border-[#BFA060]/20 focus:border-[#BFA060]/60 text-[#DDD8CC] px-4 py-2.5 text-sm outline-none transition-colors";
  const labelCls = "block text-[#DDD8CC]/30 text-[10px] tracking-widest uppercase mb-1";
  const backBtn = (to: Step) => (
    <button
      onClick={() => setStep(to)}
      className="text-[#DDD8CC]/30 hover:text-[#DDD8CC]/60 text-xs tracking-widest uppercase mb-8 transition-colors"
    >
      ← Back
    </button>
  );

  if (step === "success") {
    return (
      <div className="min-h-screen bg-[#080d08] text-[#DDD8CC] flex flex-col items-center justify-center px-4 gap-5 text-center">
        <p className="text-[#BFA060] text-xs tracking-[0.4em] uppercase">Order Confirmed</p>
        <h2 className="text-4xl font-black tracking-wide uppercase">You&apos;re all set.</h2>
        <p className="text-[#DDD8CC]/50 text-sm max-w-sm leading-relaxed">
          Printful will email you tracking info when your order ships.
          {orderId && <span className="block mt-1 text-[#DDD8CC]/25 text-xs">Order #{orderId}</span>}
        </p>
        <button
          onClick={reset}
          className="mt-4 px-7 py-3 border border-[#BFA060]/60 hover:border-[#BFA060] text-[#BFA060] font-bold text-sm tracking-widest uppercase transition-colors"
        >
          Shop More
        </button>
      </div>
    );
  }

  return (
    <>
      <Script src={squareScriptSrc} strategy="lazyOnload" />

      <div className="bg-[#080d08] text-[#DDD8CC]">

        {/* HERO */}
        <section className="grain py-20 px-4 bg-[#080d08] text-center border-b border-[#BFA060]/10">
          <h1 className="text-5xl sm:text-7xl font-black tracking-widest text-[#BFA060] uppercase mb-2">Merch</h1>
          <p className="text-[#DDD8CC]/30 text-[10px] tracking-[0.4em] uppercase">Port O&apos; Pints</p>
        </section>

        {/* GRID */}
        {step === "grid" && (
          <section className="grain py-16 px-4 bg-[#0f170f]">
            <div className="max-w-5xl mx-auto">
              {products.length === 0 ? (
                <p className="text-[#DDD8CC]/30 text-center text-sm tracking-widest uppercase py-20">
                  Products coming soon.
                </p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {products.map(p => {
                    const enabledPrices = p.sync_variants.filter(v => v.is_enabled).map(v => parseFloat(v.retail_price));
                    const minPrice = enabledPrices.length > 0 ? Math.min(...enabledPrices) : 0;
                    return (
                      <button
                        key={p.sync_product.id}
                        onClick={() => {
                          setProduct(p);
                          setVariant(p.sync_variants.find(v => v.is_enabled) ?? null);
                          setStep("detail");
                        }}
                        className="group text-left border border-[#BFA060]/10 hover:border-[#BFA060]/40 transition-colors bg-[#080d08]"
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={p.sync_product.thumbnail_url}
                            alt={p.sync_product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-[#DDD8CC]/80 text-xs font-semibold truncate">{p.sync_product.name}</p>
                          <p className="text-[#BFA060] text-xs mt-0.5">from ${minPrice.toFixed(2)}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        )}

        {/* DETAIL */}
        {step === "detail" && product && variant && (
          <section className="grain py-16 px-4 bg-[#0f170f]">
            <div className="max-w-3xl mx-auto">
              {backBtn("grid")}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="relative aspect-square border border-[#BFA060]/10 overflow-hidden">
                  <Image
                    src={variant.product.image || product.sync_product.thumbnail_url}
                    alt={product.sync_product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-1">
                    {product.sync_product.name}
                  </h2>
                  <p className="text-[#BFA060] text-lg font-bold mb-6">
                    ${parseFloat(variant.retail_price).toFixed(2)}
                  </p>

                  <p className={labelCls}>Size</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => {
                          const match = enabledVariants.find(v => parseVariant(v.name).size === size);
                          if (match) setVariant(match);
                        }}
                        className={`px-3 py-1.5 text-xs font-bold tracking-widest uppercase border transition-colors ${
                          selectedSize === size
                            ? "border-[#BFA060] text-[#BFA060]"
                            : "border-[#DDD8CC]/20 text-[#DDD8CC]/40 hover:border-[#DDD8CC]/40"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  {colors.length > 0 && (
                    <>
                      <p className={labelCls}>Color</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {colors.map(color => {
                          const isSelected = parseVariant(variant.name).color === color;
                          return (
                            <button
                              key={color}
                              onClick={() => {
                                const match = enabledVariants.find(v => {
                                  const p = parseVariant(v.name);
                                  return p.size === selectedSize && p.color === color;
                                });
                                if (match) setVariant(match);
                              }}
                              className={`px-3 py-1.5 text-xs font-bold tracking-widest uppercase border transition-colors ${
                                isSelected
                                  ? "border-[#BFA060] text-[#BFA060]"
                                  : "border-[#DDD8CC]/20 text-[#DDD8CC]/40 hover:border-[#DDD8CC]/40"
                              }`}
                            >
                              {color}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  <button
                    onClick={() => setStep("address")}
                    className="w-full py-3 bg-[#BFA060] hover:bg-[#d4b070] text-[#080d08] font-black text-sm tracking-widest uppercase transition-colors mt-4"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ADDRESS */}
        {step === "address" && (
          <section className="grain py-16 px-4 bg-[#0f170f]">
            <div className="max-w-xl mx-auto">
              {backBtn("detail")}
              <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-8">Shipping</h2>

              <div className="space-y-4">
                {([
                  ["name", "Full Name", "text"],
                  ["email", "Email", "email"],
                  ["address1", "Address", "text"],
                  ["city", "City", "text"],
                  ["state_code", "State (2-letter, e.g. CA)", "text"],
                  ["zip", "ZIP Code", "text"],
                ] as [keyof Address, string, string][]).map(([key, label, type]) => (
                  <div key={key}>
                    <label className={labelCls}>{label}</label>
                    <input
                      type={type}
                      value={address[key]}
                      onChange={e => setAddress(a => ({ ...a, [key]: e.target.value }))}
                      className={inputCls}
                    />
                  </div>
                ))}
              </div>

              {error && <p className="text-red-400 text-xs mt-4">{error}</p>}

              <button
                onClick={fetchRates}
                disabled={!addressComplete || loadingRates}
                className="w-full mt-8 py-3 bg-[#BFA060] hover:bg-[#d4b070] disabled:opacity-30 text-[#080d08] font-black text-sm tracking-widest uppercase transition-colors"
              >
                {loadingRates ? "Getting Rates…" : "Get Shipping Rates"}
              </button>
            </div>
          </section>
        )}

        {/* PAYMENT */}
        {step === "payment" && variant && selectedRate && (
          <section className="grain py-16 px-4 bg-[#0f170f]">
            <div className="max-w-xl mx-auto">
              {backBtn("address")}
              <h2 className="text-2xl font-black text-[#DDD8CC] tracking-wide uppercase mb-8">Payment</h2>

              {/* Summary */}
              <div className="border border-[#BFA060]/10 divide-y divide-[#BFA060]/10 mb-8">
                <div className="flex justify-between items-baseline px-4 py-3">
                  <p className="text-[#DDD8CC]/60 text-sm">{product?.sync_product.name} — {variant.name}</p>
                  <p className="text-[#DDD8CC] text-sm">${parseFloat(variant.retail_price).toFixed(2)}</p>
                </div>

                <div className="px-4 py-3">
                  <p className={labelCls + " mb-2"}>Shipping</p>
                  {rates.map(rate => (
                    <label key={rate.id} className="flex items-center justify-between py-1.5 cursor-pointer gap-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={selectedRate.id === rate.id}
                          onChange={() => setSelectedRate(rate)}
                          className="accent-[#BFA060]"
                        />
                        <span className="text-[#DDD8CC]/70 text-xs">
                          {rate.name} ({rate.minDeliveryDays}–{rate.maxDeliveryDays} days)
                        </span>
                      </div>
                      <span className="text-[#DDD8CC] text-xs">${parseFloat(rate.rate).toFixed(2)}</span>
                    </label>
                  ))}
                </div>

                <div className="flex justify-between items-baseline px-4 py-3">
                  <p className="text-[#BFA060] font-bold text-sm tracking-widest uppercase">Total</p>
                  <p className="text-[#BFA060] font-bold">
                    ${(parseFloat(variant.retail_price) + parseFloat(selectedRate.rate)).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Square card element */}
              <p className={labelCls + " mb-3"}>Card Details</p>
              <div id="sq-card" className="min-h-[90px] mb-6" />

              {error && <p className="text-red-400 text-xs mb-4">{error}</p>}

              <button
                onClick={handlePay}
                disabled={paying}
                className="w-full py-3 bg-[#BFA060] hover:bg-[#d4b070] disabled:opacity-30 text-[#080d08] font-black text-sm tracking-widest uppercase transition-colors"
              >
                {paying
                  ? "Processing…"
                  : `Pay $${(parseFloat(variant.retail_price) + parseFloat(selectedRate.rate)).toFixed(2)}`}
              </button>

              <p className="text-[#DDD8CC]/20 text-[10px] tracking-wide text-center mt-4">
                Payments processed securely by Square
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
