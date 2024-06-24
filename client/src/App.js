import './App.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navbar';
import OrderDetails from './components/OrderHistory/OrderDetails';
import OrderHistory from './components/OrderHistory/OrderHistory';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductsList from './components/ProductsList/ProductsList';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <div className="">
            <Navigation />

            <div>
                {/* <HomePage/> */}
                {/* <ProductsList/> */}
                {/* <ProductDetails/> */}
                {/* <Cart/> */}
                {/* <Checkout/> */}
                {/* <OrderHistory/> */}
                <OrderDetails/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
