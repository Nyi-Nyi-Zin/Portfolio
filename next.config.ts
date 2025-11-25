import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      { hostname: "iili.io", protocol: "https", pathname: "/**" },
    ],
  },
};

export default nextConfig;
