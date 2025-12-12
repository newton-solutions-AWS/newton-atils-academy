"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

/* ---------------- TYPES ---------------- */

export type DivisionAccess = {
  vanguard: boolean;
  sentinel: boolean;
  phoenixPortal: boolean;
};

export type User = {
  name: string;
  role: "civilian" | "veteran" | "founder";
  isVeteran: boolean;
  isAuthenticated: boolean;

  sentinelUnlocked: boolean; // 💳 PAYWALL SWITCH

  stats: {
    xp: number;
    rank: number;
  };

  divisions: DivisionAccess;
};

type UserContextValue = {
  user: User | null;
  setUser: (u: User) => void;
};

/* ---------------- DEFAULT USER ---------------- */

const defaultUser: User = {
  name: "Demo Operator",
  role: "founder", // ← you
  isVeteran: true,
  isAuthenticated: true,

  sentinelUnlocked: true, // ✅ founder bypass

  stats: {
    xp: 1200,
    rank: 2,
  },

  divisions: {
    vanguard: true,
    sentinel: true,
    phoenixPortal: true,
  },
};

/* ---------------- CONTEXT ---------------- */

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within UserProvider");
  }
  return ctx;
}