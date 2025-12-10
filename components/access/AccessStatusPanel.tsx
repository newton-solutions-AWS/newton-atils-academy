 // components/access/AccessStatusPanel.tsx
"use client";

import { Lock, Shield, Award } from "lucide-react";
import Link from "next/link";
import { useUser } from "../context/UserProvider";

type Target = "sentinel" | "vanguard" | "phoenixPortal";

interface Props {
  target: Target;
}

export default function AccessStatusPanel({ target }: Props) {
  const { user } = useUser();

  const base = (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg shadow-black/40 space-y-3">
      <div className="flex items-center gap-2 text-slate-100">
        <Lock className="h-4 w-4 text-amber-400" />
        <p className="text-xs font-semibold uppercase tracking-[0.25em]">
          Access Restricted
        </p>
      </div>
      {renderMessage(target, user.stats.rank, user.isVeteran)}
    </div>
  );

  return base;
}

function renderMessage(target: Target, rank: number, isVeteran: boolean) {
  if (target === "sentinel") {
    // Sentinel is basically always available in our current model,
    // but we handle it anyway for safety.
    return (
      <p className="text-sm text-slate-300">
        Sentinel Division is your main defensive cyber path. If you&apos;re
        seeing this, access rules will be wired here later (for now all users
        should have Sentinel available by default).
      </p>
    );
  }

  if (target === "vanguard") {
    const neededRank = 3;
    const meetsRank = rank >= neededRank;

    return (
      <div className="space-y-2 text-sm text-slate-300">
        <p>
          Vanguard Division is your{" "}
          <span className="font-semibold">advanced offensive cyber track</span>.
          Only operators who have proven themselves in Sentinel should enter.
        </p>
        <p>
          Required rank:{" "}
          <span className="font-mono font-semibold">Rank {neededRank}</span>{" "}
          · Your current rank:{" "}
          <span className="font-mono font-semibold">Rank {rank}</span>
        </p>
        {!meetsRank && (
          <p className="text-xs text-slate-400">
            Keep progressing through Sentinel lessons and missions to unlock
            Vanguard.
          </p>
        )}
      </div>
    );
  }

  // Phoenix Portal
  if (!isVeteran) {
    return (
      <div className="space-y-2 text-sm text-slate-300">
        <p>
          Phoenix Portal is a{" "}
          <span className="font-semibold">veteran-only access space</span>.
          It&apos;s built for serving and former military personnel
          transitioning from service to cyber.
        </p>
        <p className="text-xs text-slate-400">
          Once we wire up real auth and verification, this portal will unlock
          automatically for verified veterans.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2 text-sm text-slate-300">
      <div className="flex items-center gap-2 text-amber-300">
        <Award className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">
          Veteran Access Granted
        </span>
      </div>
      <p>
        As a verified veteran, Phoenix Portal gives you access to tailored
        transition support, resilience modules and community overlays on top of
        the main academy.
      </p>
      <Link
        href="/portal/phoenix"
        className="inline-flex text-[11px] font-semibold text-newton-accent hover:underline"
      >
        Enter Phoenix Portal →
      </Link>
    </div>
  );
}
