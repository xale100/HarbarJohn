import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "*.r2.dev" },
      { protocol: "https", hostname: "*.cdn.printful.com" },
      { protocol: "https", hostname: "ucarecdn.com" },
      { protocol: "https", hostname: "*.ucarecdn.com" },
    ],
  },
};

export default nextConfig;
