import './Board.css';

import Square from '../Square/Square';
import {
    obj_ba,
    obj_bb,
    obj_bc,
    obj_bk,
    obj_bn,
    obj_bp,
    obj_br,
    obj_ra,
    obj_rb,
    obj_rc,
    obj_rk,
    obj_rn,
    obj_rp,
    obj_rr,
} from './import';

const chessOnBoard = [
    obj_br,
    obj_bn,
    obj_bb,
    obj_ba,
    obj_bk,
    obj_ba,
    obj_bb,
    obj_bn,
    obj_br,
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
    obj_bc,
    null,
    null,
    null,
    null,
    null,
    obj_bc,
    null,
    obj_bp,
    null,
    obj_bp,
    null,
    obj_bp,
    null,
    obj_bp,
    null,
    obj_bp,
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
    obj_rp,
    null,
    obj_rp,
    null,
    obj_rp,
    null,
    obj_rp,
    null,
    obj_rp,
    null,
    obj_rc,
    null,
    null,
    null,
    null,
    null,
    obj_rc,
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
    obj_rr,
    obj_rn,
    obj_rb,
    obj_ra,
    obj_rk,
    obj_ra,
    obj_rb,
    obj_rn,
    obj_rr,
];

var isRedTurn = true;

const Board = () => {
    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();

        let data = e.dataTransfer.getData('text');

        const piece = document.getElementById(data);

        console.log(piece);

        const destinationSquare = e.currentTarget;

        if (destinationSquare.firstChild) {
            destinationSquare.removeChild(destinationSquare.firstChild);
        }

        destinationSquare.appendChild(piece);

        isRedTurn = !isRedTurn;
    }

    function handleDragStart(e, chess) {
        const piece = e.target;
        const pieceColor = piece.getAttribute('color');
        const img = new Image();

        img.src = chess.image;

        if (
            (isRedTurn && pieceColor === 'red') ||
            (!isRedTurn && pieceColor === 'black')
        ) {
            e.dataTransfer.setData('text', piece.id);
            e.dataTransfer.setDragImage(img, 24, 24);
        } else {
            e.preventDefault();
        }
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
