"use client";

import { ReactNode } from "react";
import { useUser } from "../context/UserProvider";
import SentinelPaywall from "../paywall/SentinelPaywall";

type RequiredAccess = "VANGUARD" | "SENTINEL" | "PHOENIX";

export default function AccessGate({
  required,
  children,
}: {
  required: RequiredAccess;
  children: ReactNode;
}) {
  const { user } = useUser();

  // Not logged in
  if (!user || !user) {
    return (
      <div className="p-6 text-center text-slate-400">
        🔒 Please log in to continue.
      </div>
    );
  }

  // Founder override
  if (user.role === "founder") {
    return <>{children}</>;
  }

  // Phoenix override
  if (user.divisions.phoenixPortal) {
    return <>{children}</>;
  }

  // Sentinel paywall
  if (required === "SENTINEL" && !user.divisions.sentinel) {
    return <SentinelPaywall />;
  }

  // Vanguard access (Sentinel can also view Vanguard)
  if (
    required === "VANGUARD" &&
    (user.divisions.vanguard || user.divisions.sentinel)
  ) {
    return <>{children}</>;
  }

  return (
    <div className="p-6 text-center text-red-400">
      🚫 Access denied — insufficient clearance.
    </div>
  );
}