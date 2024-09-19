import './Square.css';

import Chess from '../Chess/Chess';

const Square = ({ typeChess, handleDragOver, handleDrop, handleDragStart }) => {
    return (
        <div
            className="chinese-chess__board--square"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
        >
            <Chess typeChess={typeChess} />
        </div>
    );
};

export default Square;
