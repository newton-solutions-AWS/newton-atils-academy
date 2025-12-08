import Image from "next/image";
import Link from "next/link";
import AccessGate from "../../../components/access/AccessGate";

export default function SentinelDivisionPage() {
  return (
    <AccessGate requireSentinelUpgrade fallback={
      <div className="space-y-6">
        <div className="rounded-2xl border border-cyan-500/40 bg-slate-900/40 p-6 text-sm shadow-lg shadow-cyan-500/20">
          <h1 className="text-2xl font-bold text-cyan-300 mb-2">Sentinel Division – Upgrade Required</h1>
          <p className="text-slate-300">
            Sentinel Division is a premium cyber & coding upgrade stack.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            In the full build, this is where we&apos;ll connect Stripe or similar so
            operators can unlock Sentinel, and your admin console will show who has access.
          </p>
        </div>
      </div>
    }>
      {/* 🔹 your existing Sentinel JSX goes here unchanged */}
    </AccessGate>
  );
}