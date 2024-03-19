import React from 'react'
import Image from 'next/image'

const Products = ({ filteredProducts }) => {
    return (
        <div className='flex flex-col justify-center items-center space-y-8 mt-6 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {
                filteredProducts.map((product) => (
                    <div key={product.id} className='bg-white space-y-4 rounded-md pb-4 shadow-2xl w-80 flex flex-col justify-center items-center'>
                        <Image src={product.image01} width={150} height={150} alt={product.title} />
                        <h1 className='text-lg font-semibold pb-3'>{product.title}</h1>
                        <div className='flex justify-center items-center space-x-28'>
                            <div className="price text-red-500 font-bold text-xl">$ {product.price}</div>
                            <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products