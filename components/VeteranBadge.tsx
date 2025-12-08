// app/components/VeteranBadge.tsx
export default function VeteranBadge() {
  return (
    <div className="hidden sm:flex">
      <div className="newton-tag">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[0.7rem] text-slate-200 font-medium">
          Veteran Built • Operator Grade
        </span>
      </div>
    </div>
  );
}