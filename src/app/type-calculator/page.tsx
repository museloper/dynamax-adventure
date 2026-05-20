"use client";

import { useMemo, useState } from "react";
import { ALL_TYPES, TYPE_COLORS, getEffectiveness, effectivenessLabel, effectivenessColor } from "@/lib/typeChart";
import type { PokemonType } from "@/lib/types";
import { TypeBadge } from "@/components/TypeBadge";

export default function TypeCalculatorPage() {
  const [attackType, setAttackType] = useState<PokemonType>("불꽃");
  const [defType1, setDefType1] = useState<PokemonType>("풀");
  const [defType2, setDefType2] = useState<PokemonType | "없음">("없음");

  const defenderTypes = useMemo(
    () => (defType2 === "없음" ? [defType1] : [defType1, defType2]),
    [defType1, defType2],
  );

  const result = useMemo(
    () => getEffectiveness(attackType, defenderTypes),
    [attackType, defenderTypes],
  );

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold mb-1">타입 상성 계산기</h1>
        <p className="text-sm text-gray-300">
          공격 타입과 방어 타입(1~2개)을 선택하면 최종 배율을 계산합니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TypePicker label="공격 타입" value={attackType} onChange={setAttackType} />
        <TypePicker label="방어 타입 1" value={defType1} onChange={setDefType1} />
        <TypePicker label="방어 타입 2 (없음 가능)" value={defType2} onChange={setDefType2} allowNone />
      </div>

      <section className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-center">
        <div className="flex justify-center items-center gap-3 flex-wrap mb-4">
          <TypeBadge type={attackType} size="md" />
          <span className="text-2xl text-gray-400">→</span>
          {defenderTypes.map((t) => (
            <TypeBadge key={t} type={t} size="md" />
          ))}
        </div>
        <div
          className="text-4xl font-extrabold mb-1"
          style={{ color: effectivenessColor(result) }}
        >
          {result}×
        </div>
        <div className="text-sm font-semibold" style={{ color: effectivenessColor(result) }}>
          {effectivenessLabel(result)}
        </div>
      </section>

      <section className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
        <h2 className="text-lg font-bold mb-3">
          {defType1}
          {defType2 !== "없음" ? `/${defType2}` : ""} 타입이 받는 모든 공격 배율
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {ALL_TYPES.map((atk) => {
            const m = getEffectiveness(atk, defenderTypes);
            return (
              <div
                key={atk}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg ${
                  m === 1 ? "bg-[color:var(--surface-2)]" : "bg-[color:var(--surface-2)] ring-1 ring-white/10"
                }`}
              >
                <TypeBadge type={atk} />
                <span
                  className="text-xs font-bold ml-auto"
                  style={{ color: effectivenessColor(m) }}
                >
                  {m}×
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function TypePicker<T extends string>({
  label,
  value,
  onChange,
  allowNone = false,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  allowNone?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3">
      <div className="text-xs text-gray-400 mb-2">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {allowNone && (
          <button
            onClick={() => onChange("없음" as T)}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition ${
              value === ("없음" as T)
                ? "bg-white/15 border-white/40"
                : "border-[color:var(--border)] text-gray-300 hover:bg-[color:var(--surface-2)]"
            }`}
          >
            없음
          </button>
        )}
        {ALL_TYPES.map((t) => {
          const active = value === (t as unknown as T);
          return (
            <button
              key={t}
              onClick={() => onChange(t as unknown as T)}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold text-white transition ${
                active ? "ring-2 ring-white/60" : "opacity-70 hover:opacity-100"
              }`}
              style={{ backgroundColor: TYPE_COLORS[t] }}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
