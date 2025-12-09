"use client";

import Link from "next/link";
import { useUser } from "../../components/context/UserProvider";
import AccessStatusPanel from "../../components/access/AccessStatusPanel";

export default function DashboardPage() {
  const { user, refresh } = useUser();

  // ✅ VERCEL-SAFE USER (prevents null build errors)
  const safeUser = user ?? {
    name: "Loading Operator",
    role: "operator",
    stats: {
      xp: 0,
      rank: 0,
    },
    divisionsUnlocked: ["vanguard"],
    isVeteran: false,
    sentinelUnlocked: false,
  };

  // ⭐ Rank system
  const rankNames = ["Recruit", "Initiate", "Operator", "Specialist", "Vanguard Elite"];
  const currentRank = rankNames[safeUser.stats.rank] ?? "Operator";

  // ⭐ XP progression
  const xpForNextRank = 2000;
  const xpProgress = Math.min((safeUser.stats.xp / xpForNextRank) * 100, 100);

  return (
    <div className="page-inner max-w-4xl mx-auto py-10 space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-4xl font-bold text-slate-200 tracking-tight">
          Operator Dashboard
        </h1>

        <button
          onClick={refresh}
          className="px-4 py-2 rounded-md bg-slate-800/60 border border-slate-700 hover:bg-slate-800 text-slate-200 transition"
        >
          Refresh Console
        </button>
      </div>

      {/* ACCESS STATUS */}
      <AccessStatusPanel user={safeUser} />

      {/* RANK SECTION */}
      <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-6 space-y-4">
        <h2 className="text-xl font-semibold text-slate-100">Rank & XP</h2>

        <p className="text-slate-300">
          <span className="font-semibold text-slate-100">Current Rank:</span> {currentRank}
        </p>

        <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{ width: "${xpProgress}%" }}
          />
        </div>

        <p className="text-slate-400 text-sm">
          {safeUser.stats.xp} XP / {xpForNextRank} XP
        </p>
      </div>

      {/* QUICK NAV */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          href="/divisions"
          className="rounded-xl bg-slate-900/40 border border-slate-700 p-6 hover:bg-slate-900 transition text-center"
        >
          <p className="text-lg font-semibold text-slate-200">Divisions</p>
        </Link>

        <Link
          href="/lessons"
          className="rounded-xl bg-slate-900/40 border border-slate-700 p-6 hover:bg-slate-900 transition text-center"
        >
          <p className="text-lg font-semibold text-slate-200">Lessons</p>
        </Link>

        <Link
          href="/certificates"
          className="rounded-xl bg-slate-900/40 border border-slate-700 p-6 hover:bg-slate-900 transition text-center"
        >
          <p className="text-lg font-semibold text-slate-200">Certificates</p>
        </Link>

      </div>

      {/* BACK HOME */}
      <Link
        href="/"
        className="block text-center text-slate-300 hover:text-slate-100 transition pt-4"
      >
        ← Back to home
      </Link>
    </div>
  );
}