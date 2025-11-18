import { NavLinkId } from "@/lib/constants";
import { useEffect, useState } from "react";

interface NavButtonProps {
  link: {
    id: NavLinkId;
    label: string;
  };
  isActive: boolean;
  fillOrigin: "left" | "right";
  onClick: (id: NavLinkId) => void;
}

export function NavButton({
  link,
  isActive,
  fillOrigin,
  onClick,
}: NavButtonProps) {
  const [currentOrigin, setCurrentOrigin] = useState(fillOrigin);

  useEffect(() => {
    if (isActive) {
      setCurrentOrigin(fillOrigin);
    }
  }, [isActive, fillOrigin]);

  return (
    <button
      onClick={() => onClick(link.id)}
      aria-current={isActive ? "page" : undefined}
      className="relative overflow-hidden px-4 py-2 rounded-lg text-foreground dark:text-foreground-dark focus:outline-none btn-gradient-hover w-full text-start"
    >
      {/* Animated background */}
      <span
        className={`absolute inset-0 ${
          currentOrigin === "left" ? "origin-left" : "origin-right"
        } ${
          isActive ? "scale-x-100 bg-primary" : "scale-x-0"
        } transition-all duration-300 ease-in delay-75 z-0`}
      />

      {/* Text label */}
      <span
        className={`relative z-20 transition-colors duration-300 ${
          isActive ? "text-white dark:text-white" : ""
        }`}
      >
        {link.label}
      </span>
    </button>
  );
}
