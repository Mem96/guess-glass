import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  gameStartedAtom,
  hasWonAtom,
  hiddenBallAtom,
  isMovingAtom,
  playedGamesAtom,
  wonGamesAtom,
} from "../atoms/GameAtoms";
import { moveAround } from "../functions";
import Glass from "./Glass";
import Statistics from "./Statistics";

const Page = () => {
  const [isFirstGame, setIsFirstGame] = useState(true);

  const [positions, setPositions] = useState([-1, 0, 1]);
  const [gameStarted, setGameStarted] = useAtom(gameStartedAtom);
  const [hiddenBall, setHiddenBall] = useAtom(hiddenBallAtom);
  const [hasWon, setHasWon] = useAtom(hasWonAtom);
  const [isMoving, setIsMoving] = useAtom(isMovingAtom);

  const startGame = async () => {
    setIsFirstGame(false);
    setHasWon(undefined);
    setGameStarted(true);
    setHiddenBall(true);
    setIsMoving(true);
    await moveAround(3, positions, setPositions);
    setIsMoving(false);
  };

  return (
    <div className="flex flex-col w-full h-[80vh] align-center justify-space-between relative">
      <h1 className="mb-10">Guess the glass</h1>
      <h2
        className={clsx(
          twMerge(
            "min-h-[45px]",
            isFirstGame && "opacity-0",
            (isMoving || hasWon === undefined) && "text-[rgb(164,135,183)]"
          )
        )}
      >
        {isMoving
          ? "Wait..."
          : hasWon
          ? "You win!"
          : hasWon === undefined
          ? "Choose one!"
          : "Nope... Try again"}
      </h2>
      <Statistics />
      <div
        className="w-[300px] h-[200px] flex items-center justify-center m-auto rounded-md"
        style={{
          backgroundImage: "url(./assets/wood.jpg)",
          backgroundPosition: "50%",
          backgroundSize: "101% auto",
        }}
      >
        <div className="flex gap-3 my-4 w-10 h-12 ">
          <Glass pos={positions[0]} className="" />
          <Glass pos={positions[1]} className="" hasBall />
          <Glass pos={positions[2]} className="" />
        </div>
      </div>
      <button
        onClick={() => {
          if (!gameStarted) {
            startGame();
          }
        }}
        className={clsx(twMerge("mt-auto"))}
        disabled={gameStarted}
      >
        {hasWon === undefined ? "Start" : "Restart"}
      </button>
    </div>
  );
};

export default Page;
