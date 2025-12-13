// app/lessons/[track]/[slug]/page.tsx

import Link from "next/link";
import { getLesson } from "../../data";

interface Props {
  params: { track: string; slug: string };
}

export default function LessonPage({ params }: Props) {
  const lesson = getLesson(params.track, params.slug);

  if (!lesson) {
    return (
      <div className="page-shell text-center py-20">
        <h1 className="text-3xl font-bold text-red-400">Lesson Not Found</h1>
        <Link
          href={`/lessons/${params.track}`}
          className="mt-6 inline-block text-newton-accent underline"
        >
          ← Back to Track
        </Link>
      </div>
    );
  }

  return (
    <div className="page-shell space-y-6">
      <h1 className="text-3xl font-bold">{lesson.title}</h1>

      <p className="whitespace-pre-line text-slate-300">{lesson.content}</p>

      <Link
        href={`/lessons/${params.track}`}
        className="inline-block mt-6 text-newton-accent underline"
      >
        ← Back to Track
      </Link>
    </div>
  );
}
