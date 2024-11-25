import simulateMove from './simulateMove';
import evaluateBoard from './evaluateBoard';

const coorX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const coorY = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// Thuật toán Minimax kết hợp Alpha-Beta Pruning.
const minimax = () => {};

// Hàm tìm tất cả các nước đi hợp lệ cho phe máy.
const getAllValidMovesForAI = (board) => {
    const validMoves = [];

    validMoves.push(...board.moves());

    return validMoves;
};

// Hàm tìm nước đi tốt nhất cho AI.
const findBestMove = (aiColor, board) => {
    const allMoves = getAllValidMovesForAI(board);

    let bestMove = null;
    let bestValue = -Infinity;

    for (const move of allMoves) {
        const newBoard = simulateMove(board, move);

        const moveValue = minimax();
        if (moveValue > bestValue) {
            bestValue = moveValue;
            bestMove = move;
        }
    }

    return bestMove;
};

export default findBestMove;
