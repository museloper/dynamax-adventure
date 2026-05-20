import type { Tier } from "@/lib/types";

const TIER_STYLE: Record<Tier, { bg: string; label: string; ring: string }> = {
  S: { bg: "bg-gradient-to-br from-amber-400 to-rose-500", label: "S", ring: "ring-amber-300/50" },
  A: { bg: "bg-gradient-to-br from-emerald-400 to-teal-600", label: "A", ring: "ring-emerald-300/50" },
  B: { bg: "bg-gradient-to-br from-sky-400 to-indigo-600", label: "B", ring: "ring-sky-300/50" },
  C: { bg: "bg-gradient-to-br from-slate-400 to-slate-600", label: "C", ring: "ring-slate-300/50" },
};

const TIER_DESCRIPTION: Record<Tier, string> = {
  S: "최우선 선택. 거의 모든 상황에 강력",
  A: "강력한 선택. 특정 매치업에 매우 우수",
  B: "준수한 선택. 매치업 따라 활용 가능",
  C: "상황 한정. 특정 조건에서만 권장",
};

export function TierBadge({ tier, size = "md" }: { tier: Tier; size?: "sm" | "md" | "lg" }) {
  const cls = TIER_STYLE[tier];
  const sizeCls =
    size === "lg" ? "w-12 h-12 text-xl" : size === "sm" ? "w-7 h-7 text-xs" : "w-9 h-9 text-base";
  return (
    <span
      title={TIER_DESCRIPTION[tier]}
      className={`inline-flex items-center justify-center rounded-lg font-extrabold text-white shadow-md ring-2 ${cls.bg} ${cls.ring} ${sizeCls}`}
    >
      {cls.label}
    </span>
  );
}

export function TierLegend() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300">
      {(Object.keys(TIER_STYLE) as Tier[]).map((t) => (
        <div key={t} className="flex items-center gap-2">
          <TierBadge tier={t} size="sm" />
          <span>{TIER_DESCRIPTION[t]}</span>
        </div>
      ))}
    </div>
  );
}
