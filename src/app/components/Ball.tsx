import { useAtomValue } from "jotai";
import { gameStartedAtom, hiddenBallAtom } from "../atoms/GameAtoms";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const Ball = () => {
  const hiddenBall = useAtomValue(hiddenBallAtom);
  return (
    <div className="relative w-10 h-14">
      <div
        className={clsx(
          twMerge(
            "bg-white shadow-inner shadow-stone-400 w-8 h-8 rounded-full z-40 absolute -bottom-10 left-1/2 -translate-x-1/2 transition-all",
            hiddenBall && "opacity-0 -translate-y-12"
          )
        )}
      />
    </div>
  );
};
