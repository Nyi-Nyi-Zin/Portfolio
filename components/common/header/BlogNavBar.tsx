"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Brand } from "@/components/common/header/Brand";
import { useLanguage } from "@/store/useLanguage";

export default function BlogNavBar() {
  const { lang, setLang } = useLanguage();
  useEffect(() => {
    const queryLang = new URLSearchParams(window.location.search).get("lang");
    const savedLang = localStorage.getItem("lang");
    const preferred = queryLang === "en" || queryLang === "mm" ? queryLang : savedLang;
    if (preferred === "en" || preferred === "mm") setLang(preferred);
  }, [setLang]);
  const changeLang = (next: "en" | "mm") => {
    setLang(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  };
  return <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/95 text-foreground backdrop-blur-xl" aria-label="Journal navigation">
    <div className="mx-auto flex min-h-20 max-w-[1280px] items-center justify-between gap-2 px-3 sm:gap-6 sm:px-8">
      <Brand />
      <div className="hidden items-center gap-7 lg:flex">
        <Link href="/" className="inline-flex items-center gap-1.5 rounded-md py-2 text-sm text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{lang === "mm" ? "ပင်မစာမျက်နှာ" : "Portfolio"}<ArrowUpRight className="size-3.5" aria-hidden="true" /></Link>
        <Link href={`/blogs?lang=${lang}`} className="inline-flex items-center gap-2 rounded-md py-2 text-sm font-semibold text-primary focus-visible:outline-2 focus-visible:outline-primary"><BookOpen className="size-4" aria-hidden="true" />{lang === "mm" ? "ဆောင်းပါးများ" : "Journal"}</Link>
      </div>
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
        <div role="group" aria-label={lang === "en" ? "Language" : "ဘာသာစကား"} className="inline-flex items-center rounded-full border border-border bg-muted/50 p-1 shadow-xs">
          <button type="button" onClick={() => changeLang("en")} lang="en" aria-label="English" aria-pressed={lang === "en"} className="min-h-9 min-w-8 cursor-pointer rounded-full px-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:shadow-sm motion-reduce:transition-none sm:min-w-10 sm:px-3">EN</button>
          <button type="button" onClick={() => changeLang("mm")} lang="my" aria-label="မြန်မာ" aria-pressed={lang === "mm"} className="min-h-9 min-w-8 cursor-pointer rounded-full px-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:shadow-sm motion-reduce:transition-none sm:px-3"><span className="min-[360px]:hidden">MM</span><span className="hidden min-[360px]:inline">မြန်မာ</span></button>
        </div>
        <ThemeToggle className="border-0 bg-transparent shadow-none" />
      </div>
    </div>
  </nav>;
}
