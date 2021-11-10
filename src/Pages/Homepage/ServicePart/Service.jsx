import React from 'react';
import SingleService from './SingleService';


const Service = () => {
    const sample = [1, 2, 3, 4, 5, 6]
    return ( 
        <div className="container">
            <h1 className="mb-20 text-center mt-3 text-4xl font-bold">Products</h1>

            <div className="grid grid-cols-3 gap-x-4 gap-y-20">
                {
                    sample.map(sam => <SingleService /> )
                }
            </div>
        </div>
     );
}
 
export default Service;