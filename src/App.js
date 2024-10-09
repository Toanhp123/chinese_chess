import { Game, Sidebar } from './pages';
import './App.css';
import { StoreBoard } from './store';

function App() {
    return (
        <div className="chinese-chess">
            <Sidebar />

            <StoreBoard>
                <Game />
            </StoreBoard>
        </div>
    );
}

export default App;
