import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Calendar, ChevronDown, MapPin } from "lucide-react";

export type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;

  keyAchievements: string[];
};

type ExperienceCardProps = { item: ExperienceItem };

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  const previewAchievements = item.keyAchievements.slice(0, 2);
  const moreAchievements = item.keyAchievements.slice(2);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="h-full w-full"
    >
      <Card className="relative h-full w-full gap-5 overflow-hidden px-5 py-6 sm:px-7 sm:py-7">
      {/* Left accent strip */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-violet-500 rounded-l-lg" />

      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
        <div className="min-w-0 space-y-2">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground lg:text-xl">
            {item.title}
          </h3>

          {item.companyUrl ? (
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-base font-semibold leading-relaxed text-violet-700 transition-colors hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
            >
              {item.company}
            </a>
          ) : (
            <p className="text-base font-semibold leading-relaxed text-violet-700 dark:text-violet-400">
              {item.company}
            </p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar size={14} className="shrink-0" aria-hidden="true" />
              {item.period}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={14} className="shrink-0" aria-hidden="true" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Employment badge */}
        <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 border border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700">
          Full-Time
        </span>
      </div>

      {/* Achievements section */}
      <div className="flex flex-1 flex-col">
        {/* Section label + divider */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground whitespace-nowrap">
            Key achievements
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <ul className="space-y-2.5">
          {previewAchievements.map((achieve, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="flex items-start gap-2.5"
            >
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="min-w-0 text-sm leading-7 text-muted-foreground lg:text-base">
                {achieve}
              </span>
            </motion.li>
          ))}
        </ul>

        {moreAchievements.length > 0 && (
          <details className="group mt-auto pt-5">
            <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-lg text-sm font-medium text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-violet-300 [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">View more ({moreAchievements.length})</span>
              <span className="hidden group-open:inline">View less</span>
              <span className="sr-only">about {item.title} at {item.company}</span>
              <ChevronDown className="size-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <ul className="mt-4 space-y-2.5">
              {moreAchievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span className="min-w-0 text-sm leading-7 text-muted-foreground lg:text-base">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
