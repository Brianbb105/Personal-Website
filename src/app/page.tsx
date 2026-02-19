import Link from "next/link";
import AppShell from "@/components/AppShell";
import { GlassButton, GlassCard, GlassTile } from "@/components/glass";

const quickLinks = [
  {
    href: "/about",
    title: "About",
    icon: "AB",
    description: "Background, language journey, and what I am building toward.",
  },
  {
    href: "/photos",
    title: "Photos",
    icon: "PH",
    description: "Favorite frames from Xinjiang, Yosemite, and beyond.",
  },
  {
    href: "/projects",
    title: "Projects",
    icon: "PR",
    description: "Current software ideas from campus life to practical tools.",
  },
  {
    href: "/blogs",
    title: "Blogs",
    icon: "BL",
    description: "Reading notes, lessons learned, and writing in progress.",
  },
];

const nowTiles = [
  {
    label: "Learning Sprint",
    value: "Algorithms + systems",
    note: "Daily problem solving and design drills",
  },
  {
    label: "Build Mode",
    value: "Portfolio iterations",
    note: "Refining UI and full-stack execution",
  },
  {
    label: "Creative Block",
    value: "Photography edits",
    note: "Short visual stories from recent trips",
  },
  {
    label: "Community",
    value: "Tutoring sessions",
    note: "Helping peers in CS 140 and MATH 150",
  },
  {
    label: "Language",
    value: "Uyghur + Mandarin + English",
    note: "Cross-cultural communication stays central",
  },
  {
    label: "Energy",
    value: "Gym + consistency",
    note: "Discipline that transfers to coding",
  },
];

export default function Home() {
  return (
    <AppShell activePath="/">
      <GlassCard as="section" className="hero-panel reveal delay-2">
        <p className="eyebrow">Santa Barbara, California</p>
        <h1 className="display-title">Brian Wumutijiang</h1>
        <p className="lead-copy">
          Computer science student shaping ideas through code, photography, and storytelling.
        </p>

        <div className="pill-row" aria-label="Interests">
          <span className="pill">CS Student</span>
          <span className="pill">Photography</span>
          <span className="pill">Singing</span>
          <span className="pill">Fitness</span>
        </div>

        <div className="home-actions">
          <GlassButton href="/projects">View Projects</GlassButton>
          <GlassButton href="/blogs" tone="soft">
            Read Latest Post
          </GlassButton>
        </div>
      </GlassCard>

      <section className="grid-2 reveal delay-3">
        <GlassCard className="card">
          <h2>Current Focus</h2>
          <ul className="list-stack">
            <li>Building stronger algorithm and systems thinking.</li>
            <li>Improving product-level front-end and full-stack development.</li>
            <li>Creating a personal portfolio that keeps evolving over time.</li>
          </ul>
        </GlassCard>

        <GlassCard className="card warm">
          <h2>What Matters To Me</h2>
          <ul className="list-stack">
            <li>Design that feels intentional and personal.</li>
            <li>Code that stays readable as projects grow.</li>
            <li>Work that bridges cultures, language, and technology.</li>
          </ul>
        </GlassCard>
      </section>

      <section className="tile-section reveal delay-4">
        <div className="tile-section-head">
          <p className="eyebrow">Explore</p>
          <h2 className="section-subtitle">Control Center Shortcuts</h2>
        </div>

        <div className="tile-grid">
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="tile-link">
              <GlassTile>
                <span className="tile-icon" aria-hidden>
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </GlassTile>
            </Link>
          ))}
        </div>
      </section>

      <section className="tile-section reveal delay-5">
        <div className="tile-section-head">
          <p className="eyebrow">Now</p>
          <h2 className="section-subtitle">Current Signals</h2>
        </div>

        <div className="tile-grid tile-grid-compact">
          {nowTiles.map((tile) => (
            <GlassTile key={tile.label} className="status-tile">
              <p className="tile-label">{tile.label}</p>
              <p className="tile-value">{tile.value}</p>
              <p className="tile-note">{tile.note}</p>
            </GlassTile>
          ))}
        </div>
      </section>

      <GlassCard as="section" className="card quiet reveal delay-6">
        <p className="note-line">Thanks for visiting my website. Thank you. Rahmat.</p>
        <p className="muted">我会持续更新个人作品、读书笔记和一些生活记录，欢迎常回来看看。</p>
      </GlassCard>
    </AppShell>
  );
}
