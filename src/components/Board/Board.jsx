import './Board.css';

import Chess from '../Chess/Chess';
import { ba, board } from './import';

const Board = () => {
    return (
        <div className="chinese-chess section__padding">
            <div className="chinese-chess__board">
                <img src={board} alt="board" />
                <Chess typeChess={ba} />
            </div>
        </div>
    );
};

export default Board;
