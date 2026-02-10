import AppShell from "@/components/AppShell";

const timeline = [
  {
    year: "2023",
    title: "Moved to the United States",
    detail: "Started with the UCSB Extension Program, then transitioned into the SBCC path.",
  },
  {
    year: "2024",
    title: "Competitive Programming",
    detail: "Represented SBCC in ICPC-style contests and trained for problem solving under pressure.",
  },
  {
    year: "Now",
    title: "Teaching + Building",
    detail: "Tutoring CS 140 and MATH 150 while continuing personal projects and creative work.",
  },
];

const hobbies = [
  "Working out",
  "Photography",
  "Singing",
  "Reading",
  "Video editing",
  "Horror games",
];

const languages = ["Uyghurche (native)", "Mandarin Chinese", "English"];

export default function AboutPage() {
  return (
    <AppShell activePath="/about">
      <section className="hero-panel compact reveal delay-2">
        <p className="eyebrow">About</p>
        <h1 className="section-title">My Story So Far</h1>
        <p className="lead-copy">
          I am Brian, a computer science student at Santa Barbara City College, originally from Xinjiang, China.
          I enjoy building software that is practical, thoughtful, and clear.
        </p>
      </section>

      <section className="grid-2 reveal delay-3">
        <article className="card">
          <h2>Background</h2>
          <p>
            Growing up in Xinjiang shaped how I think about identity and communication. As an Uyghur student who
            moved internationally, language has always been part of my learning journey.
          </p>
          <div className="chip-row">
            {languages.map((language) => (
              <span key={language} className="chip">
                {language}
              </span>
            ))}
          </div>
        </article>

        <article className="card warm">
          <h2>Outside Class</h2>
          <p>
            My hobbies keep me balanced and creative. Photography and singing sharpen expression, while fitness keeps
            me disciplined and focused.
          </p>
          <div className="chip-row">
            {hobbies.map((hobby) => (
              <span key={hobby} className="chip">
                {hobby}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="timeline-grid reveal delay-4">
        {timeline.map((item) => (
          <article key={item.title} className="timeline-item">
            <p className="timeline-year">{item.year}</p>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
