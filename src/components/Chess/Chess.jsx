import './Chess.css';
import { StoreContext } from '../../store';
import { useContext } from 'react';

const Chess = ({ id, chess, handleDragStart }) => {
    const { distance, coordination } = useContext(StoreContext);

    console.log(distance);

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
                        coordination.to
                            ? chess.color === 'red'
                                ? {
                                      backgroundImage: `url('${chess.image}')`,
                                      backgroundColor: '#b22222',
                                      transform: `translate(${distance.x}px, ${distance.y}px)`,
                                  }
                                : {
                                      backgroundImage: `url('${chess.image}')`,
                                      backgroundColor: 'black',
                                      transform: `translate(${distance.x}px, ${distance.y}px)`,
                                  }
                            : {
                                  backgroundImage: `url('${chess.image}')`,
                                  backgroundColor: '#b22222',
                              }
                    }
                ></div>
            )}
        </>
    );
};

export default Chess;
