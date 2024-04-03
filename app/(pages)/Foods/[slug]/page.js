"use client"
import Header from "@/app/components/Header";
import Image from "next/image";
import products from '@/public/fake-data/products';
import { useState } from "react";


export default function Page({ params }) {
    const [tab, setTab] = useState("tab1");
    const filterdProduct = products.filter((product) => product.id === params.slug);
    const thisProduct = filterdProduct[0];
    const reltaedCat = products.filter((catagProduct) => catagProduct.category === thisProduct.category);
    const [img, setImg] = useState(thisProduct.image01)

    const changeImage = (image) => {
        setImg(image)
    }

    const handleTab = (givenTab) => {
        setTab(givenTab)
    }
    
    return (
        <>
            <Header />
            <div>
                <div>
                    <div className="productImage relative w-screen">
                        <h1 className="text-white font-bold text-5xl px-20 py-24">
                            {thisProduct.title}
                        </h1>
                    </div>
                    <div className="imgdesc flex w-screen justify-center items-center mx-auto px-40">
                        <div className="img w-1/2 flex items-center space-x-10">
                            <div className="sideimages space-y-2">
                                <Image src={thisProduct.image01} width={70} height={70} className="cursor-pointer hover:w-20" alt="Cart 1st Image" onClick={() => changeImage(thisProduct.image01)} />
                                <Image src={thisProduct.image02} width={70} height={70} className="cursor-pointer hover:w-20" alt="Cart 2nd Image" onClick={() => changeImage(thisProduct.image02)} />
                                <Image src={thisProduct.image03} width={70} height={70} className="cursor-pointer hover:w-20" alt="Cart 3rd Image" onClick={() => changeImage(thisProduct.image03)} />
                            </div>
                            <div className="displayImage">
                                <Image src={img} width={500} height={500} alt="Display image" />
                            </div>
                        </div>
                        <div className="desc w-1/2 space-y-6">
                            <h2 className="text-slate-700 font-bold text-5xl">{thisProduct.title}</h2>
                            <h4 className="text-red-500 text-xl font-semibold">Price: <span className=" text-3xl font-bold">${thisProduct.price}</span></h4>
                            <h5 className="pb-5">Catagory : <span className=" bg-red-200 font-semibold p-1">{thisProduct.category}</span></h5>
                            <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Add to Cart</button>
                        </div>
                    </div>
                    <div className="descrev  px-40">
                        <div className="buttons space-x-20">
                            <button onClick={() => handleTab("tab1")} className={`${tab === "tab1" ? "text-red-500" : ""}`}>Description</button>
                            <button onClick={() => handleTab("tab2")} className={`${tab === "tab2" ? "text-red-500" : ""}`}>Reviews</button>
                        </div>
                        {tab === "tab1" &&
                            <div className="desc mt-5 border-t-4 border-slate-500 ">
                                <p>{thisProduct.desc}</p>
                            </div>
                        }
                        {
                            tab === "tab2" &&
                            <div className="rev mt-5 border-t-4 border-slate-500">
                                <h1 className="name">Jeff Bezos</h1>
                                <p>Thes Best Taste i ever Taste</p>


                                <h1 className="name">Elon Musk</h1>
                                <p>Thes Best Taste i ever Taste</p>


                                <h1 className="name">Bill Gates</h1>
                                <p>Thes Best Taste i ever Taste</p>
                            </div>
                        }
                    </div>
                </div>
                <h1 className="px-40 text-3xl font-semibold mt-10">You Might Also Like</h1>
                <div className="px-40 related_catagory flex flex-col justify-center items-center space-y-8 mt-6 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-4">
                    {
                        reltaedCat.map((products) => (
                            <div key={products.id} className='bg-white lg:space-y-0 space-y-4 rounded-md pb-4 shadow-2xl w-80 flex flex-col justify-center items-center'>
                                <Image src={products.image01} width={150} height={150} alt={products.title} />
                                <h1 className='text-lg font-semibold pb-3'>{products.title}</h1>
                                <div className='flex justify-center items-center space-x-28'>
                                    <div className="price text-red-500 font-bold text-xl">$ {products.price}</div>
                                    <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}