import { readFile } from "node:fs/promises";
import path from "node:path";

const ABOUT_CONTENT_PATH = path.join(process.cwd(), "src/content/about.mdx");
const FRONTMATTER_BLOCK = /^---\s*\n([\s\S]*?)\n---\s*\n?/;

type AboutFrontmatter = {
  title: string;
  subtitle: string;
  headshot: string;
};

export type AboutContent = AboutFrontmatter & {
  body: string;
  paragraphs: string[];
};

const DEFAULT_FRONTMATTER: AboutFrontmatter = {
  title: "About",
  subtitle: "",
  headshot: "",
};

function parseFrontmatter(rawFrontmatter: string): AboutFrontmatter {
  const entries = rawFrontmatter
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const parsed = entries.reduce<Record<string, string>>((accumulator, line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      return accumulator;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    const value =
      (rawValue.startsWith('"') && rawValue.endsWith('"')) || (rawValue.startsWith("'") && rawValue.endsWith("'"))
        ? rawValue.slice(1, -1)
        : rawValue;

    accumulator[key] = value;
    return accumulator;
  }, {});

  return {
    title: parsed.title ?? DEFAULT_FRONTMATTER.title,
    subtitle: parsed.subtitle ?? DEFAULT_FRONTMATTER.subtitle,
    headshot: parsed.headshot ?? DEFAULT_FRONTMATTER.headshot,
  };
}

function toParagraphs(body: string): string[] {
  if (!body) {
    return [];
  }

  return body
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\n/g, " ").trim())
    .filter(Boolean);
}

export async function getAboutContent(): Promise<AboutContent> {
  const rawFile = await readFile(ABOUT_CONTENT_PATH, "utf8");
  const frontmatterMatch = rawFile.match(FRONTMATTER_BLOCK);

  if (!frontmatterMatch) {
    const body = rawFile.trim();

    return {
      ...DEFAULT_FRONTMATTER,
      body,
      paragraphs: toParagraphs(body),
    };
  }

  const frontmatter = parseFrontmatter(frontmatterMatch[1]);
  const body = rawFile.slice(frontmatterMatch[0].length).trim();

  return {
    ...frontmatter,
    body,
    paragraphs: toParagraphs(body),
  };
}
