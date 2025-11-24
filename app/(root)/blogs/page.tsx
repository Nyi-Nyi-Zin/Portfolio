// app/blog/page.tsx (ဒါက Server Component ပါ)
import { getBlogPosts, BlogPost } from "@/lib/blogs";
import BlogPostList from "@/components/blog/BlogPostList";

export default async function BlogPage() {
  // Server side မှာ ဖိုင်တွေဖတ်မယ်
  const { blogs } = await getBlogPosts();

  // Serialize dates to strings for client component
  type SerializedBlog = Omit<BlogPost, "date" | "createdAt" | "updatedAt"> & {
    date: string;
    createdAt: string;
    updatedAt: string;
  };

  const serializedBlogs: SerializedBlog[] = blogs.map((blog) => ({
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

  // Client component ဆီ Data လှမ်းပို့မယ်
  return <BlogPostList initialPosts={serializedBlogs} />;
}
