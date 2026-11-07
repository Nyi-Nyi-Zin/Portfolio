"use client";

import React from "react";
import { motion } from "framer-motion";
import { type ServiceItem } from "@/lib/constants";

type ServiceCardProps = {
  item: ServiceItem;
  index: number;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 sm:p-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5">
        {/* Gradient glow on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`}
        />

        {/* Icon container */}
        <div
          className={`relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="relative mb-3 text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-white lg:text-xl">
          {item.title}
        </h3>

        <p className="relative text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {item.description}
        </p>

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500 rounded-b-2xl`}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
