import { chessBoardStart } from "../Data/chessBoardStart"
import { positionsChangedStart } from "../Data/positionsChangedStart";

export const reset = ({setChessBoardState, setIsWhitesTurn, setIsWhiteCheckmated, setIsBlackCheckmated, setHasPositionChanged}) => {
  setChessBoardState(structuredClone(chessBoardStart));
  setHasPositionChanged(structuredClone(positionsChangedStart));
  setIsWhitesTurn(true);
  setIsWhiteCheckmated(false);
  setIsBlackCheckmated(false);
}