import isValidMove from './IsValidMove';

const getValidMovesForPiece = (piece, fromRow, fromCol, board) => {
    const validMoves = [];

    // Cờ tướng có 10 hàng.
    for (let row = 0; row < 10; row++) {
        // Cờ tướng có 9 cột.
        for (let col = 0; col < 9; col++) {
            if (isValidMove(piece, fromRow, fromCol, row, col, board)) {
                validMoves.push({
                    from: { row: fromRow, col: fromCol },
                    to: { row, col },
                });
            }
        }
    }

    console.log(validMoves);

    return validMoves;
};

export default getValidMovesForPiece;
