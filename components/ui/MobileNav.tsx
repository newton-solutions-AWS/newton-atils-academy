"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, LayoutDashboard, Swords, Bot } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Lessons", href: "/lessons", icon: BookOpen },
    { name: "Divisions", href: "/divisions", icon: Swords },
    { name: "Oracle", href: "#", icon: Bot },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-slate-900/95 border-t border-slate-700 backdrop-blur-xl flex justify-around py-2 z-50 md:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center text-xs transition ${
              active ? "text-newton-accent" : "text-slate-400"
            }`}
          >
            <Icon
              className={`w-6 h-6 mb-1 ${
                active ? "text-newton-accent" : "text-slate-400"
              }`}
            />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}