"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Header from '@/app/components/Header';


const page = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [link3, setLink3] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        axios.post('https://foodapp-backend-production.up.railway.app/api/addproducts', {
            name: name,
            desc: description,
            price: price,
            category: category,
            image1: link1,
            image2: link2,
            image3: link3

        })
            .then(response => {
                if (response.data.success) {
                    alert("product added successfully")
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        (
            <>
                <div>
                    <Header />
                    <div className="container mx-auto mt-10">
                        <h1 className="text-3xl font-semibold mb-6">Admin Page</h1>
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="mb-4">
                                <label className="block mb-2">Name:</label>
                                <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="w-full border border-gray-400 rounded-md py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Description:</label>
                                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-400 rounded-md py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Price:</label>
                                <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} className="w-full border border-gray-400 rounded-md py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Category:</label>
                                <input type="text" name="category" onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-400 rounded-md py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Link 1:</label>
                                <input type="text" name="link1" onChange={(e) => setLink1(e.target.value)} className="w-full border border-gray-400 rounded-md py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Link 2:</label>
                                <input type="text" name="link2" onChange={(e) => setLink2(e.target.value)} className="w-full border border-gray-400 rounded-md py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Link 3:</label>
                                <input type="text" name="link3" onChange={(e) => setLink3(e.target.value)} className="w-full border border-gray-400 rounded-md py-2 px-3" />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    )
}

export default page