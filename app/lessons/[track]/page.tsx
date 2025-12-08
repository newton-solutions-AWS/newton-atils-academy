// app/lessons/[track]/page.tsx

import Link from "next/link";
import Image from "next/image";
import { getTrack } from "../data";

interface Props {
  params: { track: string };
}

export default function TrackPage({ params }: Props) {
  const track = getTrack(params.track);

  if (!track) {
    return (
      <div className="page-shell text-center py-20">
        <h1 className="text-3xl font-bold text-red-400">Track Not Found</h1>
        <Link href="/lessons" className="mt-6 inline-block text-newton-accent underline">
          ← Back to Lessons
        </Link>
      </div>
    );
  }

  return (
    <div className="page-shell space-y-6">
      <div className="flex items-center gap-4">
        <Image src={track.icon} alt={track.title} width={48} height={48} />
        <div>
          <h1 className="text-3xl font-bold">{track.title}</h1>
          <p className="text-slate-400">{track.subtitle}</p>
        </div>
      </div>

      <p className="text-slate-400">{track.description}</p>

      <div className="space-y-4 mt-6">
        {track.lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/lessons/${track.id}/${lesson.slug}`}
            className="block rounded-lg border border-slate-800 p-4 hover:bg-slate-900/50 transition"
          >
            <h2 className="font-semibold text-slate-100">{lesson.title}</h2>
            <p className="text-sm text-slate-400">Open lesson →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}