import React, { useEffect, useState } from 'react';

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
            <h3 className="font-semibold text-2xl">My Oders</h3>
            <div></div>
            <div className="grid grid-cols-2 gap-4">
                {
                    orders.map(order => <SingleMyOrder key={order._id} order={order} handleCancle={handleCancle} />)
                }
            </div>
        </div>
     );
}
 
export default MyOrders;