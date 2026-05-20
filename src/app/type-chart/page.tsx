import { ALL_TYPES, TYPE_CHART, TYPE_COLORS } from "@/lib/typeChart";
import type { PokemonType } from "@/lib/types";

function multColor(m: number) {
  if (m === 0) return "bg-gray-700 text-gray-200";
  if (m === 2) return "bg-emerald-600 text-white";
  if (m === 0.5) return "bg-rose-600 text-white";
  return "";
}
function multLabel(m: number) {
  if (m === 0) return "0";
  if (m === 2) return "2×";
  if (m === 0.5) return "½";
  return "";
}

export default function TypeChartPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold mb-1">타입 상성표</h1>
        <p className="text-sm text-gray-300">
          가로축은 <strong className="text-amber-300">방어 타입</strong>, 세로축은{" "}
          <strong className="text-amber-300">공격 타입</strong>입니다.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-6 rounded bg-emerald-600 text-white font-bold flex items-center justify-center">
            2×
          </span>
          효과가 굉장하다
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-6 rounded bg-rose-600 text-white font-bold flex items-center justify-center">
            ½
          </span>
          효과가 별로다
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-6 rounded bg-gray-700 text-gray-200 font-bold flex items-center justify-center">
            0
          </span>
          효과가 없다
        </span>
      </div>

      <div className="overflow-x-auto scrollbar-thin rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]">
        <table className="border-collapse text-xs min-w-full">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-[color:var(--surface)] p-1.5 text-right text-gray-400">
                공격 ↓ / 방어 →
              </th>
              {ALL_TYPES.map((t) => (
                <th key={t} className="p-1">
                  <div
                    className="w-9 h-9 rounded text-[10px] flex items-center justify-center font-semibold text-white"
                    style={{ backgroundColor: TYPE_COLORS[t] }}
                    title={t}
                  >
                    {t.slice(0, 2)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ALL_TYPES.map((atk) => (
              <tr key={atk}>
                <th className="sticky left-0 z-10 bg-[color:var(--surface)] p-1">
                  <div
                    className="w-12 h-9 rounded text-[10px] flex items-center justify-center font-semibold text-white"
                    style={{ backgroundColor: TYPE_COLORS[atk] }}
                  >
                    {atk}
                  </div>
                </th>
                {ALL_TYPES.map((def) => {
                  const m = (TYPE_CHART[atk] as Partial<Record<PokemonType, number>>)[def] ?? 1;
                  return (
                    <td key={def} className="p-0.5">
                      <div
                        className={`w-9 h-9 rounded text-xs flex items-center justify-center font-bold ${multColor(
                          m,
                        )}`}
                      >
                        {multLabel(m)}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
