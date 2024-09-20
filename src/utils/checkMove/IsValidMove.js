import { Rook, Soldier } from '../setupMove';

const isValidMove = (piece, fromRow, fromCol, toRow, toCol) => {
    // Không cho ở lại vị trí cũ
    if (fromRow === toRow && fromCol === toCol) return false;

    let namePiece = piece.name;

    switch (namePiece) {
        // Quy tắc di chuyển của quân Xe (Rook)
        case 'xe':
            return Rook(fromRow, fromCol, toRow, toCol);
        case 'tốt':
            return Soldier(fromRow, fromCol, toRow, toCol);
        default:
            return false;
    }
};

export default isValidMove;
