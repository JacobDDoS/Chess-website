import { chessBoardStart } from "../Data/chessBoardStart"

export const reset = ({setChessBoardState, setIsWhitesTurn, setIsWhiteCheckmated, setIsBlackCheckmated}) => {
  setChessBoardState(structuredClone(chessBoardStart));
  setIsWhitesTurn(true);
  setIsWhiteCheckmated(false);
  setIsBlackCheckmated(false);
}