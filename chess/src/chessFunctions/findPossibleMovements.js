import { convertChessPositionToRowCol } from "../helpers/convertChessPositionToRowCol"
import { convertColRowToChessPosition } from "../helpers/convertColRowToChessPosition";
import { invertRow } from "../helpers/invertRow";
import { knightMovement, whiteKnightMovement } from "./Knight/knightMovement";
import { blackPawnMovement } from "./Pawn/blackPawnMovement";
import { whitePawnMovement } from "./Pawn/whitePawnMovement";

const getMovementsFromRawPositions = (rawPositions) => {
    const movements = [];
    for (let i=0;i<rawPositions.length;i++) {
        movements.push(convertColRowToChessPosition(rawPositions[i][1], invertRow(rawPositions[i][0])));
    }
    return movements;
}

export const findPossibleMovements = (board, position) => {
    const [col, row] = convertChessPositionToRowCol(position);
    const pieceAtThatPosition = board[invertRow(row)][col-1];
    // console.log(pieceAtThatPosition);


    //Logic for different pieces
    let possibleChessPositions = [];
    if (pieceAtThatPosition && pieceAtThatPosition.id.endsWith("Pawn")) {
        if (pieceAtThatPosition.color === "white") {
            //White Pawn
            const rawPositions = whitePawnMovement(board, col-1, invertRow(row));
            possibleChessPositions = getMovementsFromRawPositions(rawPositions);
        } else {
            //Black Pawn
            const rawPositions = blackPawnMovement(board, col-1, invertRow(row));
            possibleChessPositions = getMovementsFromRawPositions(rawPositions);
        }
    } else if (pieceAtThatPosition && pieceAtThatPosition.id.endsWith("Knight")) {
        if (pieceAtThatPosition.color === "white") {
            const rawPositions = knightMovement(board, col-1, invertRow(row), "black");
            possibleChessPositions = getMovementsFromRawPositions(rawPositions);
        } else {
            const rawPositions = knightMovement(board, col-1, invertRow(row), "white");
            possibleChessPositions = getMovementsFromRawPositions(rawPositions);
        }
    }


    // console.log(possibleChessPositions);
    return possibleChessPositions;
}