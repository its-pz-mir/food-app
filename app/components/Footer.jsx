import React from 'react'
import Image from 'next/image';
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaGithubAlt, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-red-100 px-2 md:px-10 lg:px-20 xl:px-40 space-y-8 md:space-y-0'>
      <div className="top flex flex-col justify-center items-center space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 xl:space-x-4">
        <div className="1 space-y-2 py-4 border-b border-black md:border-none flex flex-col justify-center items-center">
          <div className="logo flex flex-col justify-center items-center">
            <Image src={"/images/res-logo.png"} width={70} height={70} alt='Logo Image'></Image>
            <h2 className='text-xl font-bold'>Tasty Treat</h2>
          </div>
          <p className='text-center text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, eligendi?</p>
        </div>
        <div className="2 w-full flex flex-col justify-center items-center py-4 border-b border-black  md:border-none">
          <h2 className='font-bold text-xl'>Delivery Time</h2>
          <div>
            <h4 className='mt-3 font-semibold'>Sunday - Thursday</h4>
            <p>10:00am - 11:00pm</p>
          </div>
          <div>
            <h4 className='mt-3 font-semibold'>Friday - Saturday</h4>
            <p>Off Day</p>
          </div>
        </div>
        <div className="3 py-4 flex flex-col space-y-4 justify-center items-center md:justify-start md:items-start border-b border-black  md:border-none">
          <h3 className='font-bold text-xl'>Contact</h3>
          <p className='text-center md:text-start'>Location : 6 Court Street ST,Nagar Islampura Lahore</p>
          <h4 className='font-semibold'>Phone : 0320-4818484</h4>
          <h5 className='text-center md:text-start font-semibold'>Email : usmanshouket256@gmail.com</h5>
        </div>
        <div className="4">
          <h4 className='font-bold text-xl  xl:mx-12'>NewsLetter</h4>
          <p>Subsribe to our NewsLetter</p>
          <div className="input mt-3 flex justify-center items-center border border-black rounded-md px-2 py-1">
            <input type="text" className='bg-transparent border-none outline-none' placeholder='Enter your Text' />
            <button><IoIosSend className='text-4xl bg-red-500 text-white p-1 rounded-md' />
            </button>
          </div>
        </div>
      </div>
      <div className="bottom flex flex-col md:flex-row justify-between items-center">
        <p className='text-center text-slate-600'>Copyright - &copy;  All rights Reserved to Usman Shouket</p>
        <div className="icons flex justify-center items-center space-x-3">
          <p className='text-xl font-semibold'>Follow</p>
          <FaFacebookF className='bg-red-500 p-1 text-white text-2xl rounded-full' />
          <FaGithubAlt className='bg-red-500 p-1 text-white text-2xl rounded-full' />
          <FaLinkedinIn className='bg-red-500 p-1 text-white text-2xl rounded-full' />
          <FaWhatsapp className='bg-red-500 p-1 text-white text-2xl rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Footer