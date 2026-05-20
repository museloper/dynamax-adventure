import Link from "next/link";
import type { RentalPokemon } from "@/lib/types";
import { TierBadge } from "./TierBadge";
import { TypeBadgeList } from "./TypeBadge";
import { PokemonSprite } from "./PokemonSprite";
import { GigantamaxIcon } from "./GigantamaxIcon";

export function RentalCard({ rental }: { rental: RentalPokemon }) {
  return (
    <Link
      href={`/rentals/${rental.id}`}
      className="block group rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 hover:border-amber-400/60 hover:bg-[color:var(--surface-2)] transition-colors"
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-20 h-20 rounded-lg bg-[color:var(--surface-2)] flex items-center justify-center overflow-hidden relative">
          <PokemonSprite dexNumber={rental.dexNumber} name={rental.nameKo} size={80} rentalId={rental.id} isGigantamax={rental.isGigantamax} />
          {rental.isGigantamax && (
            <span
              title="거다이맥스 가능"
              className="absolute -top-1.5 -right-1.5 rounded-full bg-black/70 p-0.5 shadow ring-1 ring-white/30"
            >
              <GigantamaxIcon size={22} />
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-bold text-base truncate">
              {rental.nameKo}
              {rental.form && (
                <span className="ml-1 text-xs text-sky-300 font-normal">[{rental.form}]</span>
              )}
              <span className="ml-2 text-xs text-gray-400 font-mono">
                #{String(rental.dexNumber).padStart(3, "0")}
              </span>
            </h3>
            <TierBadge tier={rental.tier} size="sm" />
          </div>
          <div className="mb-1.5">
            <TypeBadgeList types={rental.types} />
          </div>
          <div className="text-[11px] text-gray-400 mb-1">
            특성:{" "}
            <span className="text-amber-200 font-semibold">
              {rental.hasHiddenAbility && <span className="text-fuchsia-300">※</span>}
              {rental.ability}
            </span>
          </div>
          {rental.notes && (
            <p className="text-xs text-gray-300 line-clamp-2">{rental.notes}</p>
          )}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {rental.moves.map((m) => (
          <span
            key={m.nameKo}
            className="text-[11px] px-2 py-0.5 rounded-md border border-[color:var(--border)] text-gray-300"
          >
            {m.nameKo}
          </span>
        ))}
      </div>
    </Link>
  );
}
