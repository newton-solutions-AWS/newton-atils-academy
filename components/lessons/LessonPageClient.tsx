"use client";

import AccessGate from "@/components/access/AccessGate";

export default function LessonPageClient({
  track,
  lesson,
}: {
  track: string;
  lesson: string;
}) {
  return (
    <AccessGate required={track}>
      <div className="page-shell space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-slate-400">
            {track.toUpperCase()} DIVISION
          </p>
          <h1 className="text-3xl font-bold text-slate-100">Lesson: {lesson}</h1>
        </header>

        <div className="max-w-2xl text-slate-300 space-y-4">
          <p>This lesson is being dynamically rendered.</p>
          <p><strong>Track:</strong> {track}</p>
          <p><strong>Lesson ID:</strong> {lesson}</p>

          <ul className="list-disc ml-5 space-y-1">
            <li>Dynamic routing works</li>
            <li>AccessGate is enforced</li>
            <li>Lesson engine scales infinitely</li>
          </ul>
        </div>

        <button
          disabled
          className="px-4 py-2 rounded bg-teal-600/60 text-white text-sm"
        >
          Mark Complete (Coming Soon)
        </button>
      </div>
    </AccessGate>
  );
}