import { Rook, Soldier, Advisor, Horse, Elephant } from '../setupMove';

const isValidMove = (piece, fromRow, fromCol, toRow, toCol, board) => {
    // Không cho ở lại vị trí cũ
    if (fromRow === toRow && fromCol === toCol) return false;

    let pieceName = piece.name;
    let pieceColor = piece.color;

    switch (pieceName) {
        // Quy tắc di chuyển của quân Xe (Rook)
        case 'xe':
            return Rook(fromRow, fromCol, toRow, toCol, board);
        case 'tốt':
            return Soldier(pieceColor, fromRow, fromCol, toRow, toCol);
        case 'sĩ':
            return Advisor(pieceColor, fromRow, fromCol, toRow, toCol);
        case 'mã':
            return Horse(fromRow, fromCol, toRow, toCol, board);
        case 'tịnh':
            return Elephant(pieceColor, fromRow, fromCol, toRow, toCol, board);
        default:
            return false;
    }
};

export default isValidMove;
