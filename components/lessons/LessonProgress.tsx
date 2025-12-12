"use client";

import { useUser } from "@/components/context/UserProvider";

export default function LessonProgress({
  lessonId,
}: {
  lessonId: string;
}) {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm text-slate-300">
        📘 Lesson ID: <span className="text-slate-400">{lessonId}</span>
      </p>

      <p className="mt-2 text-xs text-slate-500">
        Progress tracking will sync here (XP, rank, completion).
      </p>

      <button
        disabled
        className="mt-4 rounded-lg bg-emerald-500/20 px-4 py-2 text-emerald-400 cursor-not-allowed"
      >
        Mark Complete (Coming Soon)
      </button>
    </div>
  );
}