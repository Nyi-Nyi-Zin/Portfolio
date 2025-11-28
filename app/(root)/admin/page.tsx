import TranslationForm from "@/components/TranslationForm";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { CreateBlogInput } from "@/schemas/blogs";

export default function NewBlogPage() {
  async function saveBlog(data: CreateBlogInput) {
    "use server";

    await prisma.blog.create({
      data: {
        image: data.image,
        translations: data.translations,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    revalidatePath("/");
  }

  return <TranslationForm onSubmit={saveBlog} />;
}
