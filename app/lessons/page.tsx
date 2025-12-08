import Link from "next/link";
import Image from "next/image";
import { getTracks } from "./data";

export default function LessonsPage() {
  const tracks = getTracks();

  return (
    <div className="page-shell space-y-10">
      <header className="page-header space-y-2">
        <h1 className="text-3xl font-bold tracking-wide text-slate-100">
          ATILS Lesson Deck
        </h1>
        <p className="text-sm text-slate-400 max-w-xl">
          This is the staging area for the full ATILS lesson engine.  
          Tracks and modules are organised here before we fan out to tens of thousands of lessons.
        </p>
      </header>

      <div className="space-y-6">
        {tracks.map((track) => (
          <Link href={`/lessons/${track.id}`} key={track.id}>
            <div className="block rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-lg shadow-slate-950/30 transition hover:border-newton-500 hover:bg-slate-900/70">
              <div className="flex items-center gap-4">
                <Image
                  src={track.icon}
                  alt={track.title}
                  width={48}
                  height={48}
                  className="h-8 w-8"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-slate-100">{track.title}</h2>
                  <p className="text-sm text-slate-400">{track.subtitle}</p>
                </div>

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                  {track.lessons.length} {track.lessons.length === 1 ? "lesson" : "lessons"}
                </p>
              </div>

              <p className="text-xs text-slate-600 mt-3">{track.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}