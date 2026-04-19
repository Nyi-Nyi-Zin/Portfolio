import BlogDetail from "@/components/blog/BlogDetail";
import { prisma } from "@/lib/prisma";
import type { BlogPost } from "@/components/blog/BlogDetail";
import type { Metadata } from "next";
import type { BlogTranslations } from "@/types/blogs";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await prisma.blog.findUnique({ where: { id } });
  if (!post) {
    return {
      title: "Post not found",
      robots: { index: false, follow: false },
    };
  }
  const translations = post.translations as {
    en?: BlogTranslations;
    mm?: BlogTranslations;
  };
  const en = translations?.en;
  const title = en?.title ?? "Blog post";
  const rawDescription = en?.description ?? "";
  const description =
    rawDescription.length > 160
      ? `${rawDescription.slice(0, 157)}…`
      : rawDescription;
  const path = `/blogs/${id}`;
  return {
    title,
    description: description || "Blog post by Nyi Nyi Zin.",
    alternates: { canonical: path },
    openGraph: {
      title,
      description: description || undefined,
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      url: path,
      images: post.image ? [{ url: post.image, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || undefined,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { id } = await params;

  const post = await prisma.blog.findUnique({
    where: { id },
  });

  if (!post) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <h2 className="text-xl text-muted-foreground">Blog post not found.</h2>
      </div>
    );
  }

  // ⭐⭐ FIX: CAST JSON to correct type before sending to client ⭐⭐
  const serializedPost: BlogPost = {
    id: post.id,
    image: post.image,
    createdAt: post.createdAt.toISOString(),
    translations: post.translations as BlogPost["translations"], // FIX HERE
  };

  return <BlogDetail post={serializedPost} />;
}
