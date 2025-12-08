"use client";

import Link from "next/link";
import { useUser } from "../../components/context/UserProvider";
import AccessStatusPanel from "../../components/access/AccessStatusPanel";
import { Award, Cpu, Zap } from "lucide-react";

export default function DashboardPage() {
  const { user, refresh } = useUser();

  const rankNames = ["Recruit", "Initiate", "Operator", "Specialist", "Vanguard Elite"];
  const currentRank = rankNames[user.stats.rank] || "Operator";

  const xpForNextRank = 2000;
  const progress = Math.min((user.stats.xp / xpForNextRank) * 100, 100);

  return (
    <div className="space-y-10 page-shell">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-100">Operator Dashboard</h1>

        <button
          onClick={refresh}
          className="px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-700 hover:bg-slate-900"
        >
          Refresh Console
        </button>
      </div>

      <AccessStatusPanel />

      {/* Rank Overview */}
      <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700 space-y-4">
        <h2 className="text-xl font-semibold text-newton-accent flex items-center gap-2">
          <Award className="text-newton-accent" /> Operator Profile
        </h2>

        <p className="text-slate-300">
          <strong>Rank:</strong> {currentRank}
        </p>

        <p className="text-slate-300">
          <strong>XP:</strong> {user.stats.xp} / {xpForNextRank}
        </p>

        <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-newton-accent transition-all"
            style={{ width: "${progress}%" }}
          />
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/divisions"
          className="rounded-xl bg-slate-900/40 border border-slate-700 p-6 hover:bg-slate-900/70"
        >
          <Cpu className="mb-2 text-newton-accent" />
          <p className="font-semibold text-slate-200">Divisions</p>
          <p className="text-sm text-slate-400">
            Access Vanguard, Phoenix, and Sentinel.
          </p>
        </Link>

        <Link
          href="/lessons"
          className="rounded-xl bg-slate-900/40 border border-slate-700 p-6 hover:bg-slate-900/70"
        >
          <Zap className="mb-2 text-newton-accent" />
          <p className="font-semibold text-slate-200">Lesson Engine</p>
          <p className="text-sm text-slate-400">Enter the ATILS lesson deck.</p>
        </Link>

        <Link
          href="/certificates"
          className="rounded-xl bg-slate-900/40 border border-slate-700 p-6 hover:bg-slate-900/70"
        >
          <Award className="mb-2 text-newton-accent" />
          <p className="font-semibold text-slate-200">Certificates</p>
          <p className="text-sm text-slate-400">View your earned credentials.</p>
        </Link>
      </div>
    </div>
  );
}