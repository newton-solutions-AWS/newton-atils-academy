// app/divisions/page.tsx
import Link from "next/link";
import Image from "next/image";

const divisions = [
  {
    id: "vanguard",
    name: "Vanguard Division",
    crest: "/icons/crest-newton.png",
    tone: "Core Operator Path",
    description:
      "The main multi-cloud, DevSecOps and architecture pipeline. Shape your operator journey here.",
    accentClass: "from-sky-500/60 to-blue-500/40",
  },
  {
    id: "phoenix",
    name: "Phoenix Division",
    crest: "/icons/crest-phoenix.png",
    tone: "Veteran Honour Portal",
    description:
      "Curated veteran pathway and transition support for serving and former service leavers.",
    accentClass: "from-amber-500/70 to-orange-500/40",
  },
  {
    id: "sentinel",
    name: "Sentinel Division",
    crest: "/icons/crest-sentinel.png",
    tone: "Cyber & Coding Ops",
    description:
      "Advanced security, red/blue teaming concepts and coding labs layered on top of the core academy.",
    accentClass: "from-emerald-500/70 to-teal-500/40",
  },
] as const;

export default function DivisionsPage() {
  return (
    <div className="page-shell space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.3em] text-newton-accent">
          DIVISION SELECT
        </p>
        <h1 className="text-3xl font-bold text-slate-100">
          Choose Your Operator Division
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          Select your operational pathway. Each division reinforces the same
          core ATILS Academy, but with unique mission focus and culture
          overlays crafted to your background and operator mindset.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {divisions.map((division) => (
          <Link
            key={division.id}
            href={`/divisions/${division.id}`}
            className="group block rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-slate-500/80 hover:bg-slate-900/80"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-slate-950/70">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${division.accentClass} opacity-70`}
                />
                <Image
                  src={division.crest}
                  alt={`${division.name} Crest`}
                  width={48}
                  height={48}
                  className="relative z-10 h-12 w-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-50">
                  {division.name}
                </h2>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                  {division.tone}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-300">
              {division.description}
            </p>

            <div className="mt-5 flex items-center justify-between text-[11px] text-slate-400">
              <span className="rounded-full border border-slate-700/80 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-slate-300">
                Enter Division
              </span>
              <span className="opacity-70 group-hover:opacity-100">
                Phoenix · Sentinel · Vanguard — you&apos;ll future-proof the
                operator either way.
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}