const countPiecesInLine = (fromRow, fromCol, toRow, toCol, board) => {
    let count = 0;

    if (fromRow === toRow) {
        // Di chuyển theo hàng ngang.
        const start = Math.min(fromCol, toCol);
        const end = Math.max(fromCol, toCol);

        for (let col = start + 1; col < end; col++) {
            if (board[fromRow][col] !== '') count++;
        }
    } else if (fromCol === toCol) {
        // Di chuyển theo hàng dọc.
        const start = Math.min(fromRow, toRow);
        const end = Math.max(fromRow, toRow);

        for (let row = start + 1; row < end; row++) {
            if (board[row][fromCol] !== '') count++;
        }
    }

    return count;
};

export default countPiecesInLine;
