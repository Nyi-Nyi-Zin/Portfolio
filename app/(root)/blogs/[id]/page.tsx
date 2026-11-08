import BlogDetail from "@/components/blog/BlogDetail";
import { prisma } from "@/lib/prisma";
import { defaultBlogPosts } from "@/lib/defaultBlogs";
import type { BlogPost } from "@/components/blog/BlogDetail";
import type { Metadata } from "next";
import type { BlogTranslations, SerializedBlogPost } from "@/types/blogs";
import { notFound } from "next/navigation";
import { cache } from "react";
import { getSiteUrl, siteName } from "@/lib/site";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

const findPost = cache(async (id: string): Promise<SerializedBlogPost | null> => {
  if (!process.env.DATABASE_URL) {
    return defaultBlogPosts.find((post) => post.id === id) ?? null;
  }

  try {
    const post = await prisma.blog.findUnique({ where: { id } });

    if (post) {
      return {
        id: post.id,
        image: post.image,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
        translations: post.translations as unknown as {
          en: BlogTranslations;
          mm: BlogTranslations;
        },
      };
    }
  } catch (error) {
    console.error("Unable to load the requested database blog post.", error);
  }

  return defaultBlogPosts.find((post) => post.id === id) ?? null;
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await findPost(id);

  if (!post) {
    return {
      title: "Post not found",
      robots: { index: false, follow: false },
    };
  }

  const title = post.translations.en.title;
  const rawDescription = post.translations.en.description;
  const description =
    rawDescription.length > 160
      ? `${rawDescription.slice(0, 157)}…`
      : rawDescription;
  const path = `/blogs/${id}`;

  return {
    title,
    description: description || "Software development article by Nyi Nyi Zin.",
    alternates: { canonical: path },
    openGraph: {
      title,
      description: description || undefined,
      type: "article",
      publishedTime: new Date(post.createdAt).toISOString(),
      modifiedTime: new Date(post.updatedAt).toISOString(),
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
  const post = await findPost(id);

  if (!post) {
    notFound();
  }

  const serializedPost: BlogPost = {
    id: post.id,
    image: post.image,
    createdAt: post.createdAt,
    translations: post.translations,
  };

  const url = `${getSiteUrl()}/blogs/${id}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.translations.en.title,
    description: post.translations.en.description,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: url,
    url,
    ...(post.image ? { image: new URL(post.image, getSiteUrl()).href } : {}),
    author: { "@type": "Person", name: siteName, url: getSiteUrl() },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <BlogDetail post={serializedPost} />
    </>
  );
}
