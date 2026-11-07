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
        "text-base leading-7 text-slate-600 md:text-lg md:leading-8 dark:text-slate-300",
        className
      )}
      style={style}
    >
      {children}
    </p>
  );
};
