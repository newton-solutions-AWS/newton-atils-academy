// components/context/UserProvider.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type DivisionAccess = {
  sentinel: boolean;
  vanguard: boolean;
  phoenixPortal: boolean;
};

export type User = {
  name: string;
  role: "civilian" | "veteran" | "founder";
  isVeteran: boolean;
  stats: {
    xp: number;
    rank: number; // 1,2,3 etc
  };
  divisions: DivisionAccess;
};

// ✅ You can change this later (e.g. make this a veteran/founder)
const defaultUser: User = {
  name: "Demo Operator",
  role: "civilian",
  isVeteran: false,
  stats: {
    xp: 1200,
    rank: 2, // Sentinel unlocked, Vanguard locked (by our rules)
  },
  divisions: {
    sentinel: true,
    vanguard: false,
    phoenixPortal: false,
  },
};

type UserContextValue = {
  user: User;
  setUser: (u: User) => void;
};

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
    throw new Error("useUser must be used within a UserProvider");
  }
  return ctx;
}