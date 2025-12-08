"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  // --- ELITE USER PROFILE ---
  const [user, setUser] = useState({
    name: "Demo Operator",
    role: "operator",

    stats: {
      xp: 1200,
      rank: 2,
    },

    divisionsUnlocked: ["vanguard"],

    // 🔥 NEW SYSTEM (required to fix Vercel errors)
    needs: {
      veteran: false,
      phoenix: false,
      sentinel: false,
    },
  });

  const refresh = () => {
    console.log("Refresh user data… (stub)");
  };

  return (
    <UserContext.Provider value={{ user, setUser, refresh }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}