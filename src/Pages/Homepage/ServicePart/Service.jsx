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
            <h1 className=" text-center mt-3 text-4xl font-bold">Letest Products</h1>
            <div className="order-title-underline mx-auto mb-20"></div>
            {isloding ?<div class="loader">Loading...</div>:

            <div>{products?

            <div className="grid grid-cols-3 gap-x-4 gap-y-20">
                {
                    products.map(product => <SingleService key={product._id} product={product} /> )
                }
            </div> :  <img src="https://i.ibb.co/L81J3wt/no-result.png" alt="" className="opacity-30 mx-auto" /> } </div>}
        </div>
     );
}
 
export default Service;