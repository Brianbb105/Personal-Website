export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/photos", label: "Photos" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
] as const;

export const featuredProject = {
  title: "SBCCPlan",
  status: "Launched",
  summary:
    "An unofficial planning website for SBCC students to browse classes, check professors, and make registration decisions faster.",
  detail: "Built with Next.js and shaped by direct student feedback.",
  image: "/blogs/sbccplan-launch.png",
  tags: ["Next.js", "Searchable classes", "Student-built"],
};

export const projects = [
  {
    title: "SBCCPlan",
    status: "Launched",
    summary:
      "A class-planning tool inspired by UCSBPlat, designed to help students compare sections and explore professor information quickly.",
    stack: "Next.js, TypeScript, data processing",
  },
  {
    title: "Contest Prep Notebook",
    status: "Building",
    summary:
      "A focused workspace for tracking ICPC practice, patterns, solved problems, and timed sessions without clutter.",
    stack: "React, TypeScript, local-first notes",
  },
  {
    title: "Photo Story Atlas",
    status: "Planning",
    summary:
      "A visual archive that pairs travel photography with short stories, camera notes, and location memories.",
    stack: "Image curation, storytelling, maps",
  },
] as const;

export const photos = [
  {
    src: "/photos/DSC01084.jpg",
    width: 9504,
    height: 6336,
    title: "Kumtag Desert",
    location: "Piqan, Xinjiang",
    note: "Soft dunes, a quiet horizon, and warm evening light.",
  },
  {
    src: "/photos/DSC00730.jpg",
    width: 5147,
    height: 3431,
    title: "Tian Shan View",
    location: "Xinjiang",
    note: "A long telephoto look at the mountains from home.",
  },
  {
    src: "/photos/DSC01838.jpg",
    width: 6240,
    height: 4160,
    title: "Yosemite Frame",
    location: "California",
    note: "A clean landscape study built around stillness and depth.",
  },
] as const;

export const aboutFacts = [
  { label: "Name", value: "Brian Wumutijiang" },
  { label: "Based In", value: "California, U.S." },
  { label: "Study", value: "Computer Science student" },
  { label: "Interests", value: "Reading, coding, hiking, and photography" },
] as const;

export const timeline = [
  {
    year: "2023",
    title: "Moved to the United States",
    detail: "Started the next stage of my education and rebuilt daily life in a new language environment.",
  },
  {
    year: "2024",
    title: "Competitive Programming",
    detail: "Began training in problem solving and team contests through ICPC-style practice.",
  },
  {
    year: "Now",
    title: "Teaching + Building",
    detail: "Tutoring students while shipping projects that are useful, practical, and personal.",
  },
] as const;

export const aboutTags = [
  "Uyghur",
  "Mandarin",
  "English",
  "Photography",
  "Singing",
  "Video editing",
  "Fitness",
  "Horror games",
] as const;
