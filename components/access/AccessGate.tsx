"use client";

import Link from "next/link";
import { useUser } from "../context/UserProvider";
import { Lock } from "lucide-react";

export default function AccessGate({
  needs,
  children,
}: {
  needs: "veteran" | "sentinel" | "phoenix";
  children: React.ReactNode;
}) {
  const { user } = useUser();

  const locked =
    (needs === "veteran" && !user.veteranVerified) ||
    (needs === "sentinel" && !user.sentinelUnlocked) ||
    (needs === "phoenix" && !user.divisionsUnlocked.includes("phoenix"));

  if (locked)
    return (
      <div className="p-8 border border-red-500/40 bg-red-900/20 rounded-xl text-center text-red-300 space-y-3">
        <Lock className="mx-auto h-10 w-10" />
        <p className="text-lg font-semibold">ACCESS RESTRICTED</p>
        <p className="text-sm opacity-80">
          You do not currently have permission to access this area.
        </p>

        <Link
          href="/dashboard"
          className="inline-block mt-4 px-4 py-2 rounded-md bg-red-500/20 border border-red-600 text-red-300 hover:bg-red-600/30"
        >
          Return to Dashboard
        </Link>
      </div>
    );

  return <>{children}</>;
}