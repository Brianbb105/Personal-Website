import Image from "next/image";
import AppShell from "@/components/AppShell";
import { GlassCard } from "@/components/glass";

const firstPostParagraphs = [
  "YEPIEEEEEE! I feel really happy because the website I made is finally launched. This project took me around a month. I started without even knowing how to create a project in WebStorm, and now I have deployed my website. I learned so much, much more than school can teach me.",
  "I was inspired by UCSBPlat. When I first used that website, I was amazed by how simple it is while still having so much information. I knew that was exactly the kind of website we were missing here, so I created one.",
  "School teaches you how to write code and pass unit tests, but it does not teach you how to connect with people and sell your product. I connected with the creator of UCSBPlat, Jiaming, on LinkedIn and told him about the project. He complimented the idea and offered help.",
  "While building the website, I showed the V1 version to students, instructors, and LTAs. Some people even tried to convince me not to launch it because they thought it was too easy to make, but I mostly received positive feedback.",
  "Thanks to Alba for helping me find bugs in different sections, Elizabeth for encouraging the idea and being the first to offer grade distribution data, Kira for reminding me to be proud of myself, and Professor Strenn for telling me mine is faster than the original website. Thanks to Hoyong, Ximi, Mimi, Adelina, and Sean for brainstorming with me.",
  "I feel really grateful and came to the realization that connecting with people is way more important than getting a perfect GPA.",
  "Helping the community has always been what I care about. As for the future of this website, I do not know who will maintain it yet. But I want to add more features so it can truly benefit CC students. I want to add grade distributions and maybe integrate ASSIST.org.",
  "Hopefully, with all these features, this website will benefit students in the long term by helping them make smart moves when registering for classes and, most importantly, helping them succeed academically.",
];

