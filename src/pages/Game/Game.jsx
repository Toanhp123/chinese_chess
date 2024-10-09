/* eslint-disable react-hooks/exhaustive-deps */
import './Game.css';

import { BackStack, Board } from '../../components';
import { StoreBoard } from '../../store';

const Game = () => {
    return (
        <div className="chinese-chess__game">
            <div className="chinese-chess__game--left">
                <Board />
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
