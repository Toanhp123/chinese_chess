import './Welcome.css';

import Game from '../Game/Game';
import Sidebar from '../Sidebar/Sidebar';
import { StoreBoard } from '../../store';
import { useState } from 'react';
import { Card } from '../../components';
import { cardAI, cardHuman } from '../../services/dataCard';

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

                        <Card
                            title={'Người đấu người'}
                            description={'Đấu với những người chơi khác'}
                            image={cardHuman}
                        />
                        <Card
                            title={'Đấu với máy'}
                            description={'Thử thách kỹ năng với AI'}
                            image={cardAI}
                        />
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
