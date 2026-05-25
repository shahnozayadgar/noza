import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Disable trailing slash to avoid issues with GitHub Pages
  trailingSlash: false,
  // Only needed if your repo name is not your username.github.io
  // For example, if your repo is "username.github.io/portfolio"
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio",
};

export default nextConfig;
