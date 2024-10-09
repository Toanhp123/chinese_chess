import { checkFace } from './isKingDangerous';
import isSameColor from './isSameColor';
import isValidMove from './IsValidMove';

export const getValidMovesForPiece = (piece, fromRow, fromCol, board) => {
    const validMoves = [];

    // Cờ tướng có 10 hàng.
    for (let row = 0; row < 10; row++) {
        // Cờ tướng có 9 cột.
        for (let col = 0; col < 9; col++) {
            if (
                isValidMove(piece, fromRow, fromCol, row, col, board) &&
                !isSameColor(board[fromRow][fromCol], board[row][col])
            ) {
                validMoves.push({
                    from: { row: fromRow, col: fromCol },
                    to: { row, col },
                });
            }
        }
    }

    return validMoves;
};

// Hàm tìm tất cả các nước đi hợp lệ cho phe máy.
export const getAllValidMovesForAI = (color, board) => {
    const validMoves = [];

    // Cờ tướng có 10 hàng.
    for (let row = 0; row < 10; row++) {
        // Cờ tướng có 9 cột.
        for (let col = 0; col < 9; col++) {
            const piece = board[row][col];
            // Chỉ xét quân cờ của phe máy.
            if (piece && piece.color === color) {
                validMoves.push(
                    ...getValidMovesForPiece(piece, row, col, board),
                );
            }
        }
    }

    return validMoves;
};
