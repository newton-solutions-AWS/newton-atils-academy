import Image from "next/image";
import Link from "next/link";

export default function DivisionsHub() {
  const divisions = [
    {
      id: "vanguard",
      title: "Vanguard Division",
      subtitle: "Core Operator Path",
      desc: "The main multi-cloud, DevOps and security pipeline. Start your operator journey here.",
      crest: "/icons/crest-newton.png",
      glow: "drop-shadow-[0_0_25px_rgba(56,189,248,0.8)]",
      border: "border-sky-500/40",
      href: "/divisions/vanguard",
    },
    {
      id: "phoenix",
      title: "Phoenix Division",
      subtitle: "Veteran Honour Portal",
      desc: "Dedicated veteran access route. Honouring service, elevating capability.",
      crest: "/icons/crest-phoenix.png",
      glow: "drop-shadow-[0_0_25px_rgba(245,158,11,0.85)]",
      border: "border-amber-500/40",
      href: "/divisions/phoenix",
    },
    {
      id: "sentinel",
      title: "Sentinel Division",
      subtitle: "Cyber & Coding Ops",
      desc: "Advanced cyber, coding, automation and operator-grade digital warfare skills.",
      crest: "/icons/crest-sentinel.png",
      glow: "drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]",
      border: "border-cyan-500/40",
      href: "/divisions/sentinel",
    },
  ];

  return (
    <div className="space-y-12">

      {/* HERO HEADER */}
      <div className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/10 p-10 shadow-xl shadow-slate-950/40">
        <h1 className="text-4xl font-bold text-slate-100 tracking-tight">
          Divisions
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400">
          Select your operational pathway. Each division represents a unique mission
          within the ATILS Academy — crafted to fit your background, goals and operator
          mindset.
        </p>
      </div>

      {/* DIVISION CARDS */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {divisions.map((d) => (
          <Link href={d.href} key={d.id}>
            <div
              className={`group relative rounded-2xl border ${d.border} bg-slate-900/40 p-6 shadow-lg shadow-slate-950/40 transition hover:bg-slate-900/70 hover:shadow-${d.id}`}
            >
              {/* Crest */}
              <div className="relative h-16 w-16 mx-auto mb-4">
                <Image
                  src={d.crest}
                  alt={`${d.title} Crest`}
                  fill
                  className={`object-contain mx-auto ${d.glow} transition-transform group-hover:scale-110`}
                />
              </div>

              {/* Text */}
              <h2 className="text-xl font-semibold text-slate-100 text-center">
                {d.title}
              </h2>
              <p className="mt-1 text-sm text-slate-400 text-center">{d.subtitle}</p>

              <p className="mt-3 text-xs text-slate-500 leading-relaxed text-center">
                {d.desc}
              </p>

              {/* Button */}
              <div className="mt-5 text-center">
                <span className="inline-block rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1 text-xs font-semibold text-slate-300 tracking-wide group-hover:border-sky-300">
                  Enter Division →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* FOOTER */}
      <p className="text-center text-xs text-slate-500">
        Phoenix · Sentinel · Vanguard — Choose Your Path of the Operator.
      </p>
    </div>
  );
}