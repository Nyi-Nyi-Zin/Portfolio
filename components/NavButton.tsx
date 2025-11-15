import { NavLinkId } from "@/lib/constants";

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
  return (
    <button
      onClick={() => onClick(link.id)}
      aria-current={isActive ? "page" : undefined}
      className="relative overflow-hidden px-4 py-2 rounded-lg text-foreground dark:text-foreground-dark focus:outline-none btn-gradient-hover"
    >
      {/* Animated background */}
      <span
        className={`absolute inset-0 ${
          fillOrigin === "left" ? "origin-left" : "origin-right"
        } ${
          isActive ? "scale-x-100 bg-primary" : "scale-x-0"
        } transition-transform duration-300 ease-in-out z-0`}
      />

      {/* Text label */}
      <span
        className={`relative z-20 ${
          isActive ? "text-white dark:text-white" : ""
        }`}
      >
        {link.label}
      </span>
    </button>
  );
}
