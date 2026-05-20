import type { PokemonType } from "./types";

export const ALL_TYPES: PokemonType[] = [
  "노말", "불꽃", "물", "풀", "전기", "얼음",
  "격투", "독", "땅", "비행", "에스퍼", "벌레",
  "바위", "고스트", "드래곤", "악", "강철", "페어리",
];

export const TYPE_COLORS: Record<PokemonType, string> = {
  노말: "#A8A77A",
  불꽃: "#EE8130",
  물: "#6390F0",
  풀: "#7AC74C",
  전기: "#F7D02C",
  얼음: "#96D9D6",
  격투: "#C22E28",
  독: "#A33EA1",
  땅: "#E2BF65",
  비행: "#A98FF3",
  에스퍼: "#F95587",
  벌레: "#A6B91A",
  바위: "#B6A136",
  고스트: "#735797",
  드래곤: "#6F35FC",
  악: "#705746",
  강철: "#B7B7CE",
  페어리: "#D685AD",
};

// attacker -> defender 배율표 (공격 타입이 방어 타입에 가하는 피해 배율)
type ChartRow = Partial<Record<PokemonType, number>>;
export const TYPE_CHART: Record<PokemonType, ChartRow> = {
  노말: { 바위: 0.5, 고스트: 0, 강철: 0.5 },
  불꽃: { 불꽃: 0.5, 물: 0.5, 풀: 2, 얼음: 2, 벌레: 2, 바위: 0.5, 드래곤: 0.5, 강철: 2 },
  물: { 불꽃: 2, 물: 0.5, 풀: 0.5, 땅: 2, 바위: 2, 드래곤: 0.5 },
  풀: { 불꽃: 0.5, 물: 2, 풀: 0.5, 독: 0.5, 땅: 2, 비행: 0.5, 벌레: 0.5, 바위: 2, 드래곤: 0.5, 강철: 0.5 },
  전기: { 물: 2, 풀: 0.5, 전기: 0.5, 땅: 0, 비행: 2, 드래곤: 0.5 },
  얼음: { 불꽃: 0.5, 물: 0.5, 풀: 2, 얼음: 0.5, 땅: 2, 비행: 2, 드래곤: 2, 강철: 0.5 },
  격투: { 노말: 2, 얼음: 2, 독: 0.5, 비행: 0.5, 에스퍼: 0.5, 벌레: 0.5, 바위: 2, 고스트: 0, 악: 2, 강철: 2, 페어리: 0.5 },
  독: { 풀: 2, 독: 0.5, 땅: 0.5, 바위: 0.5, 고스트: 0.5, 강철: 0, 페어리: 2 },
  땅: { 불꽃: 2, 풀: 0.5, 전기: 2, 독: 2, 비행: 0, 벌레: 0.5, 바위: 2, 강철: 2 },
  비행: { 풀: 2, 전기: 0.5, 격투: 2, 벌레: 2, 바위: 0.5, 강철: 0.5 },
  에스퍼: { 격투: 2, 독: 2, 에스퍼: 0.5, 악: 0, 강철: 0.5 },
  벌레: { 불꽃: 0.5, 풀: 2, 격투: 0.5, 독: 0.5, 비행: 0.5, 에스퍼: 2, 고스트: 0.5, 악: 2, 강철: 0.5, 페어리: 0.5 },
  바위: { 불꽃: 2, 얼음: 2, 격투: 0.5, 땅: 0.5, 비행: 2, 벌레: 2, 강철: 0.5 },
  고스트: { 노말: 0, 에스퍼: 2, 고스트: 2, 악: 0.5 },
  드래곤: { 드래곤: 2, 강철: 0.5, 페어리: 0 },
  악: { 격투: 0.5, 에스퍼: 2, 고스트: 2, 악: 0.5, 페어리: 0.5 },
  강철: { 불꽃: 0.5, 물: 0.5, 전기: 0.5, 얼음: 2, 바위: 2, 강철: 0.5, 페어리: 2 },
  페어리: { 불꽃: 0.5, 격투: 2, 독: 0.5, 드래곤: 2, 악: 2, 강철: 0.5 },
};

export function getEffectiveness(
  attackType: PokemonType,
  defenderTypes: PokemonType[],
): number {
  return defenderTypes.reduce((acc, def) => {
    const m = TYPE_CHART[attackType]?.[def];
    return acc * (m ?? 1);
  }, 1);
}

export function effectivenessLabel(mult: number): string {
  if (mult === 0) return "효과 없음";
  if (mult >= 4) return "효과가 굉장히 잘 들었다! (4×)";
  if (mult === 2) return "효과가 굉장하다 (2×)";
  if (mult > 1) return `유리 (${mult}×)`;
  if (mult === 1) return "보통 (1×)";
  if (mult >= 0.5) return `별로다 (${mult}×)`;
  return `매우 별로다 (${mult}×)`;
}

export function effectivenessColor(mult: number): string {
  if (mult === 0) return "#374151";
  if (mult >= 2) return "#16a34a";
  if (mult > 1) return "#65a30d";
  if (mult === 1) return "#9ca3af";
  if (mult >= 0.5) return "#ea580c";
  return "#dc2626";
}
