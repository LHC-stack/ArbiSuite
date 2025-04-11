import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ["arbisuite.io"],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
