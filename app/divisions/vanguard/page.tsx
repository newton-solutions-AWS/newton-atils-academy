// app/divisions/vanguard/page.tsx
"use client";

import AccessGate from "../../../components/access/AccessGate";

export default function VanguardDivisionPage() {
  return (
    <AccessGate require="vanguard">
      <div className="page-shell space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-sky-400">
            VANGUARD DIVISION
          </p>
          <h1 className="text-3xl font-bold text-slate-100">
            Offensive Cyber Operations
          </h1>
          <p className="max-w-2xl text-sm text-slate-400">
            Vanguard is your advanced red team lane. Ethical hacking, attack
            paths, recon, exploitation methodology and operator-grade offensive
            skills layered on top of Sentinel foundations.
          </p>
        </header>
      </div>
    </AccessGate>
  );
}