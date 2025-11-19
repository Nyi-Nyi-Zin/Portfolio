import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/header/MainNavbar";

// app/(main)/layout.tsx - Main site with header/footer
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
