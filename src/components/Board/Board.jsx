import './Board.css';

import Square from '../Square/Square';
import { useState } from 'react';
import { chessOnBoard, isValidMove, isSameColor } from '../../utils/';

const Board = () => {
    const [board, setBoard] = useState(chessOnBoard);
    const [isRedTurn, setIsRedTurn] = useState(true);
    const [draggedPiece, setDraggedPiece] = useState(null);

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e, row, col) {
        if (draggedPiece) {
            const { row: fromRow, col: fromCol } = draggedPiece;
            const piece = board[fromRow][fromCol];

            //Kiểm tra nước đi có hợp lý không
            if (
                isValidMove(piece, fromRow, fromCol, row, col) &&
                !isSameColor(piece, board[row][col])
            ) {
                // Tạo bản sao bảng
                const newBoard = board.map((row) => [...row]);

                // Setup vị trí ở bảng mới
                newBoard[row][col] = piece;
                newBoard[fromRow][fromCol] = '';

                // Render lại bảng
                setBoard(newBoard);
                setIsRedTurn((prev) => !prev);
            }

            // Xóa quân cờ được kéo
            setDraggedPiece(null);
        }
    }

    function handleDragStart(e, row, col) {
        const pieceColor = e.target.getAttribute('color');
        const img = new Image();

        // Giúp kéo theo cả ảnh
        img.src = board[row][col].image;
        e.dataTransfer.setDragImage(img, 24, 24);

        // Kiểm tra đang ở lượt bên nào
        if (
            (isRedTurn && pieceColor === 'red') ||
            (!isRedTurn && pieceColor === 'black')
        ) {
            // Set vị trí cho quân được kéo
            setDraggedPiece({ row, col });
        }
    }

    return (
        <div className="chinese-chess">
            <div className="chinese-chess__board">
                {/* Render chess on board */}
                {board.map((row, indexRow) => (
                    <div key={indexRow} className="chinese-chess__board--row">
                        {row.map((col, indexCol) => (
                            <Square
                                key={indexCol}
                                id={indexRow + 1 + '-' + (indexCol + 1)}
                                typeChess={col}
                                handleDragOver={handleDragOver}
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
            </div>
        </div>
    );
};

export default Board;
