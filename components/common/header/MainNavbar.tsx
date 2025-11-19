"use client";

import { useState } from "react";
import { Button } from "../../ui/button";
import { NavLinkId, navLinks } from "@/lib/constants";
import { Menu, X, BookOpen } from "lucide-react";
import { ThemeToggle } from "../../theme/theme-toggle";
import { NavButton } from "@/components/common/header/NavButton";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useMobileMenuLock } from "@/hooks/useMobileMenuLock";
import { scrollToSection } from "@/utils/scroll";
import Link from "next/link";
import Image from "next/image";

function MainNavbar() {
  const [activeSection, setActiveSection] = useState<NavLinkId>("home");
  const [prevSection, setPrevSection] = useState<NavLinkId | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSectionObserver(activeSection, setActiveSection, setPrevSection);
  useMobileMenuLock(isMobileMenuOpen, () => setIsMobileMenuOpen(false));

  const observedLinks = navLinks;

  const handleScroll = (id: NavLinkId) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  const getFillOrigin = (id: NavLinkId): "left" | "right" => {
    if (!prevSection) return "left";

    const currentIndex = observedLinks.findIndex((l) => l.id === id);
    const prevIndex = observedLinks.findIndex((l) => l.id === prevSection);

    return currentIndex > prevIndex ? "left" : "right";
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-[#FFFFFF] dark:bg-[#101522] text-foreground shadow-md"
      aria-label="Main navigation"
    >
      <div className="mx-4 md:mx-10 flex items-center justify-between py-3">
        <Link
          href={"/"}
          className="flex gap-0 rounded-2xl hover:bg-linear-to-r hover:from-blue-100 hover:via-blue-50 hover:to-white dark:hover:from-blue-900/20 dark:hover:via-blue-800/20 dark:hover:to-transparent p-2"
        >
          <Image alt="logo" src={"/logo.png"} width={50} height={40} />
          <div className="hidden sm:block">
            <p className="text-slate-600 text-base font-bold px-2">NyiNyiZin</p>
            <p className="text-sm text-slate-700 px-2">Portfolio</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-3 rounded-2xl p-3 dark:bg-[#1A222F] shadow-lg border overflow-visible ">
          {observedLinks.map((link) => (
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
        <Button variant="destructive" asChild>
          <Link href="/blogs" className="flex items-center gap-2">
            <BookOpen />
            Blogs
          </Link>
        </Button>
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu with Backdrop */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop - Blurs the background content */}
          <div
            className="md:hidden fixed inset-0 top-23 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div className="md:hidden absolute top-full left-0 right-0 border-t border-ring/40 shadow-xl bg-background z-50 w-[50%] h-screen">
            <ul className="flex flex-col p-4 space-y-2 ">
              {observedLinks.map((link) => (
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

            {/* Mobile Actions */}
            <div className="flex flex-col gap-2 p-4 border-t border-ring/50 items-end">
              <ThemeToggle />
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default MainNavbar;
