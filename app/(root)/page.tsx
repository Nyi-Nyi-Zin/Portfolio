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
import {
  buildPersonJsonLd,
  buildProfilePageJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/site";
import type { Metadata } from "next";
import AiAssistant from "@/components/AiAssistant";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Index() {
  return (
    <>
      {[buildPersonJsonLd(), buildWebSiteJsonLd(), buildProfilePageJsonLd()].map(
        (schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        ),
      )}
      <Navbar />
      <main className="portfolio-main flex w-full flex-col bg-zinc-50 px-4 font-sans sm:px-6 lg:px-8 dark:bg-[#0F172A]">
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
