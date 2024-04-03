'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from 'next/router'


const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  // const router = useRouter();

  const handleSubmit = async (e) => {
    const api = "http://localhost:8080/api/signup"
    e.preventDefault();
    console.log(name, email, password, cpassword);
    if (password !== cpassword) {
      toast.error("Password does not match !")
    }
    try {
      const response = await axios.post(api, {
        name, email, password, cPassword: cpassword
      })
      toast.success("User Registered")
      console.log(response);

    } catch (error) {
      console.log(error.response.data);
      setTimeout(() => {
        toast.error("Error: " + error.response.data.Msg);
      }, 500);
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
                <input type="password" placeholder='Password' className='bg-red-100 text-lg border-x-0 border-t-0 border-b-2 border-black outline-none w-72' onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <input type="password" placeholder='Confirm Password' className='bg-red-100 text-lg border-x-0 border-t-0 border-b-2 border-black outline-none w-72' onChange={(e) => setCpassword(e.target.value)} />
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

export default page