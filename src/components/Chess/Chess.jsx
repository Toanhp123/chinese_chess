import './Chess.css';

const Chess = ({ id, typeChess, handleDragStart }) => {
    return (
        <>
            {typeChess && (
                <div
                    id={typeChess.color + '-' + id}
                    className="chinese__chess--piece"
                    onDragStart={handleDragStart}
                    draggable={true}
                >
                    <img
                        src={typeChess.image}
                        alt={typeChess}
                        draggable={false}
                    />
                </div>
            )}
        </>
    );
};

export default Chess;
