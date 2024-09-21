import './Chess.css';

const Chess = ({ id, chess, handleDragStart }) => {
    return (
        <>
            {chess && (
                <div
                    id={chess.name + '-' + chess.color + '-' + id}
                    className="chinese__chess--piece"
                    color={chess.color}
                    onDragStart={handleDragStart}
                    draggable={true}
                >
                    <img
                        src={chess.image}
                        alt={chess.image}
                        draggable={false}
                    />
                </div>
            )}
        </>
    );
};

export default Chess;
