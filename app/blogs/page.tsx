// app/blog/page.tsx (ဒါက Server Component ပါ)
import { getBlogPosts } from "@/lib/blogs";
import BlogPostList from "@/components/blog/BlogPostList"; // မင်းသိမ်းခဲ့တဲ့ path အတိုင်း

export default function BlogPage() {
  // Server side မှာ ဖိုင်တွေဖတ်မယ်
  const posts = getBlogPosts();

  // Client component ဆီ Data လှမ်းပို့မယ်
  return <BlogPostList initialPosts={posts} />;
}
