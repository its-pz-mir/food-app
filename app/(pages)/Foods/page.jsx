"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
// import products from '@/public/fake-data/products';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// API = https://foodapp-backend-production.up.railway.app/api/products

const Page = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://foodapp-backend-production.up.railway.app/api/products");
      console.log(response.data);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleClicked = (productId) => {
    router.push(`/Foods/${productId}`);
  };

  return (
    <div>
      <Header />
      <div className='mx-2 md:px-10 lg:px-20 xl:px-40'>
        <div className="head bg-slate-700 px-16 py-20 text-white">
          <h1 className='text-5xl font-bold'>All Foods</h1>
        </div>
        <div className="filteration flex flex-col md:flex-row justify-between items-center  mt-10">
          <div className="search flex items-center border border-slate-700 px-2 py-1 rounded-md">
            <input type="text" className='outline-none border-none w-60 space-y-4 md:w-96' placeholder="I'm Looking for....." />
            <IoSearchSharp className='text-xl text-slate-700' />
          </div>
          <div className="option ml-4">
            <select className="outline-none border border-black px-2 py-1 w-60 rounded-md">
              <option value="default">Default</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="products my-10 flex flex-col justify-center items-center space-y-8 mt-6 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {products.map((product) => (
            <div key={product._id} onClick={() => handleClicked(product.id)} className=' cursor-pointer bg-white space-y-4 rounded-md pb-4 shadow-2xl w-80 flex flex-col justify-center items-center'>
              <Image src={product.image01} width={150} height={150} alt={product.name} />
              <h1 className='text-lg font-semibold pb-3'>{product.name}</h1>
              <div className='flex justify-center items-center space-x-28'>
                <div className="price text-red-500 font-bold text-xl">$ {product.price}</div>
                <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
