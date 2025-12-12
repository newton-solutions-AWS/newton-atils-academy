"use client";

import AccessGate from "@/components/access/AccessGate";
import LessonRenderer, { Lesson } from "./LessonRenderer";

export default function LessonGate({
  lesson,
  requiredAccess,
}: {
  lesson: Lesson;
  requiredAccess: "vanguard" | "sentinel" | "phoenixPortal";
}) {
  return (
    <AccessGate required={requiredAccess}>
      <LessonRenderer lesson={lesson} />
    </AccessGate>
  );
}
