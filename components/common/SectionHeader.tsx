"use client";

import React from "react";
import { motion } from "framer-motion";
import { Title } from "../common/Title";
import { Text } from "../common/Text";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  label?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  label,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 space-y-4"
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
          {label}
        </span>
      )}
      <Title className="text-center">{title}</Title>
      <Text className="text-center max-w-2xl mx-auto">{subtitle}</Text>
    </motion.div>
  );
};

export default SectionHeader;
