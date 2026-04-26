"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Title } from "../common/Title";
import { Text } from "../common/Text";
import AnimatedTextButton from "../common/AnimatedButton";
import { skills } from "@/lib/constants";
import { Button } from "../ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex lg:flex-row flex-col border-b border-zinc-300 w-full mx-auto justify-between gap-12 items-center my-5 lg:my-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1 space-y-6"
      >
        <Title className="lg:text-start text-center">Nyi Nyi Zin</Title>

        <Text className="text-center w-full lg:text-start ">
          Full-Stack Developer | Next.js, Golang, React.js, Express.js Expert
        </Text>

        <div className="flex space-y-8 items-center justify-center lg:justify-start py-8 ">
          <AnimatedTextButton texts={skills} interval={2000} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-3 flex-col lg:flex-row"
        >
          <Button
            type="button"
            className="px-8 py-6 text-base font-bold flex items-center gap-4 text-white"
            style={{ fontFamily: "var(--font-inter)" }}
            onClick={() => {
              window.history.replaceState(null, "", "#contact");
              scrollToSection("contact");
            }}
          >
            Hire Me
            <ArrowRight className="w-9 h-9" />
          </Button>

          <Button
            asChild
            className="px-8 py-6 text-base font-bold flex items-center gap-4 text-white bg-[#0d4768] hover:bg-[#052f47]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <a
              href={process.env.NEXT_PUBLIC_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="w-10 h-10" />
              View CV
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="flex-1"
      >
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full transition-transform duration-500 ease-in-out hover:scale-102">
          <Image
            src="/Miracle.jpg"
            alt="Nyi Nyi Zin - Full-Stack Developer portrait"
            width={400}
            height={400}
            priority
            loading="eager"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-108"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
