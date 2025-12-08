"use client";

import { useState } from "react";

export default function OracleAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div
        className="oracle-button"
        onClick={() => setOpen(!open)}
      >
        ⚡
      </div>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 animate-fade-in">
          <h2 className="text-xl font-semibold text-slate-100">Oracle Online</h2>
          <p className="text-slate-400 text-sm mt-2">
            Ask me anything. Your ATILS journey is my mission.
          </p>

          {/* Input */}
          <input
            className="mt-4 w-full bg-slate-800 text-slate-200 p-2 rounded border border-slate-700"
            placeholder="Type a command..."
          />

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="btn w-full mt-4"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}