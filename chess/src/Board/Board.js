import React, { useContext, useEffect, useState } from 'react'
import { chessBoardContext } from '../App'
import { findPossibleMovements } from '../chessFunctions/findPossibleMovements'
import { whitePawnMovement } from '../chessFunctions/whitePawnMovement'
import { convertColRowToChessPosition } from '../helpers/convertColRowToChessPosition'
import { invertRow } from '../helpers/invertRow'

import "./board.css"

const Board = () => {
  const startingChessBoardState = useContext(chessBoardContext);
  const [selectedPosition, setSelectedPosition] = useState();
  const [chessBoardState, setChessBoardState] = useState(startingChessBoardState);
  const [positionsSelectedPieceCanMoveTo, setPositionsSelectedPieceCanMoveTo] = useState([]);

  const clearBoardOfClass = (className) => {
    const alpha = "abcdefgh"
    for (let i=0;i<8;i++) {
      for (let j=1;j<=8;j++) {
        const key = alpha[i] + j;
        if (document.getElementById(key) && document.getElementById(key).classList.contains(className)) {
          document.getElementById(key).classList.remove(className);
        }
      }
    }
  }

  useEffect(()=>{
    //Remove selectedPosition from previously selectedPosition if it exists
    clearBoardOfClass("selectedPosition");
    
    if (selectedPosition) {
      // console.log("selectedPosition: " + selectedPosition);
      document.getElementById(selectedPosition).classList.add("selectedPosition");

      setPositionsSelectedPieceCanMoveTo(findPossibleMovements(chessBoardState, selectedPosition));
    }
  }, [selectedPosition])


  useEffect(()=>{
    //Clear previous positions
    clearBoardOfClass("canMoveTo");

    if (positionsSelectedPieceCanMoveTo && positionsSelectedPieceCanMoveTo.length > 0) {
      for (let i=0;i<positionsSelectedPieceCanMoveTo.length;i++) {
        const position = positionsSelectedPieceCanMoveTo[i];
        // console.log("position it can move to: " + position);
        document.getElementById(position).classList.add("canMoveTo");
      }
    }
  }, [positionsSelectedPieceCanMoveTo])

  // console.log(chessBoardState);
  return (
    <div>
        <h2>Chess Board:</h2>
        <div id="board">
          {
            chessBoardState.map((row, rowIdx)=> {
              return <div className='row'>
                {
                  row.map((piece, colIdx) => {
                    return <span className={`piece ${(rowIdx+colIdx)%2===0 ? 'white' : 'black'}`} id={`${convertColRowToChessPosition(colIdx, invertRow(rowIdx))}`}
                      onClick={()=> {
                        if (piece) {setSelectedPosition(convertColRowToChessPosition(colIdx, invertRow(rowIdx)));}
                        else {setSelectedPosition("")}
                      }}
                    >
                      <span></span>
                      {
                        //Display Pawn
                        piece && piece.id.endsWith("Pawn") ? <div className='chess-piece'>{piece.color === "white" ? <>♙</> : <>♟︎</>}</div> : 
                        piece && piece.id.endsWith("Rook") ? <div className='chess-piece'>{piece.color === "white" ? <>♖</> : <>♜</>}</div> : 
                        piece && piece.id.endsWith("Queen") ? <div className='chess-piece'>{piece.color === "white" ? <>♕</> : <>♛</>}</div> : 
                        piece && piece.id.endsWith("Knight") ? <div className='chess-piece'>{piece.color === "white" ? <>♘</> : <>♞</>}</div> : 
                        piece && piece.id.endsWith("Bishop") ? <div className='chess-piece'>{piece.color === "white" ? <>♗</> : <>♝</>}</div> : 
                        piece && piece.id.endsWith("King") ? <div className='chess-piece'>{piece.color === "white" ? <>♔</> : <>♚</>}</div> : null
                      }
                    </span>
                  })
                }
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Board