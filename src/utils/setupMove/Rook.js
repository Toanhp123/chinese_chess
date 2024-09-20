const isRookMoveValid = (fromRow, fromCol, toRow, toCol, board) => {
    // Tính toán khoảng cách hàng và cột.
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);

    // Quân Xe di chuyển theo hàng ngang hoặc dọc.
    if (rowDiff !== 0 && colDiff !== 0) return false;

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
