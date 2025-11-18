import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
  style?: string;
}

export const Title = ({ children, className, style }: TitleProps) => {
  return (
    <h1 className={cn("text-4xl md:text-6xl font-bold ", className, style)}>
      {children}
    </h1>
  );
};
