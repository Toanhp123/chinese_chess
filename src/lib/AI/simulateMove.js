import { Xiangqi } from '../xiangqi/xiangqi.min';

// Hàm giả lập di chuyển quân cờ.
const simulateMove = (board, move) => {
    const newBoard = new Xiangqi(board.fen());
    newBoard.move(move);

    return newBoard;
};

export default simulateMove;
