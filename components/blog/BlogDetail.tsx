"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/store/useLanguage";

// Definition matches what we pass from the server
export type BlogPost = {
  id: string;
  translations: {
    en: {
      title: string;
      description: string;
      detail: string;
      category: string;
    };
    mm: {
      title: string;
      description: string;
      detail: string;
      category: string;
    };
  };
  image: string;
  createdAt: string; // Passed as string from server
};

function calculateReadingTime(content: string) {
  if (!content) return "0 min read";
  const plainText = content.replace(/<[^>]*>/g, "").trim();
  const wordsPerMinute = 200;
  const words = plainText.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export default function BlogDetail({ post }: { post: BlogPost }) {
  const { lang } = useLanguage();

  // SAFETY 1: Check if post exists (It should, thanks to the Server Page check)
  if (!post) {
    return <div className="p-10 text-center">Loading Content...</div>;
  }

  // SAFETY 2: Derived State for Language
  // If "mm" is missing, fallback to "en". Use ?. to prevent crashing.
  const currentLang = lang === "mm" ? "mm" : "en";
  const translation =
    post.translations?.[currentLang] || post.translations?.["en"];

  // SAFETY 3: If data is corrupted/missing translation completely
  if (!translation) {
    return <div className="p-10 text-center">Translation unavailable</div>;
  }

  const detailContent = translation.detail || "";
  const readTime = calculateReadingTime(detailContent);

  return (
    <div className="w-full flex flex-col items-center py-10 animate-in fade-in duration-500">
      <div className="w-full max-w-4xl px-5 flex flex-col gap-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/blogs">
            <Button
              variant="outline"
              className="group pl-0 hover:pl-2 transition-all hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] text-center">
            {translation.title}
          </h1>
          <div className="mt-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground text-center">
            {translation.description}
          </div>

          <Card className="flex flex-col sm:flex-row sm:items-center justify-between text-muted-foreground text-sm font-medium gap-4 mt-4 px-3 py-3">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {/* Handle string dates */}
              {new Date(post.createdAt).toLocaleDateString()}
            </div>

            <div className="flex items-center gap-3">
              <Badge
                variant="secondary"
                className="uppercase bg-blue-700 text-white  text-sm"
              >
                {translation.category}
              </Badge>
              <span className="flex items-center gap-1 border-l pl-3 ml-1">
                <Clock className="w-3.5 h-3.5" /> {readTime}
              </span>
            </div>
          </Card>
        </div>

        {/* Image Section */}
        {post.image && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
            <Image
              src={post.image}
              alt={translation.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Body */}
        <div className="w-full">
          <article
            className="prose prose-lg dark:prose-invert max-w-none mx-auto prose-headings:font-bold prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: detailContent }}
          />
        </div>
      </div>
    </div>
  );
}
