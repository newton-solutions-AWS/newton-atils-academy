"use client";

export default function SentinelPaywall() {
  return (
    <div className="p-10 text-center space-y-4">
      <h2 className="text-2xl font-bold text-slate-100">
        Sentinel Division Locked
      </h2>

      <p className="text-slate-400 max-w-xl mx-auto">
        Sentinel Division contains advanced offensive & defensive cyber
        operations, red team tooling, and specialist labs.
      </p>

      <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <p className="text-sm text-slate-300">
          Upgrade required to unlock Sentinel access.
        </p>

        <button
          disabled
          className="mt-4 px-6 py-2 rounded-lg bg-amber-500/20 text-amber-400 cursor-not-allowed"
        >
          Upgrade (Coming Soon)
        </button>
      </div>
    </div>
  );
}