const isAdvisorMoveValid = (pieceColor, fromRow, fromCol, toRow, toCol) => {
    // Quân Sĩ chỉ đi chéo 1 ô.
    if (Math.abs(toRow - fromRow) !== 1 || Math.abs(toCol - fromCol) !== 1)
        return false;

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

export default isAdvisorMoveValid;
