"use client";

import { useMemo, useState } from "react";
import { RENTALS } from "@/data/rentals";
import { RentalCard } from "@/components/RentalCard";
import { TierLegend } from "@/components/TierBadge";
import { ALL_TYPES, TYPE_COLORS } from "@/lib/typeChart";
import type { PokemonType, Tier } from "@/lib/types";

const TIERS: Tier[] = ["S", "A", "B", "C"];

export default function RentalsPage() {
  const [query, setQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<Set<PokemonType>>(new Set());
  const [selectedTiers, setSelectedTiers] = useState<Set<Tier>>(new Set());
  const [onlyGmax, setOnlyGmax] = useState(false);
  const [sort, setSort] = useState<"tier" | "dex" | "name">("tier");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = RENTALS.filter((r) => {
      if (q) {
        const inName =
          r.nameKo.toLowerCase().includes(q) ||
          r.nameEn.toLowerCase().includes(q) ||
          String(r.dexNumber).includes(q) ||
          (r.form ?? "").includes(q);
        if (!inName) return false;
      }
      if (selectedTypes.size > 0) {
        const hasType = r.types.some((t) => selectedTypes.has(t));
        if (!hasType) return false;
      }
      if (selectedTiers.size > 0 && !selectedTiers.has(r.tier)) return false;
      if (onlyGmax && !r.isGigantamax) return false;
      return true;
    });

    const tierOrder: Record<Tier, number> = { S: 0, A: 1, B: 2, C: 3 };
    list = [...list].sort((a, b) => {
      if (sort === "tier") {
        const diff = tierOrder[a.tier] - tierOrder[b.tier];
        if (diff !== 0) return diff;
        return a.dexNumber - b.dexNumber;
      }
      if (sort === "dex") {
        const diff = a.dexNumber - b.dexNumber;
        if (diff !== 0) return diff;
        return a.id - b.id; // 폼 변형이 뒤에 오도록
      }
      return a.nameKo.localeCompare(b.nameKo, "ko");
    });
    return list;
  }, [query, selectedTypes, selectedTiers, onlyGmax, sort]);

  function toggleType(t: PokemonType) {
    const next = new Set(selectedTypes);
    if (next.has(t)) next.delete(t);
    else next.add(t);
    setSelectedTypes(next);
  }
  function toggleTier(t: Tier) {
    const next = new Set(selectedTiers);
    if (next.has(t)) next.delete(t);
    else next.add(t);
    setSelectedTiers(next);
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold mb-1">렌탈 포켓몬</h1>
        <p className="text-sm text-gray-300">
          전국도감 번호 / 이름 / 폼(원종/알로라/가라르)으로 검색하고, 타입과 티어로 필터링할 수 있습니다.
        </p>
      </header>

      <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="포켓몬 이름, 도감번호, 폼 검색..."
            className="flex-1 min-w-[220px] px-3 py-2 rounded-lg bg-[color:var(--surface-2)] border border-[color:var(--border)] focus:outline-none focus:border-amber-400"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="px-3 py-2 rounded-lg bg-[color:var(--surface-2)] border border-[color:var(--border)] focus:outline-none focus:border-amber-400 text-sm"
          >
            <option value="tier">티어 순</option>
            <option value="dex">도감 번호 순</option>
            <option value="name">이름 순 (가나다)</option>
          </select>
          <label className="flex items-center gap-1.5 text-sm cursor-pointer select-none px-3 py-2 rounded-lg border border-[color:var(--border)] hover:bg-[color:var(--surface-2)]">
            <input
              type="checkbox"
              checked={onlyGmax}
              onChange={(e) => setOnlyGmax(e.target.checked)}
              className="accent-fuchsia-500"
            />
            <span>거다이맥스만</span>
          </label>
        </div>

        <div>
          <div className="text-xs text-gray-400 mb-2">타입 (다중 선택 가능)</div>
          <div className="flex flex-wrap gap-1.5">
            {ALL_TYPES.map((t) => {
              const active = selectedTypes.has(t);
              return (
                <button
                  key={t}
                  onClick={() => toggleType(t)}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition ${
                    active
                      ? "text-white border-white/50 ring-2 ring-white/30"
                      : "text-white border-transparent opacity-70 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: TYPE_COLORS[t] }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-400 mb-2">티어 필터</div>
          <div className="flex flex-wrap gap-2 items-center">
            {TIERS.map((t) => {
              const active = selectedTiers.has(t);
              return (
                <button
                  key={t}
                  onClick={() => toggleTier(t)}
                  className={`px-3 py-1 rounded-lg text-sm font-bold border transition ${
                    active
                      ? "border-amber-400 bg-amber-400/10 text-amber-200"
                      : "border-[color:var(--border)] text-gray-300 hover:bg-[color:var(--surface-2)]"
                  }`}
                >
                  {t}
                </button>
              );
            })}
            <div className="ml-3">
              <TierLegend />
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-400">
        총 <span className="text-amber-300 font-bold">{filtered.length}</span>마리
        <span className="text-gray-500"> / 전체 {RENTALS.length}마리</span>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-400">조건에 맞는 포켓몬이 없습니다.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((r) => (
            <RentalCard key={r.id} rental={r} />
          ))}
        </div>
      )}
    </div>
  );
}
