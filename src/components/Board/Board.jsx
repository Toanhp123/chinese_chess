/* eslint-disable react-hooks/exhaustive-deps */
import './Board.css';

import { useContext, useEffect, useRef, useState } from 'react';
import { isValidMove, isSameColor, renderBoard } from '../../utils/';
import { coordinatesX, coordinatesY } from '../../utils/setupBoard/renderBoard';
import { StoreContext } from '../../store';
import findBestMove from '../../utils/AI/makeAiMove';
import Square from '../Square/Square';

const Board = () => {
    const { isRedTurn, setIsRedTurn, setCoordinate } = useContext(StoreContext);
    const [draggedPiece, setDraggedPiece] = useState(null);
    const [board, setBoard] = useState(renderBoard);
    const isFirstRender = useRef(true);

    // Giám sát sự thay đổi bàn cờ
    useEffect(() => {
        // Bỏ lần đầu chạy strict
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        // setIsRedTurn(true);

        const timer = setTimeout(() => {
            setIsRedTurn((prev) => !prev);
        }, 100);

        return () => clearTimeout(timer);
    }, [board]);

    // Giám sát sự thay đổi lượt chơi
    useEffect(() => {
        if (isRedTurn === null || isRedTurn) return;

        const timer = setTimeout(() => {
            AI();
        }, 100);

        return () => clearTimeout(timer);
    }, [isRedTurn]);

    // Update state game
    const updateGameState = (fromRow, fromCol, toRow, toCol) => {
        // Log vị trí cho quân được kéo
        setCoordinate((prev) => ({
            ...prev,
            from: { row: fromRow, col: fromCol },
            to: { row: toRow, col: toCol },
        }));

        // Tạo bản sao bảng
        const newBoard = board.map((row) => [...row]);

        // Setup vị trí ở bảng mới
        newBoard[toRow][toCol] = board[fromRow][fromCol];
        newBoard[fromRow][fromCol] = '';

        // Render lại bảng
        setBoard(newBoard);
    };

    // Lượt đi của AI
    const AI = () => {
        const aiMove = findBestMove('black', board);

        if (aiMove) {
            const { from, to } = aiMove;

            setCoordinate((prev) => ({
                ...prev,
                from: from,
                to: to,
            }));

            // Cập nhật trạng thái bàn cờ
            updateGameState(from.row, from.col, to.row, to.col);
        }
    };

    function handleDrop(e, toRow, toCol) {
        if (draggedPiece) {
            const { row: fromRow, col: fromCol } = draggedPiece;
            const piece = board[fromRow][fromCol];

            //Kiểm tra nước đi có hợp lý không
            if (
                isValidMove(piece, fromRow, fromCol, toRow, toCol, board) &&
                !isSameColor(piece, board[toRow][toCol])
            ) {
                // Cập nhật trạng thái bàn cờ
                updateGameState(fromRow, fromCol, toRow, toCol);
            }

            // Xóa quân cờ được kéo
            setDraggedPiece(null);
        }
    }

    function handleDragStart(e, row, col) {
        // Kiểm tra đang ở lợt bên nào
        if (isRedTurn) {
            // Set vị trí cho quân được kéo
            setDraggedPiece({ row, col });
        }
    }

    return (
        <div className="chinese-chess__board">
            {board.map((row, indexRow) => (
                <div key={indexRow} className="chinese-chess__board--row">
                    <h1 className="coordinationsY">{coordinatesY[indexRow]}</h1>

                    {row.map((col, indexCol) => (
                        <Square
                            id={indexRow + '-' + indexCol}
                            key={indexCol}
                            chess={col}
                            row={indexRow}
                            col={indexCol}
                            handleDrop={(e) =>
                                handleDrop(e, indexRow, indexCol)
                            }
                            handleDragStart={(e) =>
                                handleDragStart(e, indexRow, indexCol)
                            }
                        />
                    ))}
                </div>
            ))}

            <dir className="coordinationsX">
                {coordinatesX.map((col, indexCol) => (
                    <h1 key={indexCol}>{col}</h1>
                ))}
            </dir>
        </div>
    );
};

export default Board;
