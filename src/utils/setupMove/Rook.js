const isRookMoveValid = (fromRow, fromCol, toRow, toCol, board) => {
    // Quân Xe di chuyển theo hàng ngang hoặc dọc.
    if (fromRow !== toRow && fromCol !== toCol) return false;

    // Kiểm tra đường đi không bị chặn.
    if (fromRow === toRow) {
        // Di chuyển ngang.
        const [min, max] = [Math.min(fromCol, toCol), Math.max(fromCol, toCol)];

        for (let col = min + 1; col < max; col++) {
            if (board[fromRow][col] !== '') return false;
        }
    } else {
        // Di chuyển dọc.
        const [min, max] = [Math.min(fromRow, toRow), Math.max(fromRow, toRow)];

        for (let row = min + 1; row < max; row++) {
            if (board[row][fromCol] !== '') {
                console.log(row + '-' + fromCol + ' block');
                return false;
            }
        }
    }
    return true;
};

export default isRookMoveValid;
