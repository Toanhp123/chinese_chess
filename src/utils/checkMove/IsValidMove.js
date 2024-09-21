import {
    Rook,
    Soldier,
    Advisor,
    Horse,
    Elephant,
    King,
    Cannon,
} from '../setupMove';

const isValidMove = (piece, fromRow, fromCol, toRow, toCol, board) => {
    let pieceType = piece.type;
    let pieceColor = piece.color;

    // Không cho ở lại vị trí cũ
    if (fromRow === toRow && fromCol === toCol) return false;

    switch (pieceType) {
        // Quy tắc di chuyển của quân Xe (Rook)
        case 'Rook':
            return Rook(fromRow, fromCol, toRow, toCol, board);
        case 'Solder':
            return Soldier(pieceColor, fromRow, fromCol, toRow, toCol);
        case 'Advisor':
            return Advisor(pieceColor, fromRow, fromCol, toRow, toCol);
        case 'Horse':
            return Horse(fromRow, fromCol, toRow, toCol, board);
        case 'Elephant':
            return Elephant(pieceColor, fromRow, fromCol, toRow, toCol, board);
        case 'King':
            return King(pieceColor, fromRow, fromCol, toRow, toCol, board);
        case 'Cannon':
            return Cannon(fromRow, fromCol, toRow, toCol, board);
        default:
            return false;
    }
};

export default isValidMove;
