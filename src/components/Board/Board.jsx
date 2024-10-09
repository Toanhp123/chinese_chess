/* eslint-disable react-hooks/exhaustive-deps */
import './Board.css';

import Square from '../Square/Square';
import findBestMove from '../../lib/AI/makeAiMove';
import { GlobalContext } from '../../store/GlobalProvider';
import { StoreKingPosition } from '../../store';
import renderBoard, { reRenderBoard } from '../../lib/setupBoard/renderBoard';
import { useContext, useEffect, useState } from 'react';

const Board = () => {
    const { isRedTurn, setIsRedTurn, setMove } = useContext(GlobalContext);
    const [board, setBoard] = useState(renderBoard);

    console.log('renderBoard');

    // Lượt đi của AI
    const AI = () => {
        const aiMove = findBestMove('black', board);

        if (aiMove) {
            const { from, to } = aiMove;

            setMove((prev) => ({
                ...prev,
                from: from,
                to: to,
            }));

            // Cập nhật trạng thái bàn cờ
            reRenderBoard(board, setBoard, from.row, from.col, to.row, to.col);

            // Đổi turn
            setIsRedTurn(!isRedTurn);
        }
    };

    useEffect(() => {
        if (!isRedTurn || isRedTurn === false) return;

        const timer = setTimeout(() => {
            AI();
        }, 500);

        return () => clearTimeout(timer);
    }, [board]);

    return (
        <div className="chinese-chess__board">
            {/* <StoreKingPosition> */}
                {board.map((row, indexRow) => (
                    <div key={indexRow} className="chinese-chess__board--row">
                        {row.map((col, indexCol) => (
                            <Square
                                key={indexCol}
                                id={indexRow + '-' + indexCol}
                                row={indexRow}
                                col={indexCol}
                                piece={col}
                                board={board}
                                setBoard={setBoard}
                            />
                        ))}
                    </div>
                ))}
            {/* </StoreKingPosition> */}
        </div>
    );
};

export default Board;
