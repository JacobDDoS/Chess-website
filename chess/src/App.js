import React, { useEffect, useState } from "react";
import Board from "./Board/Board.js"
import { chessBoardStart } from "./Data/chessBoardStart";
import { positionsChangedStart } from "./Data/positionsChangedStart.js";
import { reset } from "./helpers/reset.js";

export const chessBoardContext = React.createContext();

function App() {
  const [chessBoardState, setChessBoardState] = useState(structuredClone(chessBoardStart));
  const [isWhitesTurn, setIsWhitesTurn] = useState(true);
  const [isWhiteCheckmated, setIsWhiteCheckmated] = useState(false);
  const [isBlackCheckmated, setIsBlackCheckmated] = useState(false);
  const [hasPositionChanged, setHasPositionChanged] = useState(structuredClone(positionsChangedStart));


  return <>
    <div>
      <h1>This is App!</h1>
    </div>
    <chessBoardContext.Provider value={chessBoardState}>
      <Board isWhitesTurn={isWhitesTurn} setIsWhitesTurn={setIsWhitesTurn} setIsWhiteCheckmated={setIsWhiteCheckmated} setIsBlackCheckmated={setIsBlackCheckmated}
              hasPositionChanged={hasPositionChanged} setHasPositionChanged={setHasPositionChanged}
      />
    </chessBoardContext.Provider>
    {
      isWhiteCheckmated || isBlackCheckmated ? <button onClick={()=>reset({setChessBoardState, setIsWhitesTurn, setIsWhiteCheckmated, setIsBlackCheckmated, setHasPositionChanged})}>Reset</button> : null
    }
  </>;
}

export default App;
