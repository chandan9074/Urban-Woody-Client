import React, { useEffect, useState } from 'react';

import SingleManageProduct from './SingleManageProduct';

const ManageProducts = () => {

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
            <h3 className="font-semibold text-2xl mb-4">Manage Products</h3>

            {isloding ?<div class="loader">Loading...</div>:
            <div className="grid grid-cols-2 gap-4">
                {
                    products.map(product => <SingleManageProduct key={product._id} product={product} />)
                }
            </div>}
        </div>
     );
}
 
export default ManageProducts;