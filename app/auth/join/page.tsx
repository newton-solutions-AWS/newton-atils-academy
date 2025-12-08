"use client";

import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="page-shell max-w-md mx-auto py-10 space-y-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-slate-100">
          ATILS Academy Access
        </h1>
        <p className="text-slate-400 text-sm tracking-[0.24em] uppercase">
          Join the Newton Solutions Academy
        </p>
      </div>

      <div className="space-y-4">
        <Link
          href="/auth/login"
          className="block rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-3 text-center hover:border-newton-500 transition"
        >
          Already have an account? Login →
        </Link>

        <Link
          href="/"
          className="block text-center text-newton-accent underline opacity-80 hover:opacity-100 transition"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}