import Image from "next/image";
import Link from "next/link";
import AccessGate from "../../../components/access/AccessGate";

export default function PhoenixDivisionPage() {
  return (
    <AccessGate requireVeteran fallback={
      <div className="space-y-6">
        <div className="rounded-2xl border border-amber-500/40 bg-slate-900/40 p-6 text-sm shadow-lg shadow-amber-500/20">
          <h1 className="text-2xl font-bold text-amber-300 mb-2">Phoenix Division – Restricted</h1>
          <p className="text-slate-300">
            Phoenix Division is reserved for verified veterans inside the ATILS ecosystem.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            In the full system, this screen will let you request access, upload proof,
            or use a veteran invite code.
          </p>
        </div>
      </div>
    }>
      {/* 🔸 your existing Phoenix JSX goes here unchanged */}
      {/* (everything you already have in PhoenixDivisionPage) */}
    </AccessGate>
  );
}