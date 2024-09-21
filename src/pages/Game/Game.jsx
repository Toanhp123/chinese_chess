import { Board } from '../../components';
import './Game.css';

const Game = () => {
    return (
        <div className="chinese-chess__game">
            <div className="chinese-chess__game--board">
                <Board />
            </div>

            <div className="chinese-chess__game--sidebar"></div>
        </div>
    );
};

export default Game;
