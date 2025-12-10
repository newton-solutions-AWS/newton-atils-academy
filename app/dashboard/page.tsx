"use client";

import { useUser } from "../../components/context/UserProvider";

export default function DashboardPage() {
  const { user, refresh } = useUser();

  // SAFETY FALLBACK — prevents Vercel build errors
  const safeUser = user ?? {
    name: "Operator",
    role: "operator",
    stats: { xp: 0, rank: 1 },
    divisionsUnlocked: {
      vanguard: true,
      sentinel: false,
      phoenix: false,
    },
  };

  const { name, stats, divisionsUnlocked } = safeUser;

  const rankNames = ["Recruit", "Initiate", "Operator", "Specialist", "Vanguard Elite"];
  const currentRank = rankNames[stats.rank] ?? "Operator";

  return (
    <div className="page-inner max-w-4xl mx-auto py-10 space-y-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-100">
        Welcome back, {name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* XP CARD */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 shadow-lg">
          <p className="text-slate-400 text-sm">Experience Points</p>
          <p className="text-3xl font-bold text-blue-300 mt-1">{stats.xp}</p>
        </div>

        {/* RANK CARD */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 shadow-lg">
          <p className="text-slate-400 text-sm">Rank</p>
          <p className="text-3xl font-bold text-amber-300 mt-1">{currentRank}</p>
        </div>

        {/* DIVISION STATUS */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 shadow-lg">
          <p className="text-slate-400 text-sm">Division Access</p>
          <ul className="mt-2 space-y-1 text-slate-300">
            <li>Vanguard: {divisionsUnlocked.vanguard ? "✔️" : "❌"}</li>
            <li>Sentinel: {divisionsUnlocked.sentinel ? "✔️" : "❌"}</li>
            <li>Phoenix: {divisionsUnlocked.phoenix ? "✔️" : "❌"}</li>
          </ul>
        </div>

      </div>

      <button
        onClick={refresh}
        className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow"
      >
        Refresh Data
      </button>
    </div>
  );
}
