'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Products from './Products'
import products from '@/public/fake-data/products';


const ProductSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    let filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    return (
        <div className='mx-2 md:px-10 lg:px-20 xl:px-40'>
            <h1 className='text-center text-4xl font-bold text-slate-700'>Popular Foods</h1>
            <div className="filter_section mt-10 text-white py-4 rounded-md flex md:justify-center px-2 items-center bg-red-600 space-x-4 md:space-x-12 lg:space-x-16">
                <div className={selectedCategory === 'All' ? 'bg-white text-black p-2 rounded-md ' : ''} onClick={() => handleCategoryClick('All')}>
                    <span className='text-sm md:text-xl hover:bg-white rounded-md hover:text-black cursor-pointer p-2'>All</span>
                </div>
                <div className={`burger flex justify-center hover:bg-white rounded-md hover:text-black cursor-pointer p-2 items-center space-x-1 ${selectedCategory === 'Burger' ? 'bg-white text-black p-2 rounded-md ' : ''}`} onClick={() => handleCategoryClick('Burger')}>
                    <Image src={"/images/hamburger.png"} width={30} height={30} alt='Ham Burger' />
                    <span className='text-sm md:text-xl'>Burger</span>
                </div>
                <div className={`burger flex justify-center hover:bg-white rounded-md hover:text-black cursor-pointer p-2 items-center space-x-1 ${selectedCategory === 'Pizza' ? 'bg-white text-black p-2 rounded-md ' : ''}`} onClick={() => handleCategoryClick('Pizza')}>
                    <Image src={"/images/pizza.png"} width={30} height={30} alt='Ham Burger' />
                    <span className='text-sm md:text-xl'>Pizza</span>
                </div>
                <div className={`burger flex justify-center hover:bg-white rounded-md hover:text-black cursor-pointer p-2 items-center space-x-1 ${selectedCategory === 'Bread' ? 'bg-white text-black p-2 rounded-md ' : ''}`} onClick={() => handleCategoryClick('Bread')}>
                    <Image src={"/images/bread.png"} width={30} height={30} alt='Ham Burger' />
                    <span className='text-sm md:text-xl'>Bread</span>
                </div>
            </div>
            <Products filteredProducts={filteredProducts} />
        </div>
    )
}

export default ProductSection