export const convertColRowToChessPosition = (col, row) => {
    const alpha = "abcdefgh";
    const returnValue = alpha[col-1]+row;
    return returnValue;
}