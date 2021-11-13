import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';

import SingleMyOrder from './SingleMyOrder';


const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [isloding, setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data =>{
                setOrders(data)
                setIsloading(false)
            });
    }, [])

    const handleCancle = (id) =>{
        // console.log("dukhche", id)
        const confirmed = window.confirm("Are you sure, you want to delete this user?");
        if(confirmed){
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(res =>{
                if(res.deletedCount > 0){
                    alert("deleted successfully");
                    const remainingUser = orders.filter(order => order._id !== id);
                    setOrders(remainingUser);
                }
            })
        }
    }
    return ( 
        <div>
            <div className="dashboard-bg-align p-4">
                <h3 className="font-semibold text-2xl">My Oders</h3>
                <div className="order-title-underline"></div>
                <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1 mt-4">
                    {
                        orders.map(order => <SingleMyOrder key={order._id} order={order} handleCancle={handleCancle} />)
                    }
                </div>
            </div>
            <FooterDeshboard />
        </div>
     );
}
 
export default MyOrders;