"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../../ui/button";
import { NavLinkId, navLinks } from "@/lib/constants";
import { Menu, X, BookOpen, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "../../theme/theme-toggle";
import { NavButton } from "@/components/common/header/NavButton";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { scrollToSection } from "@/utils/scroll";
import Link from "next/link";
import { Brand } from "@/components/common/header/Brand";

const mobileLinks: { id: NavLinkId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skill", label: "Skills" },
  { id: "service", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function MainNavbar() {
  const [activeSection, setActiveSection] = useState<NavLinkId>("home");
  const [prevSection, setPrevSection] = useState<NavLinkId | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSectionObserver(activeSection, setActiveSection, setPrevSection);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const handleScroll = (id: NavLinkId) => {
    setIsMobileMenuOpen(false);
    requestAnimationFrame(() => {
      scrollToSection(id, document.querySelector("#main-navbar")?.clientHeight ?? 80);
    });
  };

  const getFillOrigin = (id: NavLinkId): "left" | "right" => {
    if (!prevSection) return "left";
    return navLinks.findIndex((link) => link.id === id) >
      navLinks.findIndex((link) => link.id === prevSection) ? "left" : "right";
  };

  return (
    <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <nav
        id="main-navbar"
        className="sticky top-0 z-50 bg-white text-foreground shadow-md dark:bg-[#101522]"
        aria-label="Main navigation"
      >
        <div className="mx-4 flex items-center justify-between gap-4 py-2.5 md:mx-8 2xl:mx-10">
          <Brand />

          <ul className="hidden items-center gap-1 rounded-xl border p-1.5 shadow-lg xl:flex xl:[&_button]:px-2 xl:[&_button]:text-sm 2xl:gap-2 2xl:p-2 2xl:[&_button]:px-3 dark:bg-[#1A222F]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavButton
                  link={link}
                  isActive={activeSection === link.id}
                  fillOrigin={getFillOrigin(link.id)}
                  onClick={handleScroll}
                />
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-4 xl:flex 2xl:gap-6">
            <Link href="/blogs" className="inline-flex items-center gap-2 rounded-lg py-2 text-sm text-muted-foreground transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary 2xl:text-base dark:hover:text-blue-400">
              <BookOpen className="size-4" aria-hidden="true" />
              Journal
            </Link>
            <ThemeToggle className="border-0 bg-transparent shadow-none hover:bg-muted" />
            <Button onClick={() => handleScroll("contact")} className="h-10 gap-2 rounded-xl bg-[#2460f2] px-4 text-sm font-semibold text-white shadow-md shadow-blue-600/10 hover:bg-blue-700">
              Let’s talk
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <ThemeToggle className="border-0 bg-transparent shadow-none hover:bg-muted" />
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="flex size-11 items-center justify-center rounded-xl border transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                aria-label="Open menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
          </div>
        </div>
      </nav>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-slate-950/30 xl:hidden" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-x-0 top-0 z-[70] max-h-dvh overflow-y-auto bg-white text-foreground shadow-xl focus:outline-none xl:hidden dark:bg-[#101522]">
          <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
          <div className="mx-4 flex items-center justify-between gap-3 py-2.5 md:mx-8">
            <Brand />
            <div className="flex items-center gap-3">
              <ThemeToggle className="border-0 bg-transparent shadow-none hover:bg-muted" />
              <Dialog.Close asChild>
                <button type="button" aria-label="Close menu" className="flex size-11 items-center justify-center rounded-xl border transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  <X className="size-6" aria-hidden="true" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          <nav aria-label="Mobile navigation" className="px-4 pt-6 pb-5 md:px-8">
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
              {mobileLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleScroll(link.id)}
                    aria-current={activeSection === link.id ? "page" : undefined}
                    className={`w-full rounded-xl px-3.5 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-base ${activeSection === link.id ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 flex items-center gap-2.5 border-t pt-5 text-sm text-muted-foreground transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-base dark:hover:text-blue-400">
              <BookOpen className="size-4" aria-hidden="true" />
              Read the journal
              <ArrowUpRight className="ml-auto size-4" aria-hidden="true" />
            </Link>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MainNavbar;
