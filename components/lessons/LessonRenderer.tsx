"use client";

import LessonProgress from "./LessonProgress";

export type Lesson = {
  id: string;
  title: string;
  description?: string;
  content: string;
  type?: "theory" | "lab" | "quiz";
  estimatedTime?: string;
};

export default function LessonRenderer({ lesson }: { lesson: Lesson }) {
  if (!lesson) {
    return (
      <div className="p-10 text-center text-red-400">
        ❌ Lesson not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* HEADER */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-100">
          {lesson.title}
        </h1>

        {lesson.description && (
          <p className="text-slate-400">{lesson.description}</p>
        )}

        {lesson.estimatedTime && (
          <p className="text-xs text-slate-500">
            ⏱ Estimated time: {lesson.estimatedTime}
          </p>
        )}
      </header>

      {/* CONTENT */}
      <article className="prose prose-invert max-w-none">
        <pre className="whitespace-pre-wrap text-slate-200">
          {lesson.content}
        </pre>
      </article>

      {/* PROGRESS */}
      <LessonProgress lessonId={lesson.id} />
    </div>
  );
}