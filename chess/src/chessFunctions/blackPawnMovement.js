import { convertRowColToChessPosition } from "../helpers/convertColRowToChessPosition";

export const blackPawnMovement = (board, col, row) => {
  const positionsItCanGoTo = [];
//   console.log("black pawn at raw position: " + col + " " + row);
//   console.log(board[row][col]);
  //Check one below
  if (board[row+1][col] === 0) {
    positionsItCanGoTo.push([row+1, col]);
    // console.log("added: " + [row+1, col])
  }

  //Check two below (and that it's on row 1 (this is the same as row 7 in the actual board))
  if (board[row+2][col] === 0 && row === 1) {
    positionsItCanGoTo.push([row+2, col]);
  } 

  //Check if pawn can take on left
  if (col > 0 && board[row+1][col-1] !== 0 && board[row+1][col-1].color === "white") {
    positionsItCanGoTo.push([row+1, col-1]);
  }

  //Check if pawn can take on right
  if (col < 7 && board[row+1][col+1] !== 0 && board[row+1][col+1].color === "white") {
    positionsItCanGoTo.push([row+1, col+1]);
  }



  //En passent (to do later)



  //Note that the logic for promotion will be done on Board.js


  return positionsItCanGoTo
}