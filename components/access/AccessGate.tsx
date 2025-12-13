"use client";

import { ReactNode } from "react";

interface AccessGateProps {
  required: string;
  children: ReactNode;
}

export default function AccessGate({ required, children }: AccessGateProps) {
  // TEMPORARY MOCK USER (until auth is wired)
  const user = {
    access: ["vanguard", "sentinel", "phoenix"], // founder access
  };

  // Safety guard (prevents undefined crashes)
  const userAccess = user?.access ?? [];

  if (!userAccess.includes(required)) {
    return (
      <div className="p-6 text-center text-red-400">
        Access denied – insufficient clearance.
      </div>
    );
  }

  return <>{children}</>;
}