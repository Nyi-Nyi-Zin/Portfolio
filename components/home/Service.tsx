"use client";

import React from "react";
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {services.map((service, index) => (
          <ServiceCard key={service.title} item={service} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Service;
