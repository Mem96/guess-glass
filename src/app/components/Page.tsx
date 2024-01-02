import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  gameStartedAtom,
  hasWonAtom,
  hiddenBallAtom,
  isMovingAtom,
} from "../atoms/GameAtoms";
import { moveAround } from "../functions";
import Glass from "./Glass";

const Page = () => {
  const [positions, setPositions] = useState([-1, 0, 1]);
  const [gameStarted, setGameStarted] = useAtom(gameStartedAtom);
  const [hiddenBall, setHiddenBall] = useAtom(hiddenBallAtom);
  const [hasWon, setHasWon] = useAtom(hasWonAtom);
  const [isMoving, setIsMoving] = useAtom(isMovingAtom);

  const startGame = async () => {
    setHasWon(undefined);
    setGameStarted(true);
    setHiddenBall(true);
    setIsMoving(true);
    await moveAround(3, positions, setPositions);
    setIsMoving(false);
  };

  const stopGame = () => {
    setGameStarted(false);
    setHiddenBall(false);
  };

  return (
    <div className="flex flex-col w-full h-[80vh] align-center justify-space-between">
      <h1 className="mb-10">Guess the glass</h1>
      <h2
        className={clsx(
          twMerge("min-h-[45px]", hasWon === undefined && "opacity-0")
        )}
      >
        {hasWon ? "You win!" : hasWon === undefined ? "" : "Nope... Try again"}
      </h2>
      <div
        className="w-[300px] h-[200px] flex items-center justify-center m-auto bg-contain rounded-md"
        style={{ backgroundImage: "url(./assets/wood.jpg)" }}
      >
        <div className="flex gap-3 my-4 w-10 h-12 bg-green-200">
          <Glass pos={positions[0]} className="bg-green-200" />
          <Glass pos={positions[1]} className="bg-blue-200" hasBall />
          <Glass pos={positions[2]} className="bg-red-200" />
        </div>
      </div>
      <button
        onClick={!gameStarted ? startGame : stopGame}
        className={clsx(twMerge("mt-auto"))}
      >
        {gameStarted ? "Stop" : hasWon === undefined ? "Start" : "Restart"}
      </button>
    </div>
  );
};

export default Page;
