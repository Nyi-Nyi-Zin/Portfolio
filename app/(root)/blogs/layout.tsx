import BlogNavBar from "@/components/common/header/BlogNavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Blog",
  description:
    "Read Cloud Nine Innovations technology articles in Myanmar or English: OOP, JavaScript, caching, database indexing, cloud computing, and software architecture.",
  keywords: [
    "software development blog",
    "full-stack development",
    "object-oriented programming",
    "JavaScript event loop",
    "database indexing",
    "cloud computing",
    "system design",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Software Development Blog | Nyi Nyi Zin",
    description:
      "Technology explained in Myanmar and English, from OOP and the JavaScript event loop to caching, databases, cloud computing, and architecture.",
    url: "/blogs",
    images: [
      {
        url: "/blog/facebook/object-oriented-programming.webp",
        width: 1279,
        height: 720,
        alt: "Classes, objects, and the four core OOP concepts illustrated through cars",
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
