import isRookMoveValid from './Rook';

const isValidMove = (piece, fromRow, fromCol, toRow, toCol) => {
    // Không cho ở lại vị trí cũ
    if (fromRow === toRow && fromCol === toCol) return false;

    let NamePiece = piece.name;

    switch (NamePiece) {
        // Quy tắc di chuyển của quân Xe (Rook)
        case 'xe':
            return isRookMoveValid(fromRow, fromCol, toRow, toCol);
        default:
            return false;
    }
};

export default isValidMove;
