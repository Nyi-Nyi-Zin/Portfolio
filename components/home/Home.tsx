"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { contactInfo, skills, socialLinks } from "@/lib/constants";
import { Button } from "../ui/button";
import {
  ArrowUpRight,
  Circle,
  Download,
  Github,
  Linkedin,
  MapPin,
  Zap,
} from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

const heroTechnologies = skills;

function Home() {
  const reduceMotion = useReducedMotion();
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const [isTechnologyHovered, setIsTechnologyHovered] = useState(false);
  const [isTechnologyFocused, setIsTechnologyFocused] = useState(false);

  useEffect(() => {
    if (reduceMotion || isTechnologyHovered || isTechnologyFocused) return;

    const interval = window.setInterval(() => {
      setTechnologyIndex((index) => (index + 1) % heroTechnologies.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [reduceMotion, isTechnologyHovered, isTechnologyFocused]);

  const navigateToSection = (id: "projects" | "skill") => {
    scrollToSection(
      id,
      document.querySelector("#main-navbar")?.clientHeight ?? 80,
    );
  };

  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-70px)] w-full flex-col items-center justify-center gap-12 border-b border-zinc-300 py-12 sm:py-16 lg:min-h-[calc(100svh-80px)] lg:flex-row lg:justify-between lg:gap-10 lg:py-20 dark:border-zinc-700/50"
    >
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full min-w-0 flex-1 sm:px-4 lg:w-auto xl:pl-4"
      >
        <h1 className="text-[clamp(2.125rem,4.2vw,4rem)] leading-[1.12] font-bold tracking-[-0.05em]">
          <span className="block text-[#1c5cff] dark:text-blue-400">
            Nyi Nyi Zin
            <span
              aria-hidden="true"
              className="hero-name-dot text-[#1c5cff] dark:text-blue-400"
            >
              .
            </span>
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-base font-normal leading-[1.75] text-slate-600 xl:text-lg dark:text-slate-300">
          Fullstack Software Developer
        </p>

        <div className="mt-6 flex h-[60px] items-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.a
              key={technologyIndex}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.6, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 16 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
              href="#skill"
              onClick={(event) => {
                event.preventDefault();
                window.history.replaceState(null, "", "#skill");
                navigateToSection("skill");
              }}
              onMouseEnter={() => setIsTechnologyHovered(true)}
              onMouseLeave={() => setIsTechnologyHovered(false)}
              onFocus={() => setIsTechnologyFocused(true)}
              onBlur={() => setIsTechnologyFocused(false)}
              aria-label={`Explore my skills: ${heroTechnologies.join(", ")}`}
              className="inline-flex min-h-[60px] w-fit max-w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-slate-800 shadow-[0_6px_14px_-6px_rgba(15,23,42,0.15)] transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:bg-slate-800"
            >
              <Circle
                className="size-2.5 shrink-0 fill-blue-500 text-blue-500"
                aria-hidden="true"
              />
              <span className="min-w-0 text-[17px] leading-7 font-semibold tracking-tight" aria-hidden="true">
                {heroTechnologies[technologyIndex]}
              </span>
              <Zap className="size-4 shrink-0 text-amber-500" aria-hidden="true" />
            </motion.a>
          </AnimatePresence>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <Button
            type="button"
            className="h-11 gap-2 rounded-xl bg-[#2460f2] px-4 text-sm font-semibold text-white shadow-sm shadow-blue-600/10 hover:bg-blue-700 sm:px-5"
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
            className="h-11 gap-2 rounded-xl bg-background px-4 text-sm font-medium sm:px-5"
          >
            <a
              href="/NyiNyiZin_Resume.pdf"
              download="NyiNyiZin_Resume.pdf"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground sm:text-sm">
          <span className="inline-flex items-center gap-2 sm:border-r sm:pr-5">
            <MapPin className="size-4" aria-hidden="true" />
            {contactInfo.location}
          </span>
          {socialLinks
            .filter(
              (link) => link.icon === "github" || link.icon === "linkedin",
            )
            .map((link) => (
              <a
                key={link.icon}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400"
              >
                {link.icon === "github" ? (
                  <Github className="size-4" aria-hidden="true" />
                ) : (
                  <Linkedin className="size-4" aria-hidden="true" />
                )}
                {link.label}
              </a>
            ))}
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-end"
      >
        <div className="size-[250px] max-w-full overflow-hidden rounded-full transition-transform duration-500 ease-in-out hover:scale-102 sm:size-[300px] md:size-[400px] xl:size-[440px]">
          <Image
            src="/Miracle.jpg"
            alt="Nyi Nyi Zin - Full-Stack Developer portrait"
            width={400}
            height={400}
            sizes="(min-width: 1280px) 440px, (min-width: 768px) 400px, (min-width: 640px) 300px, 250px"
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
