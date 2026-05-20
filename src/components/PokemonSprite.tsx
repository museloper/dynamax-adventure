import Image from "next/image";

// PokéAPI home sprite IDs for Gigantamax forms (rental dexNumber → PokéAPI gmax form ID)
const GMAX_IDS: Record<number, number> = {
  12: 10198,  // Butterfree
  99: 10203,  // Kingler
  569: 10207, // Garbodor
  839: 10215, // Coalossal
  844: 10218, // Sandaconda
  849: 10219, // Toxtricity (Amped)
  851: 10220, // Centiskorch
  858: 10221, // Hatterene
  861: 10222, // Grimmsnarl
  869: 10223, // Alcremie
  884: 10225, // Duraludon
};

// PokéAPI official-artwork IDs for form variants (our rental ID → PokéAPI form ID)
const FORM_IDS: Record<number, number> = {
  10026: 10100, // Alolan Raichu
  10028: 10102, // Alolan Sandslash
  10051: 10106, // Alolan Dugtrio
  10053: 10108, // Alolan Persian
  10105: 10115, // Alolan Marowak
  20110: 10167, // Galarian Weezing
  20122: 10168, // Galarian Mr. Mime
  20264: 10175, // Galarian Linoone
  20618: 10180, // Galarian Stunfisk
  30745: 10126, // Midnight Lycanroc
  40550: 10016, // Blue-Striped Basculin
};

const BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export function PokemonSprite({
  dexNumber,
  name,
  size = 96,
  rentalId,
  isGigantamax = false,
}: {
  dexNumber: number;
  name: string;
  size?: number;
  rentalId?: number;
  isGigantamax?: boolean;
}) {
  const gmaxId = isGigantamax ? GMAX_IDS[dexNumber] : undefined;
  const formId = rentalId != null ? FORM_IDS[rentalId] : undefined;

  const src = gmaxId
    ? `${BASE}/other/home/${gmaxId}.png`
    : `${BASE}/other/official-artwork/${formId ?? dexNumber}.png`;

  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      className="object-contain drop-shadow-lg"
      unoptimized
    />
  );
}
