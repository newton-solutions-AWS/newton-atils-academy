import Crest from "../../../components/Crest";

export default function LoginPage() {
  return (
    <div className="page-shell">
      <div className="page-inner max-w-md mx-auto py-10 space-y-8">
        <div className="flex flex-col items-center gap-3">
          <Crest type="newton" size={72} />
          <p className="text-[0.7rem] tracking-[0.24em] uppercase text-slate-400 text-center">
            Access Portal
          </p>
          <h1 className="text-2xl font-bold text-slate-100 text-center">
            Login
          </h1>
          <p className="text-xs text-slate-400 text-center max-w-sm">
            Operator login access for existing ATILS accounts. Later this will
            be wired into full auth.
          </p>
        </div>

        <form className="space-y-4">
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
            className="w-full rounded-md bg-sky-500 py-2.5 text-sm font-medium text-slate-950 shadow-glow-newton hover:bg-sky-400"
          >
            Login (stub)
          </button>
        </form>
      </div>
    </div>
  );
}