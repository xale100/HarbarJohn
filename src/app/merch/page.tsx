import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "Har-Bar merchandise — coming soon.",
};

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-[#080d08] text-[#DDD8CC] flex flex-col items-center justify-center px-4 gap-6">
      <Image
        src="/images/logo-2.png"
        alt="Har-Bar"
        width={72}
        height={72}
        className="opacity-30"
      />
      <h1 className="text-4xl sm:text-6xl font-black tracking-widest text-[#BFA060] uppercase">
        Merch
      </h1>
      <p className="text-[#DDD8CC]/30 text-[10px] tracking-[0.4em] uppercase">
        Shop coming soon
      </p>
    </div>
  );
}
