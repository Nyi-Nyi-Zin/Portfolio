"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/store/useLanguage";

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
  createdAt: string;
};

function calculateReadingTime(content: string) {
  if (!content) return "0 min read";
  const plainText = content.replace(/<[^>]*>/g, "").trim();
  const words = plainText.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export default function BlogDetail({ post }: { post: BlogPost }) {
  const { lang } = useLanguage();

  if (!post) {
    return <div className="p-10 text-center">Loading Content...</div>;
  }

  const currentLang = lang === "mm" ? "mm" : "en";
  const translation =
    post.translations?.[currentLang] || post.translations?.["en"];

  if (!translation) {
    return <div className="p-10 text-center">Translation unavailable</div>;
  }

  const detailContent = translation.detail || "";
  const readTime = calculateReadingTime(detailContent);

  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="w-full max-w-4xl px-5 flex flex-col gap-8">
        {/* Back Button */}
        <div className="flex items-center justify-between">
          <Link href="/blogs">
            <Button
              variant="outline"
              className="group pl-0 hover:pl-2 transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1" />
              Back to Blogs
            </Button>
          </Link>
        </div>

        {/* Title & Category */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center">
            {translation.title}
          </h1>

          <div className="prose prose-lg dark:prose-invert text-center">
            {translation.description}
          </div>

          <Card className="flex flex-col sm:flex-row justify-between text-sm px-3 py-3">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.createdAt).toLocaleDateString()}
            </div>

            <div className="flex items-center gap-3">
              <Badge className="uppercase bg-blue-700 text-white">
                {translation.category}
              </Badge>
              <span className="flex items-center gap-1 border-l pl-3 ml-1">
                <Clock className="w-4 h-4" /> {readTime}
              </span>
            </div>
          </Card>
        </div>

        {/* Image */}
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

        {/* Body */}
       {detailContent && (
  <article
    className="prose prose-lg dark:prose-invert max-w-none"
    dangerouslySetInnerHTML={{ __html: detailContent }}
  />
)}
      </div>
    </div>
  );
}
