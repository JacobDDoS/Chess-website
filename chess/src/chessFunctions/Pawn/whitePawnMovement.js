export const whitePawnMovement = (board, col, row, previousMoveArray) => {
  const positionsItCanGoTo = [];
  // console.log("white pawn at raw position: " + col + " " + row);
  // console.log(board[row][col]);

  
  //Check one above
  if (board[row-1][col] === 0) {
    positionsItCanGoTo.push([row-1, col]);
  }

  //Check two above (and that it's on row 6)
  if (row === 6 && board[row-2][col] === 0) {
    positionsItCanGoTo.push([row-2, col]);
  } 

  //Check if pawn can take on left
  if (col > 0 && board[row-1][col-1] !== 0 && board[row-1][col-1].color === "black") {
    positionsItCanGoTo.push([row-1, col-1]);
  }

  //Check if pawn can take on right
  if (col < 7 && board[row-1][col+1] !== 0 && board[row-1][col+1].color === "black") {
    positionsItCanGoTo.push([row-1, col+1]);
  }



  //En passent
  //Check left
  if (col-1>=0 && row-2 >= 0 && previousMoveArray[row][col-1] === 2 && previousMoveArray[row-2][col-1] === 1 && board[row][col-1].id.endsWith("Pawn")) {
    positionsItCanGoTo.push([row-1, col-1]);
  }

  //Check right
  if (col+1<=7 && row-2 >= 0 && previousMoveArray[row][col+1] === 2 && previousMoveArray[row-2][col+1] === 1 && board[row][col+1].id.endsWith("Pawn")) {
    positionsItCanGoTo.push([row-1, col+1]);
  }


  //Note that the logic for promotion will be done on Board.js


  return positionsItCanGoTo
}