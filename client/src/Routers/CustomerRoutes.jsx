import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Cart from '../components/Cart/Cart'
import Navigation from '../components/Navigation/Navbar'
import Footer from '../components/Footer/Footer'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Checkout from '../components/Checkout/Checkout'
import OrderHistory from '../components/OrderHistory/OrderHistory'
import OrderDetails from '../components/OrderHistory/OrderDetails'

const CustomerRoutes = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/:levelOne/:levelTwo/:levelThree" element={<ProductsList />} />
                <Route path="/productlist/:productId" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account/orders" element={<OrderHistory />} />
                <Route path="/account/orders/:orderId" element={<OrderDetails />} />
            </Routes>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default CustomerRoutes
