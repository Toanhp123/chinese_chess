const isKingMoveValid = (pieceColor, fromRow, fromCol, toRow, toCol) => {
    // Tính toán khoảng cách hàng và cột.
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);

    // Quân Tướng chỉ di chuyển mỗi lần một ô theo chiều ngang hoặc dọc.
    if ((rowDiff !== 1 || colDiff !== 0) && (rowDiff !== 0 || colDiff !== 1)) {
        return false;
    }

    // Phạm vi cung cho từng bên.
    const palaceRange =
        pieceColor === 'red'
            ? { row: [7, 8, 9], col: [3, 4, 5] } // Phạm vi cung bên Đỏ.
            : { row: [0, 1, 2], col: [3, 4, 5] }; // Phạm vi cung bên Đen.

    // Kiểm tra nước đi có nằm trong phạm vi cung không.
    const isInPalace =
        palaceRange.row.includes(toRow) && palaceRange.col.includes(toCol);

    return isInPalace;
};

export default isKingMoveValid;
