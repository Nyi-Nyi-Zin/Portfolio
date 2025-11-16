"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Box,
  Braces,
  Code2,
  PlayIcon,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Play } from "next/font/google";
import { useState, useEffect } from "react";

interface AnimatedButtonProps {
  texts: string[];
  interval?: number;
  className?: string;
  onTextChange?: (text: string, index: number) => void;
}

const AnimatedTextButton: React.FC<AnimatedButtonProps> = ({
  texts,
  interval = 2000,
  className = "",
  onTextChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(nextIndex);
        setIsVisible(true);

        if (onTextChange) {
          onTextChange(texts[nextIndex], nextIndex);
        }
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, texts, interval, onTextChange]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={
            className ||
            "px-10 py-4 bg-white text-purple-600 font-bold text-xl rounded-2xl shadow-2xl border hover:shadow-3xl  cursor-pointer"
          }
        >
          <motion.span
            key={`text-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            {texts[currentIndex]}
            <Sparkles className="w-5 h-5" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
export default AnimatedTextButton;
