import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: true,
  images: {
    domains: ["example.com"],
  },
};

export default nextConfig;
