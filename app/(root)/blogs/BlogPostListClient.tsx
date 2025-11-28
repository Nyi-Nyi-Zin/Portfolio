"use client";

import BlogPostList from "@/components/blog/BlogPostList";
import type { SerializedBlogPost } from "@/types/blogs";

interface BlogPostListClientProps {
  initialPosts: SerializedBlogPost[];
}

export default function BlogPostListClient({
  initialPosts,
}: BlogPostListClientProps) {
  return <BlogPostList initialPosts={initialPosts} />;
}
