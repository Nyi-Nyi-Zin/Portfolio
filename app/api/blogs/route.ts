import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CreateBlogSchema, TranslationsSchema } from "@/schemas/blogs";
import { BlogPost } from "@/types/blogs";
import { z } from "zod";

export const revalidate = 60;
export const dynamic = "force-static";

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });

    const serialized = blogs.map((b) => ({
      ...b,
      createdAt: b.createdAt.toISOString(),
      updatedAt: b.updatedAt.toISOString(),
    }));

    return NextResponse.json(serialized);
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = CreateBlogSchema.parse(body);

    const blog = await prisma.blog.create({
      data: {
        translations: validatedData.translations,
        image: validatedData.image,
      },
    });

    return NextResponse.json(
      {
        ...blog,
        translations: TranslationsSchema.parse(blog.translations),
        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
