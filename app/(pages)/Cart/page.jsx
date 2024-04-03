'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import Image from 'next/image';


const page = () => {
    const [totalPrice, setTotalPrice] = useState();

    const orderProducts = [
        {
            id: "11",
            title: "Crunchy Bread",
            price: 35.0,
            image01: "/images/bread(1).png",
            image02: "/images/bread(2).png",
            image03: "/images/bread(3).png",
            category: "Bread",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        },
        {
            id: "13",
            title: "Loaf Bread",
            price: 35.0,
            image01: "/images/bread(3).png",
            image02: "/images/bread(2).png",
            image03: "/images/bread(3).png",
            category: "Bread",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        }
    ]

    const productPrice = () => {
        let total = 0;
        orderProducts.forEach(product => {
            total += product.price;
        });
        setTotalPrice(total);
    }
    useEffect(() => {
        productPrice();
    })

    return (
        <div>
            <Header />
            <div>
                <div className="cartBG overflow-x-hidden">
                    <h1 className='text-white text-5xl p-20'>Cart</h1>
                </div>
                <h1 className='text-center text-red-500 font-semibold text-4xl py-10'>Your Orders</h1>
                <div className="orders px-2 md:px-10 lg:px-20 xl:px-40 mb-10">
                    <table>
                        <tr className='border-b-4 border-black'>
                            <th>Image</th>
                            <th>Product Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                        {
                            orderProducts.map((product) => (
                                <tr key={product.id}>
                                    <td><Image src={product.image01} width={40} height={40} /></td>
                                    <td className='text-lg text-center'>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>1px</td>
                                    <td><MdOutlineDelete className='text-2xl cursor-pointer ' /></td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
                <div className="checkout px-2 md:px-10 lg:px-20 xl:px-40">
                    <h2 className='font-semibold text-lg'>Subtotal : $ <span className='text-3xl text-red-500 font-bold'>{totalPrice}</span></h2>
                    <p className='text-sm'>Taxes and Shipping will Calculate on Checkout</p>
                    <div className="buttons space-x-4 py-6">
                        <button className='bg-red-500 text-white px-2 py-3 text-sm rounded-lg'>Continue Shopping</button>
                        <button className='bg-red-500 text-white px-2 py-3 text-sm rounded-lg'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page