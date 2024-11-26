import { pieceValues } from '../../services/dataPieceValue';

const evaluateBoard = (board, aiColor) => {
    let score = 0;

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 9; col++) {
            const piece = board[row][col];

            if (piece) {
                const value = pieceValues[piece.type];

                if (piece.color === aiColor) {
                    score += value; // Điểm cộng cho quân của máy.
                } else {
                    score -= value; // Điểm trừ cho quân người chơi.
                }
            }
        }
    }

    return score;
};

export default evaluateBoard;
