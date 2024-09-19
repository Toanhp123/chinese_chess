import './Board.css';

import Chess from '../Chess/Chess';
import {
    ba,
    bb,
    bc,
    bk,
    bkm,
    bn,
    bp,
    br,
    oo,
    oos,
    ra,
    rb,
    rc,
    rk,
    rkm,
    rn,
    rp,
    rr,
    thinking,
} from './import';

const chessOnBoard = [
    br,
    bn,
    bb,
    ba,
    bk,
    ba,
    bb,
    bn,
    br,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    bc,
    oo,
    oo,
    oo,
    oo,
    oo,
    bc,
    oo,
    bp,
    oo,
    bp,
    oo,
    bp,
    oo,
    bp,
    oo,
    bp,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    rp,
    oo,
    rp,
    oo,
    rp,
    oo,
    rp,
    oo,
    rp,
    oo,
    rc,
    oo,
    oo,
    oo,
    oo,
    oo,
    rc,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    oo,
    rr,
    rn,
    rb,
    ra,
    rk,
    ra,
    rb,
    rn,
    rr,
];

const Board = () => {
    function setupBoardSquares() {}

    return (
        <div className="chinese-chess section__padding">
            <div className="chinese-chess__board">
                {/* Render chess on board */}
                {chessOnBoard.map((chess) => (
                    <div className="chinese-chess__board--square">
                        <Chess typeChess={chess} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;
