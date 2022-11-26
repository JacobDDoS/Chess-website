import React, { useContext, useEffect, useState } from 'react'
import { chessBoardContext } from '../App'
import { findPossibleMovements } from '../chessFunctions/findPossibleMovements'
import { convertChessPositionToRowCol } from '../helpers/convertChessPositionToRowCol'
import { convertColRowToChessPosition } from '../helpers/convertColRowToChessPosition'
import { invertRow } from '../helpers/invertRow'
import { isInCheck } from '../helpers/isInCheck'
import { isInCheckmate } from '../helpers/isInCheckmate'

import "./board.css"

const Board = ({isWhitesTurn, setIsWhitesTurn, setIsWhiteCheckmated, setIsBlackCheckmated}) => {
  const startingChessBoardState = useContext(chessBoardContext);
  const [selectedPosition, setSelectedPosition] = useState();
  const [chessBoardState, setChessBoardState] = useState(startingChessBoardState);
  const [positionsSelectedPieceCanMoveTo, setPositionsSelectedPieceCanMoveTo] = useState([]);

  console.log(chessBoardState)

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
    //And all the spots it can move to
    clearBoardOfClass("selectedPosition");
    setPositionsSelectedPieceCanMoveTo([]);

    if (selectedPosition) {
      // console.log("selectedPosition: " + selectedPosition);
      document.getElementById(selectedPosition).classList.add("selectedPosition");

      setPositionsSelectedPieceCanMoveTo(findPossibleMovements(chessBoardState, selectedPosition, isWhitesTurn ? "white" : "black"));
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


  useEffect(()=>{
    //End of turn

    //Check if player is in checkmate
    if (isInCheckmate(chessBoardState, isWhitesTurn ? "white" : "black")) {
      if (isWhitesTurn) {
        setIsWhiteCheckmated(true);
      } else {
        setIsBlackCheckmated(true);
      }
    }
  }, [isWhitesTurn])


  useEffect(()=>{
    setChessBoardState(startingChessBoardState);
  },[startingChessBoardState])

  const [isWhiteInCheck, whiteKingChessPosition] = isInCheck(chessBoardState, "white");
  if (isWhiteInCheck) {
    document.getElementById(whiteKingChessPosition).classList.add("check");
  } else {
    //Remove check CSS if it is not in check
    const whiteKing = document.getElementById(whiteKingChessPosition)
    if (whiteKing && whiteKing.classList.contains("check")) {
      whiteKing.classList.remove("check");
    }
  }

  const [isBlackInCheck, blackKingChessPosition] = isInCheck(chessBoardState, "black");
  if (isBlackInCheck) {
    document.getElementById(blackKingChessPosition).classList.add("check");
  } else {
    //Remove check CSS if it is not in check
    const blackKing = document.getElementById(blackKingChessPosition);
    if (blackKing && blackKing.classList.contains("check")) {
      blackKing.classList.remove("check");
    }
  }

  return (
    <div>
        <h2>Chess Board:</h2>
        <div id="board">
          {
            chessBoardState.map((row, rowIdx)=> {
              return <div className='row' key={rowIdx}>
                {
                  row.map((piece, colIdx) => {
                    return <span 
                                className={`piece ${(rowIdx+colIdx)%2===0 ? 'white' : 'black'}`} 
                                id={`${convertColRowToChessPosition(colIdx, invertRow(rowIdx))}`}
                                key={`${convertColRowToChessPosition(colIdx, invertRow(rowIdx))}`}
                                onClick={()=> {
                                  //Check if it is a spot a piece can move
                                  const posToCheckFor = positionsSelectedPieceCanMoveTo;
                                  const chessPos = convertColRowToChessPosition(colIdx, invertRow(rowIdx));
                                  if (posToCheckFor.includes(chessPos)) {
                                    const [prevCol, prevRow] = convertChessPositionToRowCol(selectedPosition);
                                    // console.log("selectedPosition: " + selectedPosition + " row, col: " + prevRow + ", " + prevCol)
                                    //Check if it is a valid move - TO DO LATER

                                    //Move piece
                                    const copy = chessBoardState[prevRow][prevCol];
                                    const stateOfBoard = chessBoardState;
                                    stateOfBoard[prevRow][prevCol] = 0;
                                    stateOfBoard[rowIdx][colIdx] = copy;

                                    setSelectedPosition("");
                                    setIsWhitesTurn(!isWhitesTurn);
                                    setChessBoardState([...stateOfBoard]);
                                    
                                  }
                                  else if (piece && piece.color === (isWhitesTurn ? "white" : "black")) {setSelectedPosition(convertColRowToChessPosition(colIdx, invertRow(rowIdx)));}
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