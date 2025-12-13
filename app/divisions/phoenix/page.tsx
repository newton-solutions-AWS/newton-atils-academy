// app/portal/phoenix/page.tsx
"use client";

import AccessGate from "../../../components/access/AccessGate";

export default function PhoenixPortalPage() {
  return (
    <AccessGate required="phoenix">
      <div className="page-shell space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber-400">
            PHOENIX PORTAL
          </p>
          <h1 className="text-3xl font-bold text-slate-100">
            Veteran Honour & Transition Portal
          </h1>
          <p className="max-w-2xl text-sm text-slate-400">
            Phoenix Portal is for serving and former military personnel.
            It overlays the full ATILS Academy with veteran-focused support:
            mindset, resilience, CV/LinkedIn translation and community.
          </p>
        </header>
      </div>
    </AccessGate>
  );
}