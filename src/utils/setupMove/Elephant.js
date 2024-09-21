import { countPiecesInDiagonal } from '../checkMove/countPieceInPath';

const isElephantMoveValid = (
    pieceColor,
    fromRow,
    fromCol,
    toRow,
    toCol,
    board,
) => {
    // Tính toán khoảng cách hàng và cột.
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);

    // Quân Tịnh chỉ đi chéo 2 ô.
    if (rowDiff !== 2 || colDiff !== 2) {
        return false;
    }

    // Kiểm tra đường đi có bị chặn không
    const pieceInDiagonal =
        countPiecesInDiagonal(fromRow, fromCol, toRow, toCol, board) > 0;

    // Quân bị chặn
    if (pieceInDiagonal) return false;

    // Ranh giới sông
    const isAcrossRiver = pieceColor === 'red' ? fromRow < 5 : fromRow > 4;

    // Cấm vượt sông
    if (isAcrossRiver) return false;

    return true;
};

export default isElephantMoveValid;
