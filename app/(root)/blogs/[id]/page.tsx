import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const revalidate = 60;

// Simple reading time
function calculateReadingTime(content: string) {
  const plainText = content.replace(/<[^>]*>/g, "").trim();
  const wordsPerMinute = 200;
  const words = plainText.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  const post = await prisma.blog.findUnique({ where: { id } });
  if (!post) return { title: "Blog Not Found" };
  return { title: `${post.title} | My Blog`, description: post.description };
}

export async function generateStaticParams() {
  const blogs = await prisma.blog.findMany({ select: { id: true } });
  return blogs.map((blog) => ({ id: blog.id }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  // --- FIX 3: Await params in the component body ---
  const { id } = await params;

  const post = await prisma.blog.findUnique({ where: { id } });

  if (!post) return notFound();

  // Casting the rich text detail to string
  const detailContent = (post.detail as string) || "";
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

        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] text-center">
            {post.title}
          </h1>
          <div className="mt-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground text-center">
            {post.description}
          </div>
          <Card className="flex flex-col sm:flex-row sm:items-center justify-between text-muted-foreground text-sm font-medium gap-4 mt-4 px-3">
            <div className="flex items-center pt-2 sm:pt-0">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString()}
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <Badge
                variant="default"
                className="text-sm font-medium px-3 py-1 uppercase tracking-wider"
              >
                {post.category}
              </Badge>
              <span className="text-muted-foreground text-sm flex items-center gap-1 border-l pl-3 ml-1">
                <Clock className="w-3.5 h-3.5" /> {readTime}
              </span>
            </div>
          </Card>
        </div>

        {/* Hero Image */}
        <Card className="overflow-hidden border-muted bg-muted/30 p-1">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Card>

        {/* Content */}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
          <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-pre:whitespace-pre-wrap prose-pre:break-words"
              dangerouslySetInnerHTML={{ __html: detailContent }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
