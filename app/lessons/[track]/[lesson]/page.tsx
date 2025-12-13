"use client";

import { useParams } from "next/navigation";
import AccessGate from "@/components/access/AccessGate";

export default function LessonPage() {
  const params = useParams();

  const track = params.track as string;
  const lesson = params.lesson as string;

  return (
    <AccessGate required={track}>
      <div className="page-shell space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-slate-400">
            {track} Division
          </p>
          <h1 className="text-3xl font-bold text-slate-100">
            Lesson: {lesson}
          </h1>
        </header>

        <div className="text-slate-300">
          This lesson is being dynamically rendered.
        </div>
      </div>
    </AccessGate>
  );
}