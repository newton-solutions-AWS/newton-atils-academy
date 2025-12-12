"use client";

import { ReactNode } from "react";
import { useUser } from "@/components/context/UserProvider";
import SentinelPaywall from "@/components/paywall/SentinelPaywall";

export type RequiredAccess = "sentinel" | "vanguard" | "phoenix";

interface AccessGateProps {
  required: RequiredAccess;
  children: ReactNode;
}

export default function AccessGate({ required, children }: AccessGateProps) {
  const { user } = useUser();

  // 1️⃣ Not logged in
  if (!user) {
    return (
      <div className="p-6 text-center text-slate-400">
        🔒 Please log in to continue.
      </div>
    );
  }

  // 2️⃣ Founder override (YOU)
  if (user.role === "founder") {
    return <>{children}</>;
  }

  // 3️⃣ Phoenix Portal (veterans get everything)
  if (required === "phoenix" && user.isVeteran) {
    return <>{children}</>;
  }

  // 4️⃣ Sentinel paywall
  if (required === "sentinel" && !user.divisions.sentinel) {
    return <SentinelPaywall />;
  }

  // 5️⃣ Vanguard access
  if (required === "vanguard" && !user.divisions.vanguard) {
    return (
      <div className="p-6 text-center text-red-400">
        🚫 Vanguard access required.
      </div>
    );
  }

  // 6️⃣ Access granted
  return <>{children}</>;
}
