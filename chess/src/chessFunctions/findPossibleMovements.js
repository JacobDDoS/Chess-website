import { convertChessPositionToRowCol } from "../helpers/convertChessPositionToRowCol"
import { convertColRowToChessPosition } from "../helpers/convertColRowToChessPosition";
import { invertRow } from "../helpers/invertRow";
import { bishopMovement } from "./Bishop/bishopMovement";
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
    const pieceAtThatPosition = board[row][col-1];
    let rawPositions = [];

    //Logic for different pieces
    if (pieceAtThatPosition && pieceAtThatPosition.id.endsWith("Pawn")) {
        
        //Pawns
        if (pieceAtThatPosition.color === "white") {
            rawPositions = whitePawnMovement(board, col-1, row);
        } else {
            rawPositions = blackPawnMovement(board, col-1, row);
        }

    } 
    else if (pieceAtThatPosition && pieceAtThatPosition.id.endsWith("Knight")) {

        //Knights
        if (pieceAtThatPosition.color === "white") {
            rawPositions = knightMovement(board, col-1, row, "black");
        } else {
            rawPositions = knightMovement(board, col-1, row, "white");
        }

    } 
    else if (pieceAtThatPosition && pieceAtThatPosition.id.endsWith("Bishop")) {

        //Bishops
        if (pieceAtThatPosition.color === "white") {
            rawPositions = bishopMovement(board, col-1, row, "black");
        } else {
            rawPositions = bishopMovement(board, col-1, row, "white");
        }

    }

    return getMovementsFromRawPositions(rawPositions);
}