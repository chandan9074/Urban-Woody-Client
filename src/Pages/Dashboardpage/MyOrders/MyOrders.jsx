import React from 'react';

import SingleMyOrder from './SingleMyOrder';


const MyOrders = () => {
    const sample = [1, 2]
    return ( 
        <div>
            <h3 className="font-semibold text-2xl">My Oders</h3>
            <div></div>
            <div className="grid grid-cols-2 gap-4">
                {
                    sample.map(sam => <SingleMyOrder />)
                }
            </div>
        </div>
     );
}
 
export default MyOrders;