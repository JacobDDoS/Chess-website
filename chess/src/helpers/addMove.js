import { convertColRowToChessPosition } from "./convertColRowToChessPosition";
import { invertRow } from "./invertRow";
import { isInCheck } from "./isInCheck";
import { isInCheckmate } from "./isInCheckmate";

export const addMove = (stateOfBoard, prevRow, prevCol, newRow, newCol, didPieceTakeAnotherPiece, color, previousMoveArray) => {
  const pieceThatMoved = stateOfBoard[newRow][newCol];
  let move = "";
  const previousChessPosition = convertColRowToChessPosition(prevCol, invertRow(prevRow));
  const newChessPosition = convertColRowToChessPosition(newCol, invertRow(newRow));
  if (pieceThatMoved.id.endsWith("Pawn")) {
    move += previousChessPosition[0];
    if (previousChessPosition[0] === newChessPosition[0]) {
        move += newChessPosition[1];
    } else {
        move += "x" + newChessPosition;
    }
  } else if (pieceThatMoved.id.endsWith("King")) {
    //Check if castled
    if (newCol - prevCol > 1) {
        move += "O-O";
    } else if (prevCol - newCol > 1) {
        move += "O-O-O";
    } else {
        move += "K" + (didPieceTakeAnotherPiece ? "x" : "");
        move += newChessPosition;
    }
  } else if (pieceThatMoved.id.endsWith("Queen")) {
    move += "Q" + (didPieceTakeAnotherPiece ? "x" : "");
    move += newChessPosition;
  } else if (pieceThatMoved.id.endsWith("Bishop")) {
    move += "B" + (didPieceTakeAnotherPiece ? "x" : "");
    move += newChessPosition;
  } else if (pieceThatMoved.id.endsWith("Rook")) {
    move += "R" + (didPieceTakeAnotherPiece ? "x" : "");
    move += newChessPosition;
  } else if (pieceThatMoved.id.endsWith("Knight")) {
    move += "N" + (didPieceTakeAnotherPiece ? "x" : "");
    move += newChessPosition;
  }

  //Look for checkmate and check
  if (isInCheckmate(stateOfBoard, color, previousMoveArray)) {
    move += "#";
  } else if (isInCheck(stateOfBoard, color, previousMoveArray)[0]) {
    move += "+";
  }

  return move;
}
