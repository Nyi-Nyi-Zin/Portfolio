import { TagValue } from "@/lib/constants";

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: Exclude<TagValue, "all">;
  content?: string;
};
