import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Calendar, MapPin } from "lucide-react";

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
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="w-full"
    >
      <Card className="relative w-full my-4 px-8 py-6 overflow-hidden">
      {/* Left accent strip */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-violet-500 rounded-l-lg" />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="space-y-1">
          <h2 className="text-xl font-medium text-foreground leading-snug">
            {item.title}
          </h2>

          {item.companyUrl ? (
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-medium text-violet-600 hover:text-violet-700 transition-colors"
            >
              {item.company}
            </a>
          ) : (
            <p className="text-lg font-medium text-violet-600">
              {item.company}
            </p>
          )}

          {/* Meta row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar size={14} />
              {item.period}
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-muted-foreground/40" />
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={14} />
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
      <div>
        {/* Section label + divider */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground whitespace-nowrap">
            Key achievements
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <ul className="space-y-2.5">
          {item.keyAchievements.map((achieve, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="flex items-start gap-2.5"
            >
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="text-base text-muted-foreground leading-relaxed">
                {achieve}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
