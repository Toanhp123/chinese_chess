import { Rook, Soldier, Advisor } from '../setupMove';

const isValidMove = (piece, fromRow, fromCol, toRow, toCol) => {
    // Không cho ở lại vị trí cũ
    if (fromRow === toRow && fromCol === toCol) return false;

    let pieceName = piece.name;
    let pieceColor = piece.color;

    switch (pieceName) {
        // Quy tắc di chuyển của quân Xe (Rook)
        case 'xe':
            return Rook(fromRow, fromCol, toRow, toCol);
        case 'tốt':
            return Soldier(pieceColor, fromRow, fromCol, toRow, toCol);
        case 'sĩ':
            return Advisor();
        default:
            return false;
    }
};

export default isValidMove;
