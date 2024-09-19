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
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    bc,
    null,
    null,
    null,
    null,
    null,
    bc,
    null,
    bp,
    null,
    bp,
    null,
    bp,
    null,
    bp,
    null,
    bp,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    rp,
    null,
    rp,
    null,
    rp,
    null,
    rp,
    null,
    rp,
    null,
    rc,
    null,
    null,
    null,
    null,
    null,
    rc,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
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
    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();

        let data = e.dataTransfer.getData('text');

        const piece = document.getElementById(data);

        const destinationSquare = e.currentTarget;

        if (destinationSquare.firstChild) {
            destinationSquare.removeChild(destinationSquare.firstChild);
        }

        destinationSquare.appendChild(piece);
    }

    function handleDragStart(e, chess) {
        const piece = e.target;
        const img = new Image();
        img.src = chess;

        e.dataTransfer.setData('text', piece.id);
        e.dataTransfer.setDragImage(img, 24, 24);
    }

    return (
        <div className="chinese-chess section__padding">
            <div className="chinese-chess__board">
                <img src="" alt="" />
                {/* Render chess on board */}
                {chessOnBoard.map((chess, index) => (
                    <div key={index}>
                        <Square
                            id={index}
                            typeChess={chess}
                            handleDragOver={handleDragOver}
                            handleDragStart={(e) => handleDragStart(e, chess)}
                            handleDrop={handleDrop}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;
