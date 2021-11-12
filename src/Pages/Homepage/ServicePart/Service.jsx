import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';


const Service = () => {
    const [products, setProducts] = useState([])
    const [isloding, setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data =>{
                const newArray = data.slice(-6);
                setProducts(newArray)
                setIsloading(false)
            });
    }, [])

    return ( 
        <div className="container">
            <h1 className="mb-20 text-center mt-3 text-4xl font-bold">Products</h1>

            {isloding ?<div class="loader">Loading...</div>:

            <div className="grid grid-cols-3 gap-x-4 gap-y-20">
                {
                    products.map(product => <SingleService key={product._id} product={product} /> )
                }
            </div>}
        </div>
     );
}
 
export default Service;