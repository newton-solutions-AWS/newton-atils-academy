"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/60 border-b border-slate-800/50 shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LEFT — Crest + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/icons/crest-newton.png"
            alt="Newton Crest"
            width={38}
            height={38}
            className="drop-shadow-[0_0_12px_rgba(0,140,255,0.6)]"
          />

          <div className="leading-tight">
            <p className="text-xs tracking-widest text-slate-400">ATILS ACADEMY</p>
            <p className="text-sm font-semibold text-slate-200">Newton Solutions</p>
          </div>
        </div>

        {/* RIGHT — Nav Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-newton-accent transition">Home</Link>
          <Link href="/dashboard" className="hover:text-newton-accent transition">Dashboard</Link>
          <Link href="/lessons" className="hover:text-newton-accent transition">Lessons</Link>
          <Link href="/certificates" className="hover:text-newton-accent transition">Certificates</Link>
        </div>
      </div>
    </nav>
  );
}