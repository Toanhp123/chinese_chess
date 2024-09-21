import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [isRedTurn, setIsRedTurn] = useState(null);
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
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Provider;
