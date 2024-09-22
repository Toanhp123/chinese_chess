import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [isRedTurn, setIsRedTurn] = useState(null);
    const [coordination, setCoordination] = useState({
        from: { row: null, col: null },
        to: { row: null, col: null },
    });
    const [distance, setDistance] = useState({ x: null, y: null });

    return (
        <Context.Provider
            value={{
                isRedTurn,
                setIsRedTurn,
                coordination,
                setCoordination,
                distance,
                setDistance,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Provider;
