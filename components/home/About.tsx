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
            I am a Full-Stack Software Developer and team lead with 7+ years of experience in the IT field since 2018. I build and ship web, mobile, and backend systems, with experience in system architecture, secure APIs, database design, and DevOps.
          </Text>
          <br />
          <Text className="leading-relaxed">
            I graduated with a Bachelor of Computer Science from
            <strong> Polytechnic University Maubin in 2025</strong>. Alongside my professional work, I continue to strengthen my skills through hands-on projects and collaboration with development teams.
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
