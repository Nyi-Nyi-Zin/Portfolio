"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "./SkillSection";
import SectionHeader from "../common/SectionHeader";

function Skill() {
  return (
    <section
      id="skill"
      className="min-h-screen border-b border-zinc-300 dark:border-zinc-700/50 py-20"
    >
      <SectionHeader
        label="Tech Stack"
        title="Skills"
        subtitle="Comprehensive technical expertise and professional competencies developed through years of hands-on experience"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <SkillsSection />
      </motion.div>
    </section>
  );
}

export default Skill;
