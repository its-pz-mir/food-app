'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'
import { useCookies } from "react-cookie";



const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [cookie, setCookie] = useCookies([['token']])


  const router = useRouter();

  useEffect(() => {
    const cookieToken = cookie.token;
    if (cookieToken) {
      router.push("/")
    }
  })


  const handleSubmit = async (e) => {
    const api = "https://foodapp-backend-production.up.railway.app/api/signup"
    e.preventDefault();
    try {
      const response = await axios.post(api, {
        name, email, password, cPassword: cpassword
      })
      toast.success(response.data.message)
      if (response.data.success) {
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }

  }


  return (
    <div>
      <ToastContainer />
      <Header />
      <div>
        <div className="cartBG overflow-x-hidden">
          <h1 className='text-white text-5xl p-20'>Register</h1>
        </div>
        <div className='py-20'>
          <div className="login flex justify-center items-center">
            <form className='bg-red-100 px-10 py-6 rounded-md space-y-10' onSubmit={handleSubmit}>
              <div className=''>
                <input type="text" placeholder='Name' className='bg-red-100 text-lg border-x-0 border-t-0 border-b-2 border-black outline-none w-72' onChange={(e) => setName(e.target.value)} />
              </div>
              <div className=''>
                <input type="email" placeholder='Email' className='bg-red-100 text-lg border-x-0 border-t-0 border-b-2 border-black outline-none w-72' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <input type="password" placeholder='Password' autoComplete='true' className='bg-red-100 text-lg border-x-0 border-t-0 border-b-2 border-black outline-none w-72' onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <input type="password" placeholder='Confirm Password' autoComplete='true' className='bg-red-100 text-lg border-x-0 border-t-0 border-b-2 border-black outline-none w-72' onChange={(e) => setCpassword(e.target.value)} />
              </div>
              <div className='w-full flex justify-center items-center'>
                <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded-lg'>Create Account</button>
              </div>
            </form>
          </div>
          <p className='text-center mt-8'>Already Have an Account ? <Link href={"./login"}> Login</Link></p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page