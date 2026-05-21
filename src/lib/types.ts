export type PokemonType =
  | "노말"
  | "불꽃"
  | "물"
  | "풀"
  | "전기"
  | "얼음"
  | "격투"
  | "독"
  | "땅"
  | "비행"
  | "에스퍼"
  | "벌레"
  | "바위"
  | "고스트"
  | "드래곤"
  | "악"
  | "강철"
  | "페어리";

export type Tier = "S" | "A" | "B" | "C";

export type MoveCategory = "물리" | "특수" | "변화";

export interface MoveInfo {
  type: PokemonType;
  category: MoveCategory;
  power?: number;
  accuracy?: number;
  priority?: number;
  note?: string;
}

export interface Move {
  nameKo: string;
  type: PokemonType;
  category: MoveCategory;
  power?: number;
  accuracy?: number;
  priority?: number;
  note?: string;
}

export interface RentalPokemon {
  // 고유 ID: 같은 도감번호 여러 폼 구분 위해 사용 (10000+ = 알로라, 20000+ = 가라르 등)
  id: number;
  // 실제 전국도감 번호 (스프라이트/표시용)
  dexNumber: number;
  nameKo: string;
  nameEn: string;
  // 폼 이름 (예: "원종", "알로라", "가라르", "한낮", "한밤", "적색근", "청색근")
  form?: string;
  types: PokemonType[];
  ability: string;
  // 특성 앞 ※ 마커 (숨겨진 특성)
  hasHiddenAbility?: boolean;
  // 거다이맥스 가능 여부
  isGigantamax?: boolean;
  moves: Move[];
  tier: Tier;
  recommendedFor: number[];
  notes?: string;
}

export interface LegendaryPokemon {
  id: number;
  nameKo: string;
  nameEn: string;
  types: PokemonType[];
  region: string;
  ability: string;
  moves: Move[];
  // 시그니처/특수 기술 (괄호 안에 표시되는 추가 기술)
  signatureMove?: Move;
  // 게임 버전 한정 등장 여부
  versionExclusive?: "sword" | "shield";
  weakTo: PokemonType[];
  resistantTo: PokemonType[];
  recommendedRentals: number[];
  strategy: string;
}
