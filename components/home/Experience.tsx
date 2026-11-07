"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/lib/constants";
import SectionHeader from "../common/SectionHeader";

function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="flex w-full flex-col items-center border-b border-zinc-300 py-16 sm:py-20 dark:border-zinc-700/50"
    >
      <SectionHeader
        label="Career Path"
        title="My Experience"
        subtitle="My professional journey in software development across multiple companies and roles"
      />

      <div className="grid w-full max-w-6xl grid-cols-1 items-stretch gap-4 lg:auto-rows-fr lg:grid-cols-2 lg:gap-5">
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.08 }}
            className="h-full min-w-0"
          >
            <ExperienceCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
