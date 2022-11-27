import { findPossibleMovements } from "../chessFunctions/findPossibleMovements";
import { convertColRowToChessPosition } from "./convertColRowToChessPosition";
import { invertRow } from "./invertRow";

export const isInCheck = (board, colorOfKingToCheck, previousMoveArray) => {
  //Find position of King
  let rowOfKing, colOfKing;
  for (let i=0;i<8;i++) {
    const currentRow = board[i];
    for (let j=0;j<8;j++) {
        if (currentRow[j] !== 0 && currentRow[j].id.endsWith("King") && currentRow[j].color === colorOfKingToCheck) {
            rowOfKing = i;
            colOfKing = j;
        }
    }
  }

  const chessPositionOfKing = convertColRowToChessPosition(colOfKing, invertRow(rowOfKing));
  const allPositionsEnemyCanMoveTo = [];

  //Iterate over board, adding potential places enemy can move to
  for (let i=0;i<8;i++) {
    const currentRow = board[i];
    for (let j=0;j<8;j++) {
        const piece = currentRow[j];
        if (piece && piece.color !== colorOfKingToCheck) {
            const pieceCanMoveTo = [...findPossibleMovements(board, convertColRowToChessPosition(j, invertRow(i)), previousMoveArray)];
            if (pieceCanMoveTo.length > 0) {
                allPositionsEnemyCanMoveTo.push(...pieceCanMoveTo);
            }
        }
    }
  }

  return [allPositionsEnemyCanMoveTo.includes(chessPositionOfKing), chessPositionOfKing];

}
