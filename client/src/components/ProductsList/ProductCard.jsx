import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/productlist/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img
                    className='h-full w-full object-cover object-left-top'
                    src={product.imageUrl}
                    alt="There should be an image"
                />
            </div>

            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p>{product.title}</p>
                </div>

                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>{product.discountedPrice}Rs</p>
                    <p className='line-through opacity-50'>{product.price}Rs</p>
                    <p className='text-green-600 font-semibold'>{product.discountPersent}% Off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
