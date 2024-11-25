/* eslint-disable react-hooks/exhaustive-deps */
import './Board.css';

import Square from '../Square/Square';
import { BoardContext } from '../../store/BoardProvider';
import { useContext, useEffect } from 'react';

const Board = () => {
    const { game, turn, setSelectedChess } = useContext(BoardContext);




    
    const coorX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const coorY = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    // Chế độ 2 người chơi
    useEffect(() => {
        setSelectedChess((prev) => ({
            ...prev,
            color: turn === 'r' ? 'r' : 'b',
        }));
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
