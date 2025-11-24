import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single blog by ID
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: params.id },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog", details: (error as Error).message },
      { status: 500 }
    );
  }
}

// PUT update blog
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();

    const detail =
      data.detail && typeof data.detail === "string"
        ? JSON.parse(data.detail)
        : data.detail;

    const blog = await prisma.blog.update({
      where: { id: params.id },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.description && { description: data.description }),
        ...(data.image && { image: data.image }),
        ...(data.category && { category: data.category }),
        ...(detail && { detail }),
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      {
        error: "Failed to update blog",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

// DELETE blog
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const blog = await prisma.blog.findUnique({ where: { id: params.id } });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    await prisma.blog.delete({ where: { id: params.id } });

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete blog", details: (error as Error).message },
      { status: 500 }
    );
  }
}
