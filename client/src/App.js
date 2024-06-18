import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navbar';
import ProductsList from './components/ProductsList/ProductsList';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <div className="">
            <Navigation />

            <div>
                {/* <HomePage/> */}
                <ProductsList/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
