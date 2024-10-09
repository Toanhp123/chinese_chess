import { createContext, useCallback, useState } from 'react';

export const KingPositionContext = createContext();

const KingPositionProvider = ({ children }) => {
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
        <KingPositionContext.Provider
            value={{ kingPositions, updateKingPosition }}
        >
            {children}
        </KingPositionContext.Provider>
    );
};

export default KingPositionProvider;
