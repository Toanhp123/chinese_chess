import './BackStack.css';

import renderBoard, { coordinatesY } from '../../utils/setupBoard/renderBoard';
import { useState } from 'react';

const BackStack = ({ coordination }) => {
    const [index, setIndex] = useState(1);
    let piece = null;

    if (coordination.from.row !== null && coordination.from.col !== null) {
        piece = renderBoard[coordination.from.row][coordination.from.col];
    }

    return (
        <ul className="chinese-chess__back-stack">
            {piece && (
                <li>
                    <div className="chinese-chess__back-stack--index">
                        {index}
                    </div>
                    <div className="chinese-chess__back-stack--coordination active">
                        {piece.name}
                    </div>
                    <div className="chinese-chess__back-stack--coordination"></div>
                </li>
            )}
        </ul>
    );
};

export default BackStack;
