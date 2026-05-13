import AppShell from "@/components/AppShell";
import FeaturePanel from "@/components/FeaturePanel";
import { getAboutContent } from "@/content/aboutContent";
import { aboutFacts, aboutTags } from "@/content/siteContent";

export default async function AboutPage() {
  const aboutContent = await getAboutContent();
  const [backgroundText = ""] = aboutContent.paragraphs;

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

      <section className="about-grid about-grid--single reveal delay-3">
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
      </section>
    </AppShell>
  );
}
