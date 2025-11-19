import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  category: string;
  content?: string;
};

const postsDirectory = path.join(process.cwd(), "content/blogs");

export function getBlogPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith(".mdx")) // Only .mdx files
      .map((fileName) => {
        const id = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);

        try {
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
        } catch (fileErr) {
          console.error(`Error reading blog post: ${fullPath}`, fileErr);
          return null;
        }
      })
      .filter((post): post is BlogPost => post !== null); // Remove failed reads

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (err) {
    console.error(`Error reading blog posts from ${postsDirectory}`, err);
    return [];
  }
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
