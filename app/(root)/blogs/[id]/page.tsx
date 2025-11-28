import BlogDetail from "@/components/blog/BlogDetail";

// Force this page to be dynamic so it fetches the latest data
export const dynamic = "force-dynamic";

// Helper function to fetch data
async function getBlogPost(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Error fetching blog: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// FIX: Define props correctly for Next.js 15 (params is a Promise)
type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogPage({ params }: Props) {
  // FIX: Await the params before using them!
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Pass the ID string, not the promise/object
  const post = await getBlogPost(id);

  if (!post) {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center">
        <h2 className="text-xl font-semibold text-muted-foreground">
          Blog post not found.
        </h2>
      </div>
    );
  }

  // Ensure dates are strings to pass to Client Component
  // Note: JSON from fetch already has createdAt as a string, but this is safe
  const serializedPost = {
    ...post,
    createdAt: String(post.createdAt),
  };

  return <BlogDetail post={serializedPost} />;
}
