"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { contactInfo, socialLinks } from "@/lib/constants";
import { Button } from "../ui/button";
import { ArrowUpRight, Circle, Download, Github, Linkedin, MapPin } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

function Home() {
  const reduceMotion = useReducedMotion();
  const navigateToSection = (id: "contact" | "projects") => {
    scrollToSection(id, document.querySelector("#main-navbar")?.clientHeight ?? 80);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex lg:flex-row flex-col border-b border-zinc-300 w-full mx-auto justify-between gap-12 items-center my-5 lg:my-0"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full min-w-0 flex-1 self-start py-4 sm:px-4 lg:w-auto xl:pl-4"
      >
        <button
          type="button"
          onClick={() => navigateToSection("contact")}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-medium text-teal-800 transition-colors hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
        >
          <Circle className="size-1.5 fill-emerald-500 text-emerald-500" aria-hidden="true" />
          Available for freelance work
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </button>

        <p className="mb-5 font-mono text-[10px] font-medium tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.22em] xl:mb-4">
          DEVELOPER. TEAM LEAD. PROBLEM SOLVER.
        </p>

        <h1 className="text-[clamp(2.75rem,6.7vw,8rem)] leading-[1.08] font-bold tracking-[-0.065em]">
          <span className="block">Hi, I’m</span>
          <span className="block text-[#1c5cff] dark:text-blue-400">
            Nyi Nyi Zin<span className="text-foreground">.</span>
          </span>
        </h1>

        <h2 className="mt-7 max-w-2xl text-[clamp(1.25rem,1.85vw,1.75rem)] leading-snug font-medium tracking-[-0.035em]">
          Turning ideas into thoughtful digital experiences.
        </h2>

        <p className="mt-4 max-w-xl text-base leading-[1.8] text-muted-foreground">
          Full-stack software developer and team lead building reliable web,
          mobile, and backend systems. From the first idea to the final detail.
        </p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button
            type="button"
            className="h-12 gap-3 rounded-xl bg-[#2460f2] px-5 text-sm font-semibold text-white shadow-md shadow-blue-600/10 hover:bg-blue-700 sm:px-7"
            onClick={() => {
              window.history.replaceState(null, "", "#projects");
              navigateToSection("projects");
            }}
          >
            Explore my work
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 gap-3 rounded-xl bg-background px-5 text-sm font-medium sm:px-6"
          >
            <a
              href="/Nyi_Nyi_Zin_Resume-1.pdf"
              download="Nyi_Nyi_Zin_Resume.pdf"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 text-xs text-muted-foreground sm:text-sm xl:mt-12">
          <span className="inline-flex items-center gap-2 sm:border-r sm:pr-5">
            <MapPin className="size-4" aria-hidden="true" />
            {contactInfo.location}
          </span>
          {socialLinks.filter((link) => link.icon === "github" || link.icon === "linkedin").map((link) => (
            <a
              key={link.icon}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400"
            >
              {link.icon === "github" ? <Github className="size-4" aria-hidden="true" /> : <Linkedin className="size-4" aria-hidden="true" />}
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="flex-1"
      >
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full transition-transform duration-500 ease-in-out hover:scale-102">
          <Image
            src="/Miracle.jpg"
            alt="Nyi Nyi Zin - Full-Stack Developer portrait"
            width={400}
            height={400}
            priority
            loading="eager"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-108"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
