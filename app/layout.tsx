import type { Metadata, Viewport } from "next";
import { bodyFont, headingFont, monoFont, myanmarFont } from "./fonts";
import "./globals.css";
import { rootMetadata } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${myanmarFont.variable} ${monoFont.variable}`}
    >
      <body
        suppressHydrationWarning={true}
        className="font-sans antialiased bg-background"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
