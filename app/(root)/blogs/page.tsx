export const revalidate = 60;

import BlogPostList from "@/components/blog/BlogPostList";

export default async function BlogPage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/blogs`, {
    next: { revalidate: 60 },
  });

  const blogs = await res.json();

  const serializedBlogs = blogs.map((blog: any) => ({
    ...blog,
    createdAt: String(blog.createdAt),
    updatedAt: String(blog.updatedAt),
  }));

  return <BlogPostList initialPosts={serializedBlogs} />;
}
