"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";

import { useState } from "react";
import Image from "next/image";
import { NavLinkId, navLinks } from "@/lib/constants";
import { Menu, X, BookOpen, Search } from "lucide-react";

import { NavButton } from "@/components/common/header/NavButton";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useMobileMenuLock } from "@/hooks/useMobileMenuLock";
import { scrollToSection } from "@/utils/scroll";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { TagTabs, TagValue } from "@/components/tag-tabs";
import { Card } from "@/components/ui/card";

export default function BlogLayout() {
  const [selectedTab, setSelectedTab] = useState<TagValue>("sharing");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-background text-foreground shadow-md"
        aria-label="Main navigation"
      >
        <div className="mx-4 md:mx-10 flex items-center justify-between py-3">
          <Link
            href={"/"}
            className=" flex gap-0 rounded-2xl  hover:bg-linear-to-r hover:from-blue-100 hover:via-blue-100 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:via-blue-800/20 dark:hover:to-blue-900/20 p-2"
          >
            <Image alt="logo" src={"/logo.png"} width={50} height={40} />
            <div>
              <p className="text-blue-400 text-base">NyiNyiZin</p>
              <p className="text-sm">PORTFOLIO</p>
            </div>
          </Link>
          <div className="relative w-150">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8 " />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

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
              className="md:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <div className="md:hidden absolute top-full left-0 right-0 border-t border-ring/40 shadow-xl bg-background z-50 w-[50%] h-screen">
              {/* Mobile Actions */}
              <div className="flex flex-col gap-2 p-4 border-t border-ring/50 items-end">
                <ThemeToggle />
              </div>
            </div>
          </>
        )}
      </nav>
      <Card className="flex max-w-5xl h-full mx-auto px-10 items-center justify-center py-8 my-5">
        <TagTabs value={selectedTab} onValueChange={setSelectedTab} />
        <div className="grid grid-cols-4  w-full gap-4">
          <Card className="h-75 flex items-start justify-between  ">
            <Link href={`/blogs/${2}`} className=" mx-5">
              <Image
                src="/Miracle.jpg"
                width={190}
                height={190}
                alt="Picture of the author"
                className="rounded-2xl  h-32 sm:h-40 lg:h-35 object-cover"
              />
              <h1 className="font-bold">Recruiter are Not Aye Mee San</h1>
              <p className="text-slate-600 text-start ">Hello World</p>
              <p className="mt-6">12.2.2000</p>
            </Link>
          </Card>
          {/* <Card className="h-75 flex items-start justify-between  ">
            <div className=" mx-5">
              <Image
                src="/Miracle.jpg"
                width={190}
                height={190}
                alt="Picture of the author"
                className="rounded-2xl  h-32 sm:h-40 lg:h-35 object-cover"
              />
              <h1 className="font-bold">Recruiter are Not Aye Mee San</h1>
              <p className="text-slate-600 text-start ">Hello World</p>
              <p className="mt-6">12.2.2000</p>
            </div>
          </Card>
          <Card className="h-75 flex items-start justify-between  ">
            <div className=" mx-5">
              <Image
                src="/Miracle.jpg"
                width={190}
                height={190}
                alt="Picture of the author"
                className="rounded-2xl  h-32 sm:h-40 lg:h-35 object-cover"
              />
              <h1 className="font-bold">Recruiter are Not Aye Mee San</h1>
              <p className="text-slate-600 text-start ">Hello World</p>
              <p className="mt-6">12.2.2000</p>
            </div>
          </Card>
          <Card className="h-75 flex items-start justify-between  ">
            <div className=" mx-5">
              <Image
                src="/Miracle.jpg"
                width={190}
                height={190}
                alt="Picture of the author"
                className="rounded-2xl  h-32 sm:h-40 lg:h-35 object-cover"
              />
              <h1 className="font-bold">Recruiter are Not Aye Mee San</h1>
              <p className="text-slate-600 text-start ">Hello World</p>
              <p className="mt-6">12.2.2000</p>
            </div>
          </Card>
          <Card className="h-75 flex items-start justify-between  ">
            <div className=" mx-5">
              <Image
                src="/Miracle.jpg"
                width={190}
                height={190}
                alt="Picture of the author"
                className="rounded-2xl  h-32 sm:h-40 lg:h-35 object-cover"
              />
              <h1 className="font-bold">Recruiter are Not Aye Mee San</h1>
              <p className="text-slate-600 text-start ">Hello World</p>
              <p className="mt-6">12.2.2000</p>
            </div>
          </Card>
          <Card className="h-75 flex items-start justify-between  ">
            <div className=" mx-5">
              <Image
                src="/Miracle.jpg"
                width={190}
                height={190}
                alt="Picture of the author"
                className="rounded-2xl  h-32 sm:h-40 lg:h-35 object-cover"
              />
              <h1 className="font-bold">Recruiter are Not Aye Mee San</h1>
              <p className="text-slate-600 text-start ">Hello World</p>
              <p className="mt-6">12.2.2000</p>
            </div>
          </Card>
          <Card className="h-75 flex items-start justify-between  ">
            <div className=" mx-5">
              <Image
                src="/Miracle.jpg"
                width={190}
                height={190}
                alt="Picture of the author"
                className="rounded-2xl  h-32 sm:h-40 lg:h-35 object-cover"
              />
              <h1 className="font-bold">Recruiter are Not Aye Mee San</h1>
              <p className="text-slate-600 text-start ">Hello World</p>
              <p className="mt-6">12.2.2000</p>
            </div>
          </Card> */}
        </div>
      </Card>
    </>
  );
}
