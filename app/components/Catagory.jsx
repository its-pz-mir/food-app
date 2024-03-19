import React from 'react'
import Image from 'next/image';

const Catagory = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 px-2 md:px-10 lg:px-20 xl:px-40 py-4'>
      <div className="fast_food bg-red-100 flex space-x-4 px-4 py-6 items-center hover:-translate-y-3 delay-300 ease-in-out">
        <Image src={"/images/category-01.png"} width={70} height={70} alt='Fast Food' />
        <span>Fastfood</span>
      </div>
      <div className="pizza bg-red-100 flex space-x-4 px-4 py-6 items-center hover:-translate-y-3 delay-300 ease-in-out">
        <Image src={"/images/category-02.png"} width={70} height={70} alt='Fast Food' />
        <span>Pizza</span>
      </div>
      <div className="asian_food bg-red-100 flex space-x-4 px-4 py-6 items-center hover:-translate-y-3 delay-300 ease-in-out">
        <Image src={"/images/category-03.png"} width={70} height={70} alt='Fast Food' />
        <span>Asian Food</span>
      </div>
      <div className="row_meat bg-red-100 flex space-x-4 px-4 py-6 items-center hover:-translate-y-3 delay-300 ease-in-out">
        <Image src={"/images/category-04.png"} width={70} height={70} alt='Fast Food' />
        <span>Fastfood</span>
      </div>
    </div>
  )
}

export default Catagory;