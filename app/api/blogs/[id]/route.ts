import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  ParamsSchema,
  TranslationsSchema,
  UpdateBlogSchema,
} from "@/schemas/blogs";
import { z } from "zod";
import { BlogPost } from "@/types/blogs";
import type { Prisma } from "@prisma/client";

// 1. Update the type definition for params to be a Promise
type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(
  request: NextRequest,
  context: RouteContext // 2. Use context parameter
) {
  try {
    // 3. AWAIT the params before using them
    const { id } = await context.params;

    // Validate the string ID
    const validatedParams = ParamsSchema.parse({ id });

    const blog = await prisma.blog.findUnique({
      where: { id: validatedParams.id },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const formattedBlog: BlogPost = {
      ...blog,
      // Ensure 'blog.translations' is cast correctly for Zod if it comes from Prisma Json
      translations: TranslationsSchema.parse(blog.translations),
    };

    return NextResponse.json(formattedBlog);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid blog ID or translations" },
        { status: 400 }
      );
    }
    console.error("Failed to fetch blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    // 3. AWAIT params here too
    const { id } = await context.params;
    const validatedParams = ParamsSchema.parse({ id });

    const body = await request.json();
    const validatedData = UpdateBlogSchema.parse(body);

    const existingBlog = await prisma.blog.findUnique({
      where: { id: validatedParams.id },
    });

    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Prisma JSON updates usually require standard objects
    const updatedBlog = await prisma.blog.update({
      where: { id: validatedParams.id },
      data: {
        ...(validatedData.translations && {
          translations: validatedData
            .translations as Prisma.JsonValue,
        }),
        ...(validatedData.image && { image: validatedData.image }),
      },
    });

    const formattedBlog: BlogPost = {
      ...updatedBlog,
      translations: TranslationsSchema.parse(updatedBlog.translations),
    };

    return NextResponse.json(formattedBlog);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }
    console.error("Failed to update blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    // 3. AWAIT params here too
    const { id } = await context.params;
    const validatedParams = ParamsSchema.parse({ id });

    const existingBlog = await prisma.blog.findUnique({
      where: { id: validatedParams.id },
    });

    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    await prisma.blog.delete({
      where: { id: validatedParams.id },
    });

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }
    console.error("Failed to delete blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
