import React, { useEffect, useState } from 'react';
import SingleService from '../Homepage/ServicePart/SingleService';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Explore = () => {
    const [products, setProducts] = useState([])
    const [isloding, setIsloading] = useState(false)

    useEffect(() => {
        setIsloading(true)
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
                setIsloading(false)
            });
    }, [])

    return ( 
    <div>
        <Navigation />
        <div className="container">
            <h1 className=" text-center mt-3 text-4xl font-bold">All Products</h1>
            <div className="order-title-underline mx-auto mb-16"></div>
            {isloding ?<div class="loader">Loading...</div>:

            <div>{products.length?
                <div className="grid grid-cols-3 gap-x-4 gap-y-20 py-20">
                    {
                        products.map(product => <SingleService key={product._id} product={product} /> )
                    }
                </div> :  <img src="https://i.ibb.co/L81J3wt/no-result.png" alt="" className="opacity-30 mx-auto" /> } </div>}
        </div>
        <Footer />
    </div> 
    );
}
 
export default Explore;