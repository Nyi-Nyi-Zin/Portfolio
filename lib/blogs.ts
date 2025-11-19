// lib/blogs.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  id: string; // slug (filename)
  title: string;
  date: string;
  image: string;
  description: string;
  category: string;
  content?: string;
};

const postsDirectory = path.join(process.cwd(), "content/blogs");

export function getBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx")) // Only .mdx files
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as {
          title: string;
          date: string;
          image: string;
          description: string;
          category: string;
        }),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      meta: data as {
        title: string;
        date: string;
        image: string;
        description: string;
        category: string;
      },
      content,
    };
  } catch (err) {
    console.error(`Error reading blog post: ${fullPath}`, err);
    return null;
  }
}

export function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min read`;
}
