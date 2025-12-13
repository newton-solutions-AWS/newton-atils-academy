"use client";

import { ReactNode } from "react";
import { RequiredAccess } from "./types";

export default function AccessGate({
  required,
  children,
}: {
  required: RequiredAccess;
  children: ReactNode;
}) {
  // TEMP: allow all (we’ll lock later)
  const hasAccess = true;

  if (!hasAccess) {
    return (
      <div className="p-6 text-center text-red-400">
        Access denied – insufficient clearance.
      </div>
    );
  }

  return <>{children}</>;
}