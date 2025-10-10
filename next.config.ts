import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static HTML export for Netlify
  images: {
    unoptimized: true, // ✅ Disable Image Optimization for static export
  },
};

export default nextConfig;
