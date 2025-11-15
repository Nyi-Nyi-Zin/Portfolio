"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { NavLinkId, navLinks } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme/theme-toggle";
import { NavButton } from "@/components/NavButton";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useMobileMenuLock } from "@/hooks/useMobileMenuLock";
import { scrollToSection } from "@/utils/scroll";

function Navbar() {
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
      className="sticky top-0 z-50 bg-background text-foreground shadow-lg"
      aria-label="Main navigation"
    >
      <div className="mx-4 md:mx-10 flex items-center justify-between py-2">
        {/* Logo */}
        <Button
          variant="ghost"
          className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
          onClick={() => handleScroll("home")}
        >
          Portfolio
        </Button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-3 rounded-2xl p-3 border">
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Let's Talk
          </Button>

          <Button
            variant="ghost"
            aria-label="Change language"
            className="hover:bg-muted/50 transition-colors"
          >
            🌐
          </Button>

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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-muted/60 border-t border-ring/50 shadow-xl">
          <ul className="flex flex-col p-4 space-y-2">
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
          <div className="flex flex-col gap-2 p-4 border-t border-ring/50">
            <Button
              variant="default"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Let's Talk
            </Button>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                aria-label="Change language"
                className="flex-1 hover:bg-muted/50 transition-colors"
              >
                🌐
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
