import React from 'react'
import AddressCard from './AddressCard'
import Cart from '../Cart/Cart'

const OrderSummary = () => {
    return (
        <div>
            <div className='p-5 shadow-lg border rounded-md'>
                <AddressCard/>
            </div>
            
            <div className='mt-10'>
                <Cart />
            </div>
        </div>
    )
}

export default OrderSummary