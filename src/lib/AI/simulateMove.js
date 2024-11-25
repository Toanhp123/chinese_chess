// Hàm giả lập di chuyển quân cờ.
const simulateMove = (game, move) => {
    game.move(move);
    const newBoard = game.board();

    return newBoard;
};

export default simulateMove;
