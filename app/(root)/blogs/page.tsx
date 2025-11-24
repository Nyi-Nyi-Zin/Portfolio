// app/blog/page.tsx (ဒါက Server Component ပါ)
import { getBlogPosts } from "@/lib/blogs";
import BlogPostList from "@/components/blog/BlogPostList"; // မင်းသိမ်းခဲ့တဲ့ path အတိုင်း

export default async function BlogPage() {
  // Server side မှာ ဖိုင်တွေဖတ်မယ်
  const { blogs } = await getBlogPosts();

  // Serialize dates to strings for client component
  const serializedBlogs = blogs.map((blog) => ({
    ...blog,
    date: blog.date instanceof Date ? blog.date.toISOString() : blog.date,
    createdAt:
      blog.createdAt instanceof Date
        ? blog.createdAt.toISOString()
        : blog.createdAt,
    updatedAt:
      blog.updatedAt instanceof Date
        ? blog.updatedAt.toISOString()
        : blog.updatedAt,
  }));

  // Client component ဆီ Data လှမ်းပို့မယ်
  return <BlogPostList initialPosts={serializedBlogs as any} />;
}
