const isSoldierMoveValid = (pieceColor, fromRow, fromCol, toRow, toCol) => {
    // Quân đỏ hướng -1 đen hướng 1 chiều dọc
    const direction = pieceColor === 'red' ? -1 : 1;

    // Quân tốt qua sông
    const isAcrossRiver = pieceColor === 'red' ? fromRow < 5 : fromRow > 4;

    // Quân đen đi xuống, quân đỏ đi lên.
    if (fromCol === toCol && toRow - fromRow === direction) {
        return true;
    }

    console.log(fromRow);

    // Khi qua sông
    if (isAcrossRiver) {
        // Đi thẳng hoặc ngang 1 ô.
        const rowMove = Math.abs(toRow - fromRow) === 1 && toCol === fromCol;
        const colMove = toRow === fromRow && Math.abs(toCol - fromCol) === 1;
        return rowMove || colMove;
    }

    return false;
};

export default isSoldierMoveValid;
