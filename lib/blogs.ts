import { prisma } from "./prisma";

export interface BlogTranslations {
  title: string;
  description: string;
  category: string;
  detail: string;
}

export interface BlogPost {
  id: string;
  translations: {
    en: BlogTranslations;
    mm: BlogTranslations;
  };
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SerializedBlogPost = Omit<BlogPost, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

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

  const where = category
    ? {
        translations: {
          path: ["en", "category"],
          equals: category,
        },
      }
    : undefined;

  const [blogs, total] = await Promise.all([
    prisma.blog.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.blog.count({ where }),
  ]);

  const formattedBlogs: BlogPost[] = blogs.map((blog) => ({
    ...blog,
    translations: blog.translations
      ? (blog.translations as unknown as {
          en: BlogTranslations;
          mm: BlogTranslations;
        })
      : { en: {} as BlogTranslations, mm: {} as BlogTranslations },
  }));

  return {
    blogs: formattedBlogs,
    pagination: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    },
  };
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog) return null;

  return {
    ...blog,
    translations: blog.translations
      ? (blog.translations as unknown as {
          en: BlogTranslations;
          mm: BlogTranslations;
        })
      : { en: {} as BlogTranslations, mm: {} as BlogTranslations },
  };
}

export function calculateReadingTime(
  text: string,
  wordsPerMinute = 200
): string {
  if (!text) return "1 min read";

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
}
