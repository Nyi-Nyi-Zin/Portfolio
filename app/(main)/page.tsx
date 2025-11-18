import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Home from "@/components/home/Home";
import Project from "@/components/home/Project";
import Service from "@/components/home/Service";
import Skill from "@/components/home/Skill";

export default function Index() {
  return (
    <main className="flex flex-col bg-zinc-50 dark:bg-[#0F172A] font-sans w-full lg:px-8 px-3">
      <Home />
      <About />
      <Education />
      <Experience />
      <Skill />
      <Service />
      <Project />
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
