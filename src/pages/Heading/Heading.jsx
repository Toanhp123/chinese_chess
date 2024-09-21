import './Heading.css';

import { useContext } from 'react';
import { StoreContext } from '../../store';

const Heading = () => {
    const { isRedTurn } = useContext(StoreContext);

    console.log(isRedTurn);

    return (
        <div className="chinese-chess__heading">
            <h1>Cờ Tướng</h1>
            <h2>Lượt của {isRedTurn ? 'bạn' : 'máy'}</h2>
        </div>
    );
};

export default Heading;
