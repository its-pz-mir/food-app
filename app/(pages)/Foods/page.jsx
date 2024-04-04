"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import axios from 'axios';

// API = https://foodapp-backend-production.up.railway.app/api/products

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://foodapp-backend-production.up.railway.app/api/products");
        console.log(response.data.products);
        setProducts(response.data.products);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false in case of an error
      }
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
        {loading ? (
          <div className="text-center my-10">Loading...</div>
        ) : (
          <div className="products my-10 flex flex-col justify-center items-center space-y-8 mt-6 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {products.map((product) => (
              <div key={product._id} onClick={() => handleClicked(product._id)} className=' cursor-pointer bg-white space-y-4 rounded-md pb-4 shadow-2xl w-80 h-[450px] flex flex-col justify-center items-center'>
                <img src={product.image1} style={{width: "250", height : "250"}} alt={product.name} />
                <h1 className='text-lg font-semibold pb-3'>{product.name}</h1>
                <div className='flex justify-center items-center space-x-28'>
                  <div className="price text-red-500 font-bold text-xl">$ {product.price}</div>
                  <button className='bg-red-500 text-white px-4 py-2 rounded-lg' >Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
// Hello My name is Usman