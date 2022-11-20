const oneDirectionRookMovement = (board, col, row, colorOfEnemy, direction, positionsItCanGoTo) => {
    for (let i=1;i<8;i++) {
        let goingToCol = col, goingToRow = row;
        if (direction === 1) {
            goingToRow -= i;
        } else if (direction === 2) {
            goingToCol += i;
        } else if (direction === 3) {
            goingToRow += i;
        } else if (direction === 4) {
            goingToCol -= i;
        }

        //Check to see if it's a valid position
        if (goingToRow >= 0 && goingToRow <= 7 && goingToCol >= 0 && goingToCol <= 7) { 
            if (board[goingToRow][goingToCol] !== 0) {
                if (board[goingToRow][goingToCol].color === colorOfEnemy) {
                    positionsItCanGoTo.push([goingToRow, goingToCol]);
                } 
                return;
            } else {
                positionsItCanGoTo.push([goingToRow, goingToCol]);
            }
        }
    }
}

export const rookMovement = (board, col, row, colorOfEnemy) => {
    const positionsItCanGoTo = [];
    
    //Check up
    oneDirectionRookMovement(board, col, row, colorOfEnemy, 1, positionsItCanGoTo);

    //Check right
    oneDirectionRookMovement(board, col, row, colorOfEnemy, 2, positionsItCanGoTo);

    //Check down
    oneDirectionRookMovement(board, col, row, colorOfEnemy, 3, positionsItCanGoTo);

    //Check left
    oneDirectionRookMovement(board, col, row, colorOfEnemy, 4, positionsItCanGoTo);

    return positionsItCanGoTo;
  }