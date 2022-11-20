import { bishopMovement } from "../Bishop/bishopMovement";
import { rookMovement } from "../Rook/rookMovement";

export const queenMovement = (board, col, row, colorOfEnemy) => {
    const positionsItCanGoTo = [];

    //Move like a bishop
    const positionsItCanGoToDiagonally = bishopMovement(board, col, row, colorOfEnemy);

    //Move like a rook
    const positionsItCanGoToHorizontally = rookMovement(board, col, row, colorOfEnemy);

    positionsItCanGoToDiagonally.forEach((position)=>positionsItCanGoTo.push(position));
    positionsItCanGoToHorizontally.forEach((position)=>positionsItCanGoTo.push(position));
    return positionsItCanGoTo;
}