import Link from "next/link";
import { notFound } from "next/navigation";
import { RENTALS, getRentalById } from "@/data/rentals";
import { LEGENDARIES, getLegendaryById } from "@/data/legendaries";
import { TierBadge } from "@/components/TierBadge";
import { TypeBadge, TypeBadgeList } from "@/components/TypeBadge";
import { PokemonSprite } from "@/components/PokemonSprite";
import { GigantamaxIcon } from "@/components/GigantamaxIcon";
import { getEffectiveness, effectivenessLabel, effectivenessColor, ALL_TYPES } from "@/lib/typeChart";

export function generateStaticParams() {
  return RENTALS.map((r) => ({ id: String(r.id) }));
}

export default async function RentalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const rental = getRentalById(Number(id));
  if (!rental) notFound();

  const recommendedLegendaries = rental.recommendedFor
    .map((lid) => getLegendaryById(lid))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  const defensiveChart = ALL_TYPES.map((atk) => ({
    attackType: atk,
    mult: getEffectiveness(atk, rental.types),
  }))
    .filter((row) => row.mult !== 1)
    .sort((a, b) => b.mult - a.mult);

  return (
    <div className="space-y-8">
      <div>
        <Link href="/rentals" className="text-sm text-gray-400 hover:text-amber-300">
          ← 렌탈 포켓몬 목록으로
        </Link>
      </div>

      <header className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="shrink-0 w-32 h-32 md:w-44 md:h-44 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center relative">
          <PokemonSprite dexNumber={rental.dexNumber} name={rental.nameKo} size={170} rentalId={rental.id} isGigantamax={rental.isGigantamax} />
          {rental.isGigantamax && (
            <span
              title="거다이맥스 가능"
              className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/70 shadow ring-2 ring-white/30"
            >
              <GigantamaxIcon size={20} />
              <span className="text-xs font-extrabold text-white">거다이맥스</span>
            </span>
          )}
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="text-xs font-mono text-gray-400 mb-1">
            #{String(rental.dexNumber).padStart(3, "0")}
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2 flex-wrap">
            <h1 className="text-2xl md:text-3xl font-extrabold">
              {rental.nameKo}
              {rental.form && (
                <span className="ml-2 text-base font-semibold text-sky-300">
                  [{rental.form}]
                </span>
              )}
            </h1>
            <span className="text-gray-400">{rental.nameEn}</span>
            <TierBadge tier={rental.tier} size="lg" />
          </div>
          <div className="mb-3">
            <TypeBadgeList types={rental.types} size="md" />
          </div>
          <div className="text-sm">
            <span className="text-gray-400">특성:</span>{" "}
            <span className="font-semibold text-amber-200">
              {rental.hasHiddenAbility && (
                <span className="text-fuchsia-300 mr-0.5" title="숨겨진 특성">
                  ※
                </span>
              )}
              {rental.ability}
            </span>
            {rental.hasHiddenAbility && (
              <span className="ml-2 text-xs text-fuchsia-300/80">(숨겨진 특성)</span>
            )}
          </div>
          {rental.notes && (
            <p className="mt-3 text-sm text-gray-200 leading-relaxed">{rental.notes}</p>
          )}
        </div>
      </header>

      <section className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
        <h2 className="text-lg font-bold mb-3">기술 구성</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {rental.moves.map((m) => (
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
                {m.note && <div className="text-amber-300/80">{m.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
        <h2 className="text-lg font-bold mb-3">타입 방어 상성</h2>
        <p className="text-xs text-gray-400 mb-3">
          이 포켓몬이 각 공격 타입으로부터 받는 피해 배율 (1배는 생략)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {defensiveChart.map((row) => (
            <div
              key={row.attackType}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-[color:var(--surface-2)]"
            >
              <TypeBadge type={row.attackType} />
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

      <section>
        <h2 className="text-lg font-bold mb-3">이 포켓몬이 추천되는 전설</h2>
        {recommendedLegendaries.length === 0 ? (
          <p className="text-sm text-gray-400">현재 등록된 추천 전설이 없습니다.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {recommendedLegendaries.map((l) => (
              <Link
                key={l.id}
                href={`/legendaries/${l.id}`}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 hover:border-amber-400/60 hover:bg-[color:var(--surface-2)] transition-colors flex flex-col items-center text-center"
              >
                <PokemonSprite dexNumber={l.id} name={l.nameKo} size={64} />
                <div className="mt-1.5 font-bold text-sm">{l.nameKo}</div>
                <div className="mt-1">
                  <TypeBadgeList types={l.types} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <div className="text-xs text-gray-500 text-center">
        등록된 전설 포켓몬: {LEGENDARIES.length}마리 / 추천 매치업: {rental.recommendedFor.length}건
      </div>
    </div>
  );
}
