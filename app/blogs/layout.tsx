import BlogNavBar from "@/components/common/header/BlogNavBar";
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
    <main className="lg:col-span-8">
      <BlogNavBar />
      {children}
    </main>
  );
}
