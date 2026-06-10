import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";

const BLOG_CONTENT_DIRECTORY = path.join(process.cwd(), "src/content/blog");

type BlogFrontmatter = {
  title: string;
  date: string;
  sortDate: string;
  slug: string;
  category: string;
  coverImage: string;
  summary: string;
};

type BlogPostWithContent = BlogFrontmatter & {
  content: string;
};

export type BlogPostMetadata = BlogFrontmatter;

export type BlogPost = BlogPostWithContent;

function toStringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function getFallbackSlug(fileName: string): string {
  return fileName.replace(/\.mdx?$/i, "");
}

function parseDateValue(date: string): number {
  const normalizedDate = date.replace(/\b(\d{1,2})(st|nd|rd|th)\b/gi, "$1");
  const timestamp = Date.parse(normalizedDate);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function toFrontmatter(data: Record<string, unknown>, fallbackSlug: string): BlogFrontmatter {
  return {
    title: toStringValue(data.title),
    date: toStringValue(data.date),
    sortDate: toStringValue(data.sortDate),
    slug: toStringValue(data.slug) || fallbackSlug,
    category: toStringValue(data.category),
    coverImage: toStringValue(data.coverImage),
    summary: toStringValue(data.summary),
  };
}

const loadBlogPosts = cache(async (): Promise<BlogPostWithContent[]> => {
  let directoryEntries: Array<import("node:fs").Dirent<string>>;

  try {
    directoryEntries = await readdir(BLOG_CONTENT_DIRECTORY, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }

  const mdxFiles = directoryEntries.filter((entry) => entry.isFile() && /\.mdx?$/i.test(entry.name));

  const posts = await Promise.all(
    mdxFiles.map(async (entry) => {
      const absolutePath = path.join(BLOG_CONTENT_DIRECTORY, entry.name);
      const fileContents = await readFile(absolutePath, "utf8");
      const { data, content } = matter(fileContents);
      const fallbackSlug = getFallbackSlug(entry.name);
      const frontmatter = toFrontmatter(data as Record<string, unknown>, fallbackSlug);

      return {
        ...frontmatter,
        content,
      };
    })
  );

  return posts.sort((left, right) => {
    const rightSortDate = right.sortDate || right.date;
    const leftSortDate = left.sortDate || left.date;
    const dateDifference = parseDateValue(rightSortDate) - parseDateValue(leftSortDate);

    if (dateDifference !== 0) {
      return dateDifference;
    }

    return left.slug.localeCompare(right.slug);
  });
});

export async function getAllBlogPosts(): Promise<BlogPostMetadata[]> {
  const posts = await loadBlogPosts();

  return posts.map(({ title, date, sortDate, slug, category, coverImage, summary }) => ({
    title,
    date,
    sortDate,
    slug,
    category,
    coverImage,
    summary,
  }));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await loadBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}
