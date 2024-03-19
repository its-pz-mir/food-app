import React from 'react'
import Image from 'next/image'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const Treat = () => {
    return (
        <div className='mt-10 mx-2 md:px-10 lg:px-20 xl:px-40 lg:grid-cols-2 lg:flex justify-center items-center'>
            <div className="img">
                <Image src={"/images/location.png"} width={700} height={700} alt='Location Image'></Image>
            </div>
            <div className="text space-y-6">
                <h1 className='text-4xl font-bold'>Why <span className='text-red-500'>Tasty Treat</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nemo impedit eius facilis, obcaecati praesentium officia perferendis enim dicta ipsa soluta magni placeat fuga blanditiis eos neque! Esse, excepturi quae.</p>
                <div className="fresh">

                    <h5 className='flex font-semibold text-lg items-center'><span><IoIosCheckmarkCircleOutline className='text-red-500 text-xl mr-2' />
                    </span> Fresh and Tasty Foods</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, doloribus.</p>
                </div>
                <div className="quality">

                    <h5 className='flex font-semibold text-lg items-center'><span><IoIosCheckmarkCircleOutline className='text-red-500 text-xl mr-2' />
                    </span>Quality support</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, doloribus.</p>
                </div>
                <div className="order">
                    <h5 className='flex font-semibold text-lg items-center'><span><IoIosCheckmarkCircleOutline className='text-red-500 text-xl mr-2' />
                    </span>Order from any Location</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, doloribus.</p>
                </div>
            </div>
        </div>
    )
}

export default Treat