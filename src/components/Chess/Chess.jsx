import './Chess.css';

const Chess = ({ typeChess }) => {
    return (
        <div className="chinese__chess">
            <img src={typeChess} alt={typeChess} />
        </div>
    );
};

export default Chess;
