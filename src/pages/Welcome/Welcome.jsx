import './Welcome.css';

import { StoreBoard } from '../../store';
import Game from '../Game/Game';
import Sidebar from '../Sidebar/Sidebar';

const Welcome = () => {
    return (
        <div className="chinese-chess">
            <Sidebar />

            <StoreBoard>
                <Game />
            </StoreBoard>
        </div>
    );
};

export default Welcome;
