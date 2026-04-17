"use client";

import { motion } from "framer-motion";
import { Text } from "../common/Text";
import { aboutCardData } from "@/lib/constants";
import AboutCard from "./AboutCard";
import SectionHeader from "../common/SectionHeader";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center border-b border-zinc-300 dark:border-zinc-700/50 py-20"
    >
      <SectionHeader
        label="Who I Am"
        title="About Me"
        subtitle="A passionate developer dedicated to crafting high-quality software solutions"
      />

      <div className="flex flex-col lg:flex-row w-full gap-10">
        {/* Left side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <Text className="leading-relaxed">
            I am a passionate Full-Stack Software Developer, specialized in web
            and mobile development, with experience in multiple programming
            languages. Experienced in algorithms, data structures, and software
            architecture, with a focus on building scalable and maintainable
            applications across frontend and backend. Committed to continuous
            learning, solving complex problems, and delivering high-quality
            software.
          </Text>
          <br />
          <Text className="leading-relaxed">
            <strong>During my fourth year,</strong> I paused my university
            studies due to the country&apos;s political situation and fully
            committed to advancing my career. I am currently resuming my
            university studies while continuing to work remotely, effectively
            balancing both academic and professional responsibilities.
          </Text>
          <br />
          <Text className="leading-relaxed">
            I am currently leading a software development team, where I am
            responsible for defining system architecture, designing scalable and
            efficient project workflows, and ensuring best practices across the
            development lifecycle. I actively mentor junior developers, support
            their technical growth, and foster a collaborative team environment
            to deliver high-quality software solutions.
          </Text>
        </motion.div>

        {/* Right side: Cards */}
        <div className="lg:w-1/2 grid lg:grid-cols-2 grid-cols-2 gap-5">
          {aboutCardData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AboutCard
                title={item.title}
                value={item.value}
                icon={item.icon}
                color={item.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
