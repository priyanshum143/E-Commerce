import React from 'react'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'

const HomePage = () => {
    return (
        <div>
            <HomeCarousel/>

            <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
                <ProductCarousel/>
                <ProductCarousel/>
                <ProductCarousel/>
                <ProductCarousel/>
                <ProductCarousel/>
            </div>
        </div>
    )
}

export default HomePage
