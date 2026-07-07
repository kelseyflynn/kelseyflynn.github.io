import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site deploys to GitHub Pages (kelseyflynn.github.io).
  output: "export",
  // GitHub Pages serves /work/slug as /work/slug/index.html.
  trailingSlash: true,
  images: {
    // next/image server optimisation is unavailable on static hosts.
    // Images are pre-sized instead - see README "Images".
    unoptimized: true,
  },
};

export default nextConfig;
