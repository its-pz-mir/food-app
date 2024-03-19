import React from 'react'
import Image from 'next/image';

const Ad = () => {
    return (
        <div className='my-16 space-y-4 px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40'>
            <p className='text-red-500 font-semibold text-center'>What We Serve</p>
            <h2 className='text-center font-bold text-3xl leading-normal px-1'>Just sit back at home we will <span className='text-red-500'>take care</span></h2>
            <p className='text-center px-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, quia!</p>
            <p className='text-center px-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, vitae.</p>
            <div className='pt-10 space-y-5 xl:space-x-7 2xl:space-x-28 md:flex'>
                <div className="quick flex flex-col justify-center items-center space-y-2">
                    <Image src={"/images/service-01.png"} width={100} height={100} alt='Deleivery' />
                    <h3 className='text-lg font-bold sm:text-xl'>Quick Delivery</h3>
                    <p className='px-5 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, quia!</p>
                </div>
                <div className="quick flex flex-col justify-center items-center space-y-2">
                    <Image src={"/images/service-02.png"} width={100} height={100} alt='Deleivery' />
                    <h3 className='text-lg font-bold sm:text-xl'>Super Dine In</h3>
                    <p className='px-5 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, quia!</p>
                </div>
                <div className="quick flex flex-col justify-center items-center space-y-2">
                    <Image src={"/images/service-03.png"} width={100} height={100} alt='Deleivery' />
                    <h3 className='text-lg font-bold sm:text-xl'>Easy Pick Up</h3>
                    <p className='px-5 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, quia!</p>
                </div>
            </div>
        </div>
    )
}

export default Ad;