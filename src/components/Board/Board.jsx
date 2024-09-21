/* eslint-disable react-hooks/exhaustive-deps */
import './Board.css';

import { useContext, useEffect, useRef, useState } from 'react';
import { isValidMove, isSameColor, chessOnBoard } from '../../utils/';
import { StoreContext } from '../../store';
import findBestMove from '../../utils/AI/makeAiMove';
import Square from '../Square/Square';

const Board = () => {
    const { isRedTurn, setIsRedTurn } = useContext(StoreContext);
    const [board, setBoard] = useState(chessOnBoard);
    const [draggedPiece, setDraggedPiece] = useState(null);

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

            // Cập nhật trạng thái bàn cờ
            updateGameState(from.row, from.col, to.row, to.col);
        }
    };

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(toRow, toCol) {
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

    function handleDragStart(row, col) {
        // Kiểm tra đang ở lượt bên nào
        if (isRedTurn) {
            // Set vị trí cho quân được kéo
            setDraggedPiece({ row, col });
        }
    }

    return (
        <div className="chinese-chess__board">
            <div className="chinese-chess__board--content">
                {board.map((row, indexRow) => (
                    <div
                        key={indexRow}
                        className="chinese-chess__board--content--row"
                    >
                        {row.map((col, indexCol) => (
                            <Square
                                key={indexCol}
                                id={indexRow + '-' + indexCol}
                                chess={col}
                                handleDragOver={handleDragOver}
                                handleDrop={() =>
                                    handleDrop(indexRow, indexCol)
                                }
                                handleDragStart={() =>
                                    handleDragStart(indexRow, indexCol)
                                }
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;
