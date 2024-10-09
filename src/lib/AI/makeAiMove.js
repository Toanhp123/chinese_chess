import { evaluateBoard } from '../setupBoard/evaluateBoard';
import { getAllValidMovesForAI } from '../checkMove/getValidMovesForPiece ';
import simulateMove from './simulateMove';

// Thuật toán Minimax kết hợp Alpha-Beta Pruning.
const minimax = (board, depth, alpha, beta, maximizingPlayer, aiColor) => {
    if (depth === 0) {
        return evaluateBoard(board, aiColor);
    }

    const currentColor = maximizingPlayer
        ? aiColor
        : aiColor === 'black'
        ? 'black'
        : 'red';

    const allMoves = getAllValidMovesForAI(currentColor, board);

    if (maximizingPlayer) {
        let maxEval = -Infinity;
        for (const move of allMoves) {
            const newBoard = simulateMove(board, move); // Tạo một bàn cờ giả lập với nước đi mới.
            const eva = minimax(
                newBoard,
                depth - 1,
                alpha,
                beta,
                false,
                aiColor,
            );

            maxEval = Math.max(maxEval, eva);
            alpha = Math.max(alpha, eva);

            // Cắt tỉa alpha-beta
            if (beta <= alpha) break;
        }

        return maxEval;
    } else {
        let minEval = Infinity;
        for (const move of allMoves) {
            const newBoard = simulateMove(board, move); // Tạo một bàn cờ giả lập với nước đi mới.
            const eva = minimax(
                newBoard,
                depth - 1,
                alpha,
                beta,
                true,
                aiColor,
            );

            minEval = Math.min(minEval, eva);
            beta = Math.min(beta, eva);

            // Cắt tỉa alpha-beta
            if (beta <= alpha) break;
        }

        return minEval;
    }
};

// Hàm tìm nước đi tốt nhất cho AI.
const findBestMove = (aiColor, board) => {
    const allMoves = getAllValidMovesForAI(aiColor, board);
    let bestMove = null;
    let bestValue = -Infinity;

    for (const move of allMoves) {
        const newBoard = simulateMove(board, move);
        const moveValue = minimax(
            newBoard,
            1, // Độ sâu tìm kiếm
            -Infinity,
            Infinity,
            false,
            aiColor,
        );

        if (moveValue > bestValue) {
            bestValue = moveValue;
            bestMove = move;
        }
    }

    return bestMove;
};

export default findBestMove;
