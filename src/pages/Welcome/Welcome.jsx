import './Welcome.css';

import Game from '../Game/Game';
import Sidebar from '../Sidebar/Sidebar';
import { StoreBoard } from '../../store';
import { useState } from 'react';

const Welcome = () => {
    const [login, setLogin] = useState(false);
    return (
        <>
            {!login && (
                <div className="welcome">
                    <Sidebar />
                    <div className="welcome__contain">
                        <h1>
                            <span className="title">Cờ Tướng</span>
                        </h1>
                    </div>
                </div>
            )}

            {login && (
                <div className="chinese-chess">
                    <Sidebar />

                    <StoreBoard>
                        <Game />
                    </StoreBoard>
                </div>
            )}
        </>
    );
};

export default Welcome;
