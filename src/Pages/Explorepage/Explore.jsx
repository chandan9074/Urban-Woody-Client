import React from 'react';
import SingleService from '../Homepage/ServicePart/SingleService';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Explore = () => {
    const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return ( 
    <div>
        <Navigation />
        <div className="container">
            <h1 className="mb-20 text-center mt-3 text-4xl font-bold">All Products</h1>

            <div className="grid grid-cols-3 gap-x-4 gap-y-20 py-20">
                {
                    sample.map(sam => <SingleService /> )
                }
            </div>
        </div>
        <Footer />
    </div> 
    );
}
 
export default Explore;