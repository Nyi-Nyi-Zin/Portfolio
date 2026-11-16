import posts from "@/content/facebook-posts.json";
import journalPosts from "@/content/journal-posts.json";
import type { SerializedBlogPost } from "@/types/blogs";

// Published educational articles from Cloud Nine Innovations, with English translations.
export const defaultBlogPosts = [...journalPosts, ...posts] as SerializedBlogPost[];
