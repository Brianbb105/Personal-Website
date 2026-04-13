import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import AppShell from "@/components/AppShell";
import { getAllBlogPosts, getBlogPostBySlug } from "@/content/blogContent";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatBlogMeta(category: string, date: string): string {
  return [category, date].filter(Boolean).join(" • ");
}

function getDisplayTitle(title: string, slug: string): string {
  return title || slug;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  const displayTitle = getDisplayTitle(post.title, post.slug);

  return {
    title: displayTitle,
    description: post.summary || undefined,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogMeta = formatBlogMeta(post.category, post.date);
  const displayTitle = getDisplayTitle(post.title, post.slug);

  return (
    <AppShell activePath="/blogs">
      <section className="blogs-post reveal delay-2">
        <article className="detail-card blog-article-card">
          {post.coverImage ? (
            <div className="article-cover">
              <Image
                src={post.coverImage}
                alt={`${displayTitle} cover image`}
                fill
                priority
                sizes="(max-width: 860px) 100vw, 900px"
                className="media-image position-top"
              />
            </div>
          ) : null}

          <div className="blog-reading-column">
            <header className="blog-article-header">
              {blogMeta ? <p className="detail-label">{blogMeta}</p> : null}
              <h1 className="blog-post-title">{displayTitle}</h1>
            </header>

            <div className="blog-article-content">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </article>
      </section>
    </AppShell>
  );
}
