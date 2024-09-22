import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [isRedTurn, setIsRedTurn] = useState(null);
    const [position, setPosition] = useState({ x: null, y: null });
    const [coordination, setCoordination] = useState({
        from: { row: null, col: null },
        to: { row: null, col: null },
    });

    return (
        <Context.Provider
            value={{
                isRedTurn,
                setIsRedTurn,
                coordination,
                setCoordination,
                position,
                setPosition,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Provider;
