import type { RentalPokemon } from "@/lib/types";
import { moveList } from "./moves";

// ID 인코딩 규칙
// - 베이스 폼: id = dexNumber
// - 알로라 폼: id = 10000 + dexNumber
// - 가라르 폼: id = 20000 + dexNumber
// - 한밤 루가루암: id = 30000 + dexNumber
// - 청색근 배쓰나이: id = 40000 + dexNumber
// 동일 dexNumber + form이 여러 개 가능

export const RENTALS: RentalPokemon[] = [
  // #2 이상해풀
  {
    id: 2, dexNumber: 2, nameKo: "이상해풀", nameEn: "Ivysaur",
    types: ["풀", "독"], ability: "엽록소", hasHiddenAbility: true,
    moves: moveList(["풀의맹세", "광합성", "솔라빔", "오물폭탄"]),
    tier: "B", recommendedFor: [382, 383],
  },
  // #5 리자드
  {
    id: 5, dexNumber: 5, nameKo: "리자드", nameEn: "Charmeleon",
    types: ["불꽃"], ability: "선파워", hasHiddenAbility: true,
    moves: moveList(["불꽃의맹세", "용의파동", "버티기", "연옥"]),
    tier: "B", recommendedFor: [251, 488],
  },
  // #8 어니부기
  {
    id: 8, dexNumber: 8, nameKo: "어니부기", nameEn: "Wartortle",
    types: ["물"], ability: "젖은접시", hasHiddenAbility: true,
    moves: moveList(["물의맹세", "하이드로펌프", "파동탄", "냉동빔"]),
    tier: "B", recommendedFor: [146, 250, 383],
  },
  // #12 버터플 (거다이)
  {
    id: 12, dexNumber: 12, nameKo: "버터플", nameEn: "Butterfree",
    types: ["벌레", "비행"], ability: "색안경", hasHiddenAbility: true,
    isGigantamax: true,
    moves: moveList(["꽃가루경단", "베놈쇼크", "분노가루", "기가드레인"]),
    tier: "B", recommendedFor: [251],
  },
  // #26 라이츄 (원종)
  {
    id: 26, dexNumber: 26, nameKo: "라이츄", nameEn: "Raichu", form: "원종",
    types: ["전기"], ability: "피뢰침", hasHiddenAbility: true,
    moves: moveList(["라이징볼트", "스피드스왑", "빛의장막", "기합구슬"]),
    tier: "B", recommendedFor: [144, 145, 249, 382],
  },
  // #26 알로라 라이츄
  {
    id: 10026, dexNumber: 26, nameKo: "라이츄", nameEn: "Raichu", form: "알로라",
    types: ["전기", "에스퍼"], ability: "서핑테일",
    moves: moveList(["10만볼트", "일렉트릭필드", "사이코키네시스", "돌림노래"]),
    tier: "A", recommendedFor: [144, 145, 249, 382],
  },
  // #28 고지 (원종)
  {
    id: 28, dexNumber: 28, nameKo: "고지", nameEn: "Sandslash", form: "원종",
    types: ["땅"], ability: "모래숨기",
    moves: moveList(["브레이크클로", "분함의발구르기", "스톤에지", "흡혈"]),
    tier: "B", recommendedFor: [145, 642, 644],
  },
  // #28 알로라 고지
  {
    id: 10028, dexNumber: 28, nameKo: "고지", nameEn: "Sandslash", form: "알로라",
    types: ["얼음", "강철"], ability: "눈숨기",
    moves: moveList(["눈사태", "스톤샤워", "깨트리기", "칼춤"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 646],
  },
  // #31 니드퀸
  {
    id: 31, dexNumber: 31, nameKo: "니드퀸", nameEn: "Nidoqueen",
    types: ["독", "땅"], ability: "독가시",
    moves: moveList(["열사의대지", "베놈쇼크", "애교부리기", "섀도볼"]),
    tier: "A", recommendedFor: [144, 380, 381, 488],
  },
  // #34 니드킹
  {
    id: 34, dexNumber: 34, nameKo: "니드킹", nameEn: "Nidoking",
    types: ["독", "땅"], ability: "투쟁심",
    moves: moveList(["10만마력", "냉동펀치", "번개펀치", "불꽃펀치"]),
    tier: "S", recommendedFor: [144, 145, 146, 249, 380, 381, 382, 383, 384, 487, 643, 644, 646],
    notes: "4타입 풀커버리지 물리 어태커. 다이맥스 어드벤처 최강 평가의 만능 픽.",
  },
  // #35 삐삐
  {
    id: 35, dexNumber: 35, nameKo: "삐삐", nameEn: "Clefairy",
    types: ["페어리"], ability: "프렌드가드", hasHiddenAbility: true,
    moves: moveList(["생명의물방울", "매지컬플레임", "매지컬리프", "리플렉터"]),
    tier: "C", recommendedFor: [149, 384, 487],
  },
  // #36 픽시
  {
    id: 36, dexNumber: 36, nameKo: "픽시", nameEn: "Clefable",
    types: ["페어리"], ability: "매직가드",
    moves: moveList(["메테오빔", "매지컬샤인", "날따름", "코스믹파워"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #39 푸린
  {
    id: 39, dexNumber: 39, nameKo: "푸린", nameEn: "Jigglypuff",
    types: ["노말", "페어리"], ability: "프렌드가드", hasHiddenAbility: true,
    moves: moveList(["대타출동", "거짓울음", "빛의장막", "드레인키스"]),
    tier: "C", recommendedFor: [149, 384, 487],
  },
  // #40 푸크린
  {
    id: 40, dexNumber: 40, nameKo: "푸크린", nameEn: "Wigglytuff",
    types: ["노말", "페어리"], ability: "승기",
    moves: moveList(["매지컬샤인", "돌림노래", "와이드포스", "천사의키스"]),
    tier: "B", recommendedFor: [149, 487, 644],
  },
  // #44 냄새꼬
  {
    id: 44, dexNumber: 44, nameKo: "냄새꼬", nameEn: "Gloom",
    types: ["풀", "독"], ability: "엽록소",
    moves: moveList(["베놈쇼크", "맹독", "문포스", "저리가루"]),
    tier: "B", recommendedFor: [383, 484],
  },
  // #45 라플레시아
  {
    id: 45, dexNumber: 45, nameKo: "라플레시아", nameEn: "Vileplume",
    types: ["풀", "독"], ability: "엽록소",
    moves: moveList(["꽃가루경단", "맹독", "그래스필드", "기가드레인"]),
    tier: "B", recommendedFor: [382, 383, 484],
  },
  // #51 닥트리오 (원종)
  {
    id: 51, dexNumber: 51, nameKo: "닥트리오", nameEn: "Dugtrio", form: "원종",
    types: ["땅"], ability: "모래의힘", hasHiddenAbility: true,
    moves: moveList(["10만마력", "대타출동", "진흙뿌리기", "스톤샤워"]),
    tier: "B", recommendedFor: [145, 250, 642],
  },
  // #51 알로라 닥트리오
  {
    id: 10051, dexNumber: 51, nameKo: "닥트리오", nameEn: "Dugtrio", form: "알로라",
    types: ["땅", "강철"], ability: "모래숨기",
    moves: moveList(["아이언헤드", "10만마력", "기습", "싫은소리"]),
    tier: "A", recommendedFor: [145, 250, 380, 381, 384, 487, 643, 644, 646],
  },
  // #53 페르시안 (원종)
  {
    id: 53, dexNumber: 53, nameKo: "페르시안", nameEn: "Persian", form: "원종",
    types: ["노말"], ability: "테크니션",
    moves: moveList(["객기", "치근거리기", "페인트", "돌림노래"]),
    tier: "C", recommendedFor: [],
  },
  // #53 알로라 페르시안
  {
    id: 10053, dexNumber: 53, nameKo: "페르시안", nameEn: "Persian", form: "알로라",
    types: ["악"], ability: "퍼코트",
    moves: moveList(["승부굳히기", "바크아웃", "페인트", "순서미루기"]),
    tier: "B", recommendedFor: [150, 380, 381, 488],
  },
  // #55 골덕
  {
    id: 55, dexNumber: 55, nameKo: "골덕", nameEn: "Golduck",
    types: ["물"], ability: "쓱쓱", hasHiddenAbility: true,
    moves: moveList(["아쿠아제트", "싫은소리", "메가톤킥", "소금물"]),
    tier: "C", recommendedFor: [146, 250, 383],
  },
  // #62 강챙이
  {
    id: 62, dexNumber: 62, nameKo: "강챙이", nameEn: "Poliwrath",
    types: ["물", "격투"], ability: "저수",
    moves: moveList(["드레인펀치", "누르기", "코칭", "아쿠아브레이크"]),
    tier: "B", recommendedFor: [146, 383, 491],
  },
  // #64 윤겔라
  {
    id: 64, dexNumber: 64, nameKo: "윤겔라", nameEn: "Kadabra",
    types: ["에스퍼"], ability: "매직가드", hasHiddenAbility: true,
    moves: moveList(["사이코쇼크", "돌림노래", "버티기", "매지컬샤인"]),
    tier: "B", recommendedFor: [],
  },
  // #67 근육몬
  {
    id: 67, dexNumber: 67, nameKo: "근육몬", nameEn: "Machoke",
    types: ["격투"], ability: "노가드",
    moves: moveList(["폭발펀치", "암석봉인", "보복", "코칭"]),
    tier: "A", recommendedFor: [144, 380, 381, 488],
  },
  // #73 독파리
  {
    id: 73, dexNumber: 73, nameKo: "독파리", nameEn: "Tentacruel",
    types: ["물", "독"], ability: "클리어바디",
    moves: moveList(["물의파동", "하이드로펌프", "독찌르기", "칼춤"]),
    tier: "B", recommendedFor: [146, 250, 383],
  },
  // #80 야도란 (원종)
  {
    id: 80, dexNumber: 80, nameKo: "야도란", nameEn: "Slowbro", form: "원종",
    types: ["물", "에스퍼"], ability: "마이페이스",
    moves: moveList(["와이드포스", "자기암시", "화염방사", "사이코쇼크"]),
    tier: "B", recommendedFor: [144, 250, 383],
  },
  // #82 레어코일
  {
    id: 82, dexNumber: 82, nameKo: "레어코일", nameEn: "Magneton",
    types: ["전기", "강철"], ability: "애널라이즈", hasHiddenAbility: true,
    moves: moveList(["일렉트릭볼", "러스터캐논", "전자부유", "빛의장막"]),
    tier: "A", recommendedFor: [144, 145, 249, 382, 491],
  },
  // #93 고우스트
  {
    id: 93, dexNumber: 93, nameKo: "고우스트", nameEn: "Haunter",
    types: ["고스트", "독"], ability: "부유",
    moves: moveList(["병상첨병", "최면술", "꿈먹기", "에너지볼"]),
    tier: "B", recommendedFor: [150, 482, 488],
  },
  // #99 킹크랩 (거다이)
  {
    id: 99, dexNumber: 99, nameKo: "킹크랩", nameEn: "Kingler",
    types: ["물"], ability: "괴력집게", isGigantamax: true,
    moves: moveList(["집게해머", "와이드가드", "구멍파기", "엄청난힘"]),
    tier: "B", recommendedFor: [146, 250, 383],
  },
  // #103 나시 (원종)
  {
    id: 103, dexNumber: 103, nameKo: "나시", nameEn: "Exeggutor", form: "원종",
    types: ["풀", "에스퍼"], ability: "수확", hasHiddenAbility: true,
    moves: moveList(["사이코커터", "솔라빔", "깨트리기", "칼춤"]),
    tier: "B", recommendedFor: [382, 383],
  },
  // #105 텅구리 (원종)
  {
    id: 105, dexNumber: 105, nameKo: "텅구리", nameEn: "Marowak", form: "원종",
    types: ["땅"], ability: "전투무장", hasHiddenAbility: true,
    moves: moveList(["뼈다귀부메랑", "지옥찌르기", "아이언헤드", "싫은소리"]),
    tier: "B", recommendedFor: [145, 250, 642],
  },
  // #105 알로라 텅구리
  {
    id: 10105, dexNumber: 105, nameKo: "텅구리", nameEn: "Marowak", form: "알로라",
    types: ["불꽃", "고스트"], ability: "돌머리", hasHiddenAbility: true,
    moves: moveList(["플레어드라이브", "섀도본", "도깨비불", "아이언헤드"]),
    tier: "A", recommendedFor: [150, 380, 381, 482, 488],
  },
  // #106 시라소몬
  {
    id: 106, dexNumber: 106, nameKo: "시라소몬", nameEn: "Hitmonlee",
    types: ["격투"], ability: "유연",
    moves: moveList(["인파이트", "와이드가드", "블레이즈킥", "로킥"]),
    tier: "B", recommendedFor: [144, 380, 381, 488],
  },
  // #107 홍수몬
  {
    id: 107, dexNumber: 107, nameKo: "홍수몬", nameEn: "Hitmonchan",
    types: ["격투"], ability: "철주먹",
    moves: moveList(["그로우펀치", "냉동펀치", "번개펀치", "불꽃펀치"]),
    tier: "A", recommendedFor: [144, 145, 146, 249, 380, 381, 488],
  },
  // #108 내루미
  {
    id: 108, dexNumber: 108, nameKo: "내루미", nameEn: "Lickitung",
    types: ["노말"], ability: "둔감",
    moves: moveList(["돌림노래", "눈보라", "번개", "탁류"]),
    tier: "B", recommendedFor: [149, 384, 487],
  },
  // #110 또도가스 (원종)
  {
    id: 110, dexNumber: 110, nameKo: "또도가스", nameEn: "Weezing", form: "원종",
    types: ["독"], ability: "화학변화가스",
    moves: moveList(["클리어스모그", "열풍", "오물폭탄", "악의파동"]),
    tier: "B", recommendedFor: [150, 251, 488],
  },
  // #110 가라르 또도가스
  {
    id: 20110, dexNumber: 110, nameKo: "또도가스", nameEn: "Weezing", form: "가라르",
    types: ["독", "페어리"], ability: "미스트메이커", hasHiddenAbility: true,
    moves: moveList(["원더스팀", "클리어스모그", "화염방사", "도발"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #112 코뿌리
  {
    id: 112, dexNumber: 112, nameKo: "코뿌리", nameEn: "Rhydon",
    types: ["땅", "바위"], ability: "돌머리",
    moves: moveList(["드릴라이너", "떨어뜨리기", "스마트혼", "겁나는얼굴"]),
    tier: "B", recommendedFor: [145, 146, 642, 644],
  },
  // #113 럭키
  {
    id: 113, dexNumber: 113, nameKo: "럭키", nameEn: "Chansey",
    types: ["노말"], ability: "치유의마음", hasHiddenAbility: true,
    moves: moveList(["돌림노래", "치유의파동", "도우미", "빛의장막"]),
    tier: "A", recommendedFor: [],
    notes: "보조 핵심. 치유의파동으로 파티 전체 회복, 도우미로 우선도 보조.",
  },
  // #114 덩쿠리
  {
    id: 114, dexNumber: 114, nameKo: "덩쿠리", nameEn: "Tangela",
    types: ["풀"], ability: "리프가드",
    moves: moveList(["파워휩", "저리가루", "그래스슬라이더", "누르기"]),
    tier: "B", recommendedFor: [382, 383],
  },
  // #115 캥카
  {
    id: 115, dexNumber: 115, nameKo: "캥카", nameEn: "Kangaskhan",
    types: ["노말"], ability: "일찍기상",
    moves: moveList(["누르기", "기습", "구멍파기", "역린"]),
    tier: "B", recommendedFor: [],
  },
  // #117 시드라
  {
    id: 117, dexNumber: 117, nameKo: "시드라", nameEn: "Seadra",
    types: ["물"], ability: "스나이퍼",
    moves: moveList(["열탕", "용의파동", "대타출동", "돌림노래"]),
    tier: "B", recommendedFor: [383, 484],
  },
  // #119 왕콘치
  {
    id: 119, dexNumber: 119, nameKo: "왕콘치", nameEn: "Seaking",
    types: ["물"], ability: "수의베일",
    moves: moveList(["폭포오르기", "뛰어오르기", "독찌르기", "드릴라이너"]),
    tier: "C", recommendedFor: [383],
  },
  // #121 아쿠스타
  {
    id: 121, dexNumber: 121, nameKo: "아쿠스타", nameEn: "Starmie",
    types: ["물", "에스퍼"], ability: "애널라이즈", hasHiddenAbility: true,
    moves: moveList(["파워젬", "매지컬샤인", "사이코커터", "얼어붙은바람"]),
    tier: "A", recommendedFor: [146, 250, 384, 487, 643, 644, 646],
  },
  // #122 마임맨 (원종)
  {
    id: 122, dexNumber: 122, nameKo: "마임맨", nameEn: "Mr. Mime", form: "원종",
    types: ["에스퍼", "페어리"], ability: "필터",
    moves: moveList(["도우미", "사이코키네시스", "리플렉터", "빛의장막"]),
    tier: "B", recommendedFor: [149, 384, 487],
  },
  // #122 가라르 마임맨
  {
    id: 20122, dexNumber: 122, nameKo: "마임맨", nameEn: "Mr. Mime", form: "가라르",
    types: ["얼음", "에스퍼"], ability: "아이스바디", hasHiddenAbility: true,
    moves: moveList(["얼어붙은바람", "사이코키네시스", "리플렉터", "빛의장막"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #123 스라크
  {
    id: 123, dexNumber: 123, nameKo: "스라크", nameEn: "Scyther",
    types: ["벌레", "비행"], ability: "테크니션",
    moves: moveList(["연속자르기", "전광석화", "승부굳히기", "날개치기"]),
    tier: "B", recommendedFor: [251, 380, 381, 488],
  },
  // #124 루주라
  {
    id: 124, dexNumber: 124, nameKo: "루주라", nameEn: "Jynx",
    types: ["얼음", "에스퍼"], ability: "건조피부", hasHiddenAbility: true,
    moves: moveList(["드레인키스", "악마의키스", "냉동빔", "돌림노래"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #125 에레브
  {
    id: 125, dexNumber: 125, nameKo: "에레브", nameEn: "Electabuzz",
    types: ["전기"], ability: "의기양양", hasHiddenAbility: true,
    moves: moveList(["라이징볼트", "일렉트릭네트", "도우미", "돌림노래"]),
    tier: "B", recommendedFor: [144, 145, 249, 382],
  },
  // #126 마그마
  {
    id: 126, dexNumber: 126, nameKo: "마그마", nameEn: "Magmar",
    types: ["불꽃"], ability: "의기양양", hasHiddenAbility: true,
    moves: moveList(["불대문자", "질투의불꽃", "클리어스모그", "돌림노래"]),
    tier: "B", recommendedFor: [251, 488],
  },
  // #128 켄타로스
  {
    id: 128, dexNumber: 128, nameKo: "켄타로스", nameEn: "Tauros",
    types: ["노말"], ability: "분노의경혈",
    moves: moveList(["객기", "10만마력", "인파이트", "승부굳히기"]),
    tier: "B", recommendedFor: [],
  },
  // #132 메타몽
  {
    id: 132, dexNumber: 132, nameKo: "메타몽", nameEn: "Ditto",
    types: ["노말"], ability: "괴짜", hasHiddenAbility: true,
    moves: moveList(["변신"]),
    tier: "C", recommendedFor: [],
    notes: "변신만 가능. 상대에 따라 가치가 크게 달라짐.",
  },
  // #134 샤미드
  {
    id: 134, dexNumber: 134, nameKo: "샤미드", nameEn: "Vaporeon",
    types: ["물"], ability: "저수",
    moves: moveList(["물의파동", "애교부리기", "웨더볼", "흑안개"]),
    tier: "B", recommendedFor: [146, 250, 383],
  },
  // #135 쥬피썬더
  {
    id: 135, dexNumber: 135, nameKo: "쥬피썬더", nameEn: "Jolteon",
    types: ["전기"], ability: "축전",
    moves: moveList(["10만볼트", "섀도볼", "도우미", "스피드스타"]),
    tier: "B", recommendedFor: [144, 145, 249, 382, 491],
  },
  // #136 부스터
  {
    id: 136, dexNumber: 136, nameKo: "부스터", nameEn: "Flareon",
    types: ["불꽃"], ability: "타오르는불꽃",
    moves: moveList(["질투의불꽃", "섀도볼", "초롱초롱눈동자", "비장의무기"]),
    tier: "B", recommendedFor: [251, 488],
  },
  // #137 폴리곤
  {
    id: 137, dexNumber: 137, nameKo: "폴리곤", nameEn: "Porygon",
    types: ["노말"], ability: "다운로드",
    moves: moveList(["속임수", "냉동빔", "10만볼트", "파괴광선"]),
    tier: "B", recommendedFor: [149, 384, 487],
  },
  // #148 신뇽
  {
    id: 148, dexNumber: 148, nameKo: "신뇽", nameEn: "Dragonair",
    types: ["드래곤"], ability: "탈피",
    moves: moveList(["스케일샷", "와이드브레이커", "번개", "눈보라"]),
    tier: "A", recommendedFor: [144, 145, 384, 487, 643, 644, 646],
  },
  // #164 야부엉
  {
    id: 164, dexNumber: 164, nameKo: "야부엉", nameEn: "Noctowl",
    types: ["노말", "비행"], ability: "색안경", hasHiddenAbility: true,
    moves: moveList(["에코보이스", "리플렉터", "불새", "최면술"]),
    tier: "B", recommendedFor: [251, 488],
  },
  // #171 랜턴
  {
    id: 171, dexNumber: 171, nameKo: "랜턴", nameEn: "Lanturn",
    types: ["물", "전기"], ability: "축전",
    moves: moveList(["물의파동", "하이드로펌프", "10만볼트", "이상한빛"]),
    tier: "A", recommendedFor: [144, 145, 146, 249, 382, 491],
  },
  // #176 토게틱
  {
    id: 176, dexNumber: 176, nameKo: "토게틱", nameEn: "Togetic",
    types: ["페어리", "비행"], ability: "하늘의은총",
    moves: moveList(["생명의물방울", "날따름", "치근거리기", "매지컬플레임"]),
    tier: "B", recommendedFor: [149, 384, 487],
  },
  // #178 네이티오
  {
    id: 178, dexNumber: 178, nameKo: "네이티오", nameEn: "Xatu",
    types: ["에스퍼", "비행"], ability: "매직미러", hasHiddenAbility: true,
    moves: moveList(["사이코키네시스", "심플빔", "에어슬래시", "이상한빛"]),
    tier: "B", recommendedFor: [380, 381, 488],
  },
  // #182 아르코
  {
    id: 182, dexNumber: 182, nameKo: "아르코", nameEn: "Bellossom",
    types: ["풀"], ability: "치유의마음", hasHiddenAbility: true,
    moves: moveList(["그래스필드", "기가드레인", "도우미", "매지컬샤인"]),
    tier: "A", recommendedFor: [382, 383, 484, 149, 487],
  },
  // #184 마릴리
  {
    id: 184, dexNumber: 184, nameKo: "마릴리", nameEn: "Azumarill",
    types: ["물", "페어리"], ability: "초식", hasHiddenAbility: true,
    moves: moveList(["아쿠아제트", "치근거리기", "아쿠아테일", "뛰어오르기"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #185 꼬지모
  {
    id: 185, dexNumber: 185, nameKo: "꼬지모", nameEn: "Sudowoodo",
    types: ["바위"], ability: "옹골참",
    moves: moveList(["분함의발구르기", "스톤에지", "철벽", "바디프레스"]),
    tier: "A", recommendedFor: [144, 146, 250, 642, 643],
  },
  // #186 왕구리
  {
    id: 186, dexNumber: 186, nameKo: "왕구리", nameEn: "Politoed",
    types: ["물"], ability: "잔비", hasHiddenAbility: true,
    moves: moveList(["아쿠아브레이크", "돌림노래", "대지의힘", "도우미"]),
    tier: "B", recommendedFor: [146, 250, 383],
  },
  // #195 누오
  {
    id: 195, dexNumber: 195, nameKo: "누오", nameEn: "Quagsire",
    types: ["물", "땅"], ability: "천진", hasHiddenAbility: true,
    moves: moveList(["기합구슬", "열탕", "맹독", "망각술"]),
    tier: "B", recommendedFor: [144, 250, 383, 491],
  },
  // #199 야도킹 (원종)
  {
    id: 199, dexNumber: 199, nameKo: "야도킹", nameEn: "Slowking", form: "원종",
    types: ["물", "에스퍼"], ability: "마이페이스",
    moves: moveList(["미래예지", "나쁜음모", "셸블레이드", "냉동펀치"]),
    tier: "B", recommendedFor: [144, 250, 383],
  },
  // #206 노고치
  {
    id: 206, dexNumber: 206, nameKo: "노고치", nameEn: "Dunsparce",
    types: ["노말"], ability: "하늘의은총",
    moves: moveList(["엄습하는일격", "더블윙", "섀도볼", "냉동빔"]),
    tier: "B", recommendedFor: [],
  },
  // #211 침바루
  {
    id: 211, dexNumber: 211, nameKo: "침바루", nameEn: "Qwilfish",
    types: ["물", "독"], ability: "위협", hasHiddenAbility: true,
    moves: moveList(["칼춤", "독찌르기", "아이언롤러", "아쿠아브레이크"]),
    tier: "B", recommendedFor: [383, 484],
  },
  // #215 포푸니
  {
    id: 215, dexNumber: 215, nameKo: "포푸니", nameEn: "Sneasel",
    types: ["악", "얼음"], ability: "날카로운눈",
    moves: moveList(["트리플악셀", "분풀이", "지옥찌르기", "바크아웃"]),
    tier: "A", recommendedFor: [149, 150, 384, 487, 488, 643, 644, 646],
  },
  // #221 메꾸리
  {
    id: 221, dexNumber: 221, nameKo: "메꾸리", nameEn: "Piloswine",
    types: ["얼음", "땅"], ability: "두꺼운지방", hasHiddenAbility: true,
    moves: moveList(["눈보라", "암석봉인", "얼음뭉치", "엄청난힘"]),
    tier: "A", recommendedFor: [144, 145, 149, 384, 487, 643, 644, 646],
  },
  // #224 대포무노
  {
    id: 224, dexNumber: 224, nameKo: "대포무노", nameEn: "Octillery",
    types: ["물"], ability: "스나이퍼",
    moves: moveList(["엄습하는일격", "러스터캐논", "열탕", "애시드봄"]),
    tier: "B", recommendedFor: [146, 250, 383],
  },
  // #226 만타인
  {
    id: 226, dexNumber: 226, nameKo: "만타인", nameEn: "Mantine",
    types: ["물", "비행"], ability: "저수",
    moves: moveList(["에어슬래시", "다이빙", "와이드가드", "물의파동"]),
    tier: "B", recommendedFor: [146, 383, 491],
  },
  // #227 무장조
  {
    id: 227, dexNumber: 227, nameKo: "무장조", nameEn: "Skarmory",
    types: ["강철", "비행"], ability: "깨어진갑옷", hasHiddenAbility: true,
    moves: moveList(["승부굳히기", "강철날개", "시저크로스", "공중날기"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #237 카포에라
  {
    id: 237, dexNumber: 237, nameKo: "카포에라", nameEn: "Hitmontop",
    types: ["격투"], ability: "위협",
    moves: moveList(["드릴라이너", "트리플악셀", "깨트리기", "코칭"]),
    tier: "A", recommendedFor: [144, 380, 381, 488, 643, 644, 646],
  },
  // #241 밀탱크
  {
    id: 241, dexNumber: 241, nameKo: "밀탱크", nameEn: "Miltank",
    types: ["노말"], ability: "배짱",
    moves: moveList(["메가톤킥", "우유마시기", "전기자석파", "치근거리기"]),
    tier: "A", recommendedFor: [],
    notes: "우유마시기 자가회복 + 전기자석파 마비. 장기전 강력.",
  },
  // #253 나무돌이
  {
    id: 253, dexNumber: 253, nameKo: "나무돌이", nameEn: "Grovyle",
    types: ["풀"], ability: "심록",
    moves: moveList(["풀의맹세", "싫은소리", "깨트리기", "버티기"]),
    tier: "C", recommendedFor: [382, 383],
  },
  // #254 나무킹
  {
    id: 254, dexNumber: 254, nameKo: "나무킹", nameEn: "Sceptile",
    types: ["풀"], ability: "곡예", hasHiddenAbility: true,
    moves: moveList(["리프스톰", "시저크로스", "풀의맹세", "와이드브레이커"]),
    tier: "A", recommendedFor: [382, 383, 484, 487],
  },
  // #256 영치코
  {
    id: 256, dexNumber: 256, nameKo: "영치코", nameEn: "Combusken",
    types: ["불꽃", "격투"], ability: "맹화",
    moves: moveList(["불꽃의맹세", "기합구슬", "깃털댄스", "로킥"]),
    tier: "B", recommendedFor: [144, 380, 381, 488],
  },
  // #257 번치코
  {
    id: 257, dexNumber: 257, nameKo: "번치코", nameEn: "Blaziken",
    types: ["불꽃", "격투"], ability: "가속", hasHiddenAbility: true,
    moves: moveList(["인파이트", "코칭", "불꽃의맹세", "블레이즈킥"]),
    tier: "A", recommendedFor: [144, 251, 380, 381, 488],
  },
  // #259 늪짱이
  {
    id: 259, dexNumber: 259, nameKo: "늪짱이", nameEn: "Marshtomp",
    types: ["물", "땅"], ability: "급류",
    moves: moveList(["물의맹세", "폭포오르기", "구멍파기", "냉동펀치"]),
    tier: "B", recommendedFor: [144, 146, 250, 383],
  },
  // #260 대짱이
  {
    id: 260, dexNumber: 260, nameKo: "대짱이", nameEn: "Swampert",
    types: ["물", "땅"], ability: "습기", hasHiddenAbility: true,
    moves: moveList(["물의맹세", "눈보라", "대지의힘", "망각술"]),
    tier: "A", recommendedFor: [144, 146, 250, 382, 383, 491],
  },
  // #264 직구리 (원종)
  {
    id: 264, dexNumber: 264, nameKo: "직구리", nameEn: "Linoone", form: "원종",
    types: ["노말"], ability: "픽업",
    moves: moveList(["베어가르기", "바늘미사일", "초롱초롱눈동자", "섀도클로"]),
    tier: "C", recommendedFor: [],
  },
  // #264 가라르 직구리
  {
    id: 20264, dexNumber: 264, nameKo: "직구리", nameEn: "Linoone", form: "가라르",
    types: ["악", "노말"], ability: "픽업",
    moves: moveList(["지옥찌르기", "바크아웃", "도발", "대타출동"]),
    tier: "B", recommendedFor: [150, 488],
  },
  // #279 패리퍼
  {
    id: 279, dexNumber: 279, nameKo: "패리퍼", nameEn: "Pelipper",
    types: ["물", "비행"], ability: "잔비",
    moves: moveList(["더블윙", "웨더볼", "와이드가드", "전광석화"]),
    tier: "B", recommendedFor: [383, 491],
  },
  // #291 아이스크
  {
    id: 291, dexNumber: 291, nameKo: "아이스크", nameEn: "Ninjask",
    types: ["벌레", "비행"], ability: "가속",
    moves: moveList(["연속자르기", "대타출동", "진흙뿌리기", "엄습하는일격"]),
    tier: "B", recommendedFor: [251, 482, 488],
  },
  // #295 폭음룡
  {
    id: 295, dexNumber: 295, nameKo: "폭음룡", nameEn: "Exploud",
    types: ["노말"], ability: "배짱", hasHiddenAbility: true,
    moves: moveList(["대지의파동", "파괴광선", "기합구슬", "눈보라"]),
    tier: "B", recommendedFor: [149, 384, 643, 644, 646],
  },
  // #305 갱도라
  {
    id: 305, dexNumber: 305, nameKo: "갱도라", nameEn: "Lairon",
    types: ["강철", "바위"], ability: "옹골참",
    moves: moveList(["아이언롤러", "아이언테일", "스톤샤워", "금속음"]),
    tier: "B", recommendedFor: [144, 146, 249, 487, 643],
  },
  // #310 썬더볼트
  {
    id: 310, dexNumber: 310, nameKo: "썬더볼트", nameEn: "Manectric",
    types: ["전기"], ability: "피뢰침",
    moves: moveList(["라이징볼트", "스피드스타", "오버히트", "사이코팽"]),
    tier: "B", recommendedFor: [144, 145, 249, 382, 491],
  },
  // #315 로젤리아
  {
    id: 315, dexNumber: 315, nameKo: "로젤리아", nameEn: "Roselia",
    types: ["풀", "독"], ability: "독가시",
    moves: moveList(["리프스톰", "신통력", "웨더볼", "생명의물방울"]),
    tier: "B", recommendedFor: [382, 383, 484],
  },
  // #319 샤크니아
  {
    id: 319, dexNumber: 319, nameKo: "샤크니아", nameEn: "Sharpedo",
    types: ["물", "악"], ability: "가속", hasHiddenAbility: true,
    moves: moveList(["아쿠아제트", "승부굳히기", "뽐내기", "스케일샷"]),
    tier: "B", recommendedFor: [150, 383, 488],
  },
  // #321 고래왕자
  {
    id: 321, dexNumber: 321, nameKo: "고래왕자", nameEn: "Wailord",
    types: ["물"], ability: "수의베일",
    moves: moveList(["소금물", "아이언롤러", "뛰어오르기", "버티기"]),
    tier: "C", recommendedFor: [383],
  },
  // #324 코터스
  {
    id: 324, dexNumber: 324, nameKo: "코터스", nameEn: "Torkoal",
    types: ["불꽃"], ability: "가뭄",
    moves: moveList(["질투의불꽃", "연옥", "고속스핀", "연막"]),
    tier: "B", recommendedFor: [251, 488],
  },
  // #330 플라이곤
  {
    id: 330, dexNumber: 330, nameKo: "플라이곤", nameEn: "Flygon",
    types: ["땅", "드래곤"], ability: "부유",
    moves: moveList(["강철날개", "드래곤클로", "벌레의야단법석", "진흙뿌리기"]),
    tier: "A", recommendedFor: [144, 145, 249, 384, 487],
  },
  // #334 파비코리
  {
    id: 334, dexNumber: 334, nameKo: "파비코리", nameEn: "Altaria",
    types: ["드래곤", "비행"], ability: "날씨부정", hasHiddenAbility: true,
    moves: moveList(["매지컬샤인", "열풍", "코튼가드", "용의파동"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #340 메깅
  {
    id: 340, dexNumber: 340, nameKo: "메깅", nameEn: "Whiscash",
    types: ["물", "땅"], ability: "촉촉바디", hasHiddenAbility: true,
    moves: moveList(["뛰어오르기", "트림", "탁류", "사념의박치기"]),
    tier: "B", recommendedFor: [144, 250, 491],
  },
  // #342 가재장군
  {
    id: 342, dexNumber: 342, nameKo: "가재장군", nameEn: "Crawdaunt",
    types: ["물", "악"], ability: "적응력", hasHiddenAbility: true,
    moves: moveList(["분풀이", "객기", "탁류", "칼춤"]),
    tier: "B", recommendedFor: [150, 383, 488],
  },
  // #344 점토도리
  {
    id: 344, dexNumber: 344, nameKo: "점토도리", nameEn: "Claydol",
    types: ["땅", "에스퍼"], ability: "부유",
    moves: moveList(["트릭룸", "사이코키네시스", "원시의힘", "파괴광선"]),
    tier: "B", recommendedFor: [144, 250, 642],
  },
  // #345 릴리요
  {
    id: 345, dexNumber: 345, nameKo: "릴리요", nameEn: "Lileep",
    types: ["바위", "풀"], ability: "흡반",
    moves: moveList(["에너지볼", "원시의힘", "위액", "오물폭탄"]),
    tier: "C", recommendedFor: [382, 383],
  },
  // #348 아말도
  {
    id: 348, dexNumber: 348, nameKo: "아말도", nameEn: "Armaldo",
    types: ["바위", "벌레"], ability: "전투무장",
    moves: moveList(["시저크로스", "떨어뜨리기", "분함의발구르기", "모래바람"]),
    tier: "B", recommendedFor: [144, 250, 251],
  },
  // #354 미라몽
  {
    id: 354, dexNumber: 354, nameKo: "미라몽", nameEn: "Banette",
    types: ["고스트"], ability: "프레셔",
    moves: moveList(["중력", "야습", "병상첨병", "엄습하는일격"]),
    tier: "B", recommendedFor: [150, 482, 488],
  },
  // #359 앱솔
  {
    id: 359, dexNumber: 359, nameKo: "앱솔", nameEn: "Absol",
    types: ["악"], ability: "프레셔",
    moves: moveList(["눈보라", "깜짝베기", "베어가르기", "불대문자"]),
    tier: "B", recommendedFor: [150, 251, 384, 487],
  },
  // #362 얼음귀신
  {
    id: 362, dexNumber: 362, nameKo: "얼음귀신", nameEn: "Glalie",
    types: ["얼음"], ability: "아이스바디",
    moves: moveList(["아이언롤러", "깨물어부수기", "얼음엄니", "거짓울음"]),
    tier: "B", recommendedFor: [149, 384, 643, 644, 646],
  },
  // #364 씨레오
  {
    id: 364, dexNumber: 364, nameKo: "씨레오", nameEn: "Sealeo",
    types: ["얼음", "물"], ability: "두꺼운지방",
    moves: moveList(["냉동빔", "소금물", "다이빙", "뽐내기"]),
    tier: "C", recommendedFor: [149, 383, 384],
  },
  // #369 시라칸
  {
    id: 369, dexNumber: 369, nameKo: "시라칸", nameEn: "Relicanth",
    types: ["물", "바위"], ability: "돌머리",
    moves: moveList(["아쿠아브레이크", "양날박치기", "바둥바둥", "스케일샷"]),
    tier: "C", recommendedFor: [146, 250],
  },
  // #375 메탕구
  {
    id: 375, dexNumber: 375, nameKo: "메탕구", nameEn: "Metang",
    types: ["강철", "에스퍼"], ability: "클리어바디",
    moves: moveList(["코멧펀치", "번개펀치", "사이코커터", "리플렉터"]),
    tier: "A", recommendedFor: [149, 380, 381, 384, 487, 643, 644, 646],
  },
  // #405 렌트라
  {
    id: 405, dexNumber: 405, nameKo: "렌트라", nameEn: "Luxray",
    types: ["전기"], ability: "근성", hasHiddenAbility: true,
    moves: moveList(["객기", "빛의장막", "라이징볼트", "일렉트릭필드"]),
    tier: "B", recommendedFor: [144, 145, 382, 491],
  },
  // #416 비퀸
  {
    id: 416, dexNumber: 416, nameKo: "비퀸", nameEn: "Vespiquen",
    types: ["벌레", "비행"], ability: "프레셔",
    moves: moveList(["공격지령", "뽐내기", "더블윙", "리벤지"]),
    tier: "C", recommendedFor: [251, 488],
  },
  // #421 체리꼬
  {
    id: 421, dexNumber: 421, nameKo: "체리꼬", nameEn: "Cherrim",
    types: ["풀"], ability: "플라워기프트",
    moves: moveList(["솔라빔", "고민씨", "쾌청", "웨더볼"]),
    tier: "C", recommendedFor: [382, 383],
  },
  // #423 트리토돈
  {
    id: 423, dexNumber: 423, nameKo: "트리토돈", nameEn: "Gastrodon",
    types: ["물", "땅"], ability: "모래의힘", hasHiddenAbility: true,
    moves: moveList(["누르기", "엄습하는일격", "암석봉인", "폭포오르기"]),
    tier: "B", recommendedFor: [144, 146, 250, 491],
  },
  // #426 둥실라이드
  {
    id: 426, dexNumber: 426, nameKo: "둥실라이드", nameEn: "Drifblim",
    types: ["고스트", "비행"], ability: "유폭",
    moves: moveList(["도깨비불", "사이코키네시스", "순풍", "10만볼트"]),
    tier: "B", recommendedFor: [150, 482, 488],
  },
  // #428 이어롭
  {
    id: 428, dexNumber: 428, nameKo: "이어롭", nameEn: "Lopunny",
    types: ["노말"], ability: "헤롱헤롱바디",
    moves: moveList(["드레인펀치", "메가톤킥", "애교부리기", "뛰어오르기"]),
    tier: "B", recommendedFor: [],
  },
  // #435 스컹탱크
  {
    id: 435, dexNumber: 435, nameKo: "스컹탱크", nameEn: "Skuntank",
    types: ["독", "악"], ability: "유폭",
    moves: moveList(["분풀이", "질투의불꽃", "애시드봄", "기습"]),
    tier: "C", recommendedFor: [150, 488],
  },
  // #437 동탁군
  {
    id: 437, dexNumber: 437, nameKo: "동탁군", nameEn: "Bronzong",
    types: ["강철", "에스퍼"], ability: "부유",
    moves: moveList(["사념의박치기", "금속음", "아이언롤러", "스킬스왑"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #446 먹고자
  {
    id: 446, dexNumber: 446, nameKo: "먹고자", nameEn: "Munchlax",
    types: ["노말"], ability: "두꺼운지방",
    moves: moveList(["번개펀치", "불꽃펀치", "누르기", "더스트슈트"]),
    tier: "B", recommendedFor: [],
  },
  // #452 드래피온
  {
    id: 452, dexNumber: 452, nameKo: "드래피온", nameEn: "Drapion",
    types: ["독", "악"], ability: "전투무장",
    moves: moveList(["분풀이", "시저크로스", "경혈찌르기", "아이언테일"]),
    tier: "B", recommendedFor: [150, 251, 488],
  },
  // #460 눈설왕
  {
    id: 460, dexNumber: 460, nameKo: "눈설왕", nameEn: "Abomasnow",
    types: ["풀", "얼음"], ability: "방음", hasHiddenAbility: true,
    moves: moveList(["눈사태", "오로라베일", "돌림노래", "그래스슬라이더"]),
    tier: "A", recommendedFor: [149, 383, 384, 487, 643, 644, 646],
  },
  // #478 눈여아
  {
    id: 478, dexNumber: 478, nameKo: "눈여아", nameEn: "Froslass",
    types: ["얼음", "고스트"], ability: "눈숨기",
    moves: moveList(["트리플악셀", "얼음숨결", "오로라베일", "섀도볼"]),
    tier: "A", recommendedFor: [149, 150, 384, 487, 488, 643, 644, 646],
  },
  // #479 로토무
  {
    id: 479, dexNumber: 479, nameKo: "로토무", nameEn: "Rotom",
    types: ["전기", "고스트"], ability: "부유",
    moves: moveList(["일렉트릭볼", "도깨비불", "나쁜음모", "병상첨병"]),
    tier: "B", recommendedFor: [144, 145, 150, 382, 488],
  },
  // #508 바랜드
  {
    id: 508, dexNumber: 508, nameKo: "바랜드", nameEn: "Stoutland",
    types: ["노말"], ability: "배짱", hasHiddenAbility: true,
    moves: moveList(["기가임팩트", "객기", "돌림노래", "초롱초롱눈동자"]),
    tier: "B", recommendedFor: [],
  },
  // #510 레파르다스
  {
    id: 510, dexNumber: 510, nameKo: "레파르다스", nameEn: "Liepard",
    types: ["악"], ability: "유연",
    moves: moveList(["승부굳히기", "치근거리기", "트집", "싫은소리"]),
    tier: "C", recommendedFor: [150, 488],
  },
  // #518 몽얌나
  {
    id: 518, dexNumber: 518, nameKo: "몽얌나", nameEn: "Musharna",
    types: ["에스퍼"], ability: "예지몽",
    moves: moveList(["와이드포스", "사이코쇼크", "하품", "에너지볼"]),
    tier: "B", recommendedFor: [380, 381, 384, 488],
  },
  // #521 켄호로우
  {
    id: 521, dexNumber: 521, nameKo: "켄호로우", nameEn: "Unfezant",
    types: ["노말", "비행"], ability: "부풀린가슴",
    moves: moveList(["더블윙", "도발", "깃털댄스", "순풍"]),
    tier: "C", recommendedFor: [251, 488],
  },
  // #526 암트르
  {
    id: 526, dexNumber: 526, nameKo: "암트르", nameEn: "Gigalith",
    types: ["바위"], ability: "옹골참",
    moves: moveList(["스톤에지", "철벽", "바디프레스", "분함의발구르기"]),
    tier: "A", recommendedFor: [144, 146, 249, 250, 642, 643],
  },
  // #528 맘박쥐
  {
    id: 528, dexNumber: 528, nameKo: "맘박쥐", nameEn: "Swoobat",
    types: ["에스퍼", "비행"], ability: "단순", hasHiddenAbility: true,
    moves: moveList(["심플빔", "스피드스왑", "사이코키네시스", "에어슬래시"]),
    tier: "C", recommendedFor: [380, 381, 488],
  },
  // #531 다부니
  {
    id: 531, dexNumber: 531, nameKo: "다부니", nameEn: "Audino",
    types: ["노말"], ability: "치유의마음",
    moves: moveList(["생명의물방울", "드레인키스", "하이퍼보이스", "화염방사"]),
    tier: "A", recommendedFor: [],
    notes: "보조형. 생명의물방울로 파티 지속력 부여 + 페어리 어택.",
  },
  // #534 토쇠골
  {
    id: 534, dexNumber: 534, nameKo: "토쇠골", nameEn: "Conkeldurr",
    types: ["격투"], ability: "근성",
    moves: moveList(["힘껏펀치", "코칭", "깨트리기", "10만마력"]),
    tier: "A", recommendedFor: [144, 380, 381, 488, 643, 644, 646],
  },
  // #536 두까비
  {
    id: 536, dexNumber: 536, nameKo: "두까비", nameEn: "Palpitoad",
    types: ["물", "땅"], ability: "쓱쓱",
    moves: moveList(["에코보이스", "열탕", "대지의힘", "뛰어오르기"]),
    tier: "B", recommendedFor: [144, 250, 383, 491],
  },
  // #537 두빅굴
  {
    id: 537, dexNumber: 537, nameKo: "두빅굴", nameEn: "Seismitoad",
    types: ["물", "땅"], ability: "쓱쓱",
    moves: moveList(["에코보이스", "초음파", "오물폭탄", "싫은소리"]),
    tier: "C", recommendedFor: [144, 250, 383, 491],
    notes: "타입은 강하지만 무브셋이 약함. 가능하면 다른 픽 추천.",
  },
  // #545 펜드라
  {
    id: 545, dexNumber: 545, nameKo: "펜드라", nameEn: "Scolipede",
    types: ["벌레", "독"], ability: "벌레의알림",
    moves: moveList(["아이언롤러", "맹독", "메가혼", "지옥찌르기"]),
    tier: "B", recommendedFor: [150, 251, 488],
  },
  // #547 엘풍
  {
    id: 547, dexNumber: 547, nameKo: "엘풍", nameEn: "Whimsicott",
    types: ["풀", "페어리"], ability: "짓궂은마음",
    moves: moveList(["폭풍", "도발", "에너지볼", "치근거리기"]),
    tier: "A", recommendedFor: [149, 383, 384, 487],
  },
  // #549 드레디어
  {
    id: 549, dexNumber: 549, nameKo: "드레디어", nameEn: "Lilligant",
    types: ["풀"], ability: "마이페이스",
    moves: moveList(["꽃잎댄스", "나비춤", "빛의장막", "꽃가루경단"]),
    tier: "B", recommendedFor: [382, 383, 484],
  },
  // #550 적색근 배쓰나이
  {
    id: 550, dexNumber: 550, nameKo: "배쓰나이", nameEn: "Basculin", form: "적색근",
    types: ["물"], ability: "적응력",
    moves: moveList(["아쿠아브레이크", "다이빙", "사이코팽", "얼음엄니"]),
    tier: "C", recommendedFor: [383],
  },
  // #550 청색근 배쓰나이
  {
    id: 40550, dexNumber: 550, nameKo: "배쓰나이", nameEn: "Basculin", form: "청색근",
    types: ["물"], ability: "적응력",
    moves: moveList(["열탕", "다이빙", "깨물어부수기", "대타출동"]),
    tier: "C", recommendedFor: [383],
  },
  // #553 악비아르
  {
    id: 553, dexNumber: 553, nameKo: "악비아르", nameEn: "Krookodile",
    types: ["땅", "악"], ability: "분노의경혈", hasHiddenAbility: true,
    moves: moveList(["대지의힘", "뽐내기", "DD래리어트", "모래바람"]),
    tier: "A", recommendedFor: [144, 145, 150, 384, 487, 488, 643, 644, 646],
  },
  // #556 마라카치
  {
    id: 556, dexNumber: 556, nameKo: "마라카치", nameEn: "Maractus",
    types: ["풀"], ability: "마중물", hasHiddenAbility: true,
    moves: moveList(["리프스톰", "에너지볼", "기습", "경혈찌르기"]),
    tier: "B", recommendedFor: [382, 383, 484],
  },
  // #558 암팰리스
  {
    id: 558, dexNumber: 558, nameKo: "암팰리스", nameEn: "Crustle",
    types: ["바위", "벌레"], ability: "조가비갑옷",
    moves: moveList(["껍질깨기", "시저크로스", "암석봉인", "바디프레스"]),
    tier: "B", recommendedFor: [144, 146, 251, 642, 643],
  },
  // #561 심보러
  {
    id: 561, dexNumber: 561, nameKo: "심보러", nameEn: "Sigilyph",
    types: ["에스퍼", "비행"], ability: "미라클스킨",
    moves: moveList(["사이코키네시스", "비바라기", "에어슬래시", "러스터캐논"]),
    tier: "B", recommendedFor: [380, 381, 488],
  },
  // #563 데스니칸
  {
    id: 563, dexNumber: 563, nameKo: "데스니칸", nameEn: "Cofagrigus",
    types: ["고스트"], ability: "미라",
    moves: moveList(["섀도볼", "흑안개", "사이코키네시스", "원더룸"]),
    tier: "B", recommendedFor: [150, 482, 488],
  },
  // #569 더스트나 (거다이)
  {
    id: 569, dexNumber: 569, nameKo: "더스트나", nameEn: "Garbodor",
    types: ["독"], ability: "유폭", hasHiddenAbility: true,
    isGigantamax: true,
    moves: moveList(["더스트슈트", "오물폭탄", "드레인펀치", "베놈트랩"]),
    tier: "B", recommendedFor: [149, 384, 487],
  },
  // #573 치라치노
  {
    id: 573, dexNumber: 573, nameKo: "치라치노", nameEn: "Cinccino",
    types: ["노말"], ability: "테크니션",
    moves: moveList(["에코보이스", "스위프뺨치기", "빛의장막", "트리플악셀"]),
    tier: "B", recommendedFor: [149, 384, 487],
  },
  // #584 바닐리치
  {
    id: 584, dexNumber: 584, nameKo: "바닐리치", nameEn: "Vanilluxe",
    types: ["얼음"], ability: "아이스바디",
    moves: moveList(["흰안개", "냉동빔", "눈보라", "하이퍼보이스"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #587 에몽가
  {
    id: 587, dexNumber: 587, nameKo: "에몽가", nameEn: "Emolga",
    types: ["전기", "비행"], ability: "정전기",
    moves: moveList(["애크러뱃", "라이징볼트", "버티기", "일렉트릭네트"]),
    tier: "C", recommendedFor: [144, 145, 382],
  },
  // #589 슈바르고
  {
    id: 589, dexNumber: 589, nameKo: "슈바르고", nameEn: "Escavalier",
    types: ["벌레", "강철"], ability: "조가비갑옷",
    moves: moveList(["드릴라이너", "셸블레이드", "연속자르기", "도발"]),
    tier: "B", recommendedFor: [149, 251, 384, 487, 643, 644, 646],
  },
  // #591 뽀록나
  {
    id: 591, dexNumber: 591, nameKo: "뽀록나", nameEn: "Amoonguss",
    types: ["풀", "독"], ability: "포자",
    moves: moveList(["클리어스모그", "분노가루", "기가드레인", "베놈쇼크"]),
    tier: "B", recommendedFor: [382, 383, 484],
  },
  // #593 탱탱겔
  {
    id: 593, dexNumber: 593, nameKo: "탱탱겔", nameEn: "Jellicent",
    types: ["물", "고스트"], ability: "저수",
    moves: moveList(["매지컬샤인", "다이빙", "트릭룸", "얼어붙은바람"]),
    tier: "B", recommendedFor: [150, 383, 482, 488],
  },
  // #596 전툴라
  {
    id: 596, dexNumber: 596, nameKo: "전툴라", nameEn: "Galvantula",
    types: ["벌레", "전기"], ability: "복안",
    moves: moveList(["번개", "벌레의야단법석", "일렉트릭볼", "일렉트릭네트"]),
    tier: "A", recommendedFor: [144, 145, 249, 251, 382, 491],
  },
  // #600 기기어르
  {
    id: 600, dexNumber: 600, nameKo: "기기어르", nameEn: "Klang",
    types: ["강철"], ability: "마이너스",
    moves: moveList(["차지빔", "라이징볼트", "러스터캐논", "파워젬"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #601 기기기어르
  {
    id: 601, dexNumber: 601, nameKo: "기기기어르", nameEn: "Klinklang",
    types: ["강철"], ability: "플러스",
    moves: moveList(["기어소서", "기어체인지", "기가임팩트", "금속음"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #606 벰크
  {
    id: 606, dexNumber: 606, nameKo: "벰크", nameEn: "Beheeyem",
    types: ["에스퍼"], ability: "싱크로",
    moves: moveList(["와이드포스", "메테오빔", "악의파동", "돌림노래"]),
    tier: "B", recommendedFor: [380, 381, 488],
  },
  // #609 램프라
  {
    id: 609, dexNumber: 609, nameKo: "램프라", nameEn: "Chandelure",
    types: ["고스트", "불꽃"], ability: "타오르는불꽃",
    moves: moveList(["질투의불꽃", "엄습하는일격", "연옥", "트릭룸"]),
    tier: "A", recommendedFor: [150, 251, 482, 488],
  },
  // #612 액슨도
  {
    id: 612, dexNumber: 612, nameKo: "액슨도", nameEn: "Haxorus",
    types: ["드래곤"], ability: "투쟁심",
    moves: moveList(["기가임팩트", "역린", "와이드브레이커", "시저크로스"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644],
  },
  // #614 툰베어
  {
    id: 614, dexNumber: 614, nameKo: "툰베어", nameEn: "Beartic",
    types: ["얼음"], ability: "눈치우기",
    moves: moveList(["바디프레스", "눈보라", "얼음숨결", "소금물"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #615 프리지오
  {
    id: 615, dexNumber: 615, nameKo: "프리지오", nameEn: "Cryogonal",
    types: ["얼음"], ability: "부유",
    moves: moveList(["눈보라", "냉동빔", "리플렉터", "솔라빔"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #617 어지리더
  {
    id: 617, dexNumber: 617, nameKo: "어지리더", nameEn: "Accelgor",
    types: ["벌레"], ability: "촉촉바디",
    moves: moveList(["벌레의저항", "벌레의야단법석", "애시드봄", "비바라기"]),
    tier: "B", recommendedFor: [251, 488],
  },
  // #618 메더 (원종)
  {
    id: 618, dexNumber: 618, nameKo: "메더", nameEn: "Stunfisk", form: "원종",
    types: ["땅", "전기"], ability: "정전기",
    moves: moveList(["일렉트릭필드", "10만볼트", "탁류", "대지의힘"]),
    tier: "B", recommendedFor: [144, 145, 249, 382, 491],
  },
  // #618 가라르 메더
  {
    id: 20618, dexNumber: 618, nameKo: "메더", nameEn: "Stunfisk", form: "가라르",
    types: ["땅", "강철"], ability: "의태",
    moves: moveList(["금속음", "대지의파동", "속임수", "대지의힘"]),
    tier: "B", recommendedFor: [144, 380, 381, 384, 488, 643, 644, 646],
  },
  // #620 비조도
  {
    id: 620, dexNumber: 620, nameKo: "비조도", nameEn: "Mienshao",
    types: ["격투"], ability: "정신력",
    moves: moveList(["파동탄", "와이드가드", "암석봉인", "메가톤킥"]),
    tier: "B", recommendedFor: [144, 488, 643, 644, 646],
  },
  // #621 크리만
  {
    id: 621, dexNumber: 621, nameKo: "크리만", nameEn: "Druddigon",
    types: ["드래곤"], ability: "우격다짐",
    moves: moveList(["더블윙", "구멍파기", "아이언헤드", "분풀이"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #623 골루그
  {
    id: 623, dexNumber: 623, nameKo: "골루그", nameEn: "Golurk",
    types: ["땅", "고스트"], ability: "철주먹",
    moves: moveList(["힘껏펀치", "섀도펀치", "열사의대지", "신비의부적"]),
    tier: "B", recommendedFor: [145, 150, 482, 488],
  },
  // #625 절각참
  {
    id: 625, dexNumber: 625, nameKo: "절각참", nameEn: "Bisharp",
    types: ["악", "강철"], ability: "정신력",
    moves: moveList(["깜짝베기", "독찌르기", "사이코커터", "금속음"]),
    tier: "A", recommendedFor: [149, 150, 380, 381, 384, 487, 488],
  },
  // #626 버프론
  {
    id: 626, dexNumber: 626, nameKo: "버프론", nameEn: "Bouffalant",
    types: ["노말"], ability: "초식",
    moves: moveList(["누르기", "분풀이", "스마트혼", "엄청난힘"]),
    tier: "B", recommendedFor: [382, 487],
  },
  // #631 앤티골
  {
    id: 631, dexNumber: 631, nameKo: "앤티골", nameEn: "Heatmor",
    types: ["불꽃"], ability: "타오르는불꽃",
    moves: moveList(["불꽃채찍", "오버히트", "쾌청", "솔라빔"]),
    tier: "C", recommendedFor: [251, 488],
  },
  // #632 아이앤트
  {
    id: 632, dexNumber: 632, nameKo: "아이앤트", nameEn: "Durant",
    types: ["벌레", "강철"], ability: "벌레의알림",
    moves: moveList(["번개엄니", "시저크로스", "금속음", "메탈클로"]),
    tier: "B", recommendedFor: [149, 251, 384, 487, 643, 644, 646],
  },
  // #660 파르토
  {
    id: 660, dexNumber: 660, nameKo: "파르토", nameEn: "Diggersby",
    types: ["노말", "땅"], ability: "천하장사", hasHiddenAbility: true,
    moves: moveList(["스톤에지", "분함의발구르기", "구멍파기", "전광석화"]),
    tier: "A", recommendedFor: [144, 145, 249, 382, 642, 643, 644],
  },
  // #663 파이어로
  {
    id: 663, dexNumber: 663, nameKo: "파이어로", nameEn: "Talonflame",
    types: ["불꽃", "비행"], ability: "질풍날개", hasHiddenAbility: true,
    moves: moveList(["순풍", "폭풍", "강철날개", "화염방사"]),
    tier: "A", recommendedFor: [251, 488],
  },
  // #675 부란다
  {
    id: 675, dexNumber: 675, nameKo: "부란다", nameEn: "Pangoro",
    types: ["격투", "악"], ability: "철주먹",
    moves: moveList(["불릿펀치", "암해머", "DD래리어트", "코칭"]),
    tier: "A", recommendedFor: [144, 150, 380, 381, 488, 643, 644, 646],
  },
  // #680 쌍검킬
  {
    id: 680, dexNumber: 680, nameKo: "쌍검킬", nameEn: "Doublade",
    types: ["강철", "고스트"], ability: "노가드",
    moves: moveList(["아이언헤드", "칼춤", "성스러운칼", "제비반환"]),
    tier: "A", recommendedFor: [149, 150, 380, 381, 384, 482, 487, 488, 643, 644, 646],
  },
  // #687 칼라마네로
  {
    id: 687, dexNumber: 687, nameKo: "칼라마네로", nameEn: "Malamar",
    types: ["악", "에스퍼"], ability: "심술꾸러기",
    moves: moveList(["뒤집어엎기", "와이드포스", "깜짝베기", "10만볼트"]),
    tier: "A", recommendedFor: [144, 150, 380, 381, 488],
  },
  // #689 거북손데스
  {
    id: 689, dexNumber: 689, nameKo: "거북손데스", nameEn: "Barbaracle",
    types: ["바위", "물"], ability: "단단한발톱",
    moves: moveList(["셸블레이드", "눈보라", "로켓박치기", "독찌르기"]),
    tier: "A", recommendedFor: [144, 146, 149, 250, 384, 487, 642, 643, 644],
  },
  // #695 일레도리자드
  {
    id: 695, dexNumber: 695, nameKo: "일레도리자드", nameEn: "Heliolisk",
    types: ["전기", "노말"], ability: "건조피부",
    moves: moveList(["일렉트릭볼", "고속이동", "돌림노래", "진흙뿌리기"]),
    tier: "B", recommendedFor: [144, 145, 249, 382],
  },
  // #697 견고라스
  {
    id: 697, dexNumber: 697, nameKo: "견고라스", nameEn: "Tyrantrum",
    types: ["바위", "드래곤"], ability: "옹골찬턱",
    moves: moveList(["스케일샷", "록블라스트", "엄청난힘", "누르기"]),
    tier: "A", recommendedFor: [144, 146, 149, 384, 487, 642, 643, 644],
  },
  // #699 아마루르가
  {
    id: 699, dexNumber: 699, nameKo: "아마루르가", nameEn: "Aurorus",
    types: ["바위", "얼음"], ability: "프리즈스킨",
    moves: moveList(["누르기", "번개", "원시의힘", "전기자석파"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #701 루차불
  {
    id: 701, dexNumber: 701, nameKo: "루차불", nameEn: "Hawlucha",
    types: ["격투", "비행"], ability: "유연",
    moves: moveList(["도발", "독찌르기", "지옥찌르기", "로킥"]),
    tier: "B", recommendedFor: [144, 380, 381, 488],
  },
  // #702 데덴네
  {
    id: 702, dexNumber: 702, nameKo: "데덴네", nameEn: "Dedenne",
    types: ["전기", "페어리"], ability: "플러스", hasHiddenAbility: true,
    moves: moveList(["동료만들기", "번개", "매지컬샤인", "대타출동"]),
    tier: "A", recommendedFor: [144, 145, 149, 249, 382, 384, 487, 643, 644, 646],
  },
  // #707 클레피
  {
    id: 707, dexNumber: 707, nameKo: "클레피", nameEn: "Klefki",
    types: ["강철", "페어리"], ability: "짓궂은마음",
    moves: moveList(["빛의장막", "트릭가드", "러스터캐논", "치근거리기"]),
    tier: "S", recommendedFor: [149, 384, 487, 643, 644, 646],
    notes: "장난기(짓궂은마음) + 페어리/강철 STAB. 보조와 어택 양립.",
  },
  // #709 대로트
  {
    id: 709, dexNumber: 709, nameKo: "대로트", nameEn: "Trevenant",
    types: ["고스트", "풀"], ability: "수확", hasHiddenAbility: true,
    moves: moveList(["우드혼", "리플렉터", "드레인펀치", "트릭룸"]),
    tier: "B", recommendedFor: [150, 383, 482, 488],
  },
  // #711 펌킨인
  {
    id: 711, dexNumber: 711, nameKo: "펌킨인", nameEn: "Gourgeist",
    types: ["고스트", "풀"], ability: "픽업",
    moves: moveList(["매지컬플레임", "야습", "고민씨", "겁나는얼굴"]),
    tier: "C", recommendedFor: [150, 482, 488],
  },
  // #737 전지충이
  {
    id: 737, dexNumber: 737, nameKo: "전지충이", nameEn: "Charjabug",
    types: ["벌레", "전기"], ability: "배터리",
    moves: moveList(["실뿜기", "괴전파", "스파크", "구멍파기"]),
    tier: "C", recommendedFor: [144, 145, 249, 382, 491],
  },
  // #738 투구뿌논
  {
    id: 738, dexNumber: 738, nameKo: "투구뿌논", nameEn: "Vikavolt",
    types: ["벌레", "전기"], ability: "부유",
    moves: moveList(["스파크", "진흙뿌리기", "독찌르기", "벌레의야단법석"]),
    tier: "A", recommendedFor: [144, 145, 249, 251, 382, 491],
  },
  // #743 에리본
  {
    id: 743, dexNumber: 743, nameKo: "에리본", nameEn: "Ribombee",
    types: ["벌레", "페어리"], ability: "스위트베일", hasHiddenAbility: true,
    moves: moveList(["드레인키스", "꽃가루경단", "거짓울음", "아로마테라피"]),
    tier: "A", recommendedFor: [149, 251, 384, 487, 643, 644, 646],
  },
  // #745 한낮 루가루암
  {
    id: 745, dexNumber: 745, nameKo: "루가루암", nameEn: "Lycanroc", form: "한낮",
    types: ["바위"], ability: "모래헤치기",
    moves: moveList(["액셀록", "스톤에지", "돌림노래", "멀리짖기"]),
    tier: "B", recommendedFor: [144, 146, 250, 642, 643],
  },
  // #745 한밤 루가루암
  {
    id: 30745, dexNumber: 745, nameKo: "루가루암", nameEn: "Lycanroc", form: "한밤",
    types: ["바위"], ability: "노가드",
    moves: moveList(["스톤에지", "깨트리기", "도발", "깨물어부수기"]),
    tier: "A", recommendedFor: [144, 146, 150, 250, 488, 642, 643],
  },
  // #750 만마드
  {
    id: 750, dexNumber: 750, nameKo: "만마드", nameEn: "Mudsdale",
    types: ["땅"], ability: "마이페이스",
    moves: moveList(["바위깨기", "엄청난힘", "분풀이", "모래지옥"]),
    tier: "B", recommendedFor: [145, 250, 642, 644],
  },
  // #752 깨비물거미
  {
    id: 752, dexNumber: 752, nameKo: "깨비물거미", nameEn: "Araquanid",
    types: ["물", "벌레"], ability: "저수", hasHiddenAbility: true,
    moves: moveList(["아쿠아브레이크", "동료만들기", "덤벼들기", "독찌르기"]),
    tier: "B", recommendedFor: [146, 250, 383, 491],
  },
  // #754 라란티스
  {
    id: 754, dexNumber: 754, nameKo: "라란티스", nameEn: "Lurantis",
    types: ["풀"], ability: "심술꾸러기", hasHiddenAbility: true,
    moves: moveList(["리프스톰", "웨더볼", "시저크로스", "돌림노래"]),
    tier: "B", recommendedFor: [382, 383, 484],
  },
  // #756 마셰이드
  {
    id: 756, dexNumber: 756, nameKo: "마셰이드", nameEn: "Shiinotic",
    types: ["풀", "페어리"], ability: "젖은접시", hasHiddenAbility: true,
    moves: moveList(["힘흡수", "문포스", "비바라기", "웨더볼"]),
    tier: "B", recommendedFor: [149, 383, 384, 487],
  },
  // #758 염뉴트
  {
    id: 758, dexNumber: 758, nameKo: "염뉴트", nameEn: "Salazzle",
    types: ["독", "불꽃"], ability: "부식",
    moves: moveList(["맹독", "화염방사", "크로스포이즌", "베놈트랩"]),
    tier: "B", recommendedFor: [149, 251, 384, 487, 488],
  },
  // #760 이븐곰
  {
    id: 760, dexNumber: 760, nameKo: "이븐곰", nameEn: "Bewear",
    types: ["노말", "격투"], ability: "서투름",
    moves: moveList(["이판사판태클", "초롱초롱눈동자", "보복", "기가임팩트"]),
    tier: "B", recommendedFor: [144, 150, 488],
  },
  // #763 달코퀸
  {
    id: 763, dexNumber: 763, nameKo: "달코퀸", nameEn: "Tsareena",
    types: ["풀"], ability: "여왕의위엄",
    moves: moveList(["아로마테라피", "트로피컬킥", "애크러뱃", "뽐내기"]),
    tier: "B", recommendedFor: [382, 383, 484],
  },
  // #764 큐아링
  {
    id: 764, dexNumber: 764, nameKo: "큐아링", nameEn: "Comfey",
    types: ["페어리"], ability: "힐링시프트",
    moves: moveList(["플라워힐", "드레인키스", "당신먼저", "에너지볼"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644, 646],
    notes: "치유 + 페어리 어택. 보조 + 어태커 겸직.",
  },
  // #765 하랑우탄
  {
    id: 765, dexNumber: 765, nameKo: "하랑우탄", nameEn: "Oranguru",
    types: ["노말", "에스퍼"], ability: "공생", hasHiddenAbility: true,
    moves: moveList(["지휘", "빛의장막", "사이코키네시스", "사이코쇼크"]),
    tier: "B", recommendedFor: [380, 381, 488],
  },
  // #766 내던숭이
  {
    id: 766, dexNumber: 766, nameKo: "내던숭이", nameEn: "Passimian",
    types: ["격투"], ability: "리시버",
    moves: moveList(["깨트리기", "암석봉인", "대타출동", "애크러뱃"]),
    tier: "B", recommendedFor: [144, 380, 381, 488, 643, 644, 646],
  },
  // #770 모래성이당
  {
    id: 770, dexNumber: 770, nameKo: "모래성이당", nameEn: "Palossand",
    types: ["고스트", "땅"], ability: "모래숨기", hasHiddenAbility: true,
    moves: moveList(["대지의파동", "열사의대지", "모래모으기", "섀도볼"]),
    tier: "B", recommendedFor: [145, 150, 250, 482, 488, 642],
  },
  // #771 해무기
  {
    id: 771, dexNumber: 771, nameKo: "해무기", nameEn: "Pyukumuku",
    types: ["물"], ability: "내용물분출",
    moves: moveList(["맹독", "도발", "베놈트랩", "카운터"]),
    tier: "C", recommendedFor: [],
  },
  // #777 토게데마루
  {
    id: 777, dexNumber: 777, nameKo: "토게데마루", nameEn: "Togedemaru",
    types: ["전기", "강철"], ability: "옹골참", hasHiddenAbility: true,
    moves: moveList(["볼부비부비", "독찌르기", "일렉트릭네트", "아이언헤드"]),
    tier: "B", recommendedFor: [144, 145, 249, 382, 487],
  },
  // #778 따라큐
  {
    id: 778, dexNumber: 778, nameKo: "따라큐", nameEn: "Mimikyu",
    types: ["고스트", "페어리"], ability: "탈",
    moves: moveList(["초롱초롱눈동자", "섀도클로", "베어가르기", "저주"]),
    tier: "A", recommendedFor: [149, 150, 384, 482, 487, 488, 643, 644, 646],
  },
  // #779 요씽리스
  {
    id: 779, dexNumber: 779, nameKo: "요씽리스", nameEn: "Bruxish",
    types: ["물", "에스퍼"], ability: "볼주머니",
    moves: moveList(["자이로볼", "사이코팽", "칼춤", "누르기"]),
    tier: "B", recommendedFor: [380, 381, 488],
  },
  // #781 이올브 (거다이)
  {
    id: 781, dexNumber: 781, nameKo: "이올브", nameEn: "Dhelmise",
    types: ["고스트", "풀"], ability: "벌레의알림",
    moves: moveList(["벌레의저항", "당신먼저", "사이코키네시스", "환상빔"]),
    tier: "B", recommendedFor: [150, 250, 482, 488],
  },
  // #820 배우르
  {
    id: 820, dexNumber: 820, nameKo: "배우르", nameEn: "Greedent",
    types: ["노말"], ability: "복슬복슬",
    moves: moveList(["그래스슬라이더", "메가톤킥", "바디프레스", "대타출동"]),
    tier: "B", recommendedFor: [],
  },
  // #828 폭슬라이
  {
    id: 828, dexNumber: 828, nameKo: "폭슬라이", nameEn: "Thievul",
    types: ["악"], ability: "곡예",
    moves: moveList(["속임수", "바크아웃", "도발", "질투의불꽃"]),
    tier: "C", recommendedFor: [150, 488],
  },
  // #830 백솜모카
  {
    id: 830, dexNumber: 830, nameKo: "백솜모카", nameEn: "Eldegoss",
    types: ["풀"], ability: "포자", hasHiddenAbility: true,
    moves: moveList(["빛의장막", "웨더볼", "코튼가드", "리프스톰"]),
    tier: "B", recommendedFor: [382, 383, 484],
  },
  // #834 갈가부기
  {
    id: 834, dexNumber: 834, nameKo: "갈가부기", nameEn: "Drednaw",
    types: ["물", "바위"], ability: "옹골찬턱",
    moves: moveList(["셸블레이드", "엄습하는일격", "스마트혼", "스톤샤워"]),
    tier: "B", recommendedFor: [144, 146, 250, 384, 642, 643],
  },
  // #836 펄스멍
  {
    id: 836, dexNumber: 836, nameKo: "펄스멍", nameEn: "Boltund",
    types: ["전기"], ability: "옹골찬턱",
    moves: moveList(["라이징볼트", "깨물어부수기", "애교부리기", "도우미"]),
    tier: "B", recommendedFor: [144, 145, 249, 382, 491],
  },
  // #838 탄차곤
  {
    id: 838, dexNumber: 838, nameKo: "탄차곤", nameEn: "Carkol",
    types: ["바위", "불꽃"], ability: "타오르는불꽃", hasHiddenAbility: true,
    moves: moveList(["오버히트", "회오리불꽃", "리플렉터", "스톤샤워"]),
    tier: "B", recommendedFor: [144, 146, 251, 642, 643],
  },
  // #839 석탄산 (거다이)
  {
    id: 839, dexNumber: 839, nameKo: "석탄산", nameEn: "Coalossal",
    types: ["바위", "불꽃"], ability: "증기기관", isGigantamax: true,
    moves: moveList(["연막", "메테오빔", "화염방사", "열탕"]),
    tier: "A", recommendedFor: [144, 146, 250, 251, 642, 643],
  },
  // #844 사다이사 (거다이)
  {
    id: 844, dexNumber: 844, nameKo: "사다이사", nameEn: "Sandaconda",
    types: ["땅"], ability: "모래뿜기", isGigantamax: true,
    moves: moveList(["뱀눈초리", "스케일샷", "엄습하는일격", "열사의대지"]),
    tier: "B", recommendedFor: [145, 250, 642, 644],
  },
  // #845 윽우지
  {
    id: 845, dexNumber: 845, nameKo: "윽우지", nameEn: "Cramorant",
    types: ["비행", "물"], ability: "그대로꿀꺽미사일",
    moves: moveList(["다이빙", "버티기", "망각술", "지옥찌르기"]),
    tier: "B", recommendedFor: [383, 488, 491],
  },
  // #846 꼬치조
  {
    id: 846, dexNumber: 846, nameKo: "꼬치조", nameEn: "Arrokuda",
    types: ["물"], ability: "쓱쓱",
    moves: moveList(["아쿠아제트", "스케일샷", "승부굳히기", "버티기"]),
    tier: "C", recommendedFor: [383],
  },
  // #849 스트린더 (거다이)
  {
    id: 849, dexNumber: 849, nameKo: "스트린더", nameEn: "Toxtricity",
    types: ["전기", "독"], ability: "플러스", isGigantamax: true,
    moves: moveList(["라이징볼트", "전기자석파", "하이퍼보이스", "눈물그렁그렁"]),
    tier: "A", recommendedFor: [144, 145, 149, 249, 382, 384, 487, 491, 643],
  },
  // #851 다태우지네 (거다이)
  {
    id: 851, dexNumber: 851, nameKo: "다태우지네", nameEn: "Centiskorch",
    types: ["불꽃", "벌레"], ability: "하얀연기", isGigantamax: true,
    moves: moveList(["화염방사", "열사의대지", "베놈쇼크", "힘껏치기"]),
    tier: "A", recommendedFor: [149, 251, 384, 487],
  },
  // #853 케오퍼스
  {
    id: 853, dexNumber: 853, nameKo: "케오퍼스", nameEn: "Grapploct",
    types: ["격투"], ability: "유연",
    moves: moveList(["뒤집어엎기", "드레인펀치", "탁류", "기합구슬"]),
    tier: "B", recommendedFor: [144, 380, 381, 488, 643, 644, 646],
  },
  // #855 포트데스
  {
    id: 855, dexNumber: 855, nameKo: "포트데스", nameEn: "Polteageist",
    types: ["고스트"], ability: "깨어진갑옷",
    moves: moveList(["아로마테라피", "기습", "사이코쇼크", "기가드레인"]),
    tier: "B", recommendedFor: [150, 482, 488],
  },
  // #858 브리무음 (거다이)
  {
    id: 858, dexNumber: 858, nameKo: "브리무음", nameEn: "Hatterene",
    types: ["에스퍼", "페어리"], ability: "위험예지", isGigantamax: true,
    moves: moveList(["와이드포스", "치근거리기", "생명의물방울", "신비의부적"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #861 오롱털 (거다이)
  {
    id: 861, dexNumber: 861, nameKo: "오롱털", nameEn: "Grimmsnarl",
    types: ["악", "페어리"], ability: "짓궂은마음", isGigantamax: true,
    moves: moveList(["그로우펀치", "비밀이야기", "악의파동", "파워스왑"]),
    tier: "A", recommendedFor: [149, 150, 384, 487, 488, 643, 644, 646],
  },
  // #862 가로막구리
  {
    id: 862, dexNumber: 862, nameKo: "가로막구리", nameEn: "Obstagoon",
    types: ["악", "노말"], ability: "이판사판",
    moves: moveList(["분풀이", "10만볼트", "객기", "싫은소리"]),
    tier: "B", recommendedFor: [150, 488],
  },
  // #863 나이킹
  {
    id: 863, dexNumber: 863, nameKo: "나이킹", nameEn: "Perrserker",
    types: ["강철"], ability: "강철정신", hasHiddenAbility: true,
    moves: moveList(["메탈클로", "망각술", "분풀이", "번개"]),
    tier: "B", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #869 마휘핑 (거다이)
  {
    id: 869, dexNumber: 869, nameKo: "마휘핑", nameEn: "Alcremie",
    types: ["페어리"], ability: "아로마베일", hasHiddenAbility: true,
    isGigantamax: true,
    moves: moveList(["데코레이션", "매지컬샤인", "매지컬플레임", "매지컬리프"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644, 646],
    notes: "거다이 시 막스스위트로 파티 회복. 보조+페어리 어택.",
  },
  // #870 대여르
  {
    id: 870, dexNumber: 870, nameKo: "대여르", nameEn: "Falinks",
    types: ["격투"], ability: "전투무장",
    moves: moveList(["만나자마자", "스마트혼", "깨트리기", "칼춤"]),
    tier: "A", recommendedFor: [144, 380, 381, 488, 643, 644, 646],
  },
  // #871 찌르성게
  {
    id: 871, dexNumber: 871, nameKo: "찌르성게", nameEn: "Pincurchin",
    types: ["전기"], ability: "일렉트릭메이커", hasHiddenAbility: true,
    moves: moveList(["하이드로펌프", "번개", "경혈찌르기", "베놈트랩"]),
    tier: "B", recommendedFor: [144, 145, 249, 382, 491],
  },
  // #873 모스노우
  {
    id: 873, dexNumber: 873, nameKo: "모스노우", nameEn: "Frosmoth",
    types: ["얼음", "벌레"], ability: "얼음인분", hasHiddenAbility: true,
    moves: moveList(["웨더볼", "순풍", "벌레의저항", "폭풍"]),
    tier: "B", recommendedFor: [149, 251, 384, 487, 643, 644, 646],
  },
  // #876 에써르 (수컷)
  {
    id: 876, dexNumber: 876, nameKo: "에써르", nameEn: "Indeedee", form: "수컷",
    types: ["에스퍼", "노말"], ability: "싱크로",
    moves: moveList(["매지컬플레임", "와이드포스", "명상", "섀도볼"]),
    tier: "B", recommendedFor: [149, 380, 381, 384, 488],
  },
  // #877 모르페코
  {
    id: 877, dexNumber: 877, nameKo: "모르페코", nameEn: "Morpeko",
    types: ["전기", "악"], ability: "꼬르륵스위치",
    moves: moveList(["오라휠", "악의파동", "10만볼트", "얼음엄니"]),
    tier: "A", recommendedFor: [144, 145, 150, 249, 382, 488, 491],
  },
  // #879 대왕끼리동
  {
    id: 879, dexNumber: 879, nameKo: "대왕끼리동", nameEn: "Copperajah",
    types: ["강철"], ability: "우격다짐",
    moves: moveList(["철벽", "바디프레스", "러스터캐논", "아이언롤러"]),
    tier: "A", recommendedFor: [149, 384, 487, 643, 644, 646],
  },
  // #884 두랄루돈 (거다이)
  {
    id: 884, dexNumber: 884, nameKo: "두랄루돈", nameEn: "Duraludon",
    types: ["강철", "드래곤"], ability: "라이트메탈", isGigantamax: true,
    moves: moveList(["와이드브레이커", "전기자석파", "아이언헤드", "10만볼트"]),
    tier: "S", recommendedFor: [144, 145, 149, 249, 384, 487, 643, 644, 646],
    notes: "강철/드래곤 + 막스기술 변환 우수. 거다이 시 막스와이엄.",
  },
  // #887 드래런치
  {
    id: 887, dexNumber: 887, nameKo: "드래런치", nameEn: "Dragapult",
    types: ["드래곤", "고스트"], ability: "클리어바디",
    moves: moveList(["섀도볼", "도깨비불", "드래곤다이브", "승부굳히기"]),
    tier: "A", recommendedFor: [149, 150, 384, 482, 487, 488, 643, 644, 646],
  },
];

export function getRentalById(id: number): RentalPokemon | undefined {
  return RENTALS.find((r) => r.id === id);
}

export function getRentalsForLegendary(legendaryId: number): RentalPokemon[] {
  return RENTALS.filter((r) => r.recommendedFor.includes(legendaryId));
}
