import React, { useEffect, useState } from "react";
import Board from "./Board/Board.js"
import { chessBoardStart } from "./Data/chessBoardStart";
import { positionsChangedStart } from "./Data/positionsChangedStart.js";
import { reset } from "./helpers/reset.js";
import { previousMoveArrayStart } from "./Data/previousMoveArrayStart.js";

import './app.css'

export const chessBoardContext = React.createContext();

function App() {
  const [chessBoardState, setChessBoardState] = useState(structuredClone(chessBoardStart));
  const [isWhitesTurn, setIsWhitesTurn] = useState(true);
  const [isWhiteCheckmated, setIsWhiteCheckmated] = useState(false);
  const [isBlackCheckmated, setIsBlackCheckmated] = useState(false);
  const [isStalemate, setIsStalemate] = useState(false);
  const [hasPositionChanged, setHasPositionChanged] = useState(structuredClone(positionsChangedStart));
  const [previousMoveArray, setPreviousMoveArray] = useState(structuredClone(previousMoveArrayStart));
  const [moves, setMoves] = useState([]);

  return <div id="main-container">
    <chessBoardContext.Provider value={chessBoardState}>
      <Board isWhitesTurn={isWhitesTurn} setIsWhitesTurn={setIsWhitesTurn} setIsWhiteCheckmated={setIsWhiteCheckmated} setIsBlackCheckmated={setIsBlackCheckmated}
              hasPositionChanged={hasPositionChanged} setHasPositionChanged={setHasPositionChanged} previousMoveArray={previousMoveArray} 
              setPreviousMoveArray={setPreviousMoveArray} setIsStalemate={setIsStalemate} moves={moves} setMoves={setMoves}
      />
    </chessBoardContext.Provider>
    <div id="move-container">
      <div>
      <h2>♙</h2>
      {
        moves.map((move, idx) => {
          if (!(idx&1)) {
            return <b className="move" key={`move-${idx}`}>{move}</b>
          }
        }) 
      }
      </div>
      <div>
      <h2>♟︎</h2>
      {
        moves.map((move, idx) => {
          if (idx&1) {
            return <b className="move" key={`move-${idx}`}>{move}</b>
          }
        }) 
      }
      </div>
    </div>
    <div className={`reset-container ${isWhiteCheckmated || isBlackCheckmated || isStalemate ? null : "invisible" }`}>
    {
      isWhiteCheckmated || isBlackCheckmated || isStalemate ? <button onClick={()=>
        reset({setChessBoardState, setIsWhitesTurn, setIsWhiteCheckmated, setIsBlackCheckmated, setHasPositionChanged, setPreviousMoveArray, setIsStalemate, setMoves})
      }
      className="button-22">Reset</button> : null
    }
    </div>
  </div>;
}

export default App;
