import BlogDetail from "@/components/blog/BlogDetail";
import { prisma } from "@/lib/prisma";
import { defaultBlogPosts } from "@/lib/defaultBlogs";
import type { BlogPost } from "@/components/blog/BlogDetail";
import type { Metadata } from "next";
import type { BlogTranslations, SerializedBlogPost } from "@/types/blogs";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

async function findPost(id: string): Promise<SerializedBlogPost | null> {
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
}

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
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <h2 className="text-xl text-muted-foreground">Blog post not found.</h2>
      </div>
    );
  }

  const serializedPost: BlogPost = {
    id: post.id,
    image: post.image,
    createdAt: post.createdAt,
    translations: post.translations,
  };

  return <BlogDetail post={serializedPost} />;
}
