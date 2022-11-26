import { isInCheck } from "../../helpers/isInCheck";

export const kingMovement = (board, col, row, colorOfEnemy, hasPositionChanged) => {
    const positionsItCanGoTo = [];
    //Diagonals:

    //Check up 1 and left 1
    if (row-1 >= 0 && col-1 >= 0 && (board[row-1][col-1] === 0 || board[row-1][col-1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row-1, col-1]);
    }
    //Check up 1 and right 1
    if (row-1 >= 0 && col+1 <= 7 && (board[row-1][col+1] === 0 || board[row-1][col+1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row-1, col+1]);
    }

    //Check down 1 and left 1
    if (row+1 <= 7 && col-1 >= 0 && (board[row+1][col-1] === 0 || board[row+1][col-1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row+1, col-1]);
    }
    //Check down 1 and right 1
    if (row+1 <= 7 && col+1 <= 7 && (board[row+1][col+1] === 0 || board[row+1][col+1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row+1, col+1]);
    }


    //Horizontal/Vertical
    
    //Check up 1
    if (row-1>=0 && (board[row-1][col] === 0 || board[row-1][col].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row-1, col]);
    }

    //Check right 1
    if (col+1<=7 && (board[row][col+1] === 0 || board[row][col+1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row, col+1]);
    }

    //Check down 1
    if (row+1<=7 && (board[row+1][col] === 0 || board[row+1][col].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row+1, col]);
    }

    //Check left 1
    if (col-1>=0 && (board[row][col-1] === 0 || board[row][col-1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row, col-1]);
    }


    //Castling
    //Make sure king hasn't moved
    if (hasPositionChanged.length > 0 && hasPositionChanged[row][col] === 0) {
        //Check left 2 (ensure rook hasn't moved & no enemy pieces threaten the two next to the king, including the king)
        if (hasPositionChanged[row][0] === 0) {
            let isGood = true;

            //See if anything is to its left
            if (board[row][col-1] !== 0) {
                isGood = false;
            }
            //See if anything is to its left 2 spaces
            if (board[row][col-2] !== 0) {
                isGood = false;
            }

            //See if king is in check
            if (isInCheck(board, colorOfEnemy === "white" ? "black" : "white")[0]) {
                isGood = false;
            } 

            //Check left one
            const copyOfBoard = structuredClone(board);
            const copyOfKing = copyOfBoard[row][col];
            copyOfBoard[row][col] = 0;
            copyOfBoard[row][col-1] = copyOfKing;
            if (isInCheck(copyOfBoard, colorOfEnemy === "white" ? "black" : "white")[0]) {
                isGood = false;
            } 

            //Check left two
            copyOfBoard[row][col-1] = 0;
            copyOfBoard[row][col-2] = copyOfKing;
            if (isInCheck(copyOfBoard, colorOfEnemy === "white" ? "black" : "white")[0]) {
                isGood = false;
            }

            if (isGood) {
                positionsItCanGoTo.push([row, col-2]);
            }

        }

        //Check right 2 (ensure rook hasn't moved & no enemy pieces threaten the two next to the king, including the king)
        if (hasPositionChanged[row][7] === 0) {
            let isGood = true;

            //See if anything is to its right
            if (board[row][col+1] !== 0) {
                isGood = false;
            }
            //See if anything is to its right 2 spaces
            if (board[row][col+2] !== 0) {
                isGood = false;
            }

            //See if king is in check
            if (isInCheck(board, colorOfEnemy === "white" ? "black" : "white")[0]) {
                isGood = false;
            } 

            //Check right one
            const copyOfBoard = structuredClone(board);
            const copyOfKing = copyOfBoard[row][col];
            copyOfBoard[row][col] = 0;
            copyOfBoard[row][col+1] = copyOfKing;
            if (isInCheck(copyOfBoard, colorOfEnemy === "white" ? "black" : "white")[0]) {
                isGood = false;
            } 

            //Check right two 
            copyOfBoard[row][col+1] = 0;
            copyOfBoard[row][col+2] = copyOfKing;
            if (isInCheck(copyOfBoard, colorOfEnemy === "white" ? "black" : "white")[0]) {
                isGood = false;
            }

            if (isGood) {
                positionsItCanGoTo.push([row, col+2]);
            }

        }
    }
    

    return positionsItCanGoTo;
}