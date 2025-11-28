import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    remotePatterns: [
      { hostname: "iili.io", protocol: "https", pathname: "/**" },
    ],
  },
  reactCompiler: true,
  // i18n: {
  //   locales: ["en", "mm"],
  //   defaultLocale: "en",
  // },
};

export default nextConfig;
