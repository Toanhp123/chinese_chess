/* eslint-disable react-hooks/exhaustive-deps */
import './Board.css';

import Square from '../Square/Square';
import findBestMove from '../../lib/AI/makeAiMove';
import { BoardContext } from '../../store/BoardProvider';
import { useContext, useEffect } from 'react';
import { Xiangqi } from '../../lib/xiangqi/xiangqi.min';

const Board = () => {
    const { game, turn, setSelectedChess, setHistory, setGame } =
        useContext(BoardContext);

    const coorX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const coorY = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    // Lượt đi của AI
    const AI = () => {
        const aiMove = findBestMove(game, 'b', 3);

        if (aiMove) {
            // Di chuyển quân
            game.move(aiMove);

            setHistory((prev) => [...prev, ...game.history({ verbose: true })]);

            // // Cập nhật trạng thái bàn cờ
            setGame(new Xiangqi(game.fen()));
        }
    };

    useEffect(() => {
        // Chế độ đấu máy
        if (turn === 'r') return;

        const timer = setTimeout(() => {
            AI();
        }, 500);

        return () => clearTimeout(timer);

        // Chế độ 2 người chơi
        // setSelectedChess((prev) => ({
        //     ...prev,
        //     color: turn === 'r' ? 'r' : 'b',
        // }));
    }, [turn]);

    return (
        <div className="chinese-chess__board">
            {game.board().map((row, indexRow) => (
                <div key={indexRow} className="chinese-chess__board--row">
                    {row.map((col, indexCol) => (
                        <Square
                            key={indexCol}
                            id={coorX[indexCol] + '-' + coorY[indexRow]}
                            piece={col}
                            row={coorY[indexRow]}
                            col={coorX[indexCol]}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
