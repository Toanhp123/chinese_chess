import './Square.css';

import Chess from '../Chess/Chess';

const Square = ({ id, chess, row, col, handleDrop, handleDragStart }) => {
    function handleDragOver(e) {
        e.preventDefault();
    }

    return (
        <div
            id={id}
            className="chinese-chess__board--square"
            row={row}
            col={col}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <Chess id={id} chess={chess} handleDragStart={handleDragStart} />
        </div>
    );
};

export default Square;
