const isSoldierMoveValid = (pieceColor, fromRow, fromCol, toRow, toCol) => {
    // TODO: có lỗi đi lùi khi qua sông cần sửa

    // Tính toán khoảng cách hàng và cột.
    const rowDiff = toRow - fromRow;
    const colDiff = toCol - fromCol;

    // Quân đỏ hướng -1 đen hướng 1 chiều dọc
    const direction = pieceColor === 'red' ? -1 : 1;

    // Quân tốt qua sông
    const isAcrossRiver = pieceColor === 'red' ? fromRow < 5 : fromRow > 4;

    // Quân đen đi xuống, quân đỏ đi lên.
    if (colDiff === 0 && rowDiff === direction) {
        return true;
    }

    // Khi qua sông
    if (isAcrossRiver) {
        // Đi thẳng 1 ô.
        const rowMove = rowDiff === direction && toCol === fromCol;

        //  Đi ngang 1 ô.
        const colMove = rowDiff === 0 && Math.abs(colDiff) === 1;
        
        return rowMove || colMove;
    }

    return false;
};

export default isSoldierMoveValid;
