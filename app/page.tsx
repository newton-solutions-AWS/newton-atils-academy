import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* HERO / INTRO */}
      <section className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/10 p-8 sm:p-10 shadow-xl shadow-slate-950/40">
        {/* Crest + Title */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <Image
              src="/icons/crest-newton.png"
              alt="Newton Solutions Crest"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]"
            />
          </div>

          <div className="leading-tight">
            <p className="text-xs font-medium tracking-[0.35em] text-slate-400">
              ATILS ACADEMY
            </p>
            <p className="text-sm font-semibold text-slate-100">
              Newton Solutions
            </p>
          </div>
        </div>

        {/* Main copy */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              FROM SERVICE TO CYBER
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
              From Service <span className="text-sky-400">to Cyber.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              ATILS is your multi-cloud, DevSecOps & operator-grade training
              pipeline. Built for the veteran, designed for the operator who
              refuses to stay average. One academy, one console, one mission.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
              >
                Open Operator Dashboard
              </Link>

              <Link
                href="/lessons"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/40 px-6 py-2.5 text-sm font-semibold text-slate-100 shadow-md shadow-slate-950/40 transition hover:border-sky-400 hover:bg-slate-900/80"
              >
                Enter Lesson Deck
              </Link>
            </div>

            {/* Tagline */}
            <p className="pt-4 text-xs text-slate-500">
              <span className="font-semibold text-slate-300">
                Newton Default · Phoenix Division · Sentinel Division
              </span>{" "}
              • Built by a British Army veteran for global operators.
            </p>
          </div>

          {/* Hero crest / orb */}
          <div className="mx-auto mt-4 lg:mt-0 lg:ml-8">
            <div className="relative h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-gradient-to-br from-sky-500/10 via-sky-400/5 to-transparent">
              <div className="absolute inset-4 rounded-full bg-slate-900/40 backdrop-blur-xl border border-sky-500/40 shadow-[0_0_40px_rgba(56,189,248,0.5)] flex items-center justify-center">
                <Image
                  src="/icons/crest-newton.png"
                  alt="Newton Crest Orb"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-[0_0_35px_rgba(56,189,248,0.8)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            DIVISIONS
          </p>
          <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Veteran Built · Operator Grade
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Newton Default */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-lg shadow-slate-950/40 transition hover:border-sky-400/80 hover:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/icons/crest-newton.png"
                  alt="Newton Default Crest"
                  fill
                  className="object-contain drop-shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Newton Default
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  Core Multi-Cloud Operator Path
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Standard access. AWS, Azure & GCP mastery, security and
              architecture fundamentals. Your “day-one” Newton Solutions track.
            </p>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              Status: <span className="text-emerald-400">Open</span>
            </p>
          </div>

          {/* Phoenix Division */}
          <div className="group relative overflow-hidden rounded-2xl border border-amber-500/60 bg-slate-900/40 p-5 shadow-lg shadow-amber-500/25 transition hover:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/icons/crest-phoenix.png"
                  alt="Phoenix Division Crest"
                  fill
                  className="object-contain drop-shadow-[0_0_18px_rgba(245,158,11,0.8)]"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300/80">
                  Phoenix Division
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  Veteran Honour Portal
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-300">
              Dedicated veteran-focussed entry path. Same core curriculum as
              Newton Default with additional support, mindset and transition
              modules.
            </p>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
              Status: <span className="text-amber-200">Priority Access</span>
            </p>
          </div>

          {/* Sentinel Division */}
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/70 bg-slate-900/40 p-5 shadow-lg shadow-cyan-500/25 transition hover:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/icons/crest-sentinel.png"
                  alt="Sentinel Division Crest"
                  fill
                  className="object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.9)]"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300/90">
                  Sentinel Division
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  Coding & Cyber Upgrade Stack
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-300">
              Advanced coding, offensive & defensive cyber, automation and lab
              upgrades. Add-on modules that sit on top of the core ATILS path.
            </p>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Status: <span className="text-cyan-100">Coming Online</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}