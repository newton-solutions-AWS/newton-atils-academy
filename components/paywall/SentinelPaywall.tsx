"use client";

export default function SentinelPaywall() {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-100">
        🔒 Sentinel Division Locked
      </h2>

      <p className="mt-3 text-slate-400">
        Advanced operations, red/blue team labs, and elite content.
        Upgrade to unlock Sentinel Division.
      </p>

      <button
        className="mt-6 inline-flex items-center justify-center rounded-lg
                   bg-newton-accent px-6 py-3 font-semibold text-black
                   hover:bg-newton-accent/90 transition"
        onClick={() => alert("Stripe coming next 🔥")}
      >
        Unlock Sentinel
      </button>

      <p className="mt-4 text-xs text-slate-500">
        Phoenix Division members already have access.
      </p>
    </div>
  );
}