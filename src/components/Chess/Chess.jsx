import './Chess.css';

const Chess = ({ id, chess, row, col, handleDragStart }) => {
    return (
        <>
            {chess && (
                <div
                    id={chess.name + '-' + chess.color + '-' + id}
                    className="chinese__chess--piece"
                    color={chess.color}
                    onDragStart={handleDragStart}
                    draggable={true}
                    style={{
                        backgroundImage: `url('${chess.image}')`,
                        backgroundColor:
                            chess.color === 'red' ? '#b22222' : 'black',
                    }}
                ></div>
            )}
        </>
    );
};

export default Chess;
