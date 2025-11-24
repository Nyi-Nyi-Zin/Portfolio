// lib/blogs.ts
import { prisma } from "./prisma";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  category: string;
  // detail is stored as JSON in the DB. Narrow the type instead of `any`.
  detail: { content?: string } | Record<string, unknown> | null;
  createdAt: Date;
  updatedAt: Date;
}

interface GetBlogPostsOptions {
  category?: string | null;
  page?: number;
  limit?: number;
}

export async function getBlogPosts({
  category,
  page = 1,
  limit = 10,
}: GetBlogPostsOptions = {}): Promise<{
  blogs: BlogPost[];
  pagination: { total: number; page: number; limit: number; pages: number };
}> {
  const skip = (page - 1) * limit;
  const where = category ? { category } : {};

  const [blogs, total] = await Promise.all([
    prisma.blog.findMany({
      where,
      skip,
      take: limit,
      orderBy: { date: "desc" },
    }),
    prisma.blog.count({ where }),
  ]);

  return {
    blogs,
    pagination: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    },
  };
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  return prisma.blog.findUnique({
    where: { id },
  });
}

export function calculateReadingTime(
  text: string,
  wordsPerMinute = 200
): string {
  if (!text) return "1 min read"; // fallback

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
}
