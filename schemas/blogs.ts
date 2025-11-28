import { CategoryEnum } from "@/lib/constants";
import { z } from "zod";

export const BlogTranslationsSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: CategoryEnum,
  detail: z.string().min(1, "Detail is required"),
});

export const TranslationsSchema = z.object({
  en: BlogTranslationsSchema,
  mm: BlogTranslationsSchema,
});

export const UpdateBlogSchema = z
  .object({
    translations: TranslationsSchema.optional(),
    image: z.url("Image must be a valid URL").optional(),
  })
  .refine((data) => data.translations || data.image, {
    message: "At least one field must be provided",
  });

export const ParamsSchema = z.object({
  id: z.cuid("Invalid blog ID"),
});

export const CreateBlogSchema = z.object({
  translations: TranslationsSchema,
  image: z.url("Image must be a valid URL"),
});

export type CreateBlogInput = z.infer<typeof CreateBlogSchema>;
export type UpdateBlogInput = z.infer<typeof UpdateBlogSchema>;
