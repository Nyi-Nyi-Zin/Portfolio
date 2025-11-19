// components/BlogPostList.tsx (သို့မဟုတ် မင်းရဲ့ မူရင်း file name)
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { TagTabs } from "@/components/tag-tabs";
import { useSearch } from "@/store/useSearch";
import { TagValue } from "@/lib/constants";
import { BlogPost } from "@/lib/blogs"; // Type ကို import လှမ်းလုပ်

// Props နဲ့ Data လက်ခံမယ်
interface BlogPageProps {
  initialPosts: BlogPost[];
}

export default function BlogPostList({ initialPosts }: BlogPageProps) {
  const [selectedTab, setSelectedTab] = useState<TagValue>("all");
  const searchKey = useSearch((state) => state.searchKey);

  // BLOG_POSTS အစား initialPosts props ကိုသုံးမယ်
  const filteredBlogs = useMemo(() => {
    return initialPosts.filter((post) => {
      const searchLower = searchKey.toLowerCase();
      const matchesSearch =
        !searchKey ||
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower);

      const matchesTab = selectedTab === "all" || post.category === selectedTab;

      return matchesSearch && matchesTab;
    });
  }, [searchKey, selectedTab, initialPosts]);

  return (
    <div className="w-full flex flex-col items-center my-5">
      <div className="w-full max-w-5xl px-5 flex flex-col gap-6">
        {/* ဒီအပိုင်းက အတူတူပါပဲ */}
        <Card className="p-2 bg-white/50 backdrop-blur supports-backdrop-filter:bg-white/50 h-full">
          <TagTabs value={selectedTab} onValueChange={setSelectedTab} />
        </Card>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Card
                key={blog.id}
                className="h-full w-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-muted"
              >
                {/* ID က string (filename) ဖြစ်သွားပြီမို့လို့ /blogs/overview-of-zustand လိုမျိုးဖြစ်မယ် */}
                <Link
                  href={`/blogs/${blog.id}`}
                  className="flex flex-col gap-5 h-full"
                >
                  <div className="flex flex-col gap-2 px-3 lg:px-5">
                    <div className="w-full h-40 md:h-44 lg:h-36 relative overflow-hidden rounded-2xl">
                      {/* Image src string ဖြစ်ရမယ် */}
                      <Image
                        src={blog.image}
                        fill
                        alt={blog.title}
                        className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h1 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h1>

                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {blog.description}
                    </p>
                  </div>

                  <div className="mt-auto px-5 text-muted-foreground text-xs font-medium pb-4">
                    {blog.date}
                  </div>
                </Link>
              </Card>
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/30">
              <p className="text-muted-foreground font-medium text-lg">
                No blogs found
              </p>
              <p className="text-sm text-muted-foreground/70">
                Try changing your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
