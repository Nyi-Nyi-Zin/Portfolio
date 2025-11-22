"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/store/useSearch";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function BlogNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchKey = useSearch((state) => state.searchKey);
  const setSearchKey = useSearch((state) => state.setSearchKey);

  return (
    <nav
      className="sticky top-0 z-50 bg-background text-foreground shadow-md"
      aria-label="Main navigation"
    >
      <div className="mx-4 md:mx-10 flex items-center justify-between py-3">
        {/* Logo Section */}
        <Link
          href={"/"}
          // Fixed: 'bg-linear-to-r' isn't standard Tailwind, changed to 'bg-gradient-to-r'
          className="flex gap-0 rounded-2xl hover:bg-linear-to-r hover:from-blue-100 hover:via-blue-50 hover:to-white dark:hover:from-blue-900/20 dark:hover:via-blue-800/20 dark:hover:to-transparent p-2"
        >
          <Image alt="logo" src={"/logo.png"} width={50} height={40} />
          <div className="hidden sm:block">
            {" "}
            {/* Optional: Hide text on super small phones if needed */}
            <p className="text-base font-bold px-2">NyiNyiZin</p>
            <p className="text-sm  px-2">Portfolio</p>
          </div>
        </Link>

        {/* 
           Search Bar Section 
           1. Changed 'w-150' (invalid usually) to 'w-full max-w-md'.
           2. Added 'hidden md:block' or logic to handle mobile sizing so it doesn't crush the logo.
        */}
        <div className="relative hidden sm:block w-full  mx-4 max-w-3xl">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
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
            {/* Added Search to Mobile Menu so mobile users can search too */}
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
            <div className="flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default BlogNavBar;
