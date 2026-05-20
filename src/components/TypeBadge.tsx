import { TYPE_COLORS } from "@/lib/typeChart";
import type { PokemonType } from "@/lib/types";

export function TypeBadge({
  type,
  size = "sm",
}: {
  type: PokemonType;
  size?: "sm" | "md";
}) {
  const padding = size === "md" ? "px-3 py-1 text-sm" : "px-2 py-0.5 text-xs";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-semibold text-white shadow ${padding}`}
      style={{ backgroundColor: TYPE_COLORS[type] }}
    >
      {type}
    </span>
  );
}

export function TypeBadgeList({
  types,
  size = "sm",
}: {
  types: PokemonType[];
  size?: "sm" | "md";
}) {
  return (
    <span className="inline-flex items-center gap-1 flex-wrap">
      {types.map((t) => (
        <TypeBadge key={t} type={t} size={size} />
      ))}
    </span>
  );
}
