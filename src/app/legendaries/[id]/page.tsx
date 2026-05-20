import Link from "next/link";
import { notFound } from "next/navigation";
import { LEGENDARIES, getLegendaryById } from "@/data/legendaries";
import { RENTALS, getRentalsForLegendary, getRentalById } from "@/data/rentals";
import { TypeBadge, TypeBadgeList } from "@/components/TypeBadge";
import { PokemonSprite } from "@/components/PokemonSprite";
import { RentalCard } from "@/components/RentalCard";
import { VersionBadge } from "@/components/VersionBadge";
import { ALL_TYPES, getEffectiveness, effectivenessColor, effectivenessLabel } from "@/lib/typeChart";

export function generateStaticParams() {
  return LEGENDARIES.map((l) => ({ id: String(l.id) }));
}

export default async function LegendaryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const legend = getLegendaryById(Number(id));
  if (!legend) notFound();

  const explicitPicks = legend.recommendedRentals
    .map((rid) => getRentalById(rid))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const auto = getRentalsForLegendary(legend.id);
  // 중복 제거 (같은 ID는 한 번만)
  const combined: typeof explicitPicks = [];
  const seen = new Set<number>();
  for (const r of [...explicitPicks, ...auto]) {
    if (seen.has(r.id)) continue;
    seen.add(r.id);
    combined.push(r);
  }

  const defensiveChart = ALL_TYPES.map((atk) => ({
    atk,
    mult: getEffectiveness(atk, legend.types),
  })).sort((a, b) => b.mult - a.mult);

  return (
    <div className="space-y-8">
      <div>
        <Link href="/legendaries" className="text-sm text-gray-400 hover:text-amber-300">
          ← 전설 포켓몬 목록으로
        </Link>
      </div>

      <header className="rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-indigo-900/30 to-rose-900/20 p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center">
          <PokemonSprite dexNumber={legend.id} name={legend.nameKo} size={180} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="text-xs font-mono text-gray-400 mb-1">
            #{String(legend.id).padStart(3, "0")} · {legend.region} 지방
          </div>
          <div className="flex items-center gap-3 mb-2 flex-wrap justify-center md:justify-start">
            <h1 className="text-3xl font-extrabold">
              {legend.nameKo}{" "}
              <span className="text-gray-400 font-semibold text-base">{legend.nameEn}</span>
            </h1>
            <VersionBadge version={legend.versionExclusive} />
          </div>
          <div className="mb-3">
            <TypeBadgeList types={legend.types} size="md" />
          </div>
          <div className="text-sm mb-3">
            <span className="text-gray-400">특성:</span>{" "}
            <span className="font-semibold text-amber-200">{legend.ability}</span>
          </div>
          <div className="text-sm text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
            <div>
              <span className="text-gray-400 mr-2">약점:</span>
              {legend.weakTo.length > 0 ? (
                <TypeBadgeList types={legend.weakTo} />
              ) : (
                <span className="text-gray-500">없음</span>
              )}
            </div>
            <div>
              <span className="text-gray-400 mr-2">저항:</span>
              {legend.resistantTo.length > 0 ? (
                <TypeBadgeList types={legend.resistantTo} />
              ) : (
                <span className="text-gray-500">없음</span>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="rounded-xl border border-amber-400/40 bg-amber-400/5 p-5">
        <h2 className="text-lg font-bold mb-2 text-amber-300">공략 전략</h2>
        <p className="text-sm text-gray-100 leading-relaxed">{legend.strategy}</p>
      </section>

      <section className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
        <h2 className="text-lg font-bold mb-3">사용 기술</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {legend.moves.map((m) => (
            <div
              key={m.nameKo}
              className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-[color:var(--surface-2)] border border-[color:var(--border)]"
            >
              <div className="flex items-center gap-2">
                <TypeBadge type={m.type} />
                <span className="font-semibold">{m.nameKo}</span>
              </div>
              <div className="text-xs text-gray-300 text-right">
                <div>
                  <span className="text-gray-500">분류</span> {m.category}
                  {m.power ? ` · 위력 ${m.power}` : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
        {legend.signatureMove && (
          <div className="mt-4">
            <div className="text-xs font-bold text-fuchsia-300 mb-1.5">
              시그니처 / 특수 기술
            </div>
            <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-fuchsia-900/40 to-rose-900/30 border border-fuchsia-400/40">
              <div className="flex items-center gap-2">
                <TypeBadge type={legend.signatureMove.type} />
                <span className="font-bold text-fuchsia-100">{legend.signatureMove.nameKo}</span>
              </div>
              <div className="text-xs text-fuchsia-200/80 text-right">
                <div>
                  <span className="opacity-70">분류</span> {legend.signatureMove.category}
                  {legend.signatureMove.power ? ` · 위력 ${legend.signatureMove.power}` : ""}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">
          추천 렌탈 포켓몬 ({combined.length}마리)
        </h2>
        {combined.length === 0 ? (
          <p className="text-sm text-gray-400">아직 등록된 추천 렌탈이 없습니다.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {combined.map((r) => (
              <RentalCard key={r.id} rental={r} />
            ))}
          </div>
        )}
      </section>

      <section className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
        <h2 className="text-lg font-bold mb-3">타입 상성 (전체)</h2>
        <p className="text-xs text-gray-400 mb-3">
          이 전설이 각 공격 타입으로부터 받는 피해 배율
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {defensiveChart.map((row) => (
            <div
              key={row.atk}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-[color:var(--surface-2)]"
            >
              <TypeBadge type={row.atk} />
              <span
                className="text-xs font-bold ml-auto"
                style={{ color: effectivenessColor(row.mult) }}
              >
                {effectivenessLabel(row.mult)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="text-xs text-gray-500 text-center">
        전체 등록 렌탈: {RENTALS.length}마리 / 등록 전설: {LEGENDARIES.length}마리
      </div>
    </div>
  );
}
