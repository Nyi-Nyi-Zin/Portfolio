"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  // ❗ React 19 safe: mounted = true only when window exists
  const [mounted, setMounted] = useState(() => typeof window !== "undefined");

  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  const applyTheme = useCallback((t: "light" | "dark" | "system") => {
    if (t === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    } else {
      document.documentElement.classList.toggle("dark", t === "dark");
    }
  }, []);

  // Load saved theme (allowed: because we're not calling setState synchronously)
  useEffect(() => {
    if (!mounted) return;

    const saved =
      (localStorage.getItem("theme") as "light" | "dark" | "system" | null) ||
      "system";

    // ✔ this is OK because effect callback (media query) calls setState, not the effect itself
    queueMicrotask(() => {
      setTheme(saved);
      applyTheme(saved);
    });

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const current = localStorage.getItem("theme") || "system";
      if (current === "system") applyTheme("system");
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [mounted, applyTheme]);

  useEffect(() => {
    if (mounted) applyTheme(theme);
  }, [theme, mounted, applyTheme]);

  const changeTheme = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          {theme === "light" && <Sun className="h-5 w-5" />}
          {theme === "dark" && <Moon className="h-5 w-5" />}
          {theme === "system" && <Monitor className="h-5 w-5" />}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeTheme("light")}>
          <Sun className="mr-2 h-4 w-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
