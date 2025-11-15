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
    <main className="flex flex-col bg-zinc-50 dark:bg-black font-sans w-full">
      <Home />
      <About />
      <Experience />
      <Skill />
      <Project />
      <Contact />
      <Education />
      <Service />
      {/* <Blog /> */}
    </main>
  );
}
