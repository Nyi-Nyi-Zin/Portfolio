import { prisma } from "@/lib/prisma";
import BlogPostListClient from "./BlogPostListClient";
import type { SerializedBlogPost, BlogTranslations } from "@/types/blogs";

export const revalidate = 60;

export default async function BlogPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Serialize dates & parse translations safely
  const serializedBlogs: SerializedBlogPost[] = blogs.map((b) => {
    const translations = b.translations as unknown as {
      en: BlogTranslations;
      mm: BlogTranslations;
    };

    // Optional runtime check to avoid runtime errors
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

  return <BlogPostListClient initialPosts={serializedBlogs} />;
}
