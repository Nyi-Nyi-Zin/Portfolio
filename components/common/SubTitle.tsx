import { cn } from "@/lib/utils";
import React from "react";

interface SubTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const SubTitle = ({ children, className }: SubTitleProps) => {
  return (
    <h2
      className={cn(
        "text-xl md:text-2xl lg:text-3xl font-bold text-black",
        className
      )}
    >
      {children}
    </h2>
  );
};
