"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutCardData } from "@/lib/constants";
import AboutCard from "./AboutCard";
import SectionHeader from "../common/SectionHeader";

function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="flex flex-col items-center border-b border-zinc-300 py-16 sm:py-20 dark:border-zinc-700/50"
    >
      <SectionHeader
        label="Who I Am"
        title="About Me"
        subtitle="Building useful software and helping teams do their best work."
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14">
        {/* Left side: Text */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="min-w-0 flex-1"
        >
          <div className="border-l-[3px] border-blue-500 pl-5 sm:pl-6">
            <p className="max-w-[38ch] text-xl leading-[1.65] font-medium tracking-[-0.025em] text-foreground sm:text-2xl">
              I’m a <strong className="font-semibold text-blue-700 dark:text-blue-400">Full-Stack Software Developer</strong>{" "}
              and team lead with <strong className="font-semibold">7+ years</strong>{" "}
              in IT, building software since 2018.
            </p>
          </div>

          <p className="mt-6 max-w-[60ch] text-base leading-8 text-slate-600 dark:text-slate-300">
            I build and ship web, mobile, and backend systems, with experience in
            system architecture, secure APIs, database design, and DevOps.
          </p>

          <div className="mt-7 space-y-7 border-t border-border pt-7">
            <div className="space-y-2.5">
              <h3 className="text-sm font-semibold tracking-normal text-foreground">
                Leading with purpose
              </h3>
              <p className="max-w-[60ch] text-base leading-8 text-slate-600 dark:text-slate-300">
                I lead a software development team, define system architecture,
                and design scalable workflows. I guide development best practices,
                mentor junior developers, and help the team collaborate to deliver
                high-quality software.
              </p>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-sm font-semibold tracking-normal text-foreground">
                Always learning
              </h3>
              <p className="max-w-[60ch] text-base leading-8 text-slate-600 dark:text-slate-300">
                I graduated with a <strong className="font-medium text-foreground">Bachelor of Computer Science</strong>{" "}
                from Polytechnic University Maubin in 2026. I continue to grow
                through hands-on projects and collaboration with development teams.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right side: Cards */}
        <div className="grid min-w-0 flex-1 auto-rows-fr grid-cols-2 gap-4 sm:gap-5">
          {aboutCardData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.1 }}
            >
              <AboutCard
                title={item.title}
                value={item.value}
                icon={item.icon}
                color={item.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
