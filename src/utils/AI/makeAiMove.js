import { evaluateBoard } from '../../services/dataPieceValue';
import { getAllValidMovesForAI } from '../checkMove/getValidMovesForPiece ';

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
            if (beta <= alpha) break; // Cắt tỉa alpha-beta.
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
            if (beta <= alpha) break; // Cắt tỉa alpha-beta.
        }
        return minEval;
    }
};

// Hàm giả lập di chuyển quân cờ.
const simulateMove = (board, move) => {
    const newBoard = board.map((row) => [...row]); // Tạo một bản sao của bàn cờ.
    const { from, to } = move;

    newBoard[to.row][to.col] = newBoard[from.row][from.col];
    newBoard[from.row][from.col] = null;

    return newBoard;
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
            3,
            -Infinity,
            Infinity,
            false,
            aiColor,
        ); // Sâu tìm kiếm là 3.
        if (moveValue > bestValue) {
            bestValue = moveValue;
            bestMove = move;
        }
    }

    return bestMove;
};

export default findBestMove;
