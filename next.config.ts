import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Configure base path for GitHub Pages subdirectory
  // This will automatically prepend /noza to all assets including images
  basePath: "/noza",
  assetPrefix: "/noza",
};

export default nextConfig;
