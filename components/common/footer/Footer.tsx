"use client";

import React from "react";
import { navLinks, contactInfo } from "@/lib/constants";
import { scrollToSection } from "@/utils/scroll";
import Link from "next/link";
import { ArrowUp, Mail, Github, Linkedin, User } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#101522] border-t border-zinc-200 dark:border-zinc-800 pt-12 pb-8 w-full font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          {/* Logo & Bio */}
          <div className="flex flex-col items-start gap-4">
            <Link href={"/"} className="flex items-center gap-2 group">
              {/* <Image
                alt="Nyi Nyi Zin portfolio logo"
                src="/logo.png"
                width={40}
                height={40}
                className="shrink-0 rounded-lg object-contain"
              /> */}
            
                <p className="text-base font-bold text-foreground">NyiNyiZin</p>
                {/* <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Portfolio
                </p> */}
         
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mt-2">
              Passionate software engineer building modern, accessible, and scalable digital experiences. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center mt-4 md:mt-0">
            <div className="w-full md:w-auto">
              <h3 className="font-semibold text-lg text-foreground border-b border-zinc-200 dark:border-zinc-800 pb-2 mb-4 w-full">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary hover:underline text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
            <div className="w-full md:w-auto">
              <h3 className="font-semibold ml-0 md:ml-auto text-lg text-foreground border-b border-zinc-200 dark:border-zinc-800 pb-2 mb-4 max-w-max">Connect</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/Nyi-Nyi-Zin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/nyi-nyi-zin-8515742b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail size={18} /> {contactInfo.email}
                </a>
                <span className="flex items-center gap-3 text-muted-foreground text-sm cursor-default">
                  <User size={18} /> Nyi Nyi Zin
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2026 Nyi Ny Zin. Made with ❤️ using Next.js
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 px-4 py-2 rounded-full text-foreground text-sm font-medium transition-all shadow-sm"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

