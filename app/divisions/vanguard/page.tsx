import Image from "next/image";
import Link from "next/link";

export default function VanguardDivisionPage() {
  return (
    <div className="space-y-12">

      {/* HERO HEADER */}
      <div className="rounded-3xl border border-sky-500/40 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/10 p-10 shadow-xl shadow-sky-500/20">
        
        <div className="flex items-center gap-6">
          <div className="relative h-20 w-20 drop-shadow-[0_0_25px_rgba(56,189,248,0.8)]">
            <Image
              src="/icons/crest-newton.png"
              alt="Vanguard Crest"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-xs tracking-[0.35em] text-sky-300 uppercase">
              Vanguard Division
            </p>
            <h1 className="text-4xl font-bold text-slate-100 mt-1">
              Core Operator Path
            </h1>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              The primary Newton Solutions training pipeline. This is where all
              operators begin their ascent into multi-cloud engineering, architecture,
              security fundamentals and mission-critical technologies.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="grid gap-8 lg:grid-cols-2">

        {/* Mission Overview */}
        <div className="rounded-2xl border border-sky-400/40 bg-slate-900/40 p-8 shadow-lg shadow-sky-500/10">
          <h2 className="text-xl font-semibold text-sky-300">Mission Brief</h2>

          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Vanguard Division is the backbone of the ATILS Academy. It delivers
            the full multi-cloud foundation across AWS, Azure and GCP, combined
            with DevOps tooling, monitoring, automation and cloud security.
          </p>

          <p className="mt-3 text-sm text-slate-400">
            This pathway forms the elite baseline that enables operators to
            advance into Phoenix or Sentinel specialisations.
          </p>
        </div>

        {/* Training Access */}
        <div className="rounded-2xl border border-sky-400/40 bg-slate-900/40 p-8 shadow-lg shadow-sky-500/10">
          <h2 className="text-xl font-semibold text-sky-300">Access Status</h2>

          <p className="mt-3 text-sm text-slate-300">
            Vanguard is fully online and available to all ATILS learners.
          </p>

          <p className="mt-4 inline-block rounded-full bg-sky-500/20 px-4 py-1 text-xs font-semibold tracking-wider text-sky-300">
            ACCESS: OPEN
          </p>

          <div className="mt-6">
            <Link
              href="/lessons"
              className="inline-block rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400 transition"
            >
              Enter Vanguard Training Deck
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <p className="text-center text-xs text-slate-500">
        Vanguard Division: The Path of the Operator.
      </p>
    </div>
  );
}