import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
  style?: string;
}

export const Title = ({ children, className, style }: TitleProps) => {
  return (
    <h2 className={cn("font-display text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl", className, style)}>
      {children}
    </h2>
  );
};
