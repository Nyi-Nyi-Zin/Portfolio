import type { Metadata } from "next";
import { contactInfo, socialLinks } from "@/lib/constants";

export const siteName = "Nyi Nyi Zin";

/** Canonical site origin for metadataBase, Open Graph, sitemap, and robots. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}

const defaultDescription =
  "Full-stack developer portfolio: Next.js, React, Golang, NestJS, and Node.js. Based in Yangon, Myanmar — projects, experience, and blog.";

const keywords = [
  "Nyi Nyi Zin",
  "full-stack developer",
  "Next.js",
  "React",
  "Golang",
  "NestJS",
  "portfolio",
  "Yangon",
  "Myanmar",
  "software engineer",
  "web development",
];

/** Shared Open Graph / Twitter fields for root and fallbacks. */
export const defaultOpenGraphImages = ["/projectImages/price-changer.png"];

export const rootMetadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${siteName} — Full-Stack Developer | Portfolio`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords,
  authors: [{ name: siteName, url: getSiteUrl() }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getSiteUrl(),
    siteName: `${siteName} — Portfolio`,
    title: `${siteName} — Full-Stack Developer | Portfolio`,
    description: defaultDescription,
    images: defaultOpenGraphImages.map((src) => ({ url: src, width: 1200, height: 630, alt: siteName })),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Full-Stack Developer | Portfolio`,
    description: defaultDescription,
    creator: "@NyiZin321",
    images: defaultOpenGraphImages,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export function buildPersonJsonLd(): Record<string, unknown> {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    jobTitle: "Full-Stack Developer",
    url,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    sameAs: socialLinks.map((l) => l.url),
    address: {
      "@type": "PostalAddress",
      addressLocality: contactInfo.location,
      addressCountry: "MM",
    },
  };
}
