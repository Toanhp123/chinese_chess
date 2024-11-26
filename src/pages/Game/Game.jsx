/* eslint-disable react-hooks/exhaustive-deps */
import './Game.css';

import { BackStack, Board, Button } from '../../components';
import {
    btnArrowFirst,
    btnArrowLast,
    btnArrowLeft,
    btnArrowRight,
    btnClose,
    btnDraw,
    btnResign,
    btnSetting,
    btnUndo,
} from '../../services/dataButton.js';

const Game = () => {
    return (
        <div className="chinese-chess__game">
            <div className="chinese-chess__game--left">
                <Board />
                <div className="chinese-chess__game--left--controller">
                    <Button text={'Settings'} image={btnSetting} />
                    <Button text={'Undo'} image={btnUndo} />
                    <Button text={'Draw'} image={btnDraw} />
                    <Button text={'Resign'} image={btnResign} />
                </div>
            </div>

            <div className="chinese-chess__game--right">
                <div className="chinese-chess__game--right--header"></div>

                <div className="chinese-chess__game--right--contain">
                    <BackStack />
                </div>

                <div className="chinese-chess__game--right--controller"></div>

                <div className="chinese-chess__game--right--footer"></div>
            </div>
        </div>
    );
};

export default Game;
