"use client";

import { useUser } from "@/components/context/UserProvider";
import AccessStatusPanel from "@/components/access/AccessStatusPanel";

export default function DashboardPage() {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="text-center py-10 text-slate-300">
        Loading operator profile…
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* 🔐 Access overview */}
      <AccessStatusPanel />

      {/* Future dashboard content goes here */}
    </div>
  );
}