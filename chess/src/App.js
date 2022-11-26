import React, { useState } from "react";
import Board from "./Board/Board.js"
import { chessBoardStart } from "./Data/chessBoardStart";

export const chessBoardContext = React.createContext();

function App() {
  const [chessBoardState, setChessBoardState] = useState(chessBoardStart);
  const [isWhitesTurn, setIsWhitesTurn] = useState(true);
  return <>
    <div>
      <h1>This is App!</h1>
    </div>
    <chessBoardContext.Provider value={chessBoardState}>
      <Board isWhitesTurn={isWhitesTurn} setIsWhitesTurn={setIsWhitesTurn}/>
    </chessBoardContext.Provider>
    
  </>;
}

export default App;