const stanfordReflectionParagraphs = [
  "I just submitted my Stanford application, and I cannot deny that it was a huge relief. I had actually been wondering whether it was worth applying to Stanford this year. While filling out the application, however, I realized how much I had grown within just one year.",
  "Growing up, I never had any kind of elite education. I was born in a city where the quality of education is significantly lower than in China's major cities. I attended public schools throughout both primary school and high school. The majority of my classes were taught in Mandarin. We had English classes, but we mainly learned how to answer multiple-choice questions and write short essays.",
  "When I decided to study abroad, I began teaching myself English. From listening to speaking, I worked on it little by little, listening to audio recordings one by one and correcting my pronunciation and flow as I spoke. By the time I reached the minimum score required to apply to college, I felt confident and thought I could handle a life where I had to speak a language that did not yet fully feel like me.",
  "But life was brutal. The moment I landed in the U.S., my language system seemed to freeze. I could not understand what people were talking about, did not know how to tip at restaurants, and did not understand how to initiate small talk. There was a period during my first year when I felt depressed, especially around daylight saving time in 2023, when the sun set around 4:40 PM and it was completely dark by 5 PM. During that time, I would listen to JVKE's \"this is how autumn feels,\" work at the dining hall, and live a life that felt out of my control.",
  "Working at the dining hall was probably the least depressing part of my first year. I worked 16 hours a week at DLG as a student worker, where my primary job was helping the cooks. During that period, I made friends, built many meaningful connections, and strengthened my conversational English. That was where I began to understand what real U.S. college students were like. There is one student I met there whom I will never forget. Even years later, his confidence, humor, and intellect still remind me of what I imagined a typical Southern California student to be. That was the kind of person I wanted to become.",
  "In my second year, because of the requirements of my program at UCSB PaCE, I had to transfer to SBCC to continue my education. At first, SBCC felt like a dead end to me: a smaller campus, fewer resources, and a strong sense of not belonging. I became depressed again, wandering like a headless fly. Classes at SBCC also felt more intense because they were all major-related courses. I was taking a Java class at the beginning of my time at SBCC, and it was both my first coding class ever and the most abstract class I had encountered.",
  "Part of that depression also came from unemployment, not because I was struggling financially, but because I felt like I did not belong to the school. To me, contributing to a community is one of the main ways of feeling that I belong. But during my first year at SBCC, I was not very involved in campus life. Because of that, I had more time to research schools and transfer plans. That was when I found Stanford.",
  "I had always wanted to go to Stanford when I was in high school simply because I had heard that it was famous. Yes, that was exactly what I thought at the time. In Chinese, there is a phrase, \"名校情结,\" which describes people who are obsessed with going to prestigious schools. I was one of them. I wanted to go to Stanford simply because of its name. So I decided to apply as a transfer for Fall 2025.",
  "Obviously, that plan failed. I was rejected by Stanford. It was not dramatic when I opened the rejection letter. In fact, I did not even realize I was opening my application status that day because I had just woken up. Seeing that I was rejected was, somehow, the answer I had expected. I do not know the exact reason why I was rejected, but I assume it was because I had not yet shown academic readiness and my GPA was relatively low.",
  "But I did not give up.",
  "After beginning my second year at SBCC, my path became much clearer. I started to realize that I do not want to study pure computer science. I want to study the relationship between humans, society, and AI, the kind of work that exists at the intersection of multiple disciplines. Now I know that this is called an interdisciplinary field. I first came to this realization when I was reading Homo Deus by Yuval Noah Harari in the spring of 2025. I was fascinated by how the human brain works, how unreliable our minds can be, and, more importantly, how often we convince ourselves that we surpass all other species simply because we have consciousness. For most people, that may be true, but I have my own thoughts about consciousness. Reading that book made me think that the relationship between AI and humanity will become one of the defining issues of the future. That was when I discovered Stanford's Symbolic Systems program. It immediately captured my attention because it is an interdisciplinary major that allows students to combine different fields and develop new ideas. I loved it.",
  "So I began preparing for this transfer application in the summer of 2025. I studied for the SAT for two months while taking Multivariable Calculus. I started asking my professors whether there were any tutoring jobs available, and I went to the library to ask whether they needed a technician. Eventually, I became a tutor for my Multivariable Calculus professor's Calculus I class. I also became a computer tutor at the LRC. In Fall 2025, I participated in ICPC as a member of SBCC's team programming team. I ran for Project Manager of the CS Club and became general staff in the Team Programming Club. In December, I submitted my UC application.",
  "In January 2026, I developed SBCCPlan, an unofficial website for students to browse classes and view professors, inspired by UCSBPlat. I also fine-tuned an LLM on my MacBook. Around the same time, I became a C++ tutor for SBCC's CS 140 class.",
  "In March, I started writing my essays for this application. My main essay is about how minority languages are absent from most AI training data, and how this may create greater inequality in language access and education, especially now that AI is changing the way people access information. When I was filling out my extracurricular section, I saw my record from last year. When I compared the two, I realized how much had changed. My essays had shifted from focusing on my trauma to engaging with real-world challenges in LLMs, language, and inequality. My extracurriculars had changed from showing that I could potentially contribute to a community to proving that I already had. That was when I realized that my growth in just one year had been exponential.",
  "This part kind of sounds like I am repeating my resume. But what I really mean by listing all of this is that rejection is not the end of the story. Being rejected by Stanford the first time brought me many things I had never expected. I found my community, and I found my passion. I am deeply grateful. Everyone I have met, every bit of help I have received, and every conversation I have had, no matter how small, has shaped who I am today.",
];

export default function BlogsPage() {
  return (
    <AppShell activePath="/blogs">
      <GlassCard as="section" className="hero-panel compact reveal delay-2">
        <p className="eyebrow">Blogs</p>
        <h1 className="section-title">Latest Writing</h1>
        <p className="lead-copy">
          I use this section for project updates, technical reflections, and lessons learned while building useful
          things for students.
        </p>
      </GlassCard>

      <GlassCard as="article" className="card blog-post reveal delay-3">
        <p className="blog-meta">Published on March 22, 2026</p>
        <h2>A Reflection After Submitting My Stanford Application</h2>
        <div className="blog-body">
          {stanfordReflectionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </GlassCard>

      <GlassCard as="article" className="card blog-post reveal delay-3">
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
        <h2>SBCCPlan is finally LAUNCHED.</h2>
        <div className="blog-body">
          {firstPostParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </GlassCard>

      <GlassCard as="section" className="card warm reveal delay-4">
        <p className="note-line">
          More posts are coming soon, including updates on new features and what I learn while maintaining SBCCPlan.
        </p>
      </GlassCard>
    </AppShell>
  );
}
