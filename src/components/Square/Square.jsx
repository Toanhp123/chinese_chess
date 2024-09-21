import './Square.css';

import Chess from '../Chess/Chess';

const Square = ({ id, chess, handleDragOver, handleDrop, handleDragStart }) => {
    return (
        <div
            id={id}
            className="chinese-chess__board--square"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <Chess id={id} chess={chess} handleDragStart={handleDragStart} />
        </div>
    );
};

export default Square;
