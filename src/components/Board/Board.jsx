import './Board.css';

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
import Square from '../Square/Square';

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
    let dragged = null;

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        console.log(e.target.parentNode);
        if (e.target.className === 'chinese-chess__board--square') {
            dragged.parentNode.removeChild(dragged);
            e.target.appendChild(dragged);
        }
    }

    function handleDragStart(e) {
        dragged = e.target;
    }

    return (
        <div className="chinese-chess section__padding">
            <div className="chinese-chess__board">
                {/* Render chess on board */}
                {chessOnBoard.map((chess, index) => (
                    <div key={index}>
                        <Square
                            typeChess={chess}
                            handleDragOver={handleDragOver}
                            handleDragStart={handleDragStart}
                            handleDrop={handleDrop}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;
