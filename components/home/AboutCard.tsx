"use client";

import { BriefcaseBusiness, Code, ShieldCheck, Zap } from "lucide-react";
import React from "react";

const iconMap = {
  briefcase: BriefcaseBusiness,
  code: Code,
  zap: Zap,
  shield: ShieldCheck,
};

const gradientMap: Record<string, string> = {
  red: "from-rose-500 to-red-400",
  blue: "from-blue-600 to-cyan-500",
  green: "from-emerald-500 to-teal-400",
  purple: "from-violet-500 to-purple-400",
};

const textGlowMap: Record<string, string> = {
  red: "group-hover:text-red-500",
  blue: "group-hover:text-blue-500",
  green: "group-hover:text-emerald-500",
  purple: "group-hover:text-violet-500",
};

type AboutCardProps = {
  title: string;
  value: string;
  icon: keyof typeof iconMap;
  color?: string;
};

export default function AboutCard({
  title,
  value,
  icon,
  color = "blue",
}: AboutCardProps) {
  const IconComponent = iconMap[icon];
  const gradient = gradientMap[color] || gradientMap.blue;
  const hoverTextColor = textGlowMap[color] || textGlowMap.blue;

  return (
    <div className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 transition-all duration-500 hover:shadow-2xl hover:border-transparent hover:-translate-y-1 flex flex-col items-center justify-center gap-4">
        {/* Background gradient on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}
        />

        {/* Top accent line */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Icon Container */}
        <div
          className={`relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
        >
          <IconComponent className="w-7 h-7 text-white" />
        </div>

        {/* Value */}
        <h3
          className={`text-3xl font-black text-zinc-900 dark:text-white transition-colors duration-300 ${hoverTextColor}`}
        >
          {value}
        </h3>

        {/* Title */}
        <p className="text-sm font-medium text-center text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
          {title}
        </p>
      </div>
    </div>
  );
}
