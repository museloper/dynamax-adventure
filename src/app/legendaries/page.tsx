"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LEGENDARIES } from "@/data/legendaries";
import { TypeBadgeList } from "@/components/TypeBadge";
import { PokemonSprite } from "@/components/PokemonSprite";
import { VersionBadge } from "@/components/VersionBadge";
import { ALL_TYPES, TYPE_COLORS } from "@/lib/typeChart";
import type { PokemonType } from "@/lib/types";

export default function LegendariesPage() {
  const [query, setQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<Set<PokemonType>>(new Set());
  const [region, setRegion] = useState<string>("전체");
  const [versionFilter, setVersionFilter] = useState<"전체" | "sword" | "shield" | "공통">(
    "전체",
  );

  const regions = useMemo(() => {
    const s = new Set<string>();
    LEGENDARIES.forEach((l) => s.add(l.region));
    return ["전체", ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LEGENDARIES.filter((l) => {
      if (q) {
        const inName =
          l.nameKo.toLowerCase().includes(q) ||
          l.nameEn.toLowerCase().includes(q) ||
          String(l.id).includes(q);
        if (!inName) return false;
      }
      if (selectedTypes.size > 0) {
        const has = l.types.some((t) => selectedTypes.has(t));
        if (!has) return false;
      }
      if (region !== "전체" && l.region !== region) return false;
      if (versionFilter !== "전체") {
        if (versionFilter === "공통") {
          if (l.versionExclusive) return false;
        } else if (l.versionExclusive !== versionFilter) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => a.id - b.id);
  }, [query, selectedTypes, region, versionFilter]);

  function toggleType(t: PokemonType) {
    const next = new Set(selectedTypes);
    if (next.has(t)) next.delete(t);
    else next.add(t);
    setSelectedTypes(next);
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold mb-1">전설 포켓몬</h1>
        <p className="text-sm text-gray-300">
          타깃 전설을 선택하면 추천 렌탈 파티 구성과 공략 팁을 확인할 수 있습니다.
        </p>
      </header>

      <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="전설 포켓몬 이름 / 도감번호 검색..."
            className="flex-1 min-w-[220px] px-3 py-2 rounded-lg bg-[color:var(--surface-2)] border border-[color:var(--border)] focus:outline-none focus:border-amber-400"
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[color:var(--surface-2)] border border-[color:var(--border)] focus:outline-none focus:border-amber-400 text-sm"
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <select
            value={versionFilter}
            onChange={(e) => setVersionFilter(e.target.value as typeof versionFilter)}
            className="px-3 py-2 rounded-lg bg-[color:var(--surface-2)] border border-[color:var(--border)] focus:outline-none focus:border-amber-400 text-sm"
          >
            <option value="전체">전체 버전</option>
            <option value="공통">공통 출현</option>
            <option value="sword">소드 한정</option>
            <option value="shield">실드 한정</option>
          </select>
        </div>

        <div>
          <div className="text-xs text-gray-400 mb-2">타입 필터</div>
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
      </div>

      <div className="text-sm text-gray-400">
        총 <span className="text-amber-300 font-bold">{filtered.length}</span>마리
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-400">조건에 맞는 전설이 없습니다.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filtered.map((l) => (
            <Link
              key={l.id}
              href={`/legendaries/${l.id}`}
              className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 hover:border-amber-400/60 hover:bg-[color:var(--surface-2)] transition-colors flex flex-col items-center text-center"
            >
              <div className="text-xs font-mono text-gray-500">
                #{String(l.id).padStart(3, "0")}
              </div>
              <PokemonSprite dexNumber={l.id} name={l.nameKo} size={84} />
              <div className="mt-1.5 font-bold">{l.nameKo}</div>
              <div className="text-xs text-gray-400 mb-1.5">{l.region}</div>
              <TypeBadgeList types={l.types} />
              {l.versionExclusive && (
                <div className="mt-1.5">
                  <VersionBadge version={l.versionExclusive} />
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
