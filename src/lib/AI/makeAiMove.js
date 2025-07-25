import evaluateBoard from './evaluateBoard';

// Thuật toán Minimax kết hợp Alpha-Beta Pruning.
const minimax = (game, depth, alpha, beta, maximizingPlayer, aiColor) => {
    if (depth === 0 || game.game_over()) {
        return evaluateBoard(game.board(), aiColor);
    }

    const moves = getAllValidMovesForAI(game, game.turn());

    if (maximizingPlayer) {
        let maxEval = -Infinity;

        for (const move of moves) {
            game.move(move); // Thực hiện nước đi

            const evals = minimax(game, depth - 1, alpha, beta, false, aiColor);
            game.undo(); // Hoàn tác nước đi

            maxEval = Math.max(maxEval, evals);
            alpha = Math.max(alpha, evals);

            if (beta <= alpha) break; // Cắt tỉa
        }

        return maxEval;
    } else {
        let minEval = Infinity;

        for (const move of moves) {
            game.move(move); // Thực hiện nước đi

            const evals = minimax(game, depth - 1, alpha, beta, true, aiColor);
            game.undo(); // Hoàn tác nước đi

            minEval = Math.min(minEval, evals);
            beta = Math.min(beta, evals);

            if (beta <= alpha) break; // Cắt tỉa
        }

        return minEval;
    }
};

// Hàm tìm tất cả các nước đi hợp lệ cho phe máy.
const getAllValidMovesForAI = (game, aiColor) => {
    const moves = game.moves({ verbose: true });

    return moves.filter((move) => game.turn() === aiColor);
};

// Hàm tìm nước đi tốt nhất cho AI.
const findBestMove = (game, aiColor, depth) => {
    const moves = getAllValidMovesForAI(game, aiColor);
    let bestMove = null;
    let bestValue = -Infinity;

    for (const move of moves) {
        game.move(move); // Thực hiện nước đi
        const moveValue = minimax(
            game,
            depth - 1,
            -Infinity,
            Infinity,
            false,
            aiColor,
        );
        game.undo(); // Hoàn tác nước đi

        if (moveValue > bestValue) {
            bestValue = moveValue;
            bestMove = move;
        }
    }

    return bestMove;
};

export default findBestMove;
