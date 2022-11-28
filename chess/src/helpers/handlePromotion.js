import { Piece } from "../Data/chessBoardStart";

export const handlePromotion = (stateOfBoard, rowIdx, colIdx) => {
  const toPromoteTo = prompt("1 - Queen, 2 - Rook, 3 - Bishop, 4 - Knight");
  if (toPromoteTo != 1 && toPromoteTo != 2 && toPromoteTo != 3 && toPromoteTo != 4) {
    toPromoteTo = prompt("BRUH: 1 - Queen, 2 - Rook, 3 - Bishop, 4 - Knight");
  }
  let newPiece;
  if (rowIdx === 0) {
    if (toPromoteTo == 1) {
        newPiece = new Piece(15, "White_p_Queen", "white");
    } else if (toPromoteTo == 2) {
        newPiece = new Piece(14, "White_p_Rook", "white");
    } else if (toPromoteTo == 3) {
        newPiece = new Piece(13, "White_p_Bishop", "white");
    } else if (toPromoteTo == 4) {
        newPiece = new Piece(12, "White_p_Knight", "white");
    }
  } else if (rowIdx === 7) {
    if (toPromoteTo == 1) {
        newPiece = new Piece(15, "Black_p_Queen", "black");
    } else if (toPromoteTo == 2) {
        newPiece = new Piece(14, "Black_p_Rook", "black");
    } else if (toPromoteTo == 3) {
        newPiece = new Piece(13, "Black_p_Bishop", "black");
    } else if (toPromoteTo == 4) {
        newPiece = new Piece(12, "Black_p_Knight", "black");
    }
  } 
  stateOfBoard[rowIdx][colIdx] = newPiece;
}
