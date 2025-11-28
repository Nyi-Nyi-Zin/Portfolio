import BlogDetail from "@/components/blog/BlogDetail";
import { prisma } from "@/lib/prisma";
import type { BlogPost } from "@/components/blog/BlogDetail";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { id } = await params;

  const post = await prisma.blog.findUnique({
    where: { id },
  });

  if (!post) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <h2 className="text-xl text-muted-foreground">Blog post not found.</h2>
      </div>
    );
  }

  // ⭐⭐ FIX: CAST JSON to correct type before sending to client ⭐⭐
  const serializedPost: BlogPost = {
    id: post.id,
    image: post.image,
    createdAt: post.createdAt.toISOString(),
    translations: post.translations as BlogPost["translations"], // FIX HERE
  };

  return <BlogDetail post={serializedPost} />;
}
