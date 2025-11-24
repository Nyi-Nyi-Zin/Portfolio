import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const page = searchParams.get("page") || "1";
    const limit = searchParams.get("limit") || "10";

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = category ? { category } : {};

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { date: "desc" },
      }),
      prisma.blog.count({ where }),
    ]);

    return NextResponse.json({
      blogs,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Destructure payload
    const { title, description, image, category, detail } = body;

    // Basic validation
    if (!title || !description || !image || !category || !detail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        description,
        image,
        category,
        detail,
        date: new Date(), // Add date field
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error: any) {
    console.error("Blog create error:", error.message);
    return NextResponse.json(
      { error: "Failed to create blog", details: error.message },
      { status: 500 }
    );
  }
}
