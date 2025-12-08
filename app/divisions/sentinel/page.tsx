"use client";

import { useUser } from "../../../components/context/UserProvider";
import Link from "next/link";

export default function SentinelDivisionPage() {
  const { user } = useUser();

  // Prevent crash if user not loaded yet
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-300">
        Loading user data...
      </div>
    );
  }

  const isRestricted = !user.needs.sentinel; // UPDATED PROPERTY

  return (
    <div className="page-inner max-w-4xl mx-auto py-10 space-y-8">
      <h1 className="text-3xl font-bold text-blue-400">🛡️ Sentinel Division</h1>

      <div className="rounded-xl border border-blue-500/40 bg-blue-900/40 p-6 text-slate-300">
        <p className="text-sm mb-3 tracking-tight uppercase">Sentinel Division</p>
        <p className="opacity-80 mb-6">
          Advanced Cyber & Coding Operator Access
        </p>

        {isRestricted ? (
          <div className="text-red-400">
            <p className="font-bold mb-1">ACCESS DENIED</p>
            <p className="opacity-70">
              Your account does not currently include Sentinel Division access.
            </p>
          </div>
        ) : (
          <div className="text-green-400">
            <p className="font-bold mb-1">ACCESS GRANTED</p>
            <p className="opacity-70">
              Welcome to the Sentinel Division, Operator.
            </p>
          </div>
        )}
      </div>

      <Link
        href="/divisions"
        className="block text-slate-400 hover:text-white underline text-sm"
      >
        ← Back to divisions
      </Link>
    </div>
  );
}