import { chessBoardStart } from "../Data/chessBoardStart"
import { positionsChangedStart } from "../Data/positionsChangedStart";
import { previousMoveArrayStart } from "../Data/previousMoveArrayStart";

export const reset = ({setChessBoardState, setIsWhitesTurn, setIsWhiteCheckmated, setIsBlackCheckmated, setHasPositionChanged, setPreviousMoveArray}) => {
  setChessBoardState(structuredClone(chessBoardStart));
  setHasPositionChanged(structuredClone(positionsChangedStart));
  setPreviousMoveArray(structuredClone(previousMoveArrayStart))
  setIsWhitesTurn(true);
  setIsWhiteCheckmated(false);
  setIsBlackCheckmated(false);
}