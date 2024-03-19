import React from 'react'
import Image from 'next/image'
import Slider from './Slider'

const Testimonials = () => {
    return (
        <div className='px-2 md:px-10 lg:px-20 xl:px-40 md:grid md:grid-cols-2 mt-40 text-center md:text-start '>
            <div className="left">
                <h4 className='text-red-500 font-bold text-lg'>Testimonials</h4>
                <h1 className='font-bold text-4xl my-4'>What our <span className='text-red-400'>Customer</span> are saying</h1>
                <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, tenetur magnam nulla ex unde deleniti blanditiis aut architecto. Tenetur, nisi.</p>
                <div className='mt-10'>
                    <Slider />
                </div>
            </div>
            <div className="righ flex justify-center items-center">
                <Image src={"/images/network.png"} width={600} height={600} />
            </div>
        </div>
    )
}

export default Testimonials