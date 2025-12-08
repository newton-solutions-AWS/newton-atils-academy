"use client";

import { createContext, useContext, useState } from "react";

interface User {
  name: string;
  role: string;
  veteranVerified: boolean;
  sentinelUnlocked: boolean;
  divisionsUnlocked: string[];
  stats: {
    xp: number;
    rank: number;
  };
}

interface UserContextType {
  user: User;
  refresh: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  // Mock user — will be replaced with live auth later
  const [user, setUser] = useState<User>({
    name: "Demo Operator",
    role: "operator",
    veteranVerified: false,
    sentinelUnlocked: false,
    divisionsUnlocked: ["vanguard"],
    stats: {
      xp: 420,
      rank: 2,
    },
  });

  const refresh = () => setUser({ ...user });

  return (
    <UserContext.Provider value={{ user, refresh }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside <UserProvider>");
  return ctx;
}