import { useEffect } from "react";
import { NavLinkId } from "@/lib/constants";

export const useSectionObserver = (
  activeSection: NavLinkId,
  setActiveSection: (
    section: NavLinkId | ((prev: NavLinkId) => NavLinkId)
  ) => void,
  setPrevSection: (section: NavLinkId | null) => void
) => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as NavLinkId;

          setActiveSection((prev: NavLinkId) => {
            if (prev !== id) {
              setPrevSection(prev);
            }
            return id;
          });
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);
};
