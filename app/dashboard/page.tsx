"use client";

import { useUser } from "../../components/context/UserProvider";

export default function DashboardPage() {
  const { user } = useUser(); // ✅ No refresh() call anymore

  // If user is null, show loading or fallback
  if (!user) {
    return (
      <div className="text-center py-10 text-slate-300">
        Loading operator profile…
      </div>
    );
  }

  const rankNames = ["Recruit", "Initiate", "Operator", "Specialist", "Vanguard Elite"];
  const currentRank = rankNames[user.stats?.rank || 0];

  return (
    <div className="page-inner max-w-4xl mx-auto py-10 space-y-8">
      <h1 className="text-4xl font-bold text-newton-accent">Operator Dashboard</h1>

      <div className="rounded-xl bg-slate-900/40 border border-slate-700 p-6 space-y-4">
        <p className="text-xl text-slate-200">
          Welcome back, <span className="font-bold">{user.name}</span>
        </p>

        <p className="text-slate-300">
          Rank: <span className="font-semibold text-newton-accent">{currentRank}</span>
        </p>

        <p className="text-slate-300">
          XP: <span className="font-semibold">{user.stats?.xp || 0}</span>
        </p>
      </div>
    </div>
  );
}