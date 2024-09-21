export const pieceValues = {
    Rook: 5,
    Cannon: 3,
    Solder: 1,
    King: 1000,
    Advisor: 2,
    Elephant: 2,
    Horse: 3,
};

// Hàm đánh giá bàn cờ dựa trên tổng điểm các quân cờ.
export const evaluateBoard = (board, aiColor) => {
    let score = 0;

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 9; col++) {
            const piece = board[row][col];

            if (piece) {
                const value = pieceValues[piece.type];

                if (piece.color === aiColor) {
                    score += value; // Điểm cộng cho quân của máy.
                } else {
                    score -= value; // Điểm trừ cho quân của đối thủ.
                }
            }
        }
    }
    return score;
};
