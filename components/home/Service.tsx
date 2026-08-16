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
      className="min-h-screen flex flex-col items-center border-b border-zinc-300 dark:border-zinc-700/50 py-20"
    >
      <SectionHeader
        label="What I Offer"
        title="Services"
        subtitle="Comprehensive development services tailored to bring your ideas to life with modern technologies and best practices"
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
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
