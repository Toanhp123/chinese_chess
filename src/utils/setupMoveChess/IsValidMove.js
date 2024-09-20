import isRookMoveValid from './Rook';

const isValidMove = (piece, fromRow, fromCol, toRow, toCol) => {
    // Không cho ở lại vị trí cũ
    if (fromRow === toRow && fromCol === toCol) return false;
    switch (piece) {
        case 'R': // Quy tắc di chuyển của quân Xe (Rook)
            return isRookMoveValid(fromRow, fromCol, toRow, toCol);
        // Thêm quy tắc di chuyển cho các quân cờ khác.
        default:
            return false;
    }
};

export default isValidMove;
