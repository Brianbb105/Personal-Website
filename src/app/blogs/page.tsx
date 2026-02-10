import AppShell from "@/components/AppShell";

const drafts = [
  {
    title: "Learning Java and C++ Through Practice",
    excerpt: "What changed once I moved from textbook exercises to contest-style problem solving.",
  },
  {
    title: "What Photography Taught Me About Software",
    excerpt: "Framing, composition, and patience as surprising parallels to engineering decisions.",
  },
  {
    title: "Third Language, First Principles",
    excerpt: "How learning in English changed how I study technical topics and communicate ideas.",
  },
  {
    title: "Notes From Tutoring CS 140",
    excerpt: "Patterns I notice when students get stuck and ways to explain difficult concepts simply.",
  },
];

export default function BlogsPage() {
  return (
    <AppShell activePath="/blogs">
      <section className="hero-panel compact reveal delay-2">
        <p className="eyebrow">Blogs</p>
        <h1 className="section-title">Writing In Progress</h1>
        <p className="lead-copy">
          I use this section for technical reflections, learning logs, and short essays from classes and personal
          projects.
        </p>
      </section>

      <section className="grid-2 reveal delay-3">
        {drafts.map((post) => (
          <article key={post.title} className="card">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>

      <section className="card warm reveal delay-4">
        <p className="note-line">
          Published entries and reading notes will appear here soon, with both English and Chinese updates.
        </p>
      </section>
    </AppShell>
  );
}
