import { useAtomValue } from "jotai";
import { playedGamesAtom, wonGamesAtom } from "../atoms/StatisticsAtoms";

const Statistics = () => {
  const gamesPlayed = useAtomValue(playedGamesAtom);
  const gamesWon = useAtomValue(wonGamesAtom);

  return (
    <div className="absolute top-4 right-4 w-fit p-3 text-right bg-purple-700 rounded-md border-white border-[1px]">
      <p className="white-text">
        <b>Games played:</b> {gamesPlayed}
      </p>
      <p className="white-text">You won {gamesWon} games.</p>
    </div>
  );
};

export default Statistics;
