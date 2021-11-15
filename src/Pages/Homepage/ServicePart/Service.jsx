import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';


const Service = () => {
    const [products, setProducts] = useState([])
    const [isloding, setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        fetch('https://fast-island-99199.herokuapp.com/product')
            .then(res => res.json())
            .then(data =>{
                const newArray = data.slice(-6);
                setProducts(newArray)
                setIsloading(false)
            });
    }, [])

    return ( 
        <div className="container">
            <h1 className=" text-center mt-3 text-4xl font-bold title-font">Letest Products</h1>
            <div className="order-title-underline mx-auto mb-20"></div>
            {isloding ?<div class="loader">Loading...</div>:

            <div>{products.length?

            <div className="grid md:grid-cols-3 md:gap-x-4 gap-y-20 grid-col-1">
                {
                    products.map(product => <SingleService key={product._id} product={product} /> )
                }
            </div> :  <img src="https://i.ibb.co/L81J3wt/no-result.png" alt="" className="opacity-30 mx-auto" /> } </div>}
        </div>
     );
}
 
export default Service;