import './Chess.css';

const Chess = ({ id, typeChess, handleDragStart }) => {
    return (
        <div
            id={'chess-' + id}
            className="chinese__chess--piece"
            onDragStart={handleDragStart}
            draggable={true}
        >
            {typeChess && (
                <img src={typeChess} alt={typeChess} draggable={false} />
            )}
        </div>
    );
};

export default Chess;
