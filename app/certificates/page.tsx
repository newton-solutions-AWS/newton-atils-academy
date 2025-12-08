import Image from "next/image";
import Link from "next/link";

export default function CertificatesPage() {
  const certificates = [
    {
      id: "atils-foundation",
      title: "ATILS Foundation Certification",
      desc: "Awarded for completing the core ATILS multi-cloud foundations track.",
      crest: "/icons/crest-newton.png",
      unlocked: false,
    },
    {
      id: "phoenix-veteran",
      title: "Phoenix Division Veteran Badge",
      desc: "Special recognition for verified veteran learners entering the Newton ecosystem.",
      crest: "/icons/crest-phoenix.png",
      unlocked: false,
    },
    {
      id: "sentinel-cyber",
      title: "Sentinel Cyber Initiate",
      desc: "Issued on completion of the first cyber & coding operational modules.",
      crest: "/icons/crest-sentinel.png",
      unlocked: false,
    },
  ];

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Award Registry
        </p>
        <h1 className="text-3xl font-bold text-slate-100">Certificates</h1>

        <p className="text-sm text-slate-400 max-w-2xl">
          All certifications you earn through ATILS Academy will appear here.
          Locked certificates will automatically unlock once you complete the required modules.
        </p>
      </header>

      {/* CERT GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`relative rounded-2xl border p-6 transition shadow-lg ${
              cert.unlocked
                ? "border-emerald-500/60 bg-slate-900/40 shadow-emerald-500/20"
                : "border-slate-800 bg-slate-900/30 shadow-slate-950/30"
            }`}
          >
            {/* Crest */}
            <div className="relative h-14 w-14 mb-4">
              <Image
                src={cert.crest}
                alt={cert.title}
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
              />
            </div>

            {/* Text */}
            <h2 className="text-xl font-semibold text-slate-100">{cert.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{cert.desc}</p>

            {/* Locked / Unlocked State */}
            {!cert.unlocked ? (
              <p className="mt-4 inline-block rounded-full bg-slate-800/70 px-4 py-1 text-xs font-semibold tracking-wide text-slate-400">
                🔒 LOCKED
              </p>
            ) : (
              <Link
                href={`/certificates/${cert.id}`}
                className="mt-4 inline-block rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/40 hover:bg-emerald-400"
              >
                VIEW
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <p className="text-xs text-slate-500 text-center pt-4">
        Certificates auto-generate instantly when your lessons are complete.
      </p>
    </div>
  );
}