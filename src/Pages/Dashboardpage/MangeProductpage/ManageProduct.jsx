import React, { useEffect, useState } from 'react';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';

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

    const handleDelete = (id) =>{
        // console.log("dukhche", id)
        const confirmed = window.confirm("Are you sure, you want to delete this user?");
        if(confirmed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(res =>{
                if(res.deletedCount > 0){
                    alert("deleted successfully");
                    const remainingProduct = products.filter(product => product._id !== id);
                    setProducts(remainingProduct);
                }
            })
        }
    }
    return ( 
        <div>
            <div className="dashboard-bg-align p-4">
                <h3 className="font-semibold text-2xl">Manage Products</h3>
                <div className="order-title-underline mb-4"></div>
                {isloding ?<div class="loader">Loading...</div>:
                <div>{products.length?
                <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1">
                    {
                        products.map(product => <SingleManageProduct key={product._id} product={product} handleDelete={handleDelete} />)
                    }
                </div>:  <img src="https://i.ibb.co/L81J3wt/no-result.png" alt="" className="opacity-30 mx-auto" /> } </div>}
            </div>
            <FooterDeshboard />
        </div>
     );
}
 
export default ManageProducts;