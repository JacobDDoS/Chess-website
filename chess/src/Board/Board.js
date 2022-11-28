import React, { useContext, useEffect, useState } from 'react'
import { chessBoardContext } from '../App'
import { findPossibleMovements } from '../chessFunctions/findPossibleMovements'
import { addMove } from '../helpers/addMove'
import { canPlayerMove } from '../helpers/canPlayerMove'
import { convertChessPositionToRowCol } from '../helpers/convertChessPositionToRowCol'
import { convertColRowToChessPosition } from '../helpers/convertColRowToChessPosition'
import { handlePromotion } from '../helpers/handlePromotion'
import { invertRow } from '../helpers/invertRow'
import { isInCheck } from '../helpers/isInCheck'
import { isInCheckmate } from '../helpers/isInCheckmate'

import "./board.css"

const Board = ({isWhitesTurn, setIsWhitesTurn, setIsWhiteCheckmated, 
  setIsBlackCheckmated, hasPositionChanged, setHasPositionChanged, previousMoveArray, setPreviousMoveArray, setIsStalemate,
  moves, setMoves}) => {
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
    //And all the spots it can move to
    clearBoardOfClass("selectedPosition");
    setPositionsSelectedPieceCanMoveTo([]);

    if (selectedPosition) {
      // console.log("selectedPosition: " + selectedPosition);
      document.getElementById(selectedPosition).classList.add("selectedPosition");

      setPositionsSelectedPieceCanMoveTo(findPossibleMovements(chessBoardState, selectedPosition, previousMoveArray, isWhitesTurn ? "white" : "black", hasPositionChanged));
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
    if (isInCheckmate(chessBoardState, isWhitesTurn ? "white" : "black", previousMoveArray)) {
      if (isWhitesTurn) {
        setIsWhiteCheckmated(true);
      } else {
        setIsBlackCheckmated(true);
      }
    } else if (canPlayerMove(chessBoardState, isWhitesTurn ? "white" : "black", previousMoveArray)) {
      setIsStalemate(true);
    }
  }, [isWhitesTurn])


  //For when a reset occurs, set the state of the board
  useEffect(()=>{
    setChessBoardState(startingChessBoardState);
  },[startingChessBoardState])

  const [isWhiteInCheck, whiteKingChessPosition] = isInCheck(chessBoardState, "white", previousMoveArray);
  if (isWhiteInCheck) {
    document.getElementById(whiteKingChessPosition).classList.add("check");
  } else {
    //Remove check CSS if it is not in check
    clearBoardOfClass("check")
  }

  const [isBlackInCheck, blackKingChessPosition] = isInCheck(chessBoardState, "black", previousMoveArray);
  if (isBlackInCheck) {
    document.getElementById(blackKingChessPosition).classList.add("check");
  } else if (!isWhiteInCheck) {
    //Remove check CSS if it is not in check
    clearBoardOfClass("check");
  }

  return (
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
                                    const copyOfPositionState = hasPositionChanged;

                                    
                                    //Move piece
                                    const copy = chessBoardState[prevRow][prevCol];
                                    const stateOfBoard = structuredClone(chessBoardState);
                                    const didPieceTakeAnotherPiece = stateOfBoard[rowIdx][colIdx] === 0 ? false : true;
                                    stateOfBoard[prevRow][prevCol] = 0;
                                    stateOfBoard[rowIdx][colIdx] = copy;

                                    //Set movement in previousMoveArray
                                    const currentMove = [];
                                    for (let i=0;i<8;i++) {
                                      const row = [];
                                      for (let j=0;j<8;j++) {
                                        row.push(0);
                                      }
                                      currentMove.push(row);
                                    }

                                    currentMove[prevRow][prevCol] = 1;
                                    currentMove[rowIdx][colIdx] = 2;

                                    setPreviousMoveArray(currentMove);

                                    //See if movement is with a pawn and requires a promotion
                                    if (copy.id.endsWith("Pawn") && (rowIdx===0||rowIdx===7)) {
                                      handlePromotion(stateOfBoard, rowIdx, colIdx);
                                    } 

                                    //See if movement was En passent, if so remove the piece the pawn below it
                                    if (copy.id.endsWith("Pawn") && colIdx-prevCol !== 0 && chessBoardState[rowIdx][colIdx] === 0) {
                                      stateOfBoard[rowIdx+ (copy.color==="white" ? 1 : -1)][colIdx] = 0;
                                    }

                                    //See if movement was castling, if so move rook as needed
                                    if (copy.id.endsWith("King")) {
                                      //See if it moved two right
                                      if (colIdx-2 === prevCol) {
                                        //Castled right, so put rook to left
                                        const copyOfRook = chessBoardState[rowIdx][7];
                                        stateOfBoard[rowIdx][7] = 0;
                                        stateOfBoard[rowIdx][colIdx-1] = copyOfRook;
                                        copyOfPositionState[prevRow][7] = 1;
                                      } else if (colIdx+2 === prevCol) {
                                        //Castled left, so put rook to right
                                        const copyOfRook = chessBoardState[rowIdx][0];
                                        stateOfBoard[rowIdx][0] = 0;
                                        stateOfBoard[rowIdx][colIdx+1] = copyOfRook;
                                        copyOfPositionState[prevRow][0] = 1;
                                      }
                                    }

                                    //Record movement (used for castling and potential future statistics)
                                    copyOfPositionState[prevRow][prevCol] = 1;
                                    copyOfPositionState[rowIdx][colIdx] = 1;
                                    setHasPositionChanged(copyOfPositionState);

                                    setSelectedPosition("");
                                    setIsWhitesTurn(!isWhitesTurn);
                                    setChessBoardState([...stateOfBoard]);
                                    setMoves([...moves, addMove(stateOfBoard, prevRow, prevCol, rowIdx, colIdx, didPieceTakeAnotherPiece, isWhitesTurn ? "black" : "white", previousMoveArray)]);
                                  }
                                  else if (piece && piece.color === (isWhitesTurn ? "white" : "black")) {setSelectedPosition(convertColRowToChessPosition(colIdx, invertRow(rowIdx)));}
                                  else {setSelectedPosition("")}
                                }}
                    >
                      <span></span>
                      {
                        //Display Piece
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
  )
}

export default Board