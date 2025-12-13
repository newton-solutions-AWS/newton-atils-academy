// app/lessons/[track]/[lesson]/page.tsx
"use client";

import { useParams } from "next/navigation";
import AccessGate from "@/components/access/AccessGate";
import { RequiredAccess } from "@/components/access/types";

export default function LessonPage() {
  const params = useParams();

  const track = params.track as RequiredAccess;
  const lesson = params.lesson as string;

  return (
    <AccessGate required={track}>
      <div className="page-shell space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-slate-400 uppercase">
            {track} Division
          </p>
          <h1 className="text-3xl font-bold text-slate-100">
            Lesson: {lesson}
          </h1>
        </header>

        <div className="max-w-2xl text-slate-300 space-y-4">
          <p>This lesson is being dynamically rendered.</p>

          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>Dynamic routing works</li>
            <li>AccessGate is enforced</li>
            <li>Lesson engine scales infinitely</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
          <p className="text-sm text-slate-400">
            Progress tracking hook will live here.
          </p>

          <button
            disabled
            className="mt-3 rounded-md bg-emerald-600/40 px-4 py-2 text-sm font-medium text-emerald-200 cursor-not-allowed"
          >
            Mark Complete (Coming Soon)
          </button>
        </div>
      </div>
    </AccessGate>
  );
}