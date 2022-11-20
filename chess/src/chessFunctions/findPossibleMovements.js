import { convertChessPositionToRowCol } from "../helpers/convertChessPositionToRowCol"
import { convertColRowToChessPosition } from "../helpers/convertColRowToChessPosition";
import { blackPawnMovement } from "./blackPawnMovement";
import { whitePawnMovement } from "./whitePawnMovement";

export const findPossibleMovements = (board, position) => {
    const [col, row] = convertChessPositionToRowCol(position);
    const pieceAtThatPosition = board[8-row][col-1];
    // console.log(pieceAtThatPosition);


    //Logic for different pieces
    const possibleChessPositions = [];
    if (pieceAtThatPosition && pieceAtThatPosition.id.endsWith("Pawn")) {
        if (pieceAtThatPosition.color === "white") {
            //White Pawn
            const rawPositions = whitePawnMovement(board, col-1, 8-row);
            for (let i=0;i<rawPositions.length;i++) {
                possibleChessPositions.push(convertColRowToChessPosition(rawPositions[i][1], 8-rawPositions[i][0]));
            }
        } else {
            //Black Pawn
            const rawPositions = blackPawnMovement(board, col-1, 8-row);
            for (let i=0;i<rawPositions.length;i++) {
                // console.log("rawPosition: " + rawPositions[i]);
                possibleChessPositions.push(convertColRowToChessPosition(rawPositions[i][1], 8-rawPositions[i][0]));
            }
        }
    }


    // console.log(possibleChessPositions);
    return possibleChessPositions;
}