"use client";

import { useUser } from "../context/UserProvider";

export default function AccessStatusPanel() {
  const { user } = useUser();

  if (!user) return null;

  const access = user.divisions;

  return (
    <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">
        Access Status
      </h3>

      <ul className="space-y-3 text-sm">
        <li className="flex justify-between">
          <span>Vanguard Division</span>
          <span>
            {access.vanguard ? "✅ Active" : "🔒 Locked"}
          </span>
        </li>

        <li className="flex justify-between">
          <span>Sentinel Division</span>
          <span>
            {access.sentinel ? "✅ Active" : "💳 Upgrade Required"}
          </span>
        </li>

        <li className="flex justify-between">
          <span>Phoenix Portal</span>
          <span>
            {access.phoenixPortal ? "⭐ Granted" : "🔒 Restricted"}
          </span>
        </li>
      </ul>
    </div>
  );
}