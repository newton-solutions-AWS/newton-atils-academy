// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="page-shell space-y-12">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/crest-newton.png"
            alt="Newton Solutions Crest"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg"
          />
          <div>
            <p className="text-[10px] font-semibold tracking-[0.3em] text-slate-400">
              ATILS ACADEMY
            </p>
            <p className="text-sm font-medium text-slate-100">
              Newton Solutions
            </p>
          </div>
        </div>

        <div className="hidden text-right text-[11px] text-slate-400 sm:block">
          <p className="uppercase tracking-[0.25em] text-newton-accent">
            FROM SERVICE TO CYBER
          </p>
          <p>Built by British Army veteran for global operators.</p>
        </div>
      </div>

      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-newton-accent">
            OPERATOR BRIEFING
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-50 md:text-5xl">
            From <span className="text-newton-accent">Service</span> to{" "}
            <span className="text-sky-400">Cyber</span>.
          </h1>
          <p className="max-w-xl text-sm text-slate-300">
            ATILS is your multi-cloud, DevSecOps & operator-grade training
            pipeline. Built for the veteran, designed for the operator who
            refuses to stay average. One academy, one console, one mission.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-full bg-newton-accent px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-newton-accent/40 hover:bg-newton-accent/90"
            >
              Open Operator Dashboard →
            </Link>
            <Link
              href="/lessons"
              className="rounded-full border border-slate-600/80 bg-slate-900/50 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-newton-accent hover:bg-slate-900/90"
            >
              Enter Lesson Deck
            </Link>
            <Link
              href="/divisions"
              className="rounded-full border border-slate-700/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300 hover:border-sky-400"
            >
              Division Select
            </Link>
          </div>

          {/* Tagline */}
          <p className="text-[11px] text-slate-500">
            Newton Vanguard · Phoenix Division · Sentinel Division ·
            Multi-cloud · DevSecOps · Operator-grade training.
          </p>
        </div>

        {/* Side panel */}
        <aside className="space-y-4 rounded-2xl border border-slate-700/70 bg-slate-900/40 p-5 shadow-xl shadow-black/40">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-400">
            OPERATOR SNAPSHOT
          </p>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              • Status: <span className="text-emerald-400">Active</span>
            </p>
            <p>• Branch: Royal Artillery</p>
            <p>• Time Served: 2015–2026</p>
            <p>• Objective: Transition to high-demand cyber & cloud roles.</p>
          </div>
          <div className="mt-4 space-y-2 text-[11px] text-slate-400">
            <p>
              Passing ATILS is more than a course – it&apos;s your{" "}
              <span className="text-slate-100">
                entrance exam to Newton Solutions legacy academies.
              </span>
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}