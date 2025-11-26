import { getBlogPosts } from "@/lib/blogs";
import type { SerializedBlogPost } from "@/lib/blogs";
import BlogPostList from "@/components/blog/BlogPostList";

export const revalidate = 60;

export default async function BlogPage() {
  const { blogs } = await getBlogPosts();

  const serializedBlogs: SerializedBlogPost[] = blogs.map((blog) => ({
    ...blog,
    date:
      blog.date instanceof Date ? blog.date.toISOString() : String(blog.date),
    createdAt:
      blog.createdAt instanceof Date
        ? blog.createdAt.toISOString()
        : String(blog.createdAt),
    updatedAt:
      blog.updatedAt instanceof Date
        ? blog.updatedAt.toISOString()
        : String(blog.updatedAt),
  }));

  return <BlogPostList initialPosts={serializedBlogs} />;
}
