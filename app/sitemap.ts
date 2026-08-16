import type { MetadataRoute } from "next";
import { projects } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { defaultBlogPosts } from "@/lib/defaultBlogs";
import { getSiteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const now = new Date();

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await prisma.blog.findMany({
      select: { id: true, updatedAt: true },
    });
    blogEntries = blogs.map((b) => ({
      url: `${base}/blogs/${b.id}`,
      lastModified: b.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    }));
  } catch {
    // Curated posts below keep the sitemap useful when the database is unavailable.
  }

  const databaseIds = new Set(blogEntries.map((entry) => entry.url.split("/").pop()));
  const curatedBlogEntries = defaultBlogPosts
    .filter((post) => !databaseIds.has(post.id))
    .map((post) => ({
      url: `${base}/blogs/${post.id}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.65,
    }));

  blogEntries = [...blogEntries, ...curatedBlogEntries];

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...blogEntries,
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
