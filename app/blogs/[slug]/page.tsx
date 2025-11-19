import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogPosts, getPostBySlug, calculateReadingTime } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc"; // Markdown Render ဖို့
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) return { title: "Blog Not Found" };

  return {
    title: `${post.meta.title} | My Blog`,
    description: post.meta.description,
  };
}

// --- Static Generation (Build Time) ---
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.id, // getBlogPosts ထဲမှာ id ကို filename ထားခဲ့တာမှတ်မိလား?
  }));
}

// --- Main Component ---
export default async function BlogDetailPage(props: PageProps) {
  const params = await props.params;

  // Fetch MDX content
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const readTime = calculateReadingTime(post.content);

  return (
    <div className="w-full flex flex-col items-center py-10 animate-in fade-in duration-500">
      <div className="w-full max-w-4xl px-5 flex flex-col gap-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/blogs">
            <Button
              variant="outline"
              className="group pl-0 hover:pl-2 transition-all  hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Button>
          </Link>
        </div>

        {/* Header Area */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            {post.meta.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-muted-foreground text-sm font-medium gap-4 pt-2 mt-4">
            <div className="flex items-center pt-2 sm:pt-0">
              <Calendar className="w-4 h-4 mr-2" />
              {post.meta.date}
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <Badge
                variant="secondary"
                className="text-sm font-medium px-3 py-1 uppercase tracking-wider"
              >
                {post.meta.category}
              </Badge>
              <span className="text-muted-foreground text-sm flex items-center gap-1 border-l pl-3 ml-1">
                <Clock className="w-3.5 h-3.5" /> {readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <Card className="overflow-hidden border-muted bg-muted/30 p-1">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={post.meta.image}
              alt={post.meta.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Card>

        {/* Content Body (Updated) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
          <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
            {/* OLD: dangerouslySetInnerHTML */}
            {/* NEW: MDXRemote */}
            <article
              className="
    prose prose-lg dark:prose-invert max-w-none

    /* Headings */
    prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground

    /* Paragraphs & lists */
    prose-p:text-foreground prose-p:leading-loose
    prose-li:text-foreground [&>ul>li]:marker:text-primary [&>ol>li]:marker:text-primary

    /* Strong / Bold text */
    prose-strong:text-foreground prose-strong:font-bold

    /* Links */
    prose-a:text-blue-600 hover:prose-a:underline dark:prose-a:text-blue-400

    /* Images */
    prose-img:rounded-xl prose-img:shadow-md prose-img:border

    /* Blockquotes */
    prose-blockquote:border-l-primary prose-blockquote:bg-muted/20 prose-blockquote:text-muted-foreground
    prose-blockquote:py-1 prose-blockquote:rounded-r

    /* Code blocks */
    prose-pre:bg-zinc-200 prose-pre:text-zinc-100 prose-pre:border prose-pre:border-zinc-800
    prose-code:text-blue-700 dark:prose-code:text-blue-700
"
            >
              <MDXRemote source={post.content} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
