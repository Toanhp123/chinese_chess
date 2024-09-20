const isHorseMoveValid = (fromRow, fromCol, toRow, toCol, board) => {
    // Tính toán khoảng cách hàng và cột.
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);

    // Kiểm tra quân Mã có di chuyển theo hình chữ "L" không.
    if (
        !((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2))
    ) {
        return false;
    }

    // Kiểm tra quân Mã có bị cản không.
    if (rowDiff === 2) {
        // Di chuyển theo chiều dọc, kiểm tra ô giữa theo hàng.
        const middleRow = (fromRow + toRow) / 2;

        if (board[middleRow][fromCol] !== '') return false;
    } else if (colDiff === 2) {
        // Di chuyển theo chiều ngang, kiểm tra ô giữa theo cột.
        const middleCol = (fromCol + toCol) / 2;

        if (board[fromRow][middleCol] !== '') return false;
    }

    return true;
};

export default isHorseMoveValid;
