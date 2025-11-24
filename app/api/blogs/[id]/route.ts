import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: { id: string };
}

// GET single blog
export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = params;

  try {
    const blog = await prisma.blog.findUnique({ where: { id } });

    if (!blog)
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });

    return NextResponse.json(blog);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch blog", details: error.message },
      { status: 500 }
    );
  }
}

// PUT update blog
export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = params;

  try {
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
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update blog", details: error.message },
      { status: 500 }
    );
  }
}

// DELETE blog
export async function DELETE(_req: NextRequest, { params }: Params) {
  const { id } = params;

  try {
    const blog = await prisma.blog.findUnique({ where: { id } });
    if (!blog)
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });

    await prisma.blog.delete({ where: { id } });
    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to delete blog", details: error.message },
      { status: 500 }
    );
  }
}
