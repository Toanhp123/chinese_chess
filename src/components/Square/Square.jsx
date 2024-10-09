/* eslint-disable react-hooks/exhaustive-deps */
import './Square.css';

import Chess from '../Chess/Chess';
import { GlobalContext } from '../../store/BoardProvider';
import { reRenderBoard } from '../../lib/setupBoard/renderBoard';
import { memo, useContext } from 'react';

const Square = memo(({ id, piece, board, setBoard, row, col }) => {
    const {
        validSquare,
        setValidSquare,
        selectedChess,
        setSelectedChess,
        isRedTurn,
        setIsRedTurn,
        setMove,
        updateKingPosition,
    } = useContext(GlobalContext);

    const handleDrop = (e) => {
        e.preventDefault();
    };

    // Xử lý sự kiện khi click vào square
    const handleClick = () => {
        // Nếu selectedChess tồn tại và validSquare bao gồm id ô được chọn
        if (selectedChess.coordinate && validSquare.includes(id)) {
            // Tìm vị trí quân cờ đã chọn
            const [selectedRow, selectedCol] = selectedChess.coordinate
                .split('-')
                .map(Number);

            // Check nếu là quân tướng sẽ lưu vị trí mới
            if (board[selectedRow][selectedCol].name === 'king') {
                let newPosition = {
                    row: 0,
                    col: 0,
                };

                [newPosition.row, newPosition.col] = id.split('-').map(Number);

                updateKingPosition(
                    board[selectedRow][selectedCol].color,
                    newPosition,
                );
            }

            // // Render lại bảng cờ
            reRenderBoard(board, setBoard, selectedRow, selectedCol, row, col);

            // // Xóa các ô có khả năng đi từ ô được chọn
            setValidSquare([]);

            // // Xóa square được chọn trước đấy
            setSelectedChess((prev) => ({
                ...prev,
                coordinate: null,
                // Cập nhật màu chess có thể chọn chơi 2 người
                // color: isRedTurn ? 'red' : 'black',
            }));

            // // Lấy log điểm đi đến chess
            setMove({
                from: { row: selectedRow, col: selectedCol },
                to: { row: row, col: col },
            });

            // // Đổi lượt
            setIsRedTurn(!isRedTurn);
        }
    };

    return (
        <div
            id={id}
            className={`chinese-chess__board--square ${
                validSquare.includes(id)
                    ? board[row][col] === ''
                        ? 'can-move-to-square'
                        : 'can-capture-chess'
                    : ''
            }`}
            onDrop={handleDrop}
            onClick={handleClick}
        >
            <Chess id={id} piece={piece} board={board} row={row} col={col} />
        </div>
    );
});

export default Square;
