"use client";

import { useEffect } from "react";
import { NavLinkId, navLinks } from "@/lib/constants";

export function useSectionObserver(
  activeSection: NavLinkId,
  setActiveSection: (id: NavLinkId) => void,
  setPrevSection: (id: NavLinkId | null) => void
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const mostVisible = visible.reduce((prev, curr) =>
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev
        );

        const newSection = mostVisible.target.id as NavLinkId;

        if (newSection !== activeSection) {
          setPrevSection(activeSection);
          setActiveSection(newSection);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        rootMargin: "-100px 0px -66% 0px",
      }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [activeSection]);
}
