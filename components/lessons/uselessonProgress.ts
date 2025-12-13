"use client";

import { useState } from "react";

export type ProgressState = {
  completedLessons: string[];
  xp: number;
};

export function useLessonProgress() {
  const [progress, setProgress] = useState<ProgressState>({
    completedLessons: [],
    xp: 0,
  });

  function completeLesson(lessonId: string) {
    setProgress((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;

      return {
        completedLessons: [...prev.completedLessons, lessonId],
        xp: prev.xp + 50, // XP per lesson
      };
    });
  }

  return {
    progress,
    completeLesson,
  };
}
