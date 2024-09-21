import countPiecesInLine from '../checkMove/countPieceInLine';

const isRookMoveValid = (fromRow, fromCol, toRow, toCol, board) => {
    // Tính toán khoảng cách hàng và cột.
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);

    // Quân Xe di chuyển theo hàng ngang hoặc dọc.
    if (rowDiff !== 0 && colDiff !== 0) return false;

    // Kiểm tra đường đi có bị chặn không
    const pieceInLine = countPiecesInLine(
        fromRow,
        fromCol,
        toRow,
        toCol,
        board,
    );

    return pieceInLine === 0;
};

export default isRookMoveValid;
