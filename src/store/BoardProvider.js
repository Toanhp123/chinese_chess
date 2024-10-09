import { useCallback, useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext();

const Global = ({ children }) => {
    const [isRedTurn, setIsRedTurn] = useState(null);
    const [validSquare, setValidSquare] = useState([]);
    const [moveValid, setMoveValid] = useState([]);
    const [selectedChess, setSelectedChess] = useState({
        coordinate: null,
        color: 'red',
    });
    const [move, setMove] = useState({
        from: { row: null, col: null },
        to: { row: null, col: null },
    });
    const [kingPositions, setKingPositions] = useState({
        redKing: { row: 9, col: 4 },
        blackKing: { row: 0, col: 4 },
    });

    // Cập nhật vị trí của tướng khi di chuyển
    const updateKingPosition = useCallback((color, newPosition) => {
        setKingPositions((prevState) => ({
            ...prevState,
            [color === 'red' ? 'redKing' : 'blackKing']: newPosition,
        }));
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isRedTurn,
                setIsRedTurn,
                move,
                setMove,
                validSquare,
                setValidSquare,
                moveValid,
                setMoveValid,
                selectedChess,
                setSelectedChess,
                kingPositions,
                updateKingPosition,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default Global;
