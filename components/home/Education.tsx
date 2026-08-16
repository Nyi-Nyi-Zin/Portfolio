"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

type EducationEntry = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  description: string;
  achievements: string[];
  gradient: string;
  iconGradient: string;
};

const educationData: EducationEntry[] = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "Polytechnic University Maubin",
    location: "Maubin, Myanmar",
    period: "Graduated 2026",
    description:
      "Completed computer science studies with a focus on software engineering, algorithms, data structures, and system design.",
    achievements: [
      "Specialization in Software Engineering",
      "Advanced Algorithms & Data Structures",
      "Database Systems & System Design",
      "Operating Systems & Networking",
    ],
    gradient: "from-blue-500 to-cyan-400",
    iconGradient: "from-blue-600 to-cyan-500",
  },
  // {
  //   degree: "Self-Taught",
  //   field: "Full Stack Development",
  //   institution: "Online Learning Platforms",
  //   location: "Remote",
  //   period: "Jan 2023 — Present",
  //   description:
  //     "Intensive self-directed learning across modern web technologies, backend architectures, and cloud deployment.",
  //   achievements: [
  //     "React, Next.js & TypeScript mastery",
  //     "Golang & Node.js backend development",
  //     "Docker, CI/CD & Cloud deployments",
  //     "System design & microservices architecture",
  //   ],
  //   gradient: "from-violet-500 to-purple-400",
  //   iconGradient: "from-violet-600 to-purple-500",
  // },
  {
    degree: "High School Diploma",
    field: "",
    institution: "Basic Education High School",
    location: "Thandwe, Myanmar",
    period: "2015 — 2017",
    grade: "", // Removed Distinction
    description:
      "Completed secondary education, gaining a solid foundation in core subjects such as Mathematics and English. Developed strong analytical and problem-solving skills, as well as discipline and dedication, which laid the groundwork for future academic and professional growth.",
    achievements: [
      "Strong foundation in Mathematics and English",
      "Developed analytical and problem-solving skills",
    ],
    gradient: "from-emerald-500 to-teal-400",
    iconGradient: "from-emerald-600 to-teal-500",
  },
];

// Animation variants
const timelineLineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    y: 20,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2 + 0.3,
      ease: "easeOut",
    },
  }),
};

const nodeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.2 + 0.2,
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  }),
};

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center border-b border-zinc-300 dark:border-zinc-700/50 py-20 w-full"
    >
      <SectionHeader
        label="Academic Background"
        title="Education"
        subtitle="My academic journey and the foundation of my technical knowledge"
      />

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* ── Animated center line (desktop) / left line (mobile) ── */}
        <motion.div
          variants={timelineLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] origin-top"
          style={{
            background:
              "linear-gradient(180deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)",
          }}
        />

        {/* ── Animated glow behind the line ── */}
        <motion.div
          variants={timelineLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] origin-top blur-sm opacity-60"
          style={{
            background:
              "linear-gradient(180deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)",
          }}
        />

        {/* ── Timeline entries ── */}
        <div className="space-y-12 md:space-y-16">
          {educationData.map((entry, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={entry.degree + entry.institution}
                className="relative flex items-start"
              >
                {/* ── Timeline node (dot) ── */}
                <motion.div
                  custom={index}
                  variants={nodeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10"
                >
                  {/* Outer glow ring */}
                  <div
                    className={`absolute inset-0 w-12 h-12 -m-1.5 rounded-full bg-gradient-to-br ${entry.gradient} opacity-20 blur-md animate-pulse`}
                  />
                  {/* Main node */}
                  <div
                    className={`relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br ${entry.iconGradient} shadow-lg ring-4 ring-zinc-50 dark:ring-[#0F172A]`}
                  >
                    {index === 0 ? (
                      <GraduationCap className="w-4 h-4 text-white" />
                    ) : index === 1 ? (
                      <BookOpen className="w-4 h-4 text-white" />
                    ) : (
                      <Award className="w-4 h-4 text-white" />
                    )}
                  </div>
                </motion.div>

                {/* ── Card ── */}
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`w-full pl-16 md:pl-0 ${
                    isLeft
                      ? "md:w-[calc(50%-2.5rem)] md:pr-0"
                      : "md:w-[calc(50%-2.5rem)] md:ml-auto md:pl-0"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/5 hover:border-transparent hover:-translate-y-1">
                    {/* Top gradient accent bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${entry.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Background gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${entry.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                    />

                    {/* Degree badge */}
                    <div className="relative flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${entry.gradient} text-white shadow-md`}
                      >
                        <GraduationCap className="w-3 h-3" />
                        {entry.degree}
                      </span>
                      {entry.grade && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
                          <Award className="w-3 h-3" />
                          {entry.grade}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="relative text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                      {entry.field}
                    </h3>

                    {/* Institution & Meta */}
                    <div className="relative space-y-1.5 mb-4">
                      <p className="text-base font-semibold text-zinc-700 dark:text-zinc-300">
                        {entry.institution}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {entry.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {entry.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-5">
                      {entry.description}
                    </p>

                    {/* Achievements */}
                    <div className="relative space-y-2">
                      <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        Key Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {entry.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300"
                          >
                            <span
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${entry.gradient} flex-shrink-0`}
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Connector arrow (desktop only) */}
                    <div
                      className={`hidden md:block absolute top-8 w-3 h-3 rotate-45 border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0F172A] transition-colors duration-500 group-hover:border-transparent ${
                        isLeft
                          ? "right-[-7px] border-r border-t"
                          : "left-[-7px] border-l border-b"
                      }`}
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom cap ── */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="absolute -bottom-3 left-6 md:left-1/2 -translate-x-1/2"
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 shadow-lg shadow-emerald-500/30" />
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
