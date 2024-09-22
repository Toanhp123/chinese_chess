/* eslint-disable react-hooks/exhaustive-deps */
import './LogMove.css';

import { coordinatesY, coordinatesX } from '../../utils/setupBoard/renderBoard';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store';

const BackStack = () => {
    const { coordination, isRedTurn } = useContext(StoreContext);
    const [moveLog, setMoveLog] = useState([]);

    const writeLog = (from, to) => {
        if (from.row === to.row && from.col === to.col) return;

        const currentMove = {
            from: `${coordinatesY[from.row]}${coordinatesX[from.col]}`,
            to: `${coordinatesY[to.row]}${coordinatesX[to.col]}`,
        };

        setMoveLog((prevLog) => {
            // Kiểm tra lượt đi
            const currentRound =
                prevLog.length > 0
                    ? prevLog[prevLog.length - 1]
                    : { index: prevLog.length + 1, red: null, black: null };

            // Tạo log mới cho quân đỏ hoặc cập nhật log cũ cho quân đen
            if (isRedTurn) {
                return [
                    ...prevLog,
                    {
                        ...currentRound,
                        index: prevLog.length + 1,
                        red: currentMove,
                        black: null,
                    },
                ];
            } else {
                // Ghi lại nước đi của quân đen trong log cuối cùng
                const updatedLog = [...prevLog];

                updatedLog[updatedLog.length - 1] = {
                    ...currentRound,
                    black: currentMove,
                };

                return updatedLog;
            }
        });
    };

    useEffect(() => {
        if (coordination.from.row === null || coordination.from.row === null)
            return;

        const { from, to } = coordination;

        writeLog(from, to);
    }, [coordination]);

    return (
        <ul className="chinese-chess__log-move">
            {moveLog.map((move, index) => (
                <li key={index}>
                    <div className="chinese-chess__log-move--index">
                        {move.index}
                    </div>

                    <div
                        className={
                            move.black
                                ? 'chinese-chess__log-move--coordination'
                                : 'chinese-chess__log-move--coordination active'
                        }
                    >
                        {move.red ? `${move.red.from}${move.red.to}` : ''}
                    </div>

                    <div
                        className={
                            moveLog[moveLog.length - 1].black !== null &&
                            moveLog[moveLog.length - 1].black === move.black
                                ? 'chinese-chess__log-move--coordination active'
                                : 'chinese-chess__log-move--coordination '
                        }
                    >
                        {move.black ? `${move.black.from}${move.black.to}` : ''}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default BackStack;
