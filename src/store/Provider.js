import { useState } from 'react';
import Context from './Context';
import { chessOnBoard } from '../utils';

function Provider({ children }) {
    const [board, setBoard] = useState(chessOnBoard);
    const [isRedTurn, setIsRedTurn] = useState(true);

    return (
        <Context.Provider value={[board, setBoard, isRedTurn, setIsRedTurn]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
