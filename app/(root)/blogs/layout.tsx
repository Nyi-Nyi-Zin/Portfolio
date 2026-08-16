import BlogNavBar from "@/components/common/header/BlogNavBar";
import Footer from "@/components/common/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Blog",
  description:
    "Practical software-development articles on frontend, backend, DevOps, AI, databases, security, testing, and system design by Nyi Nyi Zin.",
  keywords: [
    "software development blog",
    "full-stack development",
    "Next.js tutorials",
    "React performance",
    "TypeScript",
    "DevOps",
    "system design",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Software Development Blog | Nyi Nyi Zin",
    description:
      "Practical engineering notes on frontend, backend, DevOps, AI, databases, security, testing, and system design.",
    url: "/blogs",
    images: [
      {
        url: "/blog/cover-maintainable-nextjs.webp",
        width: 2560,
        height: 1440,
        alt: "Software development architecture illustration",
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogNavBar />
      <main className="lg:col-span-8">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
