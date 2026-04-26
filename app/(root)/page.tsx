import Navbar from "@/components/common/header/MainNavbar";
import Footer from "@/components/common/footer/Footer";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Home from "@/components/home/Home";
import Project from "@/components/home/Project";
import Service from "@/components/home/Service";
import Skill from "@/components/home/Skill";
import { buildPersonJsonLd } from "@/lib/site";
import type { Metadata } from "next";
import AiAssistant from "@/components/AiAssistant";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildPersonJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className="flex flex-col bg-zinc-50 dark:bg-[#0F172A] font-sans w-full lg:px-8 px-3">
        <Home />

        <AiAssistant />

        <About />
        <Education />
        <Experience />
        <Skill />
        <Service />
        <Project />
        <Contact />
        {/* <Blog /> */}
      </main>
      <Footer />
    </>
  );
}
