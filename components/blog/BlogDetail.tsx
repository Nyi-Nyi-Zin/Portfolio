"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Clock3, Copy, List, ArrowUp } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { useLanguage } from "@/store/useLanguage";
import { blogDate, categoryLabel, readingTime } from "@/lib/blog-presentation";
import BlogFooter from "./BlogFooter";
import styles from "./journal.module.css";

export type BlogPost = {
  id: string;
  translations: Record<"en" | "mm", { title: string; description: string; detail: string; category: string }>;
  image: string;
  createdAt: string;
};

type Section = { id: string; title: string; level: string };

function prepareArticle(html: string) {
  const sections: Section[] = [];
  const content = html.replace(/<h([23])\b([^>]*)>([\s\S]*?)<\/h\1>/gi, (_, level: string, attributes: string, title: string) => {
    const existingId = attributes.match(/\bid\s*=\s*["']([^"']+)["']/i)?.[1];
    const id = existingId || `journal-section-${sections.length + 1}`;
    const plainTitle = title.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    sections.push({ id, title: plainTitle, level });
    return existingId ? `<h${level}${attributes}>${title}</h${level}>` : `<h${level}${attributes} id="${id}">${title}</h${level}>`;
  });
  return { content, sections };
}

export default function BlogDetail({ post }: { post: BlogPost }) {
  const lang = useLanguage((state) => state.lang);
  const translation = post.translations?.[lang] || post.translations?.en;
  const contentLang = lang === "mm" && post.translations?.mm ? "my" : "en";
  const { content, sections } = useMemo(() => prepareArticle(translation?.detail || ""), [translation?.detail]);
  const [activeSection, setActiveSection] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const articleRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: articleRef, offset: ["start end", "end start"] });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-100px 0px -55% 0px" });
    articleRef.current?.querySelectorAll("h2[id], h3[id]").forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [content]);

  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setCopyState("copied"); }
    catch { setCopyState("error"); }
  };
  const copyLabel = copyState === "copied" ? (lang === "mm" ? "ကူးယူပြီးပါပြီ" : "Link copied") : (lang === "mm" ? "လင့်ခ် ကူးယူရန်" : "Copy link");
  if (!translation) return <div className="p-10 text-center">Translation unavailable</div>;

  return <div className={styles.journal}>
    <motion.div aria-hidden="true" className={styles.progress} style={{ scaleX: scrollYProgress }} />
    <div className={styles.container}>
      <div className={styles.articleTopline}>
        <Link href={`/blogs?lang=${lang}`} className={styles.backLink}><ArrowLeft className="size-4" aria-hidden="true" />{lang === "mm" ? "ဆောင်းပါးများသို့" : "Back to journal"}</Link>
        <span className={styles.toplineNote}>{lang === "mm" ? "နည်းပညာနှင့် အတွေ့အကြုံများ" : "Notes from the craft"}</span>
      </div>
      <header id="article-top" className={styles.articleHeader}>
        <p className={styles.eyebrow}>{categoryLabel(translation.category)}</p>
        <h1 lang={contentLang}>{translation.title}</h1>
        <p lang={contentLang} className={styles.articleDescription}>{translation.description}</p>
        <div className={styles.articleByline}>
          <div className={styles.author}>
            <Image src="/Miracle.jpg" width={44} height={44} alt="" className="size-11 rounded-full object-cover" />
            <div><Link href="/" className="text-sm font-semibold hover:text-primary">Nyi Nyi Zin</Link><p className="mt-0.5 text-xs text-muted-foreground">{lang === "mm" ? "Software Developer" : "Software developer & lifelong learner"}</p></div>
          </div>
          <div className={styles.articleMetadata}><span><CalendarDays className="size-4" aria-hidden="true" /><time dateTime={post.createdAt}>{blogDate(post.createdAt, lang)}</time></span><span><Clock3 className="size-4" aria-hidden="true" />{readingTime(translation.detail, contentLang === "my" ? "mm" : "en")}</span></div>
        </div>
      </header>
      {post.image && <div className={styles.articleHero}><Image src={post.image} alt={translation.title} fill sizes="(max-width: 1279px) 100vw, 1216px" className="object-cover" priority /></div>}
      <div className={`${styles.readingLayout} ${!sections.length ? styles.withoutContents : ""}`}>
        {sections.length > 0 && <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <nav aria-label={lang === "mm" ? "မာတိကာ" : "On this page"}>
              <p className={styles.contentsLabel}><List className="size-4" aria-hidden="true" />{lang === "mm" ? "ဤဆောင်းပါးတွင်" : "On this page"}</p>
              <ol className={styles.contents}>{sections.map((section) => <li key={section.id} className={section.level === "3" ? styles.subsection : undefined}><a lang={contentLang} href={`#${encodeURIComponent(section.id)}`} aria-current={activeSection === section.id ? "location" : undefined}>{section.title}</a></li>)}</ol>
            </nav>
            <div className={styles.sidebarShare}><p className="text-xs text-muted-foreground">{lang === "mm" ? "အခြားသူများကို မျှဝေရန်" : "Worth sharing?"}</p><button type="button" onClick={copyLink} className={styles.copyButton}>{copyState === "copied" ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}{copyLabel}</button></div>
          </div>
        </aside>}
        <div className={styles.readingColumn}>
          <article ref={articleRef} lang={contentLang} className={`prose prose-lg dark:prose-invert ${styles.articleBody}`} dangerouslySetInnerHTML={{ __html: content }} />
          <div className={styles.articleEnd}>
            <span className={styles.category}>{categoryLabel(translation.category)}</span>
            <button type="button" onClick={copyLink} className={styles.copyButton}>{copyState === "copied" ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}{copyLabel}</button>
          </div>
          <p role="status" className="text-sm text-muted-foreground">{copyState === "error" ? (lang === "mm" ? "လင့်ခ်ကို address bar မှ ကူးယူနိုင်ပါတယ်။" : "Copy the link from your browser’s address bar.") : copyState === "copied" ? (lang === "mm" ? "မျှဝေရန် လင့်ခ် ကူးယူပြီးပါပြီ။" : "Article link copied to your clipboard.") : ""}</p>
          <div className={styles.authorNote}><Image src="/Miracle.jpg" alt="" width={56} height={56} className="size-14 rounded-full object-cover" /><div><p className={styles.eyebrow}>{lang === "mm" ? "ရေးသားသူ" : "Written by"}</p><h2 className="mt-1 text-xl font-semibold">Nyi Nyi Zin</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lang === "mm" ? "Web၊ mobile နဲ့ backend software တွေ တည်ဆောက်ရင်း လေ့လာတွေ့ရှိမှုများကို မျှဝေနေပါတယ်။" : "I build for the web, mobile, and everything behind the scenes. This is where I share what I learn along the way."}</p><Link href="/" className={styles.readLink}>{lang === "mm" ? "ကျွန်တော့်အကြောင်း" : "More about me"}<ArrowUpRight className="size-4" aria-hidden="true" /></Link></div></div>
          <div className={styles.endNavigation}><Link href={`/blogs?lang=${lang}`} className={styles.backLink}><ArrowLeft className="size-4" aria-hidden="true" />{lang === "mm" ? "ဆောင်းပါးအားလုံး" : "Explore all articles"}</Link><a href="#article-top" className={styles.backLink}>{lang === "mm" ? "အပေါ်သို့" : "Back to top"}<ArrowUp className="size-4" aria-hidden="true" /></a></div>
        </div>
      </div>
    </div>
    <BlogFooter />
  </div>;
}
