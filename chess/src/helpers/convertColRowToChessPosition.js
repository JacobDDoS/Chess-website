export const convertColRowToChessPosition = (col, row) => {
    const alpha = "abcdefgh";
    const returnValue = alpha[col]+row;
    return returnValue;
}