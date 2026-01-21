import { useAppContext } from '@/context/AppContext'
import { addressDummyData } from '@/public/data'
import React, { useState, useEffect} from 'react'

function CartTotal() {
    const {router, currency, getCartAmount, cartItems, setCartItems, user} = useAppContext()
    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [userAddresses, setUserAddresses] = useState([])
    const [paymentType, setPaymentType] = useState("COD")

    const fetchUserAddresses = ()=>{
        setUserAddresses(addressDummyData)
        if(addressDummyData.length > 0){
            setSelectedAddress(addressDummyData[0])
        }
    }

    useEffect (()=>{
        if(user){
            fetchUserAddresses()
        }
    }, [user])
  return (
    <div className='max-w-[360px] w-full bg-white p-5 max-md:mt-16 rounded'>
        <h2 className='text-xl md:text-xl font-medium'> Order Summary</h2>
        <hr className='border-gray-300-my-5' />
        <div className='mb-6'>
            <p className='text-sm font-medium uppercase'>Delivery Address</p>
            <div className='relative flex justify-between items-start mt-2'>
                {selectedAddress ? 
                <p className='text-gray-500'>{selectedAddress.streetAddress}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.country}</p>  :
                <p className='text-gray-500'>No address found</p>
                }
                <button onClick={() => setShowAddress(!showAddress)} className='text-destructive hover:underline ml-1 cursor-pointer'>
                    Change
                </button>
                {showAddress && (
                    <div className='absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full'>
                        {userAddresses.map((address, index)=> (
                        <p key={index} onClick={() => {setSelectedAddress(address); setShowAddress(false)}} className='text-gray-500 p-2 hover:bg-gray-100'>
                            {address.streetAddress}, {address.city}, {address.state}, {address.country}
                        </p>
                            
                        ))
                        }   
                        <p onClick={() => {router.push("/add-address"); setShowAddress(false)}} className='text-destructive text-center cursor-pointer p-2 hover:destructive'>
                            Add address
                        </p>
                    </div>
                )}
            </div>
            <p className='text-sm font-medium uppercase mt-6'>Promo Code</p>
            <input type='text' className='w-full border-gray-200 bg-background px-3 py-2 mt-2' />

            <p className='text-sm font-medium uppercase mt-6'>Payment Method</p>

            <select value={paymentType} onChange={(e)=> setPaymentType(e.target.value)}className='w-full border border-gray-300 bg-background px-3 py-2 mt-2'>
                <option value="COD">Cash On Delivery</option>
                <option value="Stripe">Online Payment</option>
            </select>
        </div>
        <hr className='border-gray-300' />

        <div className='text-gray-500 mt-4 space-y-2'>
            <p className='flex justify-between'>
                <span>Price</span><span>{currency}{getCartAmount()}</span>
            </p>
            <p className='flex justify-between'>
                <span>Shipping Fee</span><span className='text-green-600'>Free</span>
            </p>
            <p className='flex justify-between'>
                <span>Tax</span><span>{currency}{(getCartAmount() * 0.02).toFixed(2)}</span>
            </p>
            <p className='flex justify-between'>
                <span>Total Amount:</span><span>{currency}{(getCartAmount() + getCartAmount() * 0.02).toFixed(2)}</span>
            </p>
        </div>
        <button className='w-full py-3 mt-6 cursor-pointer bg-destructive text-white font-medium hover:bg-destructive/90 transition'>
            Place Order

        </button>
    </div>
  )
}

export default CartTotal