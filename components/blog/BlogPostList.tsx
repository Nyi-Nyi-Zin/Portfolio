"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { useSearch } from "@/store/useSearch";
import { useLanguage } from "@/store/useLanguage";
import { TagValue } from "@/lib/constants";
import { TagTabs } from "@/components/tag-tabs";
import type { SerializedBlogPost } from "@/types/blogs";

interface BlogPageProps {
  initialPosts: SerializedBlogPost[];
}

export default function BlogPostList({ initialPosts }: BlogPageProps) {
  const [selectedTab, setSelectedTab] = useState<TagValue>("all");
  const searchKey = useSearch((s) => s.searchKey);
  const { lang } = useLanguage();

  const filteredBlogs = useMemo(() => {
    return initialPosts.filter((post) => {
      const t = post.translations?.[lang] || post.translations?.en;
      if (!t) return false;

      const searchLower = searchKey.toLowerCase();
      const matchesSearch =
        !searchKey ||
        t.title.toLowerCase().includes(searchLower) ||
        t.description.toLowerCase().includes(searchLower);

      const matchesTab = selectedTab === "all" || t.category === selectedTab;
      return matchesSearch && matchesTab;
    });
  }, [searchKey, selectedTab, initialPosts, lang]);

  return (
    <div className="w-full flex flex-col items-center dark:bg-[#0F172A]">
      <div className="w-full max-w-5xl px-5 flex flex-col gap-6 my-5">
        <TagTabs value={selectedTab} onValueChange={setSelectedTab} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.05 },
            },
          }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => {
              const t = blog.translations?.[lang] || blog.translations?.en;
              if (!t) return null;

                return (
                  <motion.div
                    key={blog.id}
                    layout
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Card
                  className="h-full w-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-muted"
                >
                  <Link
                    href={`/blogs/${blog.id}?lang=${lang}`}
                    className="flex flex-col gap-5 h-full"
                  >
                    <div className="flex flex-col gap-2 px-3 lg:px-5">
                      <div className="w-full h-40 md:h-44 lg:h-36 relative overflow-hidden rounded-2xl">
                        <Image
                          src={blog.image}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          alt={t.title}
                          className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <h1 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {t.title}
                      </h1>

                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {t.description}
                      </p>
                    </div>

                    <div className="mt-auto px-5 text-muted-foreground text-xs font-medium pb-4">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    </Link>
                    </Card>
                  </motion.div>
                );
              })
            ) : (
            <div className="col-span-full py-16 text-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/30">
              <p className="text-muted-foreground font-medium text-lg">
                {lang === "mm" ? "ဘလော့ဂ်များ မတွေ့ပါ" : "No blogs found"}
              </p>
              <p className="text-sm text-muted-foreground/70">
                {lang === "mm"
                  ? "ရှာဖွေမှု အခြေအနေကို ပြောင်းကြည့်ပါ"
                  : "Try changing your search criteria."}
              </p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
