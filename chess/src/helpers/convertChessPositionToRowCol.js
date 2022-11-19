export const convertChessPositionToRowCol = (position) => {
    const alpha = "abcdefgh";
    let col;
    for (let i=0;i<alpha.length;i++) {
        if (position[0] === alpha[i]) {
            col = i+1;
            break;
        }
    }
    return [col, position[1]-'0'];
}