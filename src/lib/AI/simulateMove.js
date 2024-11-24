// Hàm giả lập di chuyển quân cờ.
const simulateMove = (board, move) => {
    const newBoard = board.map((row) => [...row]); // Tạo một bản sao của bàn cờ.
    const { from, to } = move;

    newBoard[to.row][to.col] = newBoard[from.row][from.col];
    newBoard[from.row][from.col] = '';

    return newBoard;
};

export default simulateMove;
