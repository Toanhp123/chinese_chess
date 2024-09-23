import { Game, Sidebar } from './pages';
import './App.css';
import { StoreGlobal } from './store';

function App() {
    return (
        <div className="chinese-chess">
            <Sidebar />

            <StoreGlobal>
                <Game />
            </StoreGlobal>
        </div>
    );
}

export default App;
