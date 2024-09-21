import isValidMove from './IsValidMove';

const getValidMovesForPiece = (piece, fromRow, fromCol) => {
    const validMoves = [];
    for (let row = 0; row < 10; row++) {
        // Cờ tướng có 10 hàng.
        for (let col = 0; col < 9; col++) {
            // Cờ tướng có 9 cột.
            if (isValidMove(piece, fromRow, fromCol, row, col)) {
                validMoves.push({
                    from: { row: fromRow, col: fromCol },
                    to: { row, col },
                });
            }
        }
    }
    return validMoves;
};

export default getValidMovesForPiece;
