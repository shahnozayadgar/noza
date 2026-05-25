import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Disable trailing slash to avoid issues with GitHub Pages
  trailingSlash: false,
  // Configure base path for GitHub Pages subdirectory
  basePath: isProd ? "/noza" : "",
  assetPrefix: isProd ? "/noza" : "",
};

export default nextConfig;
