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

const MAX_COLS = 10;
const MAX_ROWS = 9;

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
                {/* 10th rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>

                {/* 9th rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>

                {/* 8th rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>

                {/* 7th rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>

                {/* 6th rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>

                {/* 5th rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>

                {/* 4th rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>

                {/* 3rd rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>

                {/* 2nd rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>

                {/* 1st rank */}
                <div className="chinese-chess__board--square__row">
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                    <div className="chinese-chess__board--square"></div>
                </div>
            </div>
        </div>
    );
};

export default Board;
