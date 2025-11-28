// app/admin/blogs/new/page.tsx
import TranslationForm from "@/components/TranslationForm";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default function NewBlogPage() {
  // define server action in this server component
  async function saveBlog(data: any) {
    "use server";

    const { id, translations, image } = data;

    if (id) {
      await prisma.blog.update({
        where: { id },
        data: { image, translations },
      });
    } else {
      await prisma.blog.create({
        data: {
          image,
          translations,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }

    revalidatePath("/"); // revalidate cache
  }

  // pass server action to client component
  return <TranslationForm onSubmit={saveBlog} />;
}
