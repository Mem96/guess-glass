import { useAtomValue } from "jotai";
import { gameStartedAtom } from "../atoms/GameAtoms";

export const wait = () => {
  return new Promise((res) => setTimeout(res, 1000));
};

const chooseOneToMove = () => {
  return Math.floor(Math.random() * 3);
};
const choosePositionToMove = () => {
  return Math.floor(Math.random() * 3);
};

export const moveOne = (
  positionsArray: number[],
  setPositonsArray: (arr: number[]) => void
) => {
  const chosenToMove = chooseOneToMove();
  const chosenPosition = choosePositionToMove();

  if (chosenToMove !== chosenPosition) {
    console.log(chosenPosition, chosenToMove);
    const positionsArrayCopy = [...positionsArray];
    const moving = positionsArrayCopy[chosenToMove];
    positionsArrayCopy[chosenToMove] = positionsArrayCopy[chosenPosition];
    positionsArrayCopy[chosenPosition] = moving;
    setPositonsArray(positionsArrayCopy);
  } else {
    moveOne(positionsArray, setPositonsArray);
  }
  return [chosenToMove, chosenPosition];
};

export async function moveAround(
  nTimes: number,
  positionsArray: number[],
  setPositonsArray: (arr: number[]) => void
) {
  let n = nTimes;
  let previousMovement = [0, 0];
  while (n > 0) {
    let movementSpecs = moveOne(positionsArray, setPositonsArray);
    // if (!canMove) {
    //   n = 0;
    //   console.log("game stopped", canMove);
    //   return;
    // }
    if (
      !(
        movementSpecs.includes(previousMovement[0]) &&
        movementSpecs.includes(previousMovement[1])
      )
    ) {
      console.log("previous movement", previousMovement);
      console.log("current movement", movementSpecs);
      console.log("passed", n);
      console.log("can move");
      n = n - 1;
      previousMovement = movementSpecs;
      await wait();
    }
  }
}
