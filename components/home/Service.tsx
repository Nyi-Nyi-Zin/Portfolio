"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import ServiceCard from "./ServiceCard";
import SectionHeader from "../common/SectionHeader";

function Service() {
  return (
    <section
      id="service"
      className="flex flex-col items-center border-b border-zinc-300 py-16 sm:py-20 dark:border-zinc-700/50"
    >
      <SectionHeader
        label="What I Offer"
        title="Services"
        subtitle="Software development and practical programming training to bring your ideas to life and help you grow your skills"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
        className="grid w-full grid-cols-1 gap-6 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="min-w-0 h-full"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <ServiceCard item={service} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Service;
