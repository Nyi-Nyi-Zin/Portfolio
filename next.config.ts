import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: true,
  images: {
    domains: ["iili.io"],
  },
};

export default nextConfig;
