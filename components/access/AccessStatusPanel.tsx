"use client";

import { useUser } from "../context/UserProvider";
import { Check, X, Lock } from "lucide-react";

export default function AccessStatusPanel() {
  const { user } = useUser();

  const divisionNames: Record<string, string> = {
    vanguard: "Vanguard Division",
    phoenix: "Phoenix Division",
    sentinel: "Sentinel Division",
  };

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-6 text-slate-200 shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-newton-accent">ACCESS STATUS</h2>

      <p><strong>User:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>

      <p className="flex items-center gap-2">
        <strong>Veteran Status:</strong>
        {user.veteranVerified ? (
          <Check className="text-green-400" />
        ) : (
          <X className="text-red-400" />
        )}
      </p>

      <p className="flex items-center gap-2">
        <strong>Sentinel Upgrade:</strong>
        {user.sentinelUnlocked ? (
          <Check className="text-green-400" />
        ) : (
          <Lock className="text-red-400" />
        )}
      </p>

      <div className="space-y-1">
        <strong>Divisions Unlocked:</strong>
        {user.divisionsUnlocked.map((id) => (
          <p key={id} className="ml-3 text-newton-accent">
            • {divisionNames[id] ?? id.toUpperCase()}
          </p>
        ))}
      </div>

      <p className="text-xs text-slate-500 mt-2">
        Access data driven by UserProvider — will sync with real auth, payments,
        and verification later.
      </p>
    </div>
  );
}