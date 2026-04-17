"use client";

import React from "react";
import { projects } from "@/lib/constants";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../common/SectionHeader";

function Project() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center border-b border-zinc-300 dark:border-zinc-700/50 py-20"
    >
      <SectionHeader
        label="My Work"
        title="Projects"
        subtitle="A showcase of projects I've built — from full-stack platforms to mobile apps, each solving real-world problems"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} item={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Project;
