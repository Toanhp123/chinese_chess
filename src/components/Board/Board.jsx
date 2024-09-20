import './Board.css';

import Square from '../Square/Square';
import {
    obj_ba,
    obj_bb,
    obj_bc,
    obj_bk,
    obj_bn,
    obj_bp,
    obj_br,
    obj_ra,
    obj_rb,
    obj_rc,
    obj_rk,
    obj_rn,
    obj_rp,
    obj_rr,
} from '../../services/dataChess';
import { useState } from 'react';

const chessOnBoard = [
    [obj_br, obj_bn, obj_bb, obj_ba, obj_bk, obj_ba, obj_bb, obj_bn, obj_br],
    ['', '', '', '', '', '', '', '', ''],
    ['', obj_bc, '', '', '', '', '', obj_bc, ''],
    [obj_bp, '', obj_bp, '', obj_bp, '', obj_bp, '', obj_bp],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    [obj_rp, '', obj_rp, '', obj_rp, '', obj_rp, '', obj_rp],
    ['', obj_rc, '', '', '', '', '', obj_rc, ''],
    ['', '', '', '', '', '', '', '', ''],
    [obj_rr, obj_rn, obj_rb, obj_ra, obj_rk, obj_ra, obj_rb, obj_rn, obj_rr],
];

const Board = () => {
    const [board, setBoard] = useState(chessOnBoard);
    const [isRedTurn, setIsRedTurn] = useState(true);
    const [draggedPiece, setDraggedPiece] = useState(null);

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e, row, col) {
        if (draggedPiece) {
            const newBoard = board.map((row) => [...row]);

            if (
                newBoard[row][col].color !==
                board[draggedPiece.row][draggedPiece.col].color
            ) {
                // Setup vị trí ở bảng mới
                newBoard[row][col] = board[draggedPiece.row][draggedPiece.col];
                newBoard[draggedPiece.row][draggedPiece.col] = '';

                // Render lại bảng
                setBoard(newBoard);
                setDraggedPiece(null);
                setIsRedTurn((prev) => !prev);
            }
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
            setDraggedPiece({ row, col });
        }
    }

    const isValidMove = (piece, fromRow, fromCol, toRow, toCol) => {
        // Không cho ở lại vị trí cũ
        if (fromRow === toRow && fromCol === toCol) return false;
        switch (piece) {
            case 'R': // Quy tắc di chuyển của quân Xe (Rook)
                return isRookMoveValid(fromRow, fromCol, toRow, toCol);
            // Thêm quy tắc di chuyển cho các quân cờ khác.
            default:
                return false;
        }
    };

    const isRookMoveValid = (fromRow, fromCol, toRow, toCol) => {
        // Quân Xe di chuyển theo hàng ngang hoặc dọc.
        if (fromRow !== toRow && fromCol !== toCol) return false;

        // Kiểm tra đường đi không bị chặn.
        if (fromRow === toRow) {
            // Di chuyển ngang.
            const [min, max] = [
                Math.min(fromCol, toCol),
                Math.max(fromCol, toCol),
            ];
            for (let col = min + 1; col < max; col++) {
                if (board[fromRow][col] !== '') return false;
            }
        } else {
            // Di chuyển dọc.
            const [min, max] = [
                Math.min(fromRow, toRow),
                Math.max(fromRow, toRow),
            ];
            for (let row = min + 1; row < max; row++) {
                if (board[row][fromCol] !== '') return false;
            }
        }
        return true;
    };

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
