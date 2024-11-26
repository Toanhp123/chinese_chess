/* eslint-disable react-hooks/exhaustive-deps */
import './Game.css';

import { BackStack, Board, Button } from '../../components';
import {
    btnArrowFirst,
    btnArrowLast,
    btnArrowLeft,
    btnArrowRight,
    btnDraw,
    btnClose,
    btnResign,
    btnSetting,
    btnUndo,
} from '../../services/dataButton.js';

import { BoardContext } from '../../store/BoardProvider';
import { useContext, useState } from 'react';
import { Xiangqi } from '../../lib/xiangqi/xiangqi.min.js';

const Game = ({ pvp, setLogin }) => {
    const { game, setGame, history, setHistory } = useContext(BoardContext);
    const [menu, setMenu] = useState(false);

    const handleUndo = () => {};

    const handleFirstMove = () => {};

    const handleLastMove = () => {};

    const handleBeforeMove = () => {};

    const handleAfterMove = () => {};

    const handleSetting = () => {
        if (pvp) {
            handleReturnHome();
        } else {
            setMenu((prev) => !prev);
        }
    };

    const handleReturnHome = () => {
        setLogin(false);
    };

    const handleRestart = () => {
        game.reset();

        setHistory([]);
        setGame(new Xiangqi(game.fen()));
    };

    const handleResign = () => {};

    return (
        <div className="chinese-chess__game">
            <div className="chinese-chess__game--left">
                <div className="chinese-chess__game--left--contain">
                    <Board pvp={pvp} />
                </div>

                <div className="chinese-chess__game--left--controller">
                    {menu && (
                        <div className="chinese-chess__game--left--controller--menu">
                            <div className="title">
                                <h2>Cài Đặt</h2>
                                <img src={btnClose} alt="Close" />
                            </div>
                            <ul className="content">
                                <li className="home" onClick={handleReturnHome}>
                                    <div className="image"></div>
                                    <p>Về trang chủ</p>
                                </li>
                            </ul>
                        </div>
                    )}

                    <Button
                        text={'Settings'}
                        image={btnSetting}
                        onClick={handleSetting}
                    />
                    <Button
                        text={'Undo'}
                        image={btnUndo}
                        onClick={handleUndo}
                    />
                    <Button
                        text={'Restart'}
                        image={btnDraw}
                        onClick={handleRestart}
                    />
                    <Button
                        text={'Resign'}
                        image={btnResign}
                        onClick={handleResign}
                    />
                </div>
            </div>

            <div className="chinese-chess__game--right">
                <div className="chinese-chess__game--right--header"></div>

                <div className="chinese-chess__game--right--contain">
                    <BackStack />
                </div>

                <div className="chinese-chess__game--right--controller">
                    <Button image={btnArrowFirst} onClick={handleFirstMove} />
                    <Button image={btnArrowLeft} onClick={handleBeforeMove} />
                    <Button image={btnArrowRight} onClick={handleAfterMove} />
                    <Button image={btnArrowLast} onClick={handleLastMove} />
                </div>

                <div className="chinese-chess__game--right--footer"></div>
            </div>
        </div>
    );
};

export default Game;
