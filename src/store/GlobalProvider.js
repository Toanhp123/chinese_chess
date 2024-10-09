import { useState } from 'react';
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
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default Global;
