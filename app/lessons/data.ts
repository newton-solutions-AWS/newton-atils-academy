// app/lessons/data.ts

export interface Lesson {
  slug: string;
  title: string;
  content: string;
}

export interface Track {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export const tracks: Record<string, Track> = {
  foundation: {
    id: "foundation",
    title: "Foundation Track",
    subtitle: "From Service to Cyber",
    description:
      "This is the core foundation track for the ATILS multi-cloud & operator pipeline.",
    icon: "/icons/foundation.png",
    lessons: [
      {
        slug: "lesson-1",
        title: "Welcome to ATILS",
        content:
          "Welcome brother — this is the first official lesson of the ATILS Academy.\nYour journey begins here.",
      },
      {
        slug: "lesson-2",
        title: "Mindset & Mission",
        content:
          "This lesson builds the mindset required for mastering multi-cloud and cyber.\nYour transformation begins now.",
      },
    ],
  },
};

// -----------------------------
// Get all tracks
// -----------------------------
export function getTracks(): Track[] {
  return Object.values(tracks);
}

// -----------------------------
// Case-Insensitive Track Resolver
// -----------------------------
export function getTrack(id: string): Track | null {
  const key = id.toLowerCase();
  return tracks[key] || null;
}

// -----------------------------
// Case-Insensitive Lesson Resolver
// -----------------------------
export function getLesson(trackId: string, slug: string): Lesson | null {
  const key = trackId.toLowerCase();
  const track = tracks[key];
  if (!track) return null;

  return track.lessons.find((lesson) => lesson.slug === slug) || null;
}