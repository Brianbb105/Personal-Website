import AppShell from "@/components/AppShell";

const projects = [
  {
    title: "Campus Study Planner",
    status: "Building",
    tone: "building",
    summary:
      "A weekly planner for classes, assignments, and revision blocks with a clean dashboard and reminders.",
    stack: "Next.js, TypeScript, PostgreSQL",
  },
  {
    title: "Photo Story Atlas",
    status: "Planning",
    tone: "planning",
    summary:
      "An interactive map that pairs travel photos with short stories and camera notes from each location.",
    stack: "Map rendering, image optimization, markdown content",
  },
  {
    title: "Contest Prep Notebook",
    status: "Concept",
    tone: "concept",
    summary:
      "A personal ICPC practice tracker to organize solved problems, patterns, and timed session results.",
    stack: "Problem tagging, spaced review, performance history",
  },
];

export default function ProjectsPage() {
  return (
    <AppShell activePath="/projects">
      <section className="hero-panel compact reveal delay-2">
        <p className="eyebrow">Projects</p>
        <h1 className="section-title">What I Am Building</h1>
        <p className="lead-copy">
          I am focused on projects that are useful in daily student life and still technically challenging enough to
          grow my engineering skills.
        </p>
      </section>

      <section className="grid-3 reveal delay-3">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <div className="status-row">
              <span className={`status-chip ${project.tone}`}>{project.status}</span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <p className="muted">
              <span className="inline-strong">Stack:</span> {project.stack}
            </p>
          </article>
        ))}
      </section>

      <section className="card quiet reveal delay-4">
        <p className="note-line">
          This section will expand with demos, code links, and implementation notes as each project ships.
        </p>
      </section>
    </AppShell>
  );
}
