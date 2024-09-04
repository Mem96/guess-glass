import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const gameStartedAtom = atom<boolean>(false);
export const hiddenBallAtom = atom<boolean>(false);
export const hasWonAtom = atom<boolean | undefined>(undefined);
export const isMovingAtom = atom<boolean>(false);
