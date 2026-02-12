import Image from "next/image";
import AppShell from "@/components/AppShell";

const firstPostParagraphs = [
  "YEPIEEEEEE. I feel really happy because the website I made is finally launched. This project took me around a month. I started not even knowing how to create a project in WebStorm, and now I have deployed the website. I learned so much, much more than school can teach me.",
  "I was inspired by UCSBPlat. When I first used that website, I was amazed by how simple it is while still having so much information. I knew that was exactly the kind of website we were missing here, so I created one.",
  "School teaches you how to write code and pass unit tests, but it does not teach you how to connect with people and sell your product. I connected with the creator of UCSBPlat, Jiaming, on LinkedIn and told him about the project. He complimented the idea and offered help.",
  "While building the website, I showed the V1 version to students, instructors, and LTAs. Some people even tried to convince me not to launch it because they thought it was too easy to make, but I mostly received positive feedback.",
  "Thanks to Alba for helping find bugs in sections, Elizabeth for encouraging the idea and being the first to offer grade distribution data, Kira for reminding me to be proud of myself, and Professor Strenn for telling me mine is faster than the original website. Thanks to Hoyong, Ximi, Mimi, Adelina, and Sean for brainstorming with me.",
  "I feel really grateful and came to the realization that connecting with people is way more important than getting a perfect GPA.",
  "Helping the community has always been the subject I care about. For the future plan of this website, I do not know who will maintain it yet. But I want to add more features so it can truly benefit CC students. I want to add grade distributions and maybe integrate ASSIST.org.",
  "Hopefully, with all these features, this website will help students in the long term, helping them make smart moves when registering for classes and, most importantly, be successful in their academics.",
];

export default function BlogsPage() {
  return (
    <AppShell activePath="/blogs">
      <section className="hero-panel compact reveal delay-2">
        <p className="eyebrow">Blogs</p>
        <h1 className="section-title">First Post Is Live</h1>
        <p className="lead-copy">
          I use this section for project updates, technical reflections, and lessons learned while building useful
          things for students.
        </p>
      </section>

      <article className="card blog-post reveal delay-3">
        <div className="blog-cover">
          <Image
            src="/blogs/sbccplan-launch.png"
            alt="SBCCPlan homepage screenshot"
            width={2326}
            height={1406}
            priority
          />
        </div>
        <p className="blog-meta">Published on February 12, 2026</p>
        <h2>SBCCPlan is finally LUANCHED.</h2>
        <div className="blog-body">
          {firstPostParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="card warm reveal delay-4">
        <p className="note-line">
          More posts are coming soon, including updates on new features and what I learn while maintaining SBCCPlan.
        </p>
      </section>
    </AppShell>
  );
}
