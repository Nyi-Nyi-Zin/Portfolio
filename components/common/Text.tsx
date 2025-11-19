import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

interface TextProps {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties; // use proper style object
}

export const Text = ({ children, className, style }: TextProps) => {
  return (
    <p
      className={cn(
        "text-base md:text-lg text-slate-600 dark:text-slate-300", // default styles
        className
      )}
      style={style}
    >
      {children}
    </p>
  );
};
