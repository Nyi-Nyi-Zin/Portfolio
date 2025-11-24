import BlogNavBar from "@/components/common/header/BlogNavBar";
import Footer from "@/components/common/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Awesome Blog",
  description: "Read my latest thoughts",
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
