import type { Metadata } from "next";
import { contactInfo, socialLinks } from "@/lib/constants";

export const siteName = "Nyi Nyi Zin";

/** Canonical site origin for metadataBase, Open Graph, sitemap, and robots. */
export function getSiteUrl(): string {
  // Deployment URLs change on every Vercel build. Keep all search and social
  // metadata on the public domain unless a canonical origin is explicitly set.
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://nyinyizin.cloudninemm.com";
  return new URL(origin).origin;
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
export const defaultOpenGraphImages = ["/projectImages/price-changer.webp"];

export const rootMetadata: Metadata = {
  metadataBase: getMetadataBase(),
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: `${siteName} — Full-Stack Developer | Portfolio`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords,
  authors: [{ name: siteName, url: getSiteUrl() }],
  creator: siteName,
  publisher: siteName,
  applicationName: `${siteName} Portfolio`,
  referrer: "origin-when-cross-origin",
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
    image: `${url}/Miracle.jpg`,
    sameAs: socialLinks.map((l) => l.url),
    knowsAbout: [
      "Full-stack web development",
      "Next.js",
      "React",
      "TypeScript",
      "Golang",
      "Node.js",
      "Cloud and DevOps",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: contactInfo.location,
      addressCountry: "MM",
    },
  };
}

export function buildWebSiteJsonLd(): Record<string, unknown> {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteName} Portfolio`,
    url,
    description:
      "Portfolio, experience, projects, and software-development articles by Nyi Nyi Zin.",
    inLanguage: ["en", "my"],
    publisher: {
      "@type": "Person",
      name: siteName,
      url,
    },
  };
}

export function buildProfilePageJsonLd(): Record<string, unknown> {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${siteName} — Full-Stack Developer`,
    url,
    mainEntity: {
      "@type": "Person",
      name: siteName,
      url,
      jobTitle: "Full-Stack Developer",
      image: `${url}/Miracle.jpg`,
    },
  };
}
