import React from 'react'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'

const HomePage = () => {
    return (
        <div>
            <HomeCarousel/>
            <div>
                <ProductCarousel/>
            </div>
        </div>
    )
}

export default HomePage
