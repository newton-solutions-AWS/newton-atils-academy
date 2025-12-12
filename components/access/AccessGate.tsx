"use client";

import { ReactNode } from "react";
import { useUser } from "../context/UserProvider";
import SentinelPaywall from "../../components/paywall/SentinelPaywall";

export type RequiredAccess =
  | "vanguard"
  | "sentinel"
  | "phoenixPortal";

export default function AccessGate({
  required,
  children,
}: {
  required: RequiredAccess;
  children: ReactNode;
}) {
  const { user } = useUser();

  // 🔐 Not logged in
  if (!user || !user.isAuthenticated) {
    return (
      <div className="p-6 text-center text-slate-400">
        🔒 Please log in to continue.
      </div>
    );
  }

  // 👑 Founder override
  if (user.role === "founder") {
    return <>{children}</>;
  }

  // 🔥 Sentinel paywall
  if (required === "sentinel" && !user.sentinelUnlocked) {
    return <SentinelPaywall />;
  }

  // 🚫 Division locked
  if (!user.divisions[required]) {
    return (
      <div className="p-6 text-center text-red-400">
        ⛔ Access denied — insufficient clearance.
      </div>
    );
  }

  return <>{children}</>;
}