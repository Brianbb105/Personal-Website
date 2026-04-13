import AppShell from "@/components/AppShell";
import FeaturePanel from "@/components/FeaturePanel";
import { getAboutContent } from "@/content/aboutContent";
import { aboutFacts, aboutTags, timeline } from "@/content/siteContent";

export default async function AboutPage() {
  const aboutContent = await getAboutContent();
  const [backgroundText = "", focusText = ""] = aboutContent.paragraphs;

  return (
    <AppShell activePath="/about">
      <FeaturePanel
        title={aboutContent.title || "About"}
        description="The background, languages, and personal details that shape how I learn and build."
        className="reveal delay-2"
      >
        <div className="info-table">
          {aboutFacts.map((fact) => (
            <div key={fact.label} className="info-row">
              <span className="info-label">{fact.label}</span>
              <div className="info-value">
                <strong>{fact.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </FeaturePanel>

      <section className="about-grid reveal delay-3">
        <article className="detail-card">
          <p className="detail-label">Background</p>
          <h3>What shapes my perspective</h3>
          <p>{backgroundText}</p>
          <div className="tag-cluster">
            {aboutTags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </article>

        <article className="detail-card">
          <p className="detail-label">Right now</p>
          <h3>What I am focused on</h3>
          <p>{focusText}</p>
        </article>
      </section>

      <section className="detail-grid reveal delay-4">
        {timeline.map((item) => (
          <article key={item.title} className="detail-card">
            <p className="detail-label">{item.year}</p>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
