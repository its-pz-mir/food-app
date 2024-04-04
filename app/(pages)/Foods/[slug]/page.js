"use client"
import Header from "@/app/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page({ params }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [img, setImg] = useState(null);
    const [tab, setTab] = useState("tab1");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://foodapp-backend-production.up.railway.app/api/products");
                setProducts(response.data.products);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (params?.slug && products.length > 0) {
            const filteredProduct = products.find(product => product._id === params.slug);
            setSelectedProduct(filteredProduct);
            setImg(filteredProduct.image1); // Set initial image
        }
    }, [params, products]);

    const changeImage = (image) => {
        setImg(image);
    };

    const handleTab = (givenTab) => {
        setTab(givenTab);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div>
                {selectedProduct && (
                    <div>
                        <div className="productImage relative w-screen">
                            <h1 className="text-white font-bold text-5xl px-20 py-24">
                                {selectedProduct.name}
                            </h1>
                        </div>
                        <div className="imgdesc flex w-screen justify-center items-center mx-auto px-40">
                            <div className="img w-1/2 flex items-center space-x-10">
                                <div className="sideimages space-y-2">
                                    <img
                                        src={selectedProduct.image1}
                                        width={70}
                                        height={70}
                                        className="cursor-pointer hover:w-20"
                                        alt="Cart 1st Image"
                                        onClick={() => changeImage(selectedProduct.image1)}
                                    />
                                    <img
                                        src={selectedProduct.image2}
                                        width={70}
                                        height={70}
                                        className="cursor-pointer hover:w-20"
                                        alt="Cart 2nd Image"
                                        onClick={() => changeImage(selectedProduct.image2)}
                                    />
                                    <img
                                        src={selectedProduct.image3}
                                        width={70}
                                        height={70}
                                        className="cursor-pointer hover:w-20"
                                        alt="Cart 3rd Image"
                                        onClick={() => changeImage(selectedProduct.image3)}
                                    />
                                </div>
                                <div className="displayImage">
                                    {img && (
                                        <img
                                            src={img}
                                            width={500}
                                            height={500}
                                            alt="Display image"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="desc w-1/2 space-y-6">
                                <h2 className="text-slate-700 font-bold text-5xl">{selectedProduct.name}</h2>
                                <h4 className="text-red-500 text-xl font-semibold">Price: <span className=" text-3xl font-bold">${selectedProduct.price}</span></h4>
                                <h5 className="pb-5">Catagory : <span className=" bg-red-200 font-semibold p-1">{selectedProduct.category}</span></h5>
                                <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Add to Cart</button>
                            </div>
                        </div>
                        <div className="descrev  px-40">
                            <div className="buttons space-x-20">
                                <button onClick={() => handleTab("tab1")} className={`${tab === "tab1" ? "text-red-500" : ""}`}>Description</button>
                                <button onClick={() => handleTab("tab2")} className={`${tab === "tab2" ? "text-red-500" : ""}`}>Reviews</button>
                            </div>
                            {tab === "tab1" && (
                                <div className="desc mt-5 border-t-4 border-slate-500 ">
                                    <p>{selectedProduct.desc}</p>
                                </div>
                            )}
                            {tab === "tab2" && (
                                <div className="rev mt-5 border-t-4 border-slate-500">
                                    <h1 className="name">Jeff Bezos</h1>
                                    <p>Thes Best Taste i ever Taste</p>
                                    <h1 className="name">Elon Musk</h1>
                                    <p>Thes Best Taste i ever Taste</p>
                                    <h1 className="name">Bill Gates</h1>
                                    <p>Thes Best Taste i ever Taste</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
