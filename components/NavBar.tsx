"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* LEFT: LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icons/crest-newton.png"
              alt="Newton Crest"
              width={40}
              height={40}
              className="rounded-md"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-slate-300 text-xs tracking-widest">ATILS</span>
              <span className="text-slate-100 font-semibold text-sm">
                Newton Solutions
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-slate-200 font-medium">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/lessons">Lessons</Link>
            <Link href="/divisions">Divisions</Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-slate-200"
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDE-OUT MENU (RIGHT SIDE) */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-slate-900 shadow-xl border-l border-slate-700 z-[60] 
        transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-slate-700">
          <span className="text-slate-100 text-lg font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-slate-300">
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-5 text-slate-200 text-lg gap-6">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </Link>
          <Link href="/lessons" onClick={() => setOpen(false)}>
            Lessons
          </Link>
          <Link href="/divisions" onClick={() => setOpen(false)}>
            Divisions
          </Link>
        </div>
      </aside>
    </>
  );
}