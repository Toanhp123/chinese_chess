import './Square.css';

import Chess from '../Chess/Chess';

const Square = ({
    id,
    typeChess,
    handleDragOver,
    handleDrop,
    handleDragStart,
}) => {
    return (
        <div
            id={id}
            className="chinese-chess__board--square"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <Chess
                id={id}
                typeChess={typeChess}
                handleDragStart={handleDragStart}
            />
        </div>
    );
};

export default Square;