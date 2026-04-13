import Image from "next/image";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import FeaturePanel from "@/components/FeaturePanel";
import { getAllBlogPosts } from "@/content/blogContent";
import { featuredProject, photos } from "@/content/siteContent";

function getBlogPreviewMeta(category: string, date: string): string {
  return [category, date].filter(Boolean).join(" • ");
}

function getDisplayTitle(title: string, slug: string): string {
  return title || slug;
}

export default async function Home() {
  const blogPosts = (await getAllBlogPosts()).slice(0, 2);

  return (
    <AppShell activePath="/">
      <section className="liquid-panel hero-panel reveal delay-2">
        <div className="home-hero-grid">
          <div className="hero-copy">
            <div className="hero-heading">
              <p className="hero-intro">My name is</p>
              <h1 className="hero-name">Brian Wumutijiang</h1>
            </div>

            <div className="hero-body">
              <p>I am a Computer Science student in California, U.S.</p>
              <p>I like reading, coding, and hiking.</p>
            </div>
          </div>

          <div className="liquid-media portrait-media media-placeholder" aria-label="Portrait photo of Brian Wumutijiang">
            <Image
              src="/home/IMG_1731.jpeg"
              alt="Brian Wumutijiang standing by a rocky waterfall"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 380px"
              className="media-image hero-photo-image"
            />
          </div>
        </div>
      </section>

      <FeaturePanel
        title="Projects"
        description="Current software ideas and the tools I am actively shaping."
        href="/projects"
        linkLabel="Open projects"
        className="reveal delay-3"
      >
        <Link href="/projects" className="media-link" aria-label="Open projects page">
          <div className="liquid-media">
            <Image
              src={featuredProject.image}
              alt={`${featuredProject.title} preview`}
              fill
              sizes="(max-width: 860px) 100vw, 900px"
              className="media-image position-top"
            />
            <div className="media-scrim" />
            <div className="spotlight-shell">
              <div className="spotlight-card spotlight-card--soft">
                <p className="spotlight-label">Featured Project</p>
                <h3 className="spotlight-title">{featuredProject.title}</h3>
                <p className="spotlight-copy">{featuredProject.summary}</p>
                <div className="spotlight-chip-row">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="spotlight-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </FeaturePanel>

      <FeaturePanel
        title="Photos"
        description="A few frames from Xinjiang, Yosemite, and the places I keep revisiting."
        href="/photos"
        linkLabel="Open photos"
        className="reveal delay-4"
      >
        <Link href="/photos" className="media-link" aria-label="Open photos page">
          <div className="liquid-media photo-media">
            <Image
              src={photos[1].src}
              alt={`${photos[1].title} in ${photos[1].location}`}
              width={photos[1].width}
              height={photos[1].height}
              sizes="(max-width: 860px) 100vw, 900px"
              className="media-image photo-media-image"
            />
            <div className="media-scrim" />
            <div className="spotlight-shell">
              <div className="spotlight-card spotlight-card--soft photo-description-tab">
                <p className="spotlight-label">{photos[1].location}</p>
                <h3 className="spotlight-title">{photos[1].title}</h3>
                <p className="spotlight-copy">{photos[1].note}</p>
              </div>
            </div>
          </div>
        </Link>
      </FeaturePanel>

      <FeaturePanel
        title="Blogs"
        description="Project notes, reflections, and writing that tracks what I am learning."
        href="/blogs"
        linkLabel="Open blogs"
        className="home-blogs-panel reveal delay-5"
      >
        <Link href="/blogs" className="media-link blogs-preview-link" aria-label="Open blogs page">
          <div className="preview-stack preview-stack--inline">
            {blogPosts.map((post) => {
              const previewMeta = getBlogPreviewMeta(post.category, post.date);
              const displayTitle = getDisplayTitle(post.title, post.slug);

              return (
                <article key={post.slug} className="preview-card">
                  {previewMeta ? <p className="preview-meta">{previewMeta}</p> : null}
                  <h3>{displayTitle}</h3>
                  {post.summary ? <p>{post.summary}</p> : null}
                </article>
              );
            })}
          </div>
        </Link>
      </FeaturePanel>

      <FeaturePanel
        title="About"
        description="A quick snapshot of who I am, what I study, and the things I care about."
        href="/about"
        linkLabel="Open About"
        className="reveal delay-6"
      />
    </AppShell>
  );
}
