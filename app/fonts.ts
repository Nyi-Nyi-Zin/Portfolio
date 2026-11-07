import { Geist_Mono, Manrope, Noto_Sans_Myanmar, Sora } from "next/font/google";

export const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const myanmarFont = Noto_Sans_Myanmar({
  variable: "--font-myanmar",
  subsets: ["myanmar"],
  display: "swap",
  preload: false,
});

export const monoFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
