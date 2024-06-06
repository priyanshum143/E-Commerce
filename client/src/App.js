import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <div className="">
            <Navigation />
            <div>
                <HomePage/>
            </div>
        </div>
    );
}

export default App;
