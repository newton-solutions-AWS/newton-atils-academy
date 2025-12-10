// components/access/AccessGate.tsx
"use client";

import { ReactNode } from "react";
import { useUser } from "../context/UserProvider";
import AccessStatusPanel from "./AccessStatusPanel";

type DivisionKey = "sentinel" | "vanguard" | "phoenixPortal";

interface AccessGateProps {
  require: DivisionKey;
  children: ReactNode;
}

export default function AccessGate({ require, children }: AccessGateProps) {
  const { user } = useUser();

  const hasAccess = user.divisions[require] === true;

  if (!hasAccess) {
    return <AccessStatusPanel target={require} />;
  }

  return <>{children}</>;
}