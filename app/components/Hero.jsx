import React from 'react'
import Image from 'next/image';

import { FaCar } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='mt-20 mx-2 md:px-10 lg:px-20 xl:px-40 md:grid md:grid-cols-2'>
                <div className="left space-y-6 md:mt-4 xl:mt-8">
                    <p className='text-sm md:text-xl text-center md:text-start my-2'>Easy way to make an Order</p>
                    <h2 className='text-4xl md:text-5xl leading-relaxed md:leading-normal mx-3 md:ml-0 md:mr-0 2xl:mr-20 font-bold text-center md:text-start'><span className='text-red-500'>Hungry</span> just wait Food at <span className='text-red-500'>your door</span></h2>
                    <p className='text-center md:text-start text-slate-500 2xl:mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consectetur quo accusantium illum laborum nam.
                    </p>
                    <div className="buttons flex justify-center md:justify-start items-center space-x-8 pt-4">
                        <button className='bg-red-500 text-white px-6 py-2 rounded-md text-sm lg:text-lg flex justify-center items-center'>Order Now </button>
                        <button className='border-2 text-red-500 border-red-500 px-5 py-[5px] rounded-md text-sm lg:text-lg flex justify-center items-center'>See all Foods</button>
                    </div>
                    <div className="items flex justify-center md:justify-start items-center space-x-6 pt-6">
                        <div className="1 flex justify-center items-center space-x-1">
                            <FaCar className='bg-red-500 text-white p-1 md:p-2 rounded-full text-2xl md:text-4xl' />
                            <span className='text-[10px] md:text-[12px] lg:text-[15px] font-semibold'>No Shipping Charge</span>
                        </div>
                        <div className="2 flex justify-center items-center space-x-1">
                            <GrSecure className='bg-red-500 text-white p-1 md:p-2 rounded-full text-2xl md:text-4xl' />
                            <span className='text-[10px] md:text-[12px] lg:text-[15px] font-semibold'>100% Secure Checkout</span>
                        </div>
                    </div>
                </div>
                <div className="righ flex justify-end xl:justify-center items-center">
                    <Image src={'/images/hero.png'} width={550} height={550} alt='Hero Image'></Image>
                </div>
            </div>
        </div>
    )
}

export default Hero;