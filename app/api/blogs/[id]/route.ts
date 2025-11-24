import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// In newer Next.js versions, params is a Promise that must be awaited
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog)
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  return NextResponse.json(blog);
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const data = await req.json();

  const detail =
    data.detail && typeof data.detail === "string"
      ? JSON.parse(data.detail)
      : data.detail;

  const blog = await prisma.blog.update({
    where: { id },
    data: {
      ...(data.title && { title: data.title }),
      ...(data.description && { description: data.description }),
      ...(data.image && { image: data.image }),
      ...(data.category && { category: data.category }),
      ...(detail && { detail }),
    },
  });

  return NextResponse.json(blog);
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog)
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  await prisma.blog.delete({ where: { id } });
  return NextResponse.json({ message: "Blog deleted successfully" });
}
