const oneDirectionBishopMovement = (board, col, row, colorOfEnemy, isUp, isRight, positionsItCanGoTo) => {
    for (let i=1;i<8;i++) {
        //Determine the row we are looking at currently based on what direction we are going
        let lookingAtRow;
        if (isUp) {
            lookingAtRow = row-i;
        } else {
            lookingAtRow = row+i;
        }

        //Determine the column
        let lookingAtColumn;
        if (isRight) {
            lookingAtColumn = col+i;
        } else {
            lookingAtColumn = col-i;
        }

        //Check if valid position
        if (lookingAtRow >= 0 && lookingAtRow <= 7 && lookingAtColumn <= 7 && lookingAtColumn >= 0) {

            //Check to see if it is a friendly piece
            if (board[lookingAtRow][lookingAtColumn] !== 0 && board[lookingAtRow][lookingAtColumn].color !== colorOfEnemy) {
                break;
            }

            //Check if enemy piece is at that position (if so break early)
            if (board[lookingAtRow][lookingAtColumn] !== 0) {
                positionsItCanGoTo.push([lookingAtRow, lookingAtColumn]);
                break;
            } else {
                positionsItCanGoTo.push([lookingAtRow, lookingAtColumn]);
            }
        }
    }
}

export const bishopMovement = (board, col, row, colorOfEnemy) => {
    const positionsItCanGoTo = [];
    
    //Check up and to the right diagonal
    oneDirectionBishopMovement(board, col, row, colorOfEnemy, true, true, positionsItCanGoTo);

    //Check up and to the left diagonal
    oneDirectionBishopMovement(board, col, row, colorOfEnemy, true, false, positionsItCanGoTo);

    //Check down and to the right diagonal
    oneDirectionBishopMovement(board, col, row, colorOfEnemy, false, true, positionsItCanGoTo);

    //Check down and to the left diagonal
    oneDirectionBishopMovement(board, col, row, colorOfEnemy, false, false, positionsItCanGoTo);

    return positionsItCanGoTo;
  }