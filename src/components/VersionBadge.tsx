export function VersionBadge({ version }: { version?: "sword" | "shield" }) {
  if (!version) return null;
  const isSword = version === "sword";
  const label = isSword ? "소드 한정" : "실드 한정";
  const bg = isSword ? "bg-sky-600" : "bg-rose-600";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold text-white ${bg} shadow ring-1 ring-white/30`}
      title={isSword ? "포켓몬 소드에서만 출현" : "포켓몬 실드에서만 출현"}
    >
      {label}
    </span>
  );
}
