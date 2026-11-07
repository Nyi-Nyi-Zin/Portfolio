"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Search, X } from "lucide-react";
import { useSearch } from "@/store/useSearch";
import { useLanguage } from "@/store/useLanguage";
import { tags, type TagValue } from "@/lib/constants";
import { blogDate, categoryLabel, readingTime } from "@/lib/blog-presentation";
import type { SerializedBlogPost } from "@/types/blogs";
import BlogFooter from "./BlogFooter";
import styles from "./journal.module.css";

function ArticleCard({ post, lang, index }: { post: SerializedBlogPost; lang: "en" | "mm"; index: number }) {
  const reduceMotion = useReducedMotion();
  const t = post.translations?.[lang] || post.translations?.en;
  if (!t) return null;
  const contentLang = lang === "mm" && post.translations?.mm ? "my" : "en";
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        // Repeat the homepage's stagger in small groups without delaying later posts.
        delay: reduceMotion ? 0 : (index % 3) * 0.12,
      }}
    >
      <Link href={`/blogs/${post.id}?lang=${lang}`} className={styles.articleLink}>
        <div className={styles.cover}>
          {post.image ? <Image src={post.image} alt={t.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover" /> : <BookOpen className="size-12 text-primary" aria-hidden="true" />}
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardEyebrow}><span className={styles.category}>{categoryLabel(t.category)}</span></div>
          <h2 lang={contentLang}>{t.title}</h2>
          <p lang={contentLang} className={styles.excerpt}>{t.description}</p>
          <div className={styles.cardMeta}><time dateTime={post.createdAt}>{blogDate(post.createdAt, lang)}</time><span>{readingTime(t.detail, contentLang === "my" ? "mm" : "en")}</span></div>
          <span className={styles.readLink}>{lang === "mm" ? "ဆက်ဖတ်ရန်" : "Read article"}<ArrowUpRight className="size-4" aria-hidden="true" /></span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function BlogPostList({ initialPosts }: { initialPosts: SerializedBlogPost[] }) {
  const [selectedTab, setSelectedTab] = useState<TagValue>("all");
  const searchKey = useSearch((state) => state.searchKey);
  const setSearchKey = useSearch((state) => state.setSearchKey);
  const lang = useLanguage((state) => state.lang);
  const query = searchKey.trim().toLowerCase();
  const filteredBlogs = useMemo(() => initialPosts.filter((post) => {
    const t = post.translations?.[lang] || post.translations?.en;
    return t && (selectedTab === "all" || t.category === selectedTab) && (!query || `${t.title} ${t.description} ${t.category}`.toLowerCase().includes(query));
  }), [initialPosts, lang, query, selectedTab]);
  const isFiltered = selectedTab !== "all" || Boolean(query);
  const resetFilters = () => { setSelectedTab("all"); setSearchKey(""); };
  return (
    <div className={styles.journal}>
      <div className={styles.container}>
        <header className={styles.intro}>
          <h1 lang={lang === "mm" ? "my" : "en"} className={styles.eyebrow}><BookOpen className="size-4" aria-hidden="true" />{lang === "mm" ? "လေ့လာမှုနှင့် အတွေ့အကြုံများ" : "The developer’s notebook"}</h1>
        </header>
        <section id="articles" className={styles.archive} aria-labelledby="articles-heading">
          <div className={styles.archiveHeader}>
            <div className="flex items-center gap-3"><h2 id="articles-heading" className="text-2xl font-semibold tracking-tight">{lang === "mm" ? "ဆောင်းပါးများ" : "All articles"}</h2><span className={styles.count}>{initialPosts.length}</span></div>
            <div className={styles.search}>
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input type="search" aria-label={lang === "mm" ? "ဆောင်းပါးများ ရှာရန်" : "Search articles"} placeholder={lang === "mm" ? "ဆောင်းပါးများ ရှာရန်…" : "Find something to read…"} value={searchKey} onChange={(event) => setSearchKey(event.target.value)} />
              {searchKey && <button type="button" onClick={() => setSearchKey("")} aria-label={lang === "mm" ? "ရှာဖွေမှု ရှင်းရန်" : "Clear search"}><X className="size-4" /></button>}
            </div>
          </div>
          <div className={styles.filters} role="group" aria-label={lang === "mm" ? "အမျိုးအစားအလိုက် ရွေးရန်" : "Filter articles by topic"}>
            {tags.map((tag) => <button key={tag.value} type="button" aria-pressed={selectedTab === tag.value} onClick={() => setSelectedTab(tag.value)}>{tag.value === "all" ? (lang === "mm" ? "အားလုံး" : "All topics") : tag.label}</button>)}
          </div>
          <p className={styles.resultLabel} role="status">{isFiltered ? (lang === "mm" ? `ဆောင်းပါး ${filteredBlogs.length} ခု တွေ့ရှိပါသည်` : `${filteredBlogs.length} ${filteredBlogs.length === 1 ? "article" : "articles"} found`) : (lang === "mm" ? "နောက်ထပ် ဖတ်ရှုစရာများ" : "More from the notebook")}</p>
          {filteredBlogs.length ? <div className={styles.grid}>{filteredBlogs.map((post, index) => <ArticleCard key={post.id} post={post} lang={lang} index={index} />)}</div> : <div className={styles.empty}>
            <Search className="mx-auto mb-5 size-8 text-muted-foreground" aria-hidden="true" />
            <h3 className="text-xl font-semibold">{lang === "mm" ? "ဆောင်းပါးများ မတွေ့ရှိပါ" : "No articles found."}</h3>
            <p className="mt-3 text-muted-foreground">{lang === "mm" ? "အခြားစကားလုံး သို့မဟုတ် အမျိုးအစားဖြင့် ရှာကြည့်ပါ။" : "Try another keyword or explore a different topic."}</p>
            {isFiltered && <button className={styles.primaryLink} onClick={resetFilters}>{lang === "mm" ? "ဆောင်းပါးအားလုံး ကြည့်ရန်" : "View all articles"}<ArrowUpRight className="size-4" aria-hidden="true" /></button>}
          </div>}
        </section>
      </div>
      <BlogFooter />
    </div>
  );
}
