import './Heading.css';

import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store';

const Heading = () => {
    const { isRedTurn } = useContext(StoreContext);
    const [whoTurn, setWhoTurn] = useState('');

    useEffect(() => {
        if (isRedTurn) {
            setWhoTurn('bạn');
        } else {
            setWhoTurn('máy');
        }
    }, [isRedTurn]);

    return (
        <div className="chinese-chess__heading">
            <h1>Cờ Tướng</h1>
            <h2>Lượt của {whoTurn}</h2>
        </div>
    );
};

export default Heading;
