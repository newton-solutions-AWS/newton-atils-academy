// lib/lessons.ts

export type LessonTrack = "Foundation" | "Cloud" | "Security";

export type Lesson = {
  slug: string;
  title: string;
  track: LessonTrack;
  summary: string;
  estimatedMinutes: number;
  content: string;
};

export const lessons: Lesson[] = [
  {
    slug: "foundation-01-operator-mindset",
    title: "Foundation 01 – Operator Mindset",
    track: "Foundation",
    summary:
      "Mapping your existing discipline, drills and service experience directly into cloud and cyber work.",
    estimatedMinutes: 20,
    content: `
# Foundation 01 – Operator Mindset

This is the first real step of ATILS.

Everything you already know — routine, drills, SOPs, battle rhythm — can be repurposed as learning firepower.

*By the end of this lesson you will:*

- Understand what it means to be a "multi-cloud operator"
- See how your service mindset transfers into tech
- Have a clear mental model of where ATILS will take you
`,
  },
  {
    slug: "cloud-01-global-infrastructure",
    title: "Cloud 01 – Global Infrastructure Overview",
    track: "Cloud",
    summary:
      "A tactical birds-eye view of regions, availability zones and shared responsibility.",
    estimatedMinutes: 25,
    content: `
# Cloud 01 – Global Infrastructure

Think of regions and availability zones as your global basing and redundancy strategy.

This skeleton lesson will later be expanded with diagrams and labs. For now, it's here to prove routing and structure.
`,
  },
];