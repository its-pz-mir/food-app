'use client';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {

  // useStates
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Api
  const api = "https://foodapp-backend-production.up.railway.app//api/login";
  const router = useRouter();

  // Function to Login the User...
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(api,{
        email,password
      })
    } catch (error) {
      
    }
  }

  return (
    <>
      <div>
        <Header />
        <div>
          <div className="cartBG overflow-x-hidden">
            <h1 className='text-white text-5xl p-20'>Login</h1>
          </div>
          <div className='py-20'>
            <div className="login flex justify-center items-center">
              <form onSubmit={handleSubmit} className='bg-red-100 px-10 py-6 rounded-md space-y-10'>
                <div className=''>
                  <input type="email" placeholder='Email' className='bg-red-100 text-lg border-x-0 border-t-0 border-b-2 border-black outline-none w-72' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <input type="password" placeholder='Password' className='bg-red-100 text-lg border-x-0 border-t-0 border-b-2 border-black outline-none w-72' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='w-full flex justify-center items-center'>
                  <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded-lg'>Login</button>
                </div>
              </form>
            </div>
            <p className='text-center mt-8'>Don't Have an Account ? <Link href={"./register"}> Create Account</Link></p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page