"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { type ProjectItem } from "@/lib/constants";

type ProjectCardProps = {
  item: ProjectItem;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1">
        {/* Image container */}
        <div className="relative overflow-hidden h-52">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-5">
            <div className="flex gap-3">
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/30 transition-colors duration-300"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live
                </a>
              )}
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/30 transition-colors duration-300"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
              )}
            </div>
          </div>

          {/* Featured badge */}
          {item.featured && (
            <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/90 backdrop-blur-sm text-amber-900 text-xs font-bold shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {item.title}
          </h3>

          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
            {item.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-1">
            {item.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium px-2.5 py-0.5 bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 border-0 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
