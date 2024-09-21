import './Board.css';

import Square from '../Square/Square';
import { useEffect, useState } from 'react';
import { chessOnBoard, isValidMove, isSameColor } from '../../utils/';
import findBestMove from '../../utils/AI/makeAiMove';

const Board = () => {
    const [board, setBoard] = useState(chessOnBoard);
    const [isRedTurn, setIsRedTurn] = useState(true);
    const [draggedPiece, setDraggedPiece] = useState(null);

    const AI = () => {
        if (!isRedTurn) {
            const aiMove = findBestMove('black', board);
            if (aiMove) {
                const { from, to } = aiMove;
                const piece = board[from.row][from.col];

                // Tạo bản sao bảng
                const newBoard = board.map((row) => [...row]);

                // Setup vị trí ở bảng mới
                newBoard[to.row][to.col] = piece;
                newBoard[from.row][from.col] = '';

                // Render lại bảng
                setBoard(newBoard);

                // Chuyển turn
                setIsRedTurn((prev) => !prev);
            }
        }
    };

    useEffect(() => {
        AI();
    }, [isRedTurn]);

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
                // Tạo bản sao bảng
                const newBoard = board.map((row) => [...row]);

                // Setup vị trí ở bảng mới
                newBoard[toRow][toCol] = piece;
                newBoard[fromRow][fromCol] = '';

                // Render lại bảng
                setBoard(newBoard);

                // Chuyển turn
                setIsRedTurn((prev) => !prev);
            }

            // Xóa quân cờ được kéo
            setDraggedPiece(null);
        }
    }

    function handleDragStart(e, row, col) {
        const img = new Image();

        // Giúp kéo theo cả ảnh
        img.src = board[row][col].image;
        e.dataTransfer.setDragImage(img, 24, 24);

        // Kiểm tra đang ở lượt bên nào
        if (isRedTurn) {
            // Set vị trí cho quân được kéo
            setDraggedPiece({ row, col });
        }
    }

    return (
        <div className="chinese-chess__board">
            <div className="chinese-chess__board--content">
                {/*Render các ô cờ và các quân cờ */}
                {board.map((row, indexRow) => (
                    <div key={indexRow} className="chinese-chess__board--row">
                        {row.map((col, indexCol) => (
                            <Square
                                key={indexCol}
                                id={indexRow + '-' + indexCol}
                                typeChess={col}
                                handleDragOver={handleDragOver}
                                handleDrop={() =>
                                    handleDrop(indexRow, indexCol)
                                }
                                handleDragStart={(e) =>
                                    handleDragStart(e, indexRow, indexCol)
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
