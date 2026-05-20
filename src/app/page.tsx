import Link from "next/link";
import { RENTALS } from "@/data/rentals";
import { LEGENDARIES } from "@/data/legendaries";
import { RentalCard } from "@/components/RentalCard";
import { TypeBadgeList } from "@/components/TypeBadge";
import { TierBadge } from "@/components/TierBadge";
import { PokemonSprite } from "@/components/PokemonSprite";

export default function HomePage() {
  const topRentals = RENTALS.filter((r) => r.tier === "S");
  const featuredLegendaries = LEGENDARIES.slice(0, 8);

  return (
    <div className="space-y-12">
      <section className="text-center py-10 px-4 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-rose-900/30 border border-[color:var(--border)]">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          다이맥스 어드벤처를 <span className="text-amber-300">빠르게</span> 클리어하세요
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          포켓몬 소드/실드 The Crown Tundra의 다이맥스 어드벤처에서
          어떤 렌탈 포켓몬을 골라야 가장 효율적인지, 전설별 추천 파티는 무엇인지 한눈에 확인하세요.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Link
            href="/rentals"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold transition-colors"
          >
            렌탈 포켓몬 보기
          </Link>
          <Link
            href="/legendaries"
            className="px-5 py-2.5 rounded-lg border border-[color:var(--border)] hover:bg-[color:var(--surface-2)] font-semibold transition-colors"
          >
            전설 포켓몬별 가이드
          </Link>
        </div>
      </section>

      <section>
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl font-bold">
            <span className="text-amber-300">S 티어</span> 렌탈 포켓몬
          </h2>
          <Link href="/rentals" className="text-sm text-gray-400 hover:text-amber-300">
            전체 목록 →
          </Link>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {topRentals.map((r) => (
            <RentalCard key={r.id} rental={r} />
          ))}
        </div>
      </section>

      <section>
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl font-bold">전설 포켓몬 공략 바로가기</h2>
          <Link href="/legendaries" className="text-sm text-gray-400 hover:text-amber-300">
            전체 목록 →
          </Link>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {featuredLegendaries.map((l) => (
            <Link
              key={l.id}
              href={`/legendaries/${l.id}`}
              className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 hover:border-amber-400/60 hover:bg-[color:var(--surface-2)] transition-colors flex flex-col items-center text-center"
            >
              <PokemonSprite dexNumber={l.id} name={l.nameKo} size={72} />
              <div className="mt-2 font-bold text-sm">{l.nameKo}</div>
              <div className="mt-1.5">
                <TypeBadgeList types={l.types} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
        <h2 className="text-lg font-bold mb-3">빠른 클리어 핵심 팁</h2>
        <ol className="space-y-2 text-sm text-gray-200 list-decimal list-inside">
          <li>
            <strong className="text-amber-300">시작 전 전설 타입 확인</strong> — 입구에서 보이는
            전설의 타입에 강한 렌탈을 우선 선택하세요.
          </li>
          <li>
            <strong className="text-amber-300">광역 커버리지 우선</strong> — 4타입 풀커버리지인
            니드킹은 거의 모든 매치에서 안정적입니다.
          </li>
          <li>
            <strong className="text-amber-300">보조 픽 1마리 채택</strong> — 크리만의 전기자석파처럼
            전설을 마비시키는 우선도 기술이 있으면 클리어 확률이 급상승합니다.
          </li>
          <li>
            <strong className="text-amber-300">중간 다이맥스 포켓몬도 잡아두기</strong> — 모든 적
            포켓몬은 잡을 수 있으며, 중간에 더 좋은 매치업이 나오면 즉시 교체하세요.
          </li>
        </ol>
        <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
          <TierBadge tier="S" size="sm" />
          <span>= 최우선 선택 / 거의 모든 상황에서 강력</span>
        </div>
      </section>
    </div>
  );
}
