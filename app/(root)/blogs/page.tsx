import { prisma } from "@/lib/prisma";
import { defaultBlogPosts } from "@/lib/defaultBlogs";
import BlogPostListClient from "./BlogPostListClient";
import type { SerializedBlogPost, BlogTranslations } from "@/types/blogs";

export const revalidate = 60;

export default async function BlogPage() {
  let databasePosts: SerializedBlogPost[] = [];

  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });

    databasePosts = blogs.map((b) => {
      const translations = b.translations as unknown as {
        en: BlogTranslations;
        mm: BlogTranslations;
      };

      if (!translations?.en || !translations?.mm) {
        throw new Error(`Blog ${b.id} has invalid translations`);
      }

      return {
        id: b.id,
        image: b.image,
        createdAt: b.createdAt.toISOString(),
        updatedAt: b.updatedAt.toISOString(),
        translations,
      };
    });
  } catch (error) {
    console.error("Unable to load database blog posts; using curated posts.", error);
  }

  const databaseIds = new Set(databasePosts.map((post) => post.id));
  const posts = [...databasePosts, ...defaultBlogPosts.filter((post) => !databaseIds.has(post.id))].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return <BlogPostListClient initialPosts={posts} />;
}
