const countPiecesInDiagonal = (fromRow, fromCol, toRow, toCol, board) => {
    let count = 0;

    const legRow = (fromRow + toRow) / 2;
    const legCol = (fromCol + toCol) / 2;

    // Kiểm tra quân có bị cản không.
    if (board[legRow][legCol] !== '') count++;

    return count;
};

export default countPiecesInDiagonal;
