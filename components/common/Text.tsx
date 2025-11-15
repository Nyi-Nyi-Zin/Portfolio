import { cn } from "@/lib/utils";
import React from "react";

interface TextProps {
  className?: string;
  children: React.ReactNode;
  style?: string;
}

export const Text = ({ children, className, style }: TextProps) => {
  return (
    <p
      className={cn(
        "text-base md:text-lg text-slate-600 dark:text-slate-300 ", // default normal text styles
        className,
        style
      )}
    >
      {children}
    </p>
  );
};
