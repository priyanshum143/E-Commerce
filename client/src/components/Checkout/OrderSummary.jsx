import React, { useEffect } from 'react'
import AddressCard from './AddressCard'
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../state/Order/Action'
import { Button, Divider } from '@mui/material'
import CartItems from '../Cart/CartItems'
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
    const { order } = useSelector(store => store)
    const dispatch = useDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const orderId = params.get("order_id");

    useEffect(() => {
        getOrderById(orderId);
    }, [orderId])

    return (
        <div>
            <div className='p-5 shadow-lg border rounded-md'>
                <AddressCard address={order.order?.shippingAddress} />
            </div>

            <div className='mt-10'>
                <div>
                    <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                        <div className='col-span-2'>
                            {order.order?.orderItems.map((item) => <CartItems item={item} />)}
                        </div>

                        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                            <div className='border'>
                                <p className='font-bold opacity-60 pb-4'>PRICE DETAILS</p>
                                <Divider />

                                <div className='space-y-3 font-semibold mb-10'>
                                    <div className='flex justify-between pt-3 text-black'>
                                        <span>Price</span>
                                        <span>₹{order.order?.totalPrice}</span>
                                    </div>

                                    <div className='flex justify-between pt-3'>
                                        <span>Discount</span>
                                        <span className='text-green-600'>-₹{order.order?.discount}</span>
                                    </div>

                                    <div className='flex justify-between pt-3'>
                                        <span>Delivery Charge</span>
                                        <span className='text-green-600'>₹0</span>
                                    </div>

                                    <div className='flex justify-between pt-3 font-bold'>
                                        <span>Total Amount</span>
                                        <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant="contained" className="w-full mt-5" sx={{px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd"}}>
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary