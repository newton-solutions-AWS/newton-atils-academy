"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="page-shell max-w-md mx-auto py-10 space-y-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-slate-100">
          Operator Login
        </h1>
        <p className="text-slate-400 text-sm tracking-[0.24em] uppercase">
          Access the ATILS Academy
        </p>
      </div>

      {/* Login buttons (placeholders until auth is added) */}
      <div className="space-y-4">
        <button
          className="w-full rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-3 text-center hover:border-newton-500 transition"
        >
          Login with Email (Coming Soon)
        </button>

        <button
          className="w-full rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-3 text-center hover:border-newton-500 transition"
        >
          Login with Google (Coming Soon)
        </button>
      </div>

      {/* Navigation */}
      <div className="space-y-4 text-center">
        <Link
          href="/auth/join"
          className="block text-newton-accent underline opacity-80 hover:opacity-100 transition"
        >
          Need an account? Join the Academy →
        </Link>

        <Link
          href="/"
          className="block text-newton-accent underline opacity-80 hover:opacity-100 transition"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}