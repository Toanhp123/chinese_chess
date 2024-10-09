/* eslint-disable react-hooks/exhaustive-deps */
import './Chess.css';

import { GlobalContext } from '../../store/BoardProvider';
import { memo, useContext } from 'react';
import { getValidMovesForPiece } from '../../lib/checkMove/getValidMovesForPiece ';

const Chess = memo(({ id, piece, board, row, col }) => {
    const { setValidSquare, selectedChess, setSelectedChess, kingPositions } =
        useContext(GlobalContext);

    // Xử lí sự kiện khi ấn vào chess
    const handleClick = (e) => {
        if (selectedChess.coordinate === id) {
            // Nếu Chess hiện tại đang được chọn thì bỏ chọn
            e.target.classList.remove('selected');

            setSelectedChess((prev) => ({
                ...prev,
                coordinate: null,
            }));
            setValidSquare([]);
        } else {
            // Kiểm tra quân được select có cùng màu không
            if (selectedChess.color !== piece.color) return;

            // Nếu đang chọn quân này mà chọn quân khác sẽ unselect quân này
            if (selectedChess.coordinate !== null) {
                const [x, y] = selectedChess.coordinate.split('-');

                document
                    .getElementById(
                        `${board[x][y].name}-${board[x][y].color}-${selectedChess.coordinate}`,
                    )
                    .classList.remove('selected');
            }

            // Lấy các move có thể đi của chess đc chọn
            const allValidMoves = getValidMovesForPiece(piece, row, col, board);

            const allValidSquare = allValidMoves.map(
                (move) => move.to.row + '-' + move.to.col,
            );

            // Cập nhật class cho chess được chọn
            e.target.classList.add('selected');

            setSelectedChess((prev) => ({
                ...prev,
                coordinate: id,
            }));

            if (allValidMoves.length !== 0) setValidSquare(allValidSquare);
        }
    };

    return (
        <>
            {piece && (
                <div
                    id={piece.name + '-' + piece.color + '-' + id}
                    className="chinese__chess--piece"
                    onClick={handleClick}
                    style={{
                        backgroundImage: `url('${piece.image}')`,
                        backgroundColor:
                            piece.color === 'red' ? '#b22222' : 'black',
                    }}
                ></div>
            )}
        </>
    );
});

export default Chess;
