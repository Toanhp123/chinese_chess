import './BackStack.css';

import { coordinatesY } from '../../utils/setupBoard/renderBoard';

const BackStack = ({ index, from, to }) => {
    return (
        <ul className="chinese-chess__back-stack">
            <li>
                <>
                    <div className="chinese-chess__back-stack--index"></div>

                    <div className="chinese-chess__back-stack--coordination active"></div>

                    <div className="chinese-chess__back-stack--coordination"></div>
                </>
            </li>
        </ul>
    );
};

export default BackStack;
