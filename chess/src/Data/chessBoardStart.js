export class Piece {
    constructor(logo, id, color) {
        this.logo = logo
        this.id = id
        this.color = color
    }
}

//Black Backrank (A-H)
const blackARook = new Piece(14, "Black_a_Rook", "black");
const blackBKnight = new Piece(12, "Black_b_Knight", "black");
const blackWhiteBishop = new Piece(13, "Black_c_Bishop", "black");
const blackQueen = new Piece(15, "Black_Queen", "black");
const blackKing = new Piece(16, "Black_King", "black");
const blackBlackBishop = new Piece(13, "Black_f_Bishop", "black");
const blackGKnight = new Piece(12, "Black_g_Knight", "black");
const blackHRook = new Piece(14, "Black_h_Rook", "black");

//Black Frontrank (A-H)
const blackAPawn = new Piece (11, "Black_a_Pawn", "black");
const blackBPawn = new Piece (11, "Black_b_Pawn", "black");
const blackCPawn = new Piece (11, "Black_c_Pawn", "black");
const blackDPawn = new Piece (11, "Black_d_Pawn", "black");
const blackEPawn = new Piece (11, "Black_e_Pawn", "black");
const blackFPawn = new Piece (11, "Black_f_Pawn", "black");
const blackGPawn = new Piece (11, "Black_g_Pawn", "black");
const blackHPawn = new Piece (11, "Black_h_Pawn", "black");


//White Backrank (A-H)
const whiteARook = new Piece(14, "White_a_Rook", "white");
const whiteBKnight = new Piece(12, "White_b_Knight", "white");
const whiteBlackBishop = new Piece(13, "White_c_Bishop", "white");
const whiteQueen = new Piece(15, "White_Queen", "white");
const whiteKing = new Piece(16, "White_King", "white");
const whiteWhiteBishop = new Piece(13, "White_f_Bishop", "white");
const whiteGKnight = new Piece(12, "White_g_Knight", "white");
const whiteHRook = new Piece(14, "White_h_Rook", "white");

//Black Frontrank (A-H)
const whiteAPawn = new Piece (1, "White_a_Pawn", "white");
const whiteBPawn = new Piece (1, "White_b_Pawn", "white");
const whiteCPawn = new Piece (1, "White_c_Pawn", "white");
const whiteDPawn = new Piece (1, "White_d_Pawn", "white");
const whiteEPawn = new Piece (1, "White_e_Pawn", "white");
const whiteFPawn = new Piece (1, "White_f_Pawn", "white");
const whiteGPawn = new Piece (1, "White_g_Pawn", "white");
const whiteHPawn = new Piece (1, "White_h_Pawn", "white");


export const chessBoardStart = [
    [blackARook, blackBKnight, blackWhiteBishop, blackQueen, blackKing, blackBlackBishop, blackGKnight, blackHRook],
    [blackAPawn, blackBPawn, blackCPawn, blackDPawn, blackEPawn, blackFPawn, blackGPawn, blackHPawn],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [whiteAPawn, whiteBPawn, whiteCPawn, whiteDPawn, whiteEPawn, whiteFPawn, whiteGPawn, whiteHPawn],
    [whiteARook, whiteBKnight, whiteBlackBishop, whiteQueen, whiteKing, whiteWhiteBishop, whiteGKnight, whiteHRook]
]


// For testing the Knights
// export const chessBoardStart = [
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, blackCPawn, 0, blackBKnight, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, whiteBKnight, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0]
// ]

// //For testing the bishops
// export const chessBoardStart = [
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, blackQueen, 0],
//     [0, 0, blackCPawn, 0, blackBKnight, 0, 0, 0],
//     [0, 0, blackARook, 0, 0, 0, 0, 0],
//     [0, 0, 0, whiteBlackBishop, blackWhiteBishop, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, whiteAPawn, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0]
// ]


//For testing the rooks
// export const chessBoardStart = [
//     [blackARook, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, blackHRook, 0, 0, whiteBlackBishop, whiteQueen],
//     [0, 0, 0, 0, whiteARook, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, whiteHRook]
// ]

//For testing checks
// export const chessBoardStart = [
//     [whiteKing, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, blackQueen, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, whiteQueen, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, blackKing]
// ]


//For testing castling
// export const chessBoardStart = [
//     [blackARook, 0, 0, 0, blackKing, 0, 0, blackHRook],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, whiteQueen, 0, whiteKing, 0, 0, whiteHRook]
// ]

//Also for testing castling
// export const chessBoardStart = [
//     [0, 0, 0, 0, 0, blackKing, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, whiteKing, 0, 0, whiteHRook]
// ]


//For testing En passent and Promotion
// export const chessBoardStart = [
//     [0, 0, 0, 0, blackKing, 0, 0, 0],
//     [0, 0, 0, blackDPawn, 0, blackFPawn, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, whiteEPawn, 0, 0, 0],
//     [0, blackBPawn, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, whiteCPawn, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, whiteKing, 0, 0, 0]
// ]


//For testing stalemate
// export const chessBoardStart = [
//     [blackKing, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, whiteHRook, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, whiteARook, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, whiteKing, 0, 0, 0]
// ]