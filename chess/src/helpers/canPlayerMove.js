import { findPossibleMovements } from "../chessFunctions/findPossibleMovements";
import { convertColRowToChessPosition } from "./convertColRowToChessPosition";
import { invertRow } from "./invertRow";

//Looks oddly familiar to isInCheckmate.js hmmmm....
export const canPlayerMove = (board, colorToCheck, previousMoveArray) => {
  //Find position of King
  let rowOfKing, colOfKing;
  for (let i=0;i<8;i++) {
    const currentRow = board[i];
    for (let j=0;j<8;j++) {
        if (currentRow[j] !== 0 && currentRow[j].id.endsWith("King") && currentRow[j].color === colorToCheck) {
            rowOfKing = i;
            colOfKing = j;
        }
    }
  }

  const allPositionsPlayerCanMoveTo = [];

  //Iterate over board, adding potential places current player can move to
  for (let i=0;i<8;i++) {
    const currentRow = board[i];
    for (let j=0;j<8;j++) {
        const piece = currentRow[j];
        if (piece && piece.color === colorToCheck) {
            const pieceCanMoveTo = [...findPossibleMovements(board, convertColRowToChessPosition(j, invertRow(i)), previousMoveArray, colorToCheck)];
            if (pieceCanMoveTo.length > 0) {
                allPositionsPlayerCanMoveTo.push(...pieceCanMoveTo);
            }
        }
    }
  }

  return (allPositionsPlayerCanMoveTo.length === 0);

}
