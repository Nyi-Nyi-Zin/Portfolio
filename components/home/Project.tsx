"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/constants";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../common/SectionHeader";
import { Button } from "../ui/button";

function Project() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return projects.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const scrollToProjects = () => {
    window.history.replaceState(null, "", "#projects");
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePageChange = (targetPage: number) => {
    setCurrentPage(targetPage);
    scrollToProjects();
  };

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

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.slug} item={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          {pages.map((page) => (
            <Button
              key={page}
              type="button"
              size="sm"
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </motion.div>
      )}
    </section>
  );
}

export default Project;
