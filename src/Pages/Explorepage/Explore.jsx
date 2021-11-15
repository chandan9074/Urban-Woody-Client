import React, { useEffect, useState } from 'react';
import SingleService from '../Homepage/ServicePart/SingleService';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Explore = () => {
    const [products, setProducts] = useState([])
    const [isloding, setIsloading] = useState(false)

    useEffect(() => {
        setIsloading(true)
        fetch('https://fast-island-99199.herokuapp.com/product')
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
                setIsloading(false)
            });
    }, [])

    return ( 
    <div>
        <Navigation />
        <div className="container min-h-screen">
            <h1 className=" text-center mt-3 text-4xl font-bold title-font">All Products</h1>
            <div className="order-title-underline mx-auto md:mb-16 mb-8"></div>
            {isloding ?<div class="loader">Loading...</div>:

            <div>{products.length?
                <div className="grid md:grid-cols-3 md:gap-x-4 gap-y-20 py-20 grid-cols-1">
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