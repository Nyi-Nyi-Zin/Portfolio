import { TagValue } from "@/lib/constants";

export interface BlogTranslations {
  title: string;
  description: string;
  category: Exclude<TagValue, "all">;
  detail: string;
}

export interface BlogPost {
  id: string;
  translations: {
    en: BlogTranslations;
    mm: BlogTranslations;
  };
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SerializedBlogPost
  extends Omit<BlogPost, "createdAt" | "updatedAt"> {
  createdAt: string;
  updatedAt: string;
}

export interface TranslationContent {
  title: string;
  description: string;
  category: string;
  detail: string;
}

export interface TranslationData {
  id: string;
  translations: Record<string, TranslationContent>;
  image: string;
}
