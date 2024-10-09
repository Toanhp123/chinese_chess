import { countPiecesInLine } from './countPieceInPath';
import { getValidMovesForPiece } from './getValidMovesForPiece ';

// Quân tướng không được đối mặt nhau
export const checkFace = (board, kingRedPosition, kingBlackPosition) => {
    // 2 tướng nằm trên 1 cột và không có quân ở giữa
    if (
        kingRedPosition.col === kingBlackPosition.col &&
        countPiecesInLine(
            kingRedPosition.row,
            kingRedPosition.col,
            kingBlackPosition.row,
            kingBlackPosition.col,
            board,
        ) === 0
    ) {
        // Tướng hở mặt
        return false;
    }

    // Không hở mặt
    return true;
};

// Quân tướng có bị chiếu
export const isKingInCheck = (board, kingPosition, kingColor) => {
    // Duyệt qua tất cả các quân cờ trên bàn cờ
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const piece = board[row][col];

            // Kiểm tra xem quân cờ đó có phải của đối phương không
            if (piece && piece.color !== kingColor) {
                // Lấy tất cả các nước đi hợp lệ của quân cờ đối phương
                const validMoves = getValidMovesForPiece(
                    piece,
                    row,
                    col,
                    board,
                );

                // Kiểm tra xem bất kỳ nước đi nào có thể "ăn" tướng của mình không
                for (const move of validMoves) {
                    if (
                        move.row === kingPosition.row &&
                        move.col === kingPosition.col
                    ) {
                        // Nếu quân cờ đối phương có thể ăn tướng, tướng bị chiếu
                        return true;
                    }
                }
            }
        }
    }

    // Nếu không có quân cờ nào có thể chiếu tướng, tướng không bị chiếu
    return false;
};
