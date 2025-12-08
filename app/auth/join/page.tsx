import Crest from "../../../components/Crest";

export default function JoinPage() {
  return (
    <div className="page-shell">
      <div className="page-inner max-w-md mx-auto py-10 space-y-8">
        <div className="flex flex-col items-center gap-3">
          <Crest type="phoenix" size={80} />
          <p className="text-[0.7rem] tracking-[0.24em] uppercase text-slate-400 text-center">
            Enlistment · ATILS Academy
          </p>
          <h1 className="text-2xl font-bold text-slate-100 text-center">
            Join the Academy
          </h1>
          <p className="text-xs text-slate-400 text-center max-w-sm">
            Create an operator profile. Later we&apos;ll add division flags,
            veteran status and advanced access logic.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Name / Rank or Civilian
            </label>
            <input
              type="text"
              placeholder="e.g. Bombardier Newton / Civilian"
              className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@operator.io"
              className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-md bg-amber-500 py-2.5 text-sm font-medium text-slate-950 shadow-glow-newton hover:bg-amber-400"
          >
            Join (stub)
          </button>
        </form>
      </div>
    </div>
  );
}