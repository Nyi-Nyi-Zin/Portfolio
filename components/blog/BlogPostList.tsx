"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { TagTabs } from "@/components/tag-tabs";
import { useSearch } from "@/store/useSearch";
import { TagValue } from "@/lib/constants";
import type { SerializedBlogPost } from "@/types/blogs";
import { useLanguage } from "@/store/useLanguage";

interface BlogPageProps {
  initialPosts: SerializedBlogPost[];
}

export default function BlogPostList({ initialPosts }: BlogPageProps) {
  const [selectedTab, setSelectedTab] = useState<TagValue>("all");
  const searchKey = useSearch((state) => state.searchKey);
  const { lang } = useLanguage();

  const filteredBlogs = useMemo(() => {
    return initialPosts.filter((post) => {
      // Use the selected language, fallback to 'en' if missing
      const t = post.translations?.[lang] || post.translations?.en;
      if (!t) return false; // skip if no translation available

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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => {
              const t = blog.translations?.[lang] || blog.translations?.en;
              if (!t) return null; // safety check

              return (
                <Card
                  key={blog.id}
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
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </Link>
                </Card>
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
        </div>
      </div>
    </div>
  );
}
