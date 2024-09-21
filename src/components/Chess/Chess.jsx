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
                    style={
                        chess.color === 'red'
                            ? {
                                  backgroundImage: `url('${chess.image}')`,
                                  backgroundSize: '60% 60%',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundColor: '#b22222',
                                  backgroundPosition: 'center',
                              }
                            : {
                                  backgroundImage: `url('${chess.image}')`,
                                  backgroundSize: '60% 60%',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundColor: 'black',
                                  backgroundPosition: 'center',
                              }
                    }
                ></div>
            )}
        </>
    );
};

export default Chess;
