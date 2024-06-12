import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <div className="">
            <Navigation />

            <div>
                <HomePage/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
