"use client";

import LessonGate from "@/components/lessons/LessonGate";
import { Lesson } from "@/components/lessons/LessonRenderer";

const testLesson: Lesson = {
  id: "vanguard-test-001",
  title: "Welcome to the ATILS Academy",
  description:
    "This is a test lesson to validate the lesson engine, access control, and rendering pipeline.",
  content: `
Welcome to ATILS Academy.

This lesson confirms that:
- The lesson engine is working
- Division access is enforced
- The renderer displays structured content correctly

If you can read this, the core engine is operational.

Next steps:
• Lesson routing at scale
• Progress tracking
• Rank & XP
• Certificates
`,
  type: "theory",
  estimatedTime: "5 minutes",
};

export default function TestLessonPage() {
  return (
    <LessonGate
      lesson={testLesson}
      requiredAccess="vanguard"
    />
  );
}