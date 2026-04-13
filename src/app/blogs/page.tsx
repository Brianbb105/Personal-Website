import Image from "next/image";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { getAllBlogPosts } from "@/content/blogContent";

function getMetadataLine(category: string, date: string): string {
  return [category, date].filter(Boolean).join(" • ");
}

function getDisplayTitle(title: string, slug: string): string {
  return title || slug;
}

export default async function BlogsPage() {
  const sortedPosts = await getAllBlogPosts();

  return (
    <AppShell activePath="/blogs">
      <section className="blogs-heading-block reveal delay-2">
        <h1 className="panel-heading">Blogs</h1>
      </section>

      <section className="blogs-list reveal delay-3">
        {sortedPosts.map((post) => {
          const metadataLine = getMetadataLine(post.category, post.date);
          const displayTitle = getDisplayTitle(post.title, post.slug);

          return (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="media-link blog-card-link" aria-label={`Read ${displayTitle}`}>
              <article className="detail-card">
                {post.coverImage ? (
                  <div className="article-cover">
                    <Image
                      src={post.coverImage}
                      alt={`${displayTitle} cover image`}
                      fill
                      sizes="(max-width: 860px) 100vw, 900px"
                      className="media-image position-top"
                    />
                  </div>
                ) : null}
                {metadataLine ? <p className="detail-label">{metadataLine}</p> : null}
                <h3>{displayTitle}</h3>
              </article>
            </Link>
          );
        })}
      </section>
    </AppShell>
  );
}
