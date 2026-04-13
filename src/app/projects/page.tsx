import Image from "next/image";
import AppShell from "@/components/AppShell";
import { featuredProject } from "@/content/siteContent";

export default function ProjectsPage() {
  return (
    <AppShell activePath="/projects">
      <section className="projects-heading-block reveal delay-2">
        <h1 className="panel-heading">Projects</h1>
        <p className="panel-description">Cool stuff I'm working on. </p>
      </section>

      <section className="projects-feature reveal delay-3">
        <a
          href="https://sbccplan.com"
          target="_blank"
          rel="noreferrer"
          className="projects-feature-link"
          aria-label={`Open ${featuredProject.title}`}
        >
          <div className="liquid-media">
            <Image
              src={featuredProject.image}
              alt={`${featuredProject.title} homepage preview`}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 900px"
              className="media-image position-top"
            />
            <div className="media-scrim" />
            <div className="spotlight-shell">
              <div className="spotlight-card spotlight-card--soft">
                <p className="spotlight-label">Featured Project</p>
                <h2 className="spotlight-title">{featuredProject.title}</h2>
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
        </a>
      </section>
    </AppShell>
  );
}
