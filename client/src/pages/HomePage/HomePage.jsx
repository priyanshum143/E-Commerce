import React from 'react'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import { mens_kurta } from '../../Data/mens_kurta'

const HomePage = () => {
    return (
        <div>
            <HomeCarousel/>

            <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
                <ProductCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <ProductCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
                <ProductCarousel data={mens_kurta} sectionName={"Men's Shirts"}/>
                <ProductCarousel data={mens_kurta} sectionName={"Women's Sarees"}/>
                <ProductCarousel data={mens_kurta} sectionName={"Women's Dresses"}/>
            </div>
        </div>
    )
}

export default HomePage
