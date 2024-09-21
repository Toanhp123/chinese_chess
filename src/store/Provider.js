import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [isRedTurn, setIsRedTurn] = useState(null);

    return (
        <Context.Provider
            value={{
                isRedTurn,
                setIsRedTurn,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Provider;
