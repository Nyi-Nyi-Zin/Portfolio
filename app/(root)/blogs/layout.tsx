import BlogNavBar from "@/components/common/header/BlogNavBar";
import Footer from "@/components/common/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on full-stack development: frontend, backend, DevOps, and engineering notes by Nyi Nyi Zin.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog | Nyi Nyi Zin",
    description:
      "Articles on full-stack development: frontend, backend, DevOps, and engineering notes.",
    url: "/blogs",
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
