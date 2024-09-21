import './Heading.css';

import { useContext } from 'react';
import { StoreContext } from '../../store';

const Heading = () => {
    const { isRedTurn } = useContext(StoreContext);

    console.log(isRedTurn);

    return (
        <div className="chinese-chess__heading">
            <h1>Cờ Tướng</h1>
            {isRedTurn ? <h2>Lượt của bạn</h2> : <h2>Lượt của máy</h2>}
        </div>
    );
};

export default Heading;
