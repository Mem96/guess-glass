import React from "react";
import { twMerge } from "../../../node_modules/tailwind-merge/dist/index";
import { Ball } from "./Ball";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  gameStartedAtom,
  hasWonAtom,
  hiddenBallAtom,
  playedGamesAtom,
  wonGamesAtom,
} from "../atoms/GameAtoms";

const Glass = ({
  pos,
  className,
  hasBall,
}: {
  pos?: number;
  className?: string;
  hasBall?: boolean;
}) => {
  const [gameStarted, setGameStarted] = useAtom(gameStartedAtom);
  const [hiddenBall, setHiddenBall] = useAtom(hiddenBallAtom);

  const setPlayedGames = useSetAtom(playedGamesAtom);
  const setWon = useSetAtom(hasWonAtom);
  const setWonCount = useSetAtom(wonGamesAtom);

  return (
    <div
      className={twMerge(
        "z-10 w-10 h-12 absolute transition-transform duration-500 cursor-pointer",
        className
      )}
      style={{ transform: `translateX(calc(100% * ${pos} + 4px * ${pos}))` }}
      onClick={() => {
        if (gameStarted && hiddenBall) {
          setHiddenBall(false);
          setPlayedGames((p) => p + 1);
          if (hasBall) {
            setWon(true);
            setWonCount((p) => p + 1);
          } else {
            setWon(false);
          }
          setGameStarted(false);
        }
      }}
    >
      <div className="z-10 w-10 h-12 absolute top-0 left-0 bg-red-700 rounded-full" />
      <div className="z-[5] w-10 bg-red-700 h-10 absolute border-solid border-[2px] border-red-900 rounded-full -bottom-3"></div>
      <div className="absolute z-20 w-[34px] h-[30px] bg-red-900 rounded-full translate-x-[3px] translate-y-[3px]" />
      {hasBall && <Ball />}
    </div>
  );
};

export default Glass;
