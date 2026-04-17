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
      className="min-h-screen flex flex-col items-center border-b border-zinc-300 dark:border-zinc-700/50 w-full py-20"
    >
      <SectionHeader
        label="Career Path"
        title="My Experience"
        subtitle="My professional journey in software development across multiple companies and roles"
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {experience.map((item: ExperienceItem, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={index === 0 ? "col-span-1 md:col-span-2" : "col-span-1"}
          >
            <ExperienceCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
