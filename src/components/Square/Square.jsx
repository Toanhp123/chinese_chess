import './Square.css';

import Chess from '../Chess/Chess';

const Square = ({ typeChess }) => {
    return (
        <div className="chinese-chess__board--square">
            <Chess typeChess={typeChess} />
        </div>
    );
};

export default Square;
