import { countPiecesInLine } from '../checkMove/countPieceInPath';
import isSameColor from '../checkMove/isSameColor';

const isCannonMoveValid = (fromRow, fromCol, toRow, toCol, board) => {
    // Tính toán khoảng cách hàng và cột.
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);

    // Quân Xe di chuyển theo hàng ngang hoặc dọc.
    if (rowDiff !== 0 && colDiff !== 0) return false;

    // Kiểm tra đường đi có bao nhiêu quân cờ ở giữa
    const pieceInLine = countPiecesInLine(
        fromRow,
        fromCol,
        toRow,
        toCol,
        board,
    );

    // Nếu không có quân cờ nào trên đường đi và ô đích không có quân, đó là di chuyển hợp lệ.
    if (pieceInLine === 0 && board[toRow][toCol] === '') {
        return true;
    }

    // Nếu có 1 quân cờ trên đường đi và ô đích có quân địch, đó là di chuyển ăn quân hợp lệ.
    if (
        pieceInLine === 1 &&
        board[toRow][toCol] !== '' &&
        !isSameColor(board[toRow][toCol], board[fromRow][fromCol])
    ) {
        return true;
    }

    return false;
};

export default isCannonMoveValid;
