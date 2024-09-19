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
} from './import';
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

var isRedTurn = true;

const Board = () => {
    const [board, setBoard] = useState(chessOnBoard);

    const [draggedPiece, setDraggedPiece] = useState(null);

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e, row, col) {
        e.preventDefault();

        let data = e.dataTransfer.getData('text');
        const piece = document.getElementById(data);

        if (draggedPiece) {
            // Tạo một bản sao mới của bàn cờ.
            const newBoard = board.map((row) => [...row]);

            // Di chuyển quân cờ từ vị trí cũ đến vị trí mới.
            newBoard[row][col] = board[draggedPiece.row][draggedPiece.col];
            newBoard[draggedPiece.row][draggedPiece.col] = null;

            // Cập nhật lại bàn cờ.
            setBoard(newBoard);

            // Xóa vị trí quân cờ đã kéo.
            setDraggedPiece(null);
        }
    }

    function handleDragStart(e, row, col) {
        setDraggedPiece({ row, col });
    }

    return (
        <div className="chinese-chess section__padding">
            <div className="chinese-chess__board">
                {/* Render chess on board */}
                {board.map((row, indexRow) => (
                    <div key={indexRow} className="chinese-chess__board--row">
                        {row.map((col, indexCol) => (
                            <Square
                                key={indexCol}
                                id={indexRow + '-' + indexCol}
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
