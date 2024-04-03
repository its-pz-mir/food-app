'use client'
import React from 'react';
import { IoMdCloseCircle, IoMdClose } from "react-icons/io";
import Image from 'next/image';

const Cart = ({ toggleCart }) => {

    const handleCloseCart = () => {
        toggleCart()
    };

    const productCartData = [
        {
            index: 1,
            img: "/images/product_2.1.jpg",
            name: "Double Cheese Margeerita",
            x: "1x",
            price: "110"
        },
        {
            index: 2,
            img: "/images/product_2.2.jpg",
            name: "Mexican Green Wave",
            x: "1x",
            price: "110"
        },

    ]

    return (
        <>
            <div className='fixed top-0 right-0'>
                <div className='bg-white w-72 md:w-80 lg:w-96 h-screen relative px-4 py-20 shadow-2xl rounded-md overflow-y-auto overflow-x-hidden'>
                    <IoMdCloseCircle className='absolute left-1 top-1 text-3xl cursor-pointer' onClick={handleCloseCart} />
                    <div className="products space-y-8">
                        {
                            productCartData.map((cart) => (
                                <div key={cart.index} className='flex space-x-4 relative'>
                                    <div className="image">
                                        <Image src={cart.img} width={35} height={35} alt={cart.name} />
                                    </div>
                                    <div className="other">
                                        <h2 className='text-sm font-semibold'>{cart.name}</h2>
                                        <div className='flex mt-2 space-x-16 items-center'>
                                            <p className='text-sm'>{cart.x}</p>
                                            <p className='text-red-500 font-semibold'>${cart.price}</p>
                                        </div>
                                        <div className='flex justify-between px-3 bg-red-200 mt-2'>
                                            <p className='font-semibold cursor-pointer'>+</p>
                                            <p>1</p>
                                            <p className='font-semibold cursor-pointer'>-</p>
                                        </div>
                                    </div>
                                    <div className="close absolute right-0 top-8">
                                        <IoMdClose />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="checkout fixed bottom-0 right-0 w-72 md:w-80 lg:w-96 bg-red-400 text-white flex p-4 justify-between items-center">
                        <h2 className='font-bold text-xl'>Subtotal : $220</h2>
                        <button className='bg-white text-black px-4 font-semibold py-2 rounded-md'>Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
