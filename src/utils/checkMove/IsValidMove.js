import {
    Rook,
    Soldier,
    Advisor,
    Horse,
    Elephant,
    King,
    Cannon,
} from '../setupMove';
import { checkFace } from './isKingDangerous';

const isValidMove = (piece, fromRow, fromCol, toRow, toCol, board) => {
    let pieceName = piece.name;
    let pieceColor = piece.color;

    // Không cho ở lại vị trí cũ
    if (fromRow === toRow && fromCol === toCol) return false;

    switch (pieceName) {
        // Quy tắc di chuyển của quân Xe (Rook)
        case 'rook':
            return Rook(fromRow, fromCol, toRow, toCol, board);
        case 'pawn':
            return Soldier(pieceColor, fromRow, fromCol, toRow, toCol);
        case 'advisor':
            return Advisor(pieceColor, fromRow, fromCol, toRow, toCol);
        case 'horse':
            return Horse(fromRow, fromCol, toRow, toCol, board);
        case 'elephant':
            return Elephant(pieceColor, fromRow, fromCol, toRow, toCol, board);
        case 'king':
            return King(pieceColor, fromRow, fromCol, toRow, toCol, board);
        case 'cannon':
            return Cannon(fromRow, fromCol, toRow, toCol, board);
        default:
            return false;
    }
};

export default isValidMove;
