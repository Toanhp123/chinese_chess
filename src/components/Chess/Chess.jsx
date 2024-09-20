import './Chess.css';

const Chess = ({ id, typeChess, handleDragStart }) => {
    return (
        <>
            {typeChess && (
                <div
                    id={typeChess.name + '-' + typeChess.color + '-' + id}
                    className="chinese__chess--piece"
                    color={typeChess.color}
                    onDragStart={handleDragStart}
                    draggable={true}
                >
                    <img
                        src={typeChess.image}
                        alt={typeChess.image}
                        draggable={false}
                    />
                </div>
            )}
        </>
    );
};

export default Chess;
