import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import ProductCard from '../ProductCards/ProductCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';

const ProductCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: {items: 1},
        720: {items: 3},
        1024: {items: 5.5},
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);

    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({item}) => setActiveIndex(item);

    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1].map((item)=> <ProductCard/>)

    return (
        <div className=''>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex !== items.length - 5 && <Button
                    className='z-50'
                    variant='contained'
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        color: 'white',
                        transform: 'translateX(50%) rotate(90deg)',
                        bgcolor: 'white'
                    }}
                    aria-label='next'
                    onClick={slideNext}
                >
                    <ArrowBackIosIcon sx={{transform: 'rotate(90deg)', color: 'black'}}/>
                </Button>}

                <Button
                    className='z-50'
                    variant='contained'
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        left: '0rem',
                        color: 'white',
                        transform: 'translateX(-50%) rotate(-90deg)',
                        bgcolor: 'white'
                    }}
                    aria-label='next'
                    onClick={slidePrev}
                >
                    <ArrowBackIosIcon sx={{transform: 'rotate(90deg)', color: 'black'}}/>
                </Button>
            </div>
        </div>
    )
}

export default ProductCarousel
