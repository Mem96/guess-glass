import { atomWithStorage } from "jotai/utils";

export const playedGamesAtom = atomWithStorage("played", 0);
export const wonGamesAtom = atomWithStorage("won", 0);
