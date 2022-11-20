import { invertRow } from "./invertRow";

//Given the chess position (such as a6 or e2), return the column and row where it is found (as stored in the 2D array)
export const convertChessPositionToRowCol = (position) => {
    const alpha = "abcdefgh";
    let col;
    for (let i=0;i<alpha.length;i++) {
        if (position[0] === alpha[i]) {
            col = i+1;
            break;
        }
    }
    return [col, invertRow(position[1]-'0')];
}