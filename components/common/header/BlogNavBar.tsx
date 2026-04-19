"use client";

import { TagTabs } from "@/components/tag-tabs";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/store/useSearch";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/store/useLanguage";

function BlogNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const searchKey = useSearch((state) => state.searchKey);
  const setSearchKey = useSearch((state) => state.setSearchKey);

  const toggleLang = () => setLang(lang === "en" ? "mm" : "en");

  return (
    <nav
      className="sticky top-0 z-50 bg-background text-foreground shadow-md"
      aria-label="Main navigation"
    >
      <div className="mx-4 md:mx-10 flex items-center justify-between py-3">
        {/* Logo Section */}
        <Link
          href={"/"}
          className="flex items-center gap-2 rounded-2xl hover:bg-linear-to-r hover:from-blue-100 hover:via-blue-50 hover:to-white dark:hover:from-blue-900/20 dark:hover:via-blue-800/20 dark:hover:to-transparent p-2"
        >
          <Image
            alt="Nyi Nyi Zin portfolio logo"
            src="/logo.png"
            width={40}
            height={40}
            className="shrink-0 rounded-lg object-contain"
            priority
          />
          <div className="hidden sm:block leading-tight">
            <p className="text-base font-bold px-0.5">NyiNyiZin</p>
            <p className="text-sm text-muted-foreground px-0.5">Portfolio</p>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="relative hidden sm:block w-full mx-4 max-w-3xl">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>

        {/* TagTabs + Language Toggle */}

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            suppressHydrationWarning
            className="px-3 py-1 border rounded text-sm text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {lang === "en" ? "မြန်မာ" : "English"}
          </button>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="md:hidden absolute top-full left-0 right-0 border-t border-ring/40 shadow-xl bg-background z-50 p-4">
            <div className="relative w-full mb-4">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <ThemeToggle />
              <button
                onClick={toggleLang}
                className="px-3 py-1 border rounded text-sm text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {lang === "en" ? "မြန်မာ" : "English"}
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default BlogNavBar;
