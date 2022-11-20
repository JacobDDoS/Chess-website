export const knightMovement = (board, col, row, colorOfEnemy) => {
    const positionsItCanGoTo = [];

    //Check up 2 and left 1
    if (row-2 >= 0 && col-1 >= 0 && (board[row-2][col-1] === 0 || board[row-2][col-1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row-2, col-1]);
    }
    //Check up 2 and right 1
    if (row-2 >= 0 && col+1 <= 7 && (board[row-2][col+1] === 0 || board[row-2][col+1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row-2, col+1]);
    }

    //Check left 2 and up 1
    if (row-1 >= 0 && col-2 >= 0 && (board[row-1][col-2] === 0 || board[row-1][col-2].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row-1, col-2]);
    }
    //Check left 2 and down 1
    if (row+1 <= 7 && col-2 >= 0 && (board[row+1][col-2] === 0 || board[row+1][col-2].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row+1, col-2]);
    }

    //Check down 2 and left 1
    if (row+2 <= 7 && col-1 >= 0 && (board[row+2][col-1] === 0 || board[row+2][col-1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row+2, col-1]);
    }
    //Check down 2 and right 1
    if (row+2 <= 7 && col+1 <= 7 && (board[row+2][col+1] === 0 || board[row+2][col+1].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row+2, col+1]);
    }

    //Check right 2 and up 1
    if (row-1 >= 0 && col+2 <= 7 && (board[row-1][col+2] === 0 || board[row-1][col+2].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row-1, col+2]);
    }
    //Check right 2 and down 1
    if (row+1 <= 7 && col+2 <= 7 && (board[row+1][col+2] === 0 || board[row+1][col+2].color === colorOfEnemy)) {
        positionsItCanGoTo.push([row+1, col+2]);
    }

    return positionsItCanGoTo;
}