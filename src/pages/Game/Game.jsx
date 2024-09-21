/* eslint-disable react-hooks/exhaustive-deps */
import './Game.css';

import { Board } from '../../components';
import { useContext } from 'react';
import { StoreContext } from '../../store';
import { coordinatesY } from '../../utils/setupBoard/renderBoard';

const Game = () => {
    const { coordination } = useContext(StoreContext);
    const { from, to } = coordination;

    return (
        <div className="chinese-chess__game">
            <div className="chinese-chess__game--left">
                <Board />
            </div>

            <div className="chinese-chess__game--right">
                <div className="chinese-chess__game--right--header"></div>

                <div className="chinese-chess__game--right--contain"></div>

                <div className="chinese-chess__game--right--controller"></div>

                <div className="chinese-chess__game--right--footer"></div>
            </div>
        </div>
    );
};

export default Game;
