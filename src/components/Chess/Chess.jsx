import './Chess.css';

const Chess = ({ id, typeChess, handleDragStart }) => {
    return (
        <>
            {typeChess && (
                <div
                    id={'chess-' + id}
                    className="chinese__chess--piece"
                    onDragStart={handleDragStart}
                    draggable={true}
                >
                    <img src={typeChess} alt={typeChess} draggable={false} />
                </div>
            )}
        </>
    );
};

export default Chess;
