"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard, { ExperienceItem } from "./ExperienceCard";
import { experience } from "@/lib/constants";
import SectionHeader from "../common/SectionHeader";

function Experience() {
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

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:auto-rows-fr">
        {experience.map((item: ExperienceItem, index: number) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="min-w-0 h-full"
          >
            <ExperienceCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
