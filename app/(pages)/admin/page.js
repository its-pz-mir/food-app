import React, { useState } from 'react'
import axios from 'axios'

const page = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        link1: '',
        link2: '',
        link3: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        axios.post('https://foodapp-backend-production.up.railway.app/api/addproducts', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" name="category" value={formData.category} onChange={handleChange} />
                </div>
                <div>
                    <label>Link 1:</label>
                    <input type="text" name="link1" value={formData.link1} onChange={handleChange} />
                </div>
                <div>
                    <label>Link 2:</label>
                    <input type="text" name="link2" value={formData.link2} onChange={handleChange} />
                </div>
                <div>
                    <label>Link 3:</label>
                    <input type="text" name="link3" value={formData.link3} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default page