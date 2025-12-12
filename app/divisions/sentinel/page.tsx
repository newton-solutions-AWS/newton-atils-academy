// app/divisions/sentinel/page.tsx
"use client";

import AccessGate from "../../../components/access/AccessGate";

export default function SentinelDivisionPage() {
  return (
    <AccessGate required="SENTINEL">
      <div className="page-shell space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-emerald-400">
            SENTINEL DIVISION
          </p>
          <h1 className="text-3xl font-bold text-slate-100">
            Defensive Cyber Operations
          </h1>
          <p className="max-w-2xl text-sm text-slate-400">
            Sentinel is your baseline defensive track. Blue team mindset,
            security fundamentals, and practical defence across cloud and on-prem
            estates. Civilians and veterans both start here.
          </p>
        </header>
      </div>
    </AccessGate>
  );
}