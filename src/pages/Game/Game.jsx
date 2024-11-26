/* eslint-disable react-hooks/exhaustive-deps */
import './Game.css';

import { BackStack, Board, Button } from '../../components';
import {
    btnArrowFirst,
    btnArrowLast,
    btnArrowLeft,
    btnArrowRight,
    btnDraw,
    btnResign,
    btnSetting,
    btnUndo,
} from '../../services/dataButton.js';

import { BoardContext } from '../../store/BoardProvider';
import { useContext } from 'react';
import { Xiangqi } from '../../lib/xiangqi/xiangqi.min.js';

const Game = ({ pvp, setLogin }) => {
    const { game, setGame, history, setHistory } = useContext(BoardContext);

    const handleUndo = () => {};

    const handleFirstMove = () => {};

    const handleLastMove = () => {};

    const handleBeforeMove = () => {};

    const handleAfterMove = () => {};

    const handleSetting = () => {
        if (pvp) {
            setLogin(false);
        } else {
            
        }
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
