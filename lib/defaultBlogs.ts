import posts from "@/content/facebook-posts.json";
import type { SerializedBlogPost } from "@/types/blogs";

// Published educational articles from Cloud Nine Innovations, with English translations.
export const defaultBlogPosts = posts as SerializedBlogPost[];
