import Link from "next/link";
import AppShell from "@/components/AppShell";

const quickLinks = [
  {
    href: "/about",
    title: "About",
    description: "Background, language journey, and what I am building toward.",
  },
  {
    href: "/photos",
    title: "Photos",
    description: "A few favorite frames from Xinjiang, Yosemite, and beyond.",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Current software ideas from campus life to practical tools.",
  },
  {
    href: "/blogs",
    title: "Blogs",
    description: "Reading notes, lessons learned, and writing in progress.",
  },
];

export default function Home() {
  return (
    <AppShell activePath="/">
      <section className="hero-panel reveal delay-2">
        <p className="eyebrow">Santa Barbara, California</p>
        <h1 className="display-title">Brian Wumutijiang</h1>
        <p className="lead-copy">
          Computer science student shaping ideas through code, photography, and storytelling.
        </p>

        <div className="pill-row">
          <span className="pill">CS Student</span>
          <span className="pill">Photography</span>
          <span className="pill">Singing</span>
          <span className="pill">Fitness</span>
        </div>
      </section>

      <section className="grid-2 reveal delay-3">
        <article className="card">
          <h2>Current Focus</h2>
          <ul className="list-stack">
            <li>Building stronger algorithm and systems thinking.</li>
            <li>Improving product-level front-end and full-stack development.</li>
            <li>Creating a personal portfolio that keeps evolving over time.</li>
          </ul>
        </article>

        <article className="card warm">
          <h2>What Matters To Me</h2>
          <ul className="list-stack">
            <li>Design that feels intentional and personal.</li>
            <li>Code that stays readable as projects grow.</li>
            <li>Work that bridges cultures, language, and technology.</li>
          </ul>
        </article>
      </section>

      <section className="grid-2 reveal delay-4">
        {quickLinks.map((item) => (
          <Link key={item.href} href={item.href} className="feature-card">
            <p className="feature-kicker">Explore</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </section>

      <section className="card quiet reveal delay-5">
        <p className="note-line">Thanks for visiting my website. Thank you. Rahmat.</p>
        <p className="muted">我会持续更新个人作品、读书笔记和一些生活记录，欢迎常回来看看。</p>
      </section>
    </AppShell>
  );
}
